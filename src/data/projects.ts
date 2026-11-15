// Side projects. `image` lives in public/projects/ (taken from each repo's README media).
export interface Project {
  name: string;
  repo?: string;
  blurb: string;
  tags: string[];
  year: string;
  image?: string;
  video?: string;
  tier: 'featured' | 'more' | 'archive';
}

export const projects: Project[] = [
  {
    name: 'WellRest',
    repo: 'wellrest',
    blurb: 'Automatic rest timer for WHOOP strength workouts: finish a set, the countdown starts by itself and rings once when rest is over. Android, iOS in progress.',
    tags: ['Kotlin', 'Compose', 'NotificationListener', 'GitHub Actions'],
    year: '2026',
    image: '/projects/wellrest.webp',
    video: '/projects/wellrest.mp4',
    tier: 'featured',
  },
  {
    name: 'Edge Drone Detector',
    repo: 'andronide',
    blurb: 'On-device SSD-MobileNet detection over the camera feed (or recorded footage in demo mode), with live FPS and latency. A benchmark, not an operational system.',
    tags: ['Android', 'TFLite', 'CameraX', 'Benchmark'],
    year: '2026',
    image: '/projects/andronide.webp',
    video: '/projects/andronide-hq.mp4',
    tier: 'more',
  },
  {
    name: 'mavlinkmap',
    repo: 'mavlinkmap',
    blurb: 'Turns MAVProxy and mavp2p router configs into an interactive graph: which serial, UDP and TCP links feed the router, where they go out, with persistent labels.',
    tags: ['Python', 'FastAPI', 'Cytoscape.js', 'MAVLink'],
    year: '2026',
    image: '/projects/mavlinkmap.webp',
    video: '/projects/mavlinkmap.mp4',
    tier: 'featured',
  },
  {
    name: 'GoudurixXR',
    repo: 'GoudurixXR',
    blurb: 'Android XR sample: video through Media3 ExoPlayer in a spatial panel, with a glTF football field rendered in the scene. Runs on phone and headset.',
    tags: ['Android XR', 'Media3', 'SceneCore', 'Compose', 'Hilt'],
    year: '2025',
    image: '/projects/goudurixxr.webp',
    video: '/projects/goudurixxr.mp4',
    tier: 'featured',
  },
  {
    name: 'Claude in the browser',
    repo: 'computer_use_chrome_extension',
    blurb: 'Prototype: a Chrome MV3 side panel wired to a local Python WebSocket planner, so Claude can send actions to your real browser tab.',
    tags: ['Chrome MV3', 'Python', 'WebSocket', 'Claude API'],
    year: '2025',
    image: '/projects/computer-use.webp',
    tier: 'more',
  },
  {
    name: 'Pokedex-JC',
    repo: 'pokedex-JC',
    blurb: 'Native Android Pokédex in Jetpack Compose: PokéAPI data over GraphQL, Room caching, paged lists, filters and favourites.',
    tags: ['Compose', 'GraphQL', 'Room', 'Ktor'],
    year: '2024',
    image: '/projects/pokedex.webp',
    video: '/projects/pokedex.mp4',
    tier: 'featured',
  },
  {
    name: 'Samsung Intent Notifications',
    repo: 'SamsungIntentNotifications',
    blurb: 'Builds and fires arbitrary Android intents, with presets for Samsung notification-category settings.',
    tags: ['Kotlin', 'Compose', 'Material 3'],
    year: '2025',
    image: '/projects/samsung-intents.webp',
    tier: 'more',
  },
  {
    name: 'BAC analysis',
    repo: 'BAC-analysis',
    blurb: 'French baccalauréat results 2012–2019 set against average income by département, in R: maps, a cartogram and correlations.',
    tags: ['R', 'Statistics', 'Maps'],
    year: '2021',
    image: '/projects/bac.webp',
    tier: 'more',
  },
  { name: 'Hugging Chat', repo: 'Hugging_Chat', blurb: 'Compose client that browses Hugging Face Hub models over Ktor; the chat part is not built yet.', tags: ['Compose', 'Ktor'], year: '2024', tier: 'archive' },
  { name: 'K-Fit', repo: 'K-Fit', blurb: 'Workout-catalogue prototype: Firebase sign-up and login, a body-measurement profile, exercise cards and favourites.', tags: ['Compose', 'Firebase', 'Hilt'], year: '2023', tier: 'archive' },
  { name: 'Arterest', repo: 'arterest', blurb: 'Early Android XR prototype: a feed of posts laid out as floating panels in a ring around you.', tags: ['Android XR', 'Compose'], year: '2025', tier: 'archive' },
  { name: 'composeMP', repo: 'composeMP', blurb: 'Kotlin Multiplatform starter: one Compose UI on Android, iOS and desktop (the JetBrains template).', tags: ['KMP'], year: '2024', tier: 'archive' },
  { name: 'Podcast feed generator', repo: 'podcast-generator', blurb: 'GitHub Action that builds a podcast RSS feed from a YAML file, served by GitHub Pages.', tags: ['Python', 'GitHub Actions'], year: '2024', tier: 'archive' },
  { name: 'Podcast provider', repo: 'podcast-provider', blurb: 'The feed repository that uses the generator above.', tags: ['RSS'], year: '2024', tier: 'archive' },
  { name: 'SvelteKit demo', repo: 'sveltekit', blurb: 'The official SvelteKit demo (counter and a server-backed Wordle clone), deployed to try the framework.', tags: ['Svelte'], year: '2024', tier: 'archive' },
  { name: 'My Elephant', repo: 'MyElephantApplication', blurb: 'Compose starter project.', tags: ['Android'], year: '2024', tier: 'archive' },
  { name: 'Portfolio app', repo: 'SylvainRousseau', blurb: 'Compose Multiplatform starter (Android, iOS, web) meant to become a portfolio.', tags: ['KMP'], year: '2025', tier: 'archive' },
  { name: 'QR code scanner', repo: 'QrCodeScannerCompose', blurb: 'QR scanning from the back camera with CameraX and ZXing, in Compose.', tags: ['CameraX', 'ZXing'], year: '2024', tier: 'archive' },
];
