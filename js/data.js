/* =====================================================================
   PORTFOLIO DATA  —  THIS IS THE MAIN FILE YOU EDIT
   ---------------------------------------------------------------------
   Everything that appears in the Skills, Projects, Achievements and
   Contact sections comes from the lists below.

   Rules for beginners:
   • Keep the quotes "..." around text.
   • Keep the comma after each item (except it's fine to leave one on
     the last item too).
   • Image paths are RELATIVE to index.html, e.g. "assets/projects/x.jpg".
     File names are case-sensitive on GitHub Pages: "Photo.JPG" is not
     the same as "photo.jpg".
   • Leave a value as "" (empty) to hide it. Nothing broken is shown.
   ===================================================================== */

/* ---------------------------------------------------------------------
   1. CONTACT DETAILS
   Empty values ("") are hidden automatically.
   --------------------------------------------------------------------- */
const CONTACT = {
  email: "",                                   // e.g. "prakash@example.com" (also enables the message form)
  github: "https://github.com/prakash-l-tz",
  linkedin: "https://www.linkedin.com/in/prakash-l-64017028a/",
  phone: "+91 75388 95821",                    // shown as a "Call" link; set to "" to hide
  whatsapp: "917538895821",                    // country code + number, digits only (opens a WhatsApp chat)
  instagram: "https://www.instagram.com/ohh_itz.prakash/",
  location: "Tamil Nadu, India",

  // Put your PDF in assets/resume/ and type its file name here.
  // While this is "", the Download Resume buttons stay hidden.
  resume: "",                                  // e.g. "assets/resume/Prakash-L-Resume.pdf"
};

/* ---------------------------------------------------------------------
   2. SKILLS
   icon: one of  flutter | android | code | api | git | postman | excel
   level: optional short label you choose (e.g. "Daily use").
          No percentages, so nothing is exaggerated.
   --------------------------------------------------------------------- */
const SKILLS = [
  {
    name: "Flutter & Dart",
    icon: "flutter",
    level: "Daily use",
    description: "Building cross-platform mobile app features and screens with Flutter and Dart.",
    tags: ["Flutter", "Dart", "Widgets", "State management"],
  },
  {
    name: "Android Development",
    icon: "android",
    level: "Daily use",
    description: "Native Android features, permissions and Bluetooth flows, built and debugged in Android Studio.",
    tags: ["Android SDK", "Android Studio", "Bluetooth"],
  },
  {
    name: "Java & Kotlin",
    icon: "code",
    level: "",
    description: "Android app logic, native screens and maintaining existing Java and Kotlin code.",
    tags: ["Java", "Kotlin"],
  },
  {
    name: "REST API Integration",
    icon: "api",
    level: "",
    description: "Connecting mobile apps to backend services and parsing JSON responses.",
    tags: ["REST", "JSON", "HTTP"],
  },
  {
    name: "Git & GitHub",
    icon: "git",
    level: "Daily use",
    description: "Version control for every change, branching, and hosting code and this website.",
    tags: ["Git", "GitHub", "GitHub Pages"],
  },
  {
    name: "Postman",
    icon: "postman",
    level: "",
    description: "Testing and exploring APIs before wiring them into the app.",
    tags: ["API testing", "Collections"],
  },
  {
    name: "Excel & Data Reporting",
    icon: "excel",
    level: "",
    description: "Organising data, preparing reports and tracking results in spreadsheets.",
    tags: ["Excel", "Reports", "Data"],
  },
];

/* ---------------------------------------------------------------------
   3. PROJECTS
   To ADD a project: copy one { ... } block, paste it, and edit it.
   To REMOVE a project: delete its whole { ... }, block.

   image:       picture in assets/projects/ ("" shows a clean placeholder)
   status:      optional badge on the picture, e.g. "Coming soon"
   screenshots: optional extra images shown when "View Project" is clicked
   link:        GitHub / Play Store / demo URL ("" if the code is private)
   --------------------------------------------------------------------- */
const PROJECTS = [
  {
    title: "BMI Calculator",
    image: "assets/projects/bmi-calculator.svg",
    screenshots: [],
    description: "Enter your height and weight to get your Body Mass Index instantly, with a colour-coded gauge that shows which range you fall in.",
    technologies: ["Flutter", "Dart", "UI design"],
    link: "",
    note: "",
  },
  {
    title: "Rescue App",
    image: "assets/projects/rescue-app.svg",
    screenshots: [],
    description: "An emergency help app: one tap on SOS shares your live location with emergency contacts so help can reach you quickly.",
    technologies: ["Flutter", "Location", "Maps"],
    link: "",
    note: "",
  },
  {
    title: "Trip Application",
    image: "assets/projects/trip-app.svg",
    screenshots: [],
    description: "Plan trips in one place: pick a destination, see a day-by-day itinerary and keep all your travel details together.",
    technologies: ["Flutter", "Dart", "REST API"],
    link: "",
    note: "",
  },
  {
    title: "My Fleet",
    status: "Coming soon",                      // shows a "Coming soon" badge; set to "" when it launches
    image: "assets/projects/my-fleet.svg",
    screenshots: [],
    description: "A fleet management app to track vehicles on a live map, see each vehicle's status and manage trips from one dashboard.",
    technologies: ["Flutter", "Maps", "Fleet tracking"],
    link: "",
    note: "This project is currently in development.",
  },
  {
    title: "Car Game",
    image: "assets/projects/car-game.svg",
    screenshots: [],
    description: "A fast-paced racing game: dodge traffic, keep your speed up and beat your high score.",
    technologies: ["Game development", "Animation"],
    link: "",
    note: "",
  },
];

/* ---------------------------------------------------------------------
   4. ACHIEVEMENTS & CERTIFICATES
   To ADD one:
     1) Put the image in assets/achievements/ (awards) or
        assets/certificates/ (certificates).
     2) Copy a { ... } block below, paste it, and update the details.
   category: "award" or "certificate"  (used by the filter buttons)
   The image is never cropped or stretched on the site.
   --------------------------------------------------------------------- */
const ACHIEVEMENTS = [
  {
    title: "Group Dance — First Place",
    category: "award",
    badge: "1st place",
    date: "Academic year 2024–25",
    issuer: "Kavery Arts & Science College, Mecheri",
    description: "Secured first place in Group Dance in my final year (III B.Sc. CS).",
    image: "assets/achievements/group-dance-first-place-2024-25.jpg",
    alt: "Kavery Educational Institutions certificate: Prakash L secured first place in Group Dance, 2024–25",
    featured: true,
  },
  {
    title: "Cultural Program — Second Place",
    category: "award",
    badge: "2nd place",
    date: "Academic year 2023–24",
    issuer: "Kavery Arts & Science College, Mecheri",
    description: "Certificate of Excellence for securing second place in the Cultural Program.",
    image: "assets/achievements/cultural-program-second-place-2023-24.jpg",
    alt: "Certificate of Excellence: L. Prakash, II B.Sc. CS, secured second place in Cultural Program, 2023–24",
  },
  {
    title: "Group Dance — Second Place",
    category: "award",
    badge: "2nd place",
    date: "Academic year 2022–23",
    issuer: "Kavery Arts & Science College, Mecheri",
    description: "Certificate of Excellence for securing second place in Group Dance in my first year.",
    image: "assets/achievements/group-dance-second-place-2022-23.jpg",
    alt: "Certificate of Excellence: L. Prakash, I B.Sc. Computer Science, secured second place in Group Dance, 2022–23",
  },
  {
    title: "International Conference on Recent Trends in IT (ICRTCSIT)",
    category: "certificate",
    badge: "Conference",
    date: "20 September 2023",
    issuer: "Dept. of Computer Science, AVS College of Arts & Science, Salem",
    description: "Actively participated in the international conference while studying II B.Sc. Computer Science.",
    image: "assets/certificates/icrtcsit-avs-college-2023.jpg",
    alt: "AVS College of Arts & Science certificate for participation in the International Conference on Recent Trends in IT, 20.09.2023",
  },
  {
    title: "SAGAPTHAM — District Rotaract Annual Conference 2023",
    category: "certificate",
    badge: "Appreciation",
    date: "25 June 2023",
    issuer: "District Rotaract Organisation 2982, Knowledge Institute of Technology",
    description: "Certificate of Appreciation for active participation, representing the Rotaract Club of Kavery Arts and Science College.",
    image: "assets/certificates/sagaptham-rotaract-2023.jpg",
    alt: "SAGAPTHAM Certificate of Appreciation presented to Rtr Prakash L, 25.06.2023",
  },
  {
    title: "State Level Marathon",
    category: "certificate",
    badge: "Participation",
    date: "16 October 2022",
    issuer: "Sri Vasan Hospital, Omalur, with RSK NEET Academy",
    description: "Certificate of Participation for the State Level Marathon.",
    image: "assets/certificates/state-level-marathon-2022.jpg",
    alt: "RSK NEET Academy Certificate of Participation in the State Level Marathon presented to L. Prakash, 16.10.2022",
  },
];
