import type { HassDeviceRegistryEntry, HassEntityRegistryEntry, HassEntityState, HomeAssistant } from '../types';

export interface ServiceCallRecord {
  domain: string;
  service: string;
  serviceData?: Record<string, unknown>;
  target?: { entity_id?: string | string[] };
}

export interface HassStubOptions {
  services?: Record<string, string[]>;
  states?: Record<string, Partial<HassEntityState>>;
  entities?: Record<string, HassEntityRegistryEntry>;
  devices?: Record<string, HassDeviceRegistryEntry>;
  serviceResponses?: Record<string, unknown>;
  wsResponses?: Record<string, unknown>;
  language?: string;
  hassUrl?: string;
}

export interface HassStub extends HomeAssistant {
  calls: ServiceCallRecord[];
  wsCalls: Record<string, unknown>[];
}

function buildStates(states: Record<string, Partial<HassEntityState>>): Record<string, HassEntityState> {
  return Object.fromEntries(
    Object.entries(states).map(([entity_id, partial]) => [
      entity_id,
      {
        entity_id,
        state: 'unknown',
        attributes: {},
        last_changed: '2026-01-01T00:00:00Z',
        last_updated: '2026-01-01T00:00:00Z',
        ...partial,
      },
    ])
  );
}

export function createHassStub(options: HassStubOptions = {}): HassStub {
  const services = Object.fromEntries(
    Object.entries(options.services ?? {}).map(([domain, names]) => [domain, Object.fromEntries(names.map((name) => [name, {}]))])
  );

  const calls: ServiceCallRecord[] = [];
  const wsCalls: Record<string, unknown>[] = [];

  return {
    states: buildStates(options.states ?? {}),
    entities: options.entities,
    devices: options.devices,
    services,
    locale: { language: options.language ?? 'en' },
    themes: { default_theme: 'default', themes: {} },
    auth: { data: { hassUrl: options.hassUrl ?? 'https://ha.example' } },
    calls,
    wsCalls,

    callService(domain, service, serviceData, target) {
      calls.push({ domain, service, serviceData, target });
      if (!services[domain]?.[service]) {
        return Promise.reject(new Error(`Action ${domain}.${service} not found`));
      }
      return Promise.resolve({ response: options.serviceResponses?.[`${domain}.${service}`] });
    },

    callWS<T>(msg: Record<string, unknown>): Promise<T> {
      wsCalls.push(msg);
      const type = String(msg.type);
      if (!(type in (options.wsResponses ?? {}))) {
        return Promise.reject(new Error(`Unhandled websocket command ${type}`));
      }
      return Promise.resolve(options.wsResponses![type] as T);
    },
  };
}
