// ---------------------------------------------------------------------------
// Northeastern Satellite Lab — content data.
// ---------------------------------------------------------------------------

export const CONTACT_EMAIL = 'northeasternsatellitelab@gmail.com'

export const NSL_TEXT =
  'NSL is a brand-new spin-out club from the Northeastern Aerospace Club, originally founded in 2022 by undergraduate students. The club is run by a management team of 8 undergrads and supported by our faculty advisor, Dr. Jornet, the Associate Dean of Research in the Northeastern College of Engineering. We\'re also backed by a small but dedicated group of satellite club alumni.'

export const CUBESAT_TEXT =
  'A CubeSat is a miniaturized satellite, typically under 20 kg, built to a standardized modular design where each unit (a "1U") measures just 10×10×10 cm and weighs about 1.33 kg. Originally developed in 1999 as an educational tool, CubeSats have grown into a platform used by universities, startups, and space agencies to conduct science, test new technology, and enable commercial applications at a fraction of the cost of traditional satellites. Their small size and standardized form factor make them far cheaper to build and launch — democratizing access to space for organizations that previously couldn\'t afford it.'

// Feedback: "make it clear we don't only do cubesats."
export const BEYOND_CUBESATS_TEXT =
  'CubeSats are our flagship, not our boundary. NSL\'s work spans ground stations, national competitions, open-source R&D, and mission simulation — from a sub-THz ground segment to trajectory-optimization contests and tools any student team can pick up and use.'

export const TEAMS = [
  { icon: 'wrench', title: 'Hardware',    body: 'Mechanical and electrical engineering: avionics, PCBs, structures, power, and payloads — the physical spacecraft, designed, built, and tested by students.' },
  { icon: 'zap',    title: 'Software',    body: 'Flight software running onboard the spacecraft and ground software that talks to it — the code that keeps a mission alive from lab bench to orbit.' },
  { icon: 'globe',  title: 'Simulations', body: 'Orbital mechanics and mission analysis — modeling trajectories, dynamics, and mission scenarios before anything flies.' },
]

export const PARTNERS = [
  'NASA CSLI', 'AFRL UNP', 'INSI', 'NSF CIRC',
  'PROVES', 'Cal Poly Pomona Bronco Space', 'MSU',
]

export const ALUMNI_COMPANIES = [
  'MIT Lincoln Laboratory', 'Draper Laboratory', 'Specter Aerospace', 'Blue Origin',
  'Space Dynamics Laboratory', 'Shield AI', 'Northeastern INSI',
  'Fidelity Investments', 'Harvard Medical School', 'Stripe', 'SpaceX',
]

// ── Active satellite & ground-station programs ───────────────────────────────
export const PROGRAMS = [
  {
    id: 'proves-atlas',
    name: 'PROVES Atlas',
    status: 'Launched · April 2026',
    image: '/img/proves.svg',
    imageAlt: 'PROVES Atlas CubeSat illustration',
    collaborators: 'With the Pleiades Consortium · PROVES',
    scale: [
      { big: '~15',  label: 'students on the build' },
      { big: '<1 yr', label: 'from kickoff to launch' },
      { big: '5',    label: 'partner university teams' },
    ],
    body: "In April 2026, Northeastern went to space for the first time — a student-built CubeSat, launched into orbit as one of a five-satellite constellation. About 15 students built it in under a year, working shoulder-to-shoulder with the Pleiades Consortium, a group of five partner university teams. Our students worked on both the hardware and the software of the platform, and we open-sourced all of it. It carries a Sony Spresense camera payload for image capture, and it's part of PROVES — an educational satellite program that's also developing university CubeSat kits for under $3,000, lowering the barrier to space for students and researchers everywhere.",
  },
  {
    id: 'teralink-1',
    name: 'Teralink-1',
    status: 'In development',
    window: 'Tentative launch window: TBD',
    scale: [
      { big: 'TBD',    label: 'tentative launch window' },
      { big: 'Active', label: 'team building now' },
    ],
    image: '/img/satellite.svg',
    imageAlt: 'Teralink-1 CubeSat concept illustration',
    body: 'An in-development CubeSat program pushing high-frequency communications. [Placeholder — full mission description coming from the Teralink-1 team.]',
    placeholder: true,
  },
  {
    id: 'sub-thz',
    name: 'Sub-THz Ground Station',
    status: 'In development',
    scale: [
      { big: 'Sub-THz', label: 'frequency frontier' },
      { big: 'Growing', label: 'one of our fastest-growing programs' },
    ],
    image: '/img/groundstation.svg',
    imageAlt: 'Sub-THz ground station illustration',
    body: 'A student-built ground station exploring sub-terahertz communication links — and one of our most rapidly growing programs. [Placeholder — full description coming soon.]',
    placeholder: true,
  },
]

// ── Competitions ─────────────────────────────────────────────────────────────
export const COMPETITIONS = [
  {
    id: 'dewsat',
    name: 'NASA Space to Soil — DEWSat',
    status: 'Finalist',
    image: '/img/dewsat.svg',
    imageAlt: 'DEWSat drought early-warning satellite concept illustration',
    collaborators: 'NASA Space to Soil challenge',
    body: "A four-member NSL team was selected as a finalist for DEWSat — a Drought Early Warning Satellite. DEWSat captures multispectral data and processes it onboard, using a custom compute architecture running a quantized Bi-LSTM, to compute vegetation indices, detect soil stress, and produce risk alerts within hours. Doing the analysis in orbit means faster responses without heavy ground infrastructure — and the same architecture extends to wildfire, flood, and urban-heat monitoring, especially as a constellation. The competition has concluded, and the team is exploring the path from concept to launch-ready mission.",
  },
  {
    id: 'gtoc-14',
    name: 'GTOC-14',
    status: 'Forming interest',
    body: 'The Global Trajectory Optimization Competition — often called the "America\'s Cup of Rocket Science" — is an international trajectory-optimization contest. GTOC-14 hasn\'t been announced yet, but NSL intends to field a team and is gathering interested members ahead of the announcement.',
  },
]

// ── R&D projects ─────────────────────────────────────────────────────────────
export const RND = [
  { icon: 'star',   title: 'Open-Source Star Tracker Algorithm', status: 'In development', body: 'An open attitude-determination algorithm that identifies a spacecraft\'s orientation from the stars it sees.' },
  { icon: 'globe',  title: 'Open-Source Radio Telescope',        status: 'In development', collaborators: 'With SEDS', body: 'A radio telescope built in collaboration with SEDS — open hardware for listening to the sky.' },
  { icon: 'layers', title: 'SatSim',                             status: 'Early development', body: 'An open-source Python framework for end-to-end CubeSat mission simulation — a modular architecture covering orbital mechanics, spacecraft dynamics, and mission analysis, aiming to become an accessible tool for mission design and education.' },
  { icon: 'wrench', title: 'CubeSat Deployable Solar Panel Mechanism', status: 'In development', body: 'A student-designed deployable solar-panel mechanism for CubeSats — more power in a small package.' },
]

// ── Per-project points of contact (small print on Projects) ──────────────────
export const PROJECT_POCS = [
  { project: 'Teralink-1', contacts: 'Landon Bayer, Noah Typrin, Riley Ashok' },
]

// ── This semester ────────────────────────────────────────────────────────────
// PLACEHOLDER schedule — update every term with real times and rooms.
export const SCHEDULE = [
  { day: 'Monday',    what: 'Hardware team build session',     time: '6:00 – 8:00 PM', where: 'TBD' },
  { day: 'Tuesday',   what: 'Software / flight code',          time: '7:00 – 9:00 PM', where: 'TBD' },
  { day: 'Wednesday', what: 'All-hands general meeting',       time: '7:30 – 9:00 PM', where: 'TBD' },
  { day: 'Thursday',  what: 'Simulations & mission analysis',  time: '6:00 – 8:00 PM', where: 'TBD' },
]

export const ROSTER = [
  { group: 'E-Board', members: ['Laura Teixeira', 'Swati Sundaram', 'Orlando LuPone', 'Sandhya Moorthi', 'Gavin Sarno'] },
  { group: 'Teralink-1', members: ['Landon Bayer', 'Noah Typrin', 'Riley Ashok'] },
  { group: 'Subteam leads', members: ['Mechanical — TBA', 'Software — TBA', 'Simulations — TBA'] },
]

// ── Socials ──────────────────────────────────────────────────────────────────
export const SOCIALS = [
  { label: 'Instagram', href: '#' /* TODO: real URL */ },
  { label: 'LinkedIn',  href: '#' /* TODO: real URL */ },
]
