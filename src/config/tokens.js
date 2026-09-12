// Brand tokens for Rocket Fuel Factory (RFF) presentation deck.
// Source: docs/reference/BRIEF.md and docs/reference/RFF-Presentation-Template.pptx

export const COLORS = {
  blue: '#2A3AED',
  blueGlow: '#5966F1',
  orange: '#FF5219',
  gold: '#FFCC32',
  navy: '#050B46',
  darkBg: '#1C1E2A',
  bodyText: '#272B33',
  lightBg: '#F5F5F7',
}

// Pillar mapping: each RFF "pillar" has one canonical accent color.
export const PILLARS = {
  connection: { label: 'Connection', accent: 'blue', color: COLORS.blue },
  education: { label: 'Education', accent: 'orange', color: COLORS.orange },
  innovation: { label: 'Innovation', accent: 'gold', color: COLORS.gold },
}

// Accent name -> hex, for components that take an `accent` prop (blue|orange|gold).
export const ACCENTS = {
  blue: COLORS.blue,
  orange: COLORS.orange,
  gold: COLORS.gold,
}

export const FOOTER = {
  org: 'Rocket Fuel Factory',
  site: 'therocketfuelfactory.com',
}

export const EVENT = {
  title: 'Doing more without adding bodies',
  workingTitle: 'Doing More with Less',
  eventName: 'Global Sync Meetup NYC',
  eventTheme: 'Scale Without Chaos',
  date: 'Thursday, 17 September 2026',
  venue: '159 West 25th Street, Chelsea, New York, NY 10001',
  speaker: 'Tim Fournet',
  speakerCompany: 'Rewst',
  sessionTime: '1:45pm to 2:15pm',
  sessionDurationMinutes: 30,
}
