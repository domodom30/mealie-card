interface HASSDomEvents {
  'hass-notification': { message: string };
  'config-changed': { config: import('custom-card-helpers').LovelaceCardConfig };
}
