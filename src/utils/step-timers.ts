import { localizeForLang } from './translate.js';

export interface StepDuration {
  seconds: number;
  label: string;
}

type DurationUnit = 'hour' | 'minute';

interface DurationMatch extends StepDuration {
  unit: DurationUnit;
  start: number;
  end: number;
}

interface DurationParser {
  pattern: RegExp;
  units: Map<string, DurationUnit>;
}

const SECONDS_PER_UNIT: Record<DurationUnit, number> = { hour: 3600, minute: 60 };
const MAX_TIMER_SECONDS = 24 * 3600;
const UNIT_TRANSLATION_KEYS: Record<DurationUnit, readonly string[]> = {
  hour: ['time.hour', 'time.hours', 'time.hour_short'],
  minute: ['time.minute', 'time.minutes', 'time.minute_short'],
};
const NUMBER_PATTERN = '\\d+(?:[.,]\\d+)?';

const parsersByLang = new Map<string, DurationParser>();

function escapeRegExp(term: string): string {
  return term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function collectUnitTerms(lang: string): Map<string, DurationUnit> {
  const units = new Map<string, DurationUnit>();
  for (const language of new Set([lang, 'en'])) {
    for (const unit of Object.keys(UNIT_TRANSLATION_KEYS) as DurationUnit[]) {
      for (const key of UNIT_TRANSLATION_KEYS[unit]) {
        const term = localizeForLang(language, key).toLowerCase().trim();
        if (term && term !== key && !units.has(term)) units.set(term, unit);
      }
    }
  }
  return units;
}

function buildParser(lang: string): DurationParser {
  const units = collectUnitTerms(lang);
  const terms = [...units.keys()].sort((a, b) => b.length - a.length).map(escapeRegExp);
  const pattern = new RegExp(`(${NUMBER_PATTERN})(?:\\s*[-–]\\s*(${NUMBER_PATTERN}))?\\s*(${terms.join('|')})(?!\\p{L})`, 'giu');
  return { pattern, units };
}

function getParser(lang: string): DurationParser {
  let parser = parsersByLang.get(lang);
  if (!parser) {
    parser = buildParser(lang);
    parsersByLang.set(lang, parser);
  }
  return parser;
}

function parseNumber(value: string): number {
  return Number(value.replace(',', '.'));
}

function readMatches(text: string, parser: DurationParser): DurationMatch[] {
  const matches: DurationMatch[] = [];
  for (const match of text.matchAll(parser.pattern)) {
    const unit = parser.units.get(match[3].toLowerCase());
    if (!unit || match.index === undefined) continue;
    const amount = parseNumber(match[2] ?? match[1]);
    matches.push({
      unit,
      seconds: Math.round(amount * SECONDS_PER_UNIT[unit]),
      label: match[0].trim(),
      start: match.index,
      end: match.index + match[0].length,
    });
  }
  return matches;
}

function isHourFollowedByMinutes(previous: DurationMatch | undefined, current: DurationMatch, text: string): previous is DurationMatch {
  return previous?.unit === 'hour' && current.unit === 'minute' && !text.slice(previous.end, current.start).trim();
}

function mergeCompoundDurations(matches: DurationMatch[], text: string): StepDuration[] {
  const merged: DurationMatch[] = [];
  for (const current of matches) {
    const previous = merged[merged.length - 1];
    if (isHourFollowedByMinutes(previous, current, text)) {
      merged[merged.length - 1] = {
        ...current,
        seconds: previous.seconds + current.seconds,
        label: text.slice(previous.start, current.end).trim(),
        start: previous.start,
      };
    } else {
      merged.push(current);
    }
  }
  return merged.map(({ seconds, label }) => ({ seconds, label }));
}

function isUsableDuration(duration: StepDuration): boolean {
  return duration.seconds > 0 && duration.seconds <= MAX_TIMER_SECONDS;
}

export function extractStepDurations(text: string | undefined, lang: string): StepDuration[] {
  if (!text) return [];
  const durations = mergeCompoundDurations(readMatches(text, getParser(lang)), text).filter(isUsableDuration);
  const seen = new Set<number>();
  return durations.filter((duration) => !seen.has(duration.seconds) && !!seen.add(duration.seconds));
}

export function formatCountdown(totalSeconds: number): string {
  const seconds = Math.max(0, Math.round(totalSeconds));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const rest = String(seconds % 60).padStart(2, '0');
  return hours ? `${hours}:${String(minutes).padStart(2, '0')}:${rest}` : `${minutes}:${rest}`;
}
