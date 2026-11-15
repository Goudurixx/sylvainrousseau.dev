// Career data, from the CV (Senior Engineer version, 2026-11).
// Public site: no phone number, no customer site details beyond what the CV states.

export interface Role {
  org: string;
  role: string;
  place: string;
  period: string;
  context: string;
  highlights: string[];
  stack: string[];
  current?: boolean;
  visual?: string; // faint image on the card (official store screenshots, never internal material)
}

export const roles: Role[] = [
  {
    org: 'Alta Ares',
    role: 'Technical Lead & Forward Deployed Engineer',
    place: 'Paris',
    period: 'Jan 2026 – now',
    current: true,
    visual: '/roles/altaares.webp',
    context:
      'Defense-tech startup building counter-UAS interceptor drones. Tech lead on the interceptor-drone program and the Ground Control Station product.',
    highlights: [
      'Lead a cross-functional team of 6 across architecture, delivery and production.',
      'Own the Ground Control Station from R&D to production: technical direction, onboarding, acting production lead.',
      'Designed and shipped 3 C2 integration bridges from scratch in 5 months (a C2 system, a C2 system, a C2 system), each against a live customer demo.',
      'Hardened the vision-tracking and guidance stack for field use: TensorRT/CUDA inference on Jetson Orin, hardware-rooted device identity, remote access to deployed sites.',
      'Partner programs: strike-drone integration, a higher-capacity airframe with GNSS-denied navigation, radar in the detection pipeline.',
      'In-house antenna project, a technician-facing production QA tool, and an LLM support agent grounded in real field incidents.',
      '~5 months embedded on customer and government sites in Ukraine, the UAE and France.',
    ],
    stack: ['Python', 'C/C++', 'Jetson Orin', 'TensorRT', 'MAVLink', 'ArduPilot', 'C2 integration', 'CoT/C2', 'RF'],
  },
  {
    org: 'Netatmo · Legrand group',
    role: 'Android Engineer',
    place: 'Boulogne-Billancourt',
    period: 'May 2024 – Jan 2026',
    context: 'Home + Security line: connected cameras, alarms and intrusion detection.',
    visual: '/roles/netatmo.webp',
    highlights: [
      'Shipped a new product integration, extending real-time intrusion and event detection to a new device line.',
      'Integrated AI vision recognition (person / vehicle / animal) into real-time camera alerts.',
      'Cut calls to the security-events API by 30%.',
      'Owned the shared design system across 4 brands (Netatmo, Legrand, Intuis, Velux); migrated Velux from XML to Compose; built a Gradle plugin that automates releases.',
    ],
    stack: ['Kotlin', 'Compose', 'Coroutines/Flow', 'MVVM', 'BLE', 'Bonjour', 'Firebase'],
  },
  {
    org: 'Allergenius',
    role: 'Android Engineer · freelance',
    place: 'Paris',
    period: 'Jan – Apr 2025',
    context: 'Health-tech startup. Sole engineer: launched the app from scratch.',
    visual: '/roles/allergenius.webp',
    highlights: [
      'Architecture, build and release of the Android app, end to end.',
      'On-device AI pipeline that reads scanned product labels and returns an instant allergen risk assessment, on top of Open Food Facts.',
    ],
    stack: ['Compose', 'CameraX', 'Room', 'Hilt', 'Ktor', 'Firebase'],
  },
  {
    org: 'K-ciopé',
    role: 'Software Engineer',
    place: 'Paris',
    period: 'Feb 2023 – May 2024',
    context: "Ma Métropole Dans Ma Poche, the native app of the Aix-Marseille-Provence metropolis (2M+ residents): news, services, reporting and events.",
    visual: '/roles/kciope.webp',
    highlights: [
      'Owned the Android app from first commit to release in Jetpack Compose.',
      'Map-based data visualisation (MapLibre) and a cached, paged news and events feed.',
      'Introduced Clean Architecture + MVVM, cutting development and testing time by 30–50%. Maintained the iOS companion (Swift).',
    ],
    stack: ['Kotlin', 'Compose', 'MapLibre', 'Swift'],
  },
  {
    org: 'BNP Paribas Personal Finance',
    role: 'Android Developer · intern',
    place: 'Levallois-Perret',
    period: 'May – Aug 2022',
    context: 'Loan-management component of the Cetelem app (1M+ downloads).',
    highlights: [],
    stack: ['Kotlin', 'Java', 'Clean Architecture'],
  },
  {
    org: 'Céleste',
    role: 'Full-stack Developer',
    place: 'Paris',
    period: 'Oct 2021 – Apr 2022',
    context: 'Privacy-focused social network, built end to end: feed, stories, photo/audio/video messaging.',
    highlights: [],
    stack: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    org: '1er RHP · French Army',
    role: 'Operational Reservist',
    place: 'Tarbes',
    period: 'Oct 2017 – Nov 2022',
    context: 'Five years in an airborne regiment (1st Hussar Parachute Regiment).',
    highlights: [],
    stack: [],
  },
];

export const education = [
  { school: 'Sup Galilée', what: "Computer Science Engineering degree (Diplôme d'ingénieur)", period: '2018 – 2023' },
  { school: 'NTNU, Trondheim', what: 'Erasmus semester', period: 'Aug 2022 – Jan 2023' },
  { school: 'Stony Brook University, New York', what: 'Intensive English Program', period: '2018' },
];

export const skills: Record<string, string[]> = {
  'Embedded & edge AI': ['Embedded Linux (secure boot)', 'Jetson Orin · TensorRT · CUDA', 'Axelera Metis', 'Raspberry Pi', 'YOLO', 'On-device vision & OCR', 'vLLM / LLM agents'],
  'Drones, C2 & networks': ['MAVLink', 'ArduPilot', 'pymavlink', 'C2 integration', 'a C2 system', 'a C2 system', 'radar', 'RF links & antennas', 'Tailscale'],
  Mobile: ['Android', 'Jetpack Compose', 'Coroutines / Flow', 'Clean Architecture', 'Gradle plugins', 'CameraX', 'BLE / IoT'],
  Languages: ['Kotlin', 'Python', 'C/C++', 'SQL', 'Java', 'Dart', 'Swift'],
};

export const spoken = ['French · native', 'English · fluent', 'Spanish · professional', 'Ukrainian · conversational'];

export const links = [
  { label: 'GitHub', href: 'https://github.com/Goudurixx' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sylvain65' },
  { label: 'Email', href: 'mailto:6sylvain5@gmail.com' },
];
