import mlg from "../assets/images/projects/mylionsgeek.webp";
import lionsgeek from "../assets/images/projects/lionsgeek.webp";
import yes from "../assets/images/projects/yes-africa.webp";
import casatourat_backend from "../assets/images/projects/casatourat_backend.webp";
import yesMobile_backend from "../assets/images/projects/yesMobile_backend.webp";
import casatourat from "../assets/images/projects/casatourat.webp";
import yes_learning from "../assets/images/projects/yes_learning.webp";
import yes_mobile from "../assets/images/projects/yes_mobile.webp";
import hd4h from "../assets/images/projects/hd4h.webp";
import tililab_judge from "../assets/images/projects/tililab_judge.webp";
import ecb from "../assets/images/projects/ecb.webp";
import a1 from "../assets/images/projects/a1.webp";
import tihadazemmour from "../assets/images/projects/taw.webp";
import tilila from "../assets/images/projects/tilila.webp";
import biggred from "../assets/images/projects/biggred.webp";
import lionsgeek_mobile from "../assets/images/projects/lg-mobile.webp";
import clb from "../assets/images/projects/clb_klb.webp";
import glovantis from "../assets/images/projects/glovantis.webp";
import israr from "../assets/images/projects/israr.webp";
import ms2030 from "../assets/images/projects/ms2030.webp";

// Original screenshots (PNG/GIF/JPG) are kept next to the .webp files; regenerate with scripts/optimize-images.py.
// Every case study needs: summary (meta description), description (overview), challenge, audience and 3-4 features.
// Optional: location, contribution, team, related (slugs). Client quotes live in data/testimonials.js.
// Only add verified facts: they are rendered on the page, in JSON-LD and in llms.txt.

const LIONSGEEK_PRO_TEAM = "Delivered with the LionsGeek PRO team, where I work as project manager.";

export const projects = [
  {
    name: "LionsGeek",
    slug: "lionsgeek",
    link: "https://lionsgeek.ma/",
    description:
      "A React website presenting the LionsGeek initiative and its work on youth empowerment through digital upskilling, project incubation and leadership coaching across Africa.",
    summary:
      "React website for LionsGeek presenting its youth programs: digital upskilling, project incubation and leadership coaching.",
    image: lionsgeek,
    technologies: ["React"],
    repo: null,
    category: "Web Platform",
    platform: "web",
    year: "2024",
    role: "Frontend Developer",
    client: "LionsGeek",
    location: "Casablanca, Morocco",
    audience: "Young people, partners and funders discovering LionsGeek's programs.",
    challenge:
      "LionsGeek runs several programs at once (digital upskilling, project incubation and leadership coaching) for young people across Africa. Its website had to explain all of them clearly to young people, partners and funders, and make a strong first impression.",
    features: [
      { title: "Story-driven homepage", text: "An animated narrative that walks visitors through LionsGeek's mission." },
      { title: "Program sections", text: "Digital upskilling, project incubation and leadership coaching, each with its own content." },
      { title: "Reusable components", text: "A component system with consistent motion, reused across the site." },
      { title: "Responsive performance", text: "Layouts tuned for mobile, tablet and desktop." },
    ],
    related: ["my-lionsgeek", "lionsgeek-mobile"],
  },
  {
    name: "Casatourat",
    slug: "casatourat",
    link: "https://casatourat.ma/",
    description:
      "A React Native mobile app for exploring Casablanca's heritage: guided circuits with map-based navigation, heritage buildings, cultural events, activity tracking and achievements. It supports local cultural tourism by turning the city into a set of guided, interactive experiences.",
    summary:
      "React Native app for Casamémoire: guided heritage circuits around Casablanca, buildings, cultural events, activity tracking and achievements.",
    image: casatourat,
    technologies: ["React Native"],
    repo: null,
    category: "Mobile App",
    platform: "mobile",
    year: "2024",
    role: "Mobile App Developer · Project lead",
    client: "Casamémoire",
    location: "Casablanca, Morocco",
    audience: "Residents and visitors exploring Casablanca's architectural and cultural heritage.",
    contribution:
      "I led the Casatourat project at LionsGeek PRO and developed the React Native app, which gets its content from the Casatourat Laravel dashboard.",
    team: LIONSGEEK_PRO_TEAM,
    challenge:
      "Casamémoire wanted residents and visitors to discover Casablanca's architectural and cultural heritage on their own, through guided circuits around the city. The app had to guide people on a map, present heritage buildings and events, and stay up to date from a content back office.",
    features: [
      { title: "Guided circuits on a map", text: "Heritage circuits around Casablanca with map-based navigation." },
      { title: "Heritage buildings", text: "A page for each building on the circuits." },
      { title: "Cultural events", text: "An events feed fed live from the Laravel dashboard." },
      { title: "Activity & achievements", text: "Users track their activity and unlock achievements as they explore." },
    ],
    related: ["casatourat-dashboard"],
  },
  {
    name: "Tihad Azemmour Women",
    slug: "tihad-azemmour-women",
    link: "https://tihadazemmourwomen.ma/",
    description:
      "Official website of Club Union Sportive Azemmour Féminin – Tihad Azemmour, a women’s football club based in Azemmour, Morocco. The platform features a shop and an admin backoffice for managing line-ups, team convocations, finances, and the store. It presents the club’s sporting, educational, and social mission, highlighting youth development across Senior, U17, and U15 categories and its Sport for Development initiatives for young girls in the region.",
    summary:
      "Website, shop and admin back office for Tihad Azemmour, a women's football club in Morocco: line-ups, convocations, finances and store.",
    image: tihadazemmour,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Web Platform + Admin",
    platform: "web",
    year: "2024",
    role: "Full-Stack Developer",
    client: "US Azemmour Féminin",
    location: "Azemmour, Morocco",
    audience: "Players, families, supporters and partners of a women's football club with Senior, U17 and U15 teams.",
    challenge:
      "An amateur women's football club with more than 60 players across Senior, U17 and U15 teams needed one place to present the club publicly and to run its day-to-day work: line-ups, convocations, finances and its store. The tool had to fit how an amateur club really runs and carry the club's identity as the Dragonnes.",
    features: [
      { title: "Line-ups & convocations", text: "Staff build line-ups and send team convocations from the back office." },
      { title: "Club finances", text: "The club's finances are managed in the same admin as the sporting side." },
      { title: "Online store", text: "Club merchandise with order and inventory management." },
      { title: "Public club site", text: "The club's sporting, educational and social mission, organized by youth category." },
    ],
  },
  {
    name: "Atelier A1",
    slug: "atelier-a1",
    link: "https://ateliera1.com/",
    description:
      "Official website of Atelier A1, a Moroccan architecture and urban design agency founded by Abderrahim Kassou and Mustapha Chakib. The site presents the agency’s philosophy, multidisciplinary expertise, and a diverse portfolio of architectural, urban planning, and landscape projects developed across various scales.",
    summary:
      "Portfolio website for Atelier A1, a Moroccan architecture and urban design agency, built with Laravel and Inertia.js.",
    image: a1,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Institutional Website",
    platform: "web",
    year: "2024",
    role: "Full-Stack Developer",
    client: "Atelier A1",
    location: "Morocco",
    audience: "Clients, partners and the public discovering the agency's architecture and urban design work.",
    challenge:
      "Atelier A1 works across architecture, urban planning and landscape, at very different scales. The agency needed a site that presents its philosophy and a growing portfolio, with content its team can keep updated.",
    features: [
      { title: "Project showcase", text: "Architecture, urban planning and landscape projects in one flexible portfolio." },
      { title: "Agency philosophy", text: "The agency's approach and multidisciplinary expertise." },
      { title: "Founders' story", text: "The agency founded by Abderrahim Kassou and Mustapha Chakib." },
      { title: "Editable content", text: "A content structure the agency updates as its work evolves." },
    ],
  },
  {
    name: "Écoles Belges au Maroc",
    slug: "ecoles-belges-maroc",
    link: "https://ecolebelgue.mylionsgeek.ma",
    description:
      "Official admissions and information platform for the Établissements scolaires Belges au Maroc, operating under the educational program of the Fédération Wallonie-Bruxelles. The website provides families with structured guidance on the admission process, academic vision, and essential school information through an online application system.",
    summary:
      "Online admissions and information platform for the Belgian schools in Morocco, with a multi-step application workflow for families.",
    image: ecb,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Admissions Platform",
    platform: "web",
    year: "2024",
    role: "Full-Stack Developer",
    client: "Écoles Belges au Maroc",
    location: "Morocco",
    audience: "Families applying to the Belgian schools in Morocco.",
    challenge:
      "Families applying to the Belgian schools in Morocco needed clear guidance on the admission process and a way to apply online. The schools needed applications to come in through one structured workflow.",
    features: [
      { title: "Online application", text: "A structured, multi-step application form for families." },
      { title: "Admission guidance", text: "The admission process explained step by step." },
      { title: "Academic vision", text: "The Fédération Wallonie-Bruxelles programme and the schools' approach." },
      { title: "School information", text: "Essential information families need before applying." },
    ],
    related: ["clb-klb"],
  },
  {
    name: "CLB-KLB",
    slug: "clb-klb",
    link: "https://new.clb-klb.com/",
    description:
      "Official platform of the Cercle des Lauréats de Belgique – Kring van laureaten van België (CLB-KLB), a Moroccan association that connects graduates of Belgian institutions and promotes Belgian higher education and training opportunities in Morocco. The site presents the network’s mission, events, and Belgium–Morocco partnerships.",
    summary:
      "Platform for CLB-KLB, the Moroccan association of graduates of Belgian institutions: mission, events and Belgium–Morocco partnerships.",
    image: clb,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Association Platform",
    platform: "web",
    year: "2024",
    role: "Full-Stack Developer",
    client: "CLB-KLB",
    location: "Morocco",
    audience: "Graduates of Belgian institutions living in Morocco, and the association's partners.",
    challenge:
      "CLB-KLB connects graduates of Belgian institutions living in Morocco and promotes Belgian higher education there. It needed one platform for its mission, events and Belgium–Morocco partnerships, with content the association can manage itself.",
    features: [
      { title: "Network & mission", text: "Who the association brings together and why." },
      { title: "Events", text: "The network's events, presented for members and partners." },
      { title: "Belgium–Morocco partnerships", text: "Partnerships and training opportunities between both countries." },
      { title: "Member announcements", text: "Content sections the association manages itself." },
    ],
    related: ["ecoles-belges-maroc"],
  },
  {
    name: "Glovantis Group",
    slug: "glovantis-group",
    link: "https://glovantisgroup.com/",
    description:
      "Corporate website for Glovantis Group, a strategic advisory firm specialized in international expansion. The platform presents their expertise in market entry, public affairs, institutional relations, and partnership structuring across Europe, Morocco, and the Gulf.",
    summary:
      "Corporate website for Glovantis Group, an advisory firm for international expansion across Europe, Morocco and the Gulf.",
    image: glovantis,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Corporate Website",
    platform: "web",
    year: "2025",
    role: "Full-Stack Developer",
    client: "Glovantis Group",
    audience: "Companies and institutions looking for support with international expansion.",
    challenge:
      "Glovantis Group advises companies on international expansion across Europe, Morocco and the Gulf. Its site had to explain specialized services clearly to decision-makers in several markets.",
    features: [
      { title: "Market entry", text: "How the firm helps companies enter new markets." },
      { title: "Public affairs", text: "Public affairs and institutional relations expertise." },
      { title: "Partnership structuring", text: "Support for structuring cross-border partnerships." },
      { title: "Content by region", text: "Content organized for Europe, Morocco and the Gulf." },
    ],
  },
  {
    name: "ISRAR",
    slug: "israr",
    link: "https://israr.ma/",
    description:
      "Official digital platform of the Coalition ISRAR pour l’Égalité et l’Empowerment, a Moroccan alliance of local associations advancing gender equality and women’s human rights. The site provides bilingual (French–Arabic) access to legal and support services aimed at combating violence against women and strengthening empowerment across the Maghreb.",
    summary:
      "Bilingual French–Arabic platform for the ISRAR coalition, giving access to legal and support services against violence toward women.",
    image: israr,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "NGO Platform (Bilingual)",
    platform: "web",
    year: "2025",
    role: "Full-Stack Developer",
    client: "Coalition ISRAR",
    location: "Morocco",
    audience: "Women looking for legal and support services, and the associations in the coalition.",
    challenge:
      "The ISRAR coalition brings together Moroccan associations working on gender equality and women's rights. Women looking for legal and support services against violence had to find them easily, in French or in Arabic.",
    features: [
      { title: "French & Arabic", text: "The full platform in both languages, with right-to-left Arabic layouts." },
      { title: "Support services", text: "Access to legal and support services against violence toward women." },
      { title: "The coalition", text: "The alliance of local associations and its mission." },
      { title: "Accessible layouts", text: "Readable, accessible pages in both languages." },
    ],
  },
  {
    name: "Le Maroc Social 2030",
    slug: "maroc-social-2030",
    link: "https://ms2030.org/",
    description:
      "Digital platform for Le Maroc Social 2030, a Think & Do Tank led by The Social Observatory. It translates a national social vision into an accessible web experience, connecting analysis, citizen engagement, and working groups focused on cohesion, equity, and dignity by the 2030 horizon.",
    summary:
      "Web platform for Le Maroc Social 2030, a think-and-do tank connecting analysis, citizen engagement and working groups.",
    image: ms2030,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Think-Tank Platform",
    platform: "web",
    year: "2025",
    role: "Full-Stack Developer",
    client: "The Social Observatory",
    location: "Morocco",
    audience: "Citizens, experts and working-group members taking part in the Maroc Social 2030 initiative.",
    challenge:
      "Le Maroc Social 2030 carries a national social vision for 2030. The think-and-do tank needed a platform that makes this vision accessible and connects its analysis, citizen engagement and thematic working groups.",
    features: [
      { title: "The 2030 vision", text: "Content organized around cohesion, equity and dignity." },
      { title: "Analysis", text: "The think tank's analysis, presented for a wide audience." },
      { title: "Citizen engagement", text: "Ways for citizens to take part in the initiative." },
      { title: "Working groups", text: "The thematic working groups and their focus." },
    ],
  },
  {
    name: "YES Africa",
    slug: "yes-africa",
    link: "https://youthempowermentsummit.africa/",
    description:
      "The official React website of the YES Africa movement. It presents the Youth Empowerment Summit's mission, past editions, partnerships, and calls to action for youth-driven impact across the continent.",
    summary:
      "React website for the Youth Empowerment Summit (YES Africa): mission, past editions, partners and calls to action.",
    image: yes,
    technologies: ["React"],
    repo: null,
    category: "Event Website",
    platform: "web",
    year: "2024",
    role: "Frontend Developer",
    client: "Jadara Foundation (YES Africa)",
    audience: "Young Africans, partners and sponsors of the Youth Empowerment Summit.",
    challenge:
      "The Youth Empowerment Summit needed a web presence that tells its story across editions, shows its partners and turns visitors into participants and supporters.",
    features: [
      { title: "Mission & story", text: "What the summit stands for and who it serves." },
      { title: "Past editions", text: "A look back at previous summits." },
      { title: "Partners", text: "The organizations behind the summit." },
      { title: "Calls to action", text: "Clear paths to join, partner or support." },
    ],
    related: ["yes-mobile", "yes-learning", "yes-mobile-dashboard"],
  },
  {
    name: "Bigg Red",
    slug: "bigg-red",
    link: "https://beta.biggred.com/",
    description:
      "An e-commerce platform for premium tech and consumer electronics, featuring product catalogs, flash sales with countdown timers, curated new arrivals, and custom accessory personalization, with exclusive offers and early-access memberships.",
    summary:
      "Laravel and Inertia.js e-commerce platform for premium electronics: catalog, flash sales, accessory personalization and memberships.",
    image: biggred,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "E-commerce",
    platform: "web",
    year: "2025",
    role: "Full-Stack Developer",
    client: "Bigg Red",
    audience: "Shoppers looking for premium tech and consumer electronics.",
    challenge:
      "Bigg Red sells premium tech and consumer electronics. The store needed more than a catalog: time-limited flash sales, curated new arrivals, accessory personalization and early access for members.",
    features: [
      { title: "Product catalog", text: "Premium electronics with curated new arrivals." },
      { title: "Flash sales", text: "Time-limited offers with live countdown timers." },
      { title: "Accessory personalization", text: "Customers customize accessories before ordering." },
      { title: "Memberships", text: "Exclusive offers and early access for members." },
    ],
  },
  {
    name: "My LionsGeek",
    slug: "my-lionsgeek",
    link: "https://mylionsgeek.ma/",
    description:
      "A Laravel platform for running a training center: reservations, session planning, admin tasks and user roles. It keeps trainers, learners and administrators coordinated in one place.",
    summary:
      "Laravel operations platform for the LionsGeek training center: reservations, session planning, admin workflows and user roles.",
    image: mlg,
    technologies: ["Laravel"],
    repo: "https://github.com/forkanimahdi/mylionsgeek",
    category: "Operations Platform",
    platform: "web",
    year: "2024",
    role: "Full-Stack Developer · Project lead",
    client: "LionsGeek",
    location: "Casablanca, Morocco",
    audience: "LionsGeek trainers, learners and administrators.",
    contribution:
      "I led My LionsGeek, LionsGeek's internal management system, as project manager at LionsGeek PRO, and worked on it as a full-stack Laravel developer.",
    team: LIONSGEEK_PRO_TEAM,
    challenge:
      "In a training center, trainers, learners and administrators share rooms, sessions and daily admin work. LionsGeek needed one internal platform to coordinate reservations, session planning and admin tasks, with the right access for each role.",
    features: [
      { title: "Reservations", text: "Spaces and resources booked in one place." },
      { title: "Session planning", text: "Training sessions planned for trainers and learners." },
      { title: "Admin workflows", text: "Daily administrative tasks handled in the platform." },
      { title: "Roles & permissions", text: "Each user sees what their role needs." },
    ],
    related: ["lionsgeek-mobile", "lionsgeek"],
  },
  {
    name: "Casatourat Dashboard",
    slug: "casatourat-dashboard",
    link: "https://casatourat.ma/",
    description:
      "The Laravel dashboard behind the Casatourat mobile app. It manages cultural circuits, events and app content, and gives the team insight into how the app is used.",
    summary:
      "Laravel admin dashboard behind the Casatourat mobile app: cultural circuits, events, app content and usage insights.",
    image: casatourat_backend,
    technologies: ["Laravel"],
    repo: null,
    category: "Admin Dashboard",
    platform: "web",
    year: "2024",
    role: "Full-Stack Developer · Project lead",
    client: "Casamémoire",
    location: "Casablanca, Morocco",
    audience: "The team that manages Casatourat's circuits, events and content.",
    contribution: "Part of the Casatourat project I led at LionsGeek PRO: the Laravel back office that feeds the mobile app.",
    team: LIONSGEEK_PRO_TEAM,
    challenge:
      "The Casatourat app needed a back office where the team manages circuits, events and content and sees the changes in the app right away, plus insight into how the app is used.",
    features: [
      { title: "Circuit management", text: "Cultural circuits created and edited for the app." },
      { title: "Events", text: "Cultural events published to the app's feed." },
      { title: "Live app content", text: "Content changes reach the mobile app in real time." },
      { title: "Usage insights", text: "A view of how people use the app." },
    ],
    related: ["casatourat"],
  },
  {
    name: "Yes Mobile",
    slug: "yes-mobile",
    link: "https://app.youthempowermentsummit.africa/",
    description:
      "A React Native app for the Youth Empowerment Summit, giving participants access to schedules, speaker info, ticket scanning and event navigation, built with performance and accessibility in mind.",
    summary:
      "React Native app for the Youth Empowerment Summit: schedules, speakers, QR ticket scanning and event navigation.",
    image: yes_mobile,
    technologies: ["React Native"],
    repo: null,
    category: "Event Mobile App",
    platform: "mobile",
    year: "2024",
    role: "Mobile App Developer · Project lead",
    client: "Jadara Foundation (YES Africa)",
    audience: "Participants, speakers and organizers of the Youth Empowerment Summit.",
    contribution:
      "I led the YES Africa app at LionsGeek PRO for Jadara Foundation and developed it in React Native, together with its Laravel backend.",
    team: LIONSGEEK_PRO_TEAM,
    challenge:
      "Summit participants needed the schedule, speaker information and directions in their pocket, and organizers needed fast check-in at the entrance.",
    features: [
      { title: "Schedule", text: "The full summit programme on the participant's phone." },
      { title: "Speakers", text: "Speaker profiles and session information." },
      { title: "QR ticket scanning", text: "Fast on-site check-in by scanning tickets." },
      { title: "Event navigation", text: "Helps participants find their way around the event." },
    ],
    related: ["yes-mobile-dashboard", "yes-learning", "yes-africa"],
  },
  {
    name: "Yes Learning",
    slug: "yes-learning",
    link: "https://learning.youthempowermentsummit.africa/",
    description:
      "A Laravel and Inertia.js platform offering workshops, e-learning content and progress tracking. It supports both synchronous and asynchronous learning for African youth in professional and soft-skill areas.",
    summary:
      "Laravel and Inertia.js e-learning platform for YES Africa: workshops, courses and progress tracking for African youth.",
    image: yes_learning,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "E-learning Platform",
    platform: "web",
    year: "2024",
    role: "Full-Stack Developer · Project lead",
    client: "Jadara Foundation (YES Africa)",
    audience: "Young Africans building professional and soft skills.",
    contribution: "Led at LionsGeek PRO as part of the YES Africa programme for Jadara Foundation; I worked on it as a full-stack developer.",
    team: LIONSGEEK_PRO_TEAM,
    challenge:
      "YES Africa needed a learning platform for African youth that supports both live workshops and self-paced courses in professional and soft skills, and follows each learner's progress.",
    features: [
      { title: "Workshops", text: "Live, synchronous sessions with trainers." },
      { title: "E-learning content", text: "Self-paced courses learners follow on their own schedule." },
      { title: "Progress tracking", text: "Each learner's progress followed across courses." },
      { title: "Skill tracks", text: "Content focused on professional and soft skills." },
    ],
    related: ["yes-mobile", "yes-africa"],
  },
  {
    name: "LionsGeek Mobile",
    slug: "lionsgeek-mobile",
    link: "https://play.google.com/store/apps/details?id=com.lionsgeek_pro.lionsgeek&hl=en",
    description:
      "Official companion app for the LionsGeek community, helping students, coaches, and admins stay connected and organized. It supports workspace booking, training tracking, community updates, event reservations with capacity checks, and QR or manual check-in for participants.",
    summary:
      "React Native companion app for the LionsGeek community on Google Play: workspace booking, events with capacity checks and QR check-in.",
    image: lionsgeek_mobile,
    technologies: ["React Native"],
    repo: "https://github.com/forkanimahdi/lionsgeek-mobile",
    category: "Community Mobile App",
    platform: "mobile",
    year: "2025",
    role: "Mobile App Developer",
    client: "LionsGeek",
    location: "Casablanca, Morocco",
    audience: "LionsGeek students, coaches and administrators.",
    challenge:
      "LionsGeek students, coaches and admins needed one app to book workspaces, follow their training, get community updates and reserve event spots, without overbooking events and with quick check-in on site.",
    features: [
      { title: "Workspace booking", text: "Students and coaches book workspaces from their phone." },
      { title: "Event reservations", text: "Reservations with capacity checks, so events never overbook." },
      { title: "QR & manual check-in", text: "Participants are checked in by QR code or by hand." },
      { title: "Training & community", text: "Training tracking and community updates in one app." },
    ],
    related: ["my-lionsgeek", "lionsgeek"],
  },
  {
    name: "Her Day for Her",
    slug: "her-day-for-her",
    link: "https://herdayforher.ma/",
    description:
      "An interactive web platform built with Laravel and Inertia.js, showcasing MasterClass events and empowering women through leadership talks, workshops, and networking programs.",
    summary:
      "Laravel and Inertia.js event platform for Her Day for Her: women's leadership masterclasses, talks, workshops and networking.",
    image: hd4h,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Event Platform",
    platform: "web",
    year: "2024",
    role: "Full-Stack Developer",
    client: "Her Day for Her",
    location: "Morocco",
    audience: "Women attending leadership masterclasses, talks and workshops.",
    challenge:
      "Her Day for Her runs leadership masterclasses, talks, workshops and networking programs for women. It needed a platform that presents these programs in an engaging way that matches its brand.",
    features: [
      { title: "MasterClass events", text: "The masterclass programme for women's leadership." },
      { title: "Talks & workshops", text: "Leadership talks and hands-on workshops." },
      { title: "Networking programs", text: "The programs that connect participants." },
      { title: "Brand-led design", text: "An interactive experience built around the Her Day for Her identity." },
    ],
  },
  {
    name: "Tilila",
    slug: "tilila",
    link: "https://tilila.org/",
    description:
      "Official platform of SOREAD-2M’s Tilila program for equity, diversity, and inclusion in Morocco. It hosts Tilila Awards applications for inclusive advertising campaigns and Tililab, a creative incubator supporting agencies and advertisers committed to more equitable representation in the media.",
    summary:
      "Platform for SOREAD-2M's Tilila program: Tilila Awards applications for inclusive advertising and the Tililab incubator.",
    image: tilila,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Program Platform",
    platform: "web",
    year: "2025",
    role: "Full-Stack Developer",
    client: "SOREAD-2M",
    location: "Morocco",
    audience: "Advertisers, agencies and applicants to the Tilila Awards and Tililab.",
    challenge:
      "SOREAD-2M's Tilila program promotes equity, diversity and inclusion in Moroccan advertising and media. It needed one platform for Tilila Awards applications and for Tililab, its creative incubator for agencies and advertisers.",
    features: [
      { title: "Tilila Awards applications", text: "Applications for inclusive advertising campaigns." },
      { title: "Tililab incubator", text: "The creative incubator for agencies and advertisers." },
      { title: "Equity, diversity & inclusion", text: "The program's mission for more equitable representation in the media." },
    ],
    related: ["tililab-evaluation-platform"],
  },
  {
    name: "Tililab - Evaluation Platform",
    slug: "tililab-evaluation-platform",
    link: "https://tililab.mylionsgeek.africa/",
    description:
      "A Laravel and Inertia.js web application for managing candidate assessments by a panel of judges. Organizers add judges and register candidates, judges score them, and the panel records final decisions.",
    summary:
      "Laravel and Inertia.js jury platform for Tililab: judges, candidate registration, scoring and final decisions.",
    image: tililab_judge,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Evaluation System",
    platform: "web",
    year: "2025",
    role: "Full-Stack Developer",
    client: "SOREAD-2M / Tilila",
    location: "Morocco",
    audience: "Tililab jury members and program organizers.",
    challenge:
      "Tililab candidates are assessed by a panel of judges. Organizers needed one structured place to register candidates, let each judge score them and record the panel's final decisions.",
    features: [
      { title: "Judge management", text: "Organizers add the judges of each panel." },
      { title: "Candidate registration", text: "Candidates registered for assessment." },
      { title: "Scoring", text: "Each judge scores candidates in the platform." },
      { title: "Final decisions", text: "The panel's final decisions recorded in one place." },
    ],
    related: ["tilila"],
  },
  // {
  //   name: "Yes Backend",
  //   link: "https://management.youthempowermentsummit.africa/",
  //   description: "A Laravel admin dashboard used to manage the YES platform’s users, event schedules, speaker profiles, and access control. It supports detailed analytics and multi-role user permissions.",
  //   image: yes_backend, // import from ../assets/images/projects/yes_backend.webp
  //   technologies: ["Laravel"],
  //   repo: null
  // },
  {
    name: "Yes Mobile Dashboard",
    slug: "yes-mobile-dashboard",
    link: "https://app.youthempowermentsummit.africa/",
    description:
      "The Laravel backend for the Yes Mobile app, managing users, programs, notifications and app content, with security-first admin access.",
    summary:
      "Laravel backend for the YES Africa summit app: users, programs, notifications and app content, with multi-role admin access.",
    image: yesMobile_backend,
    technologies: ["Laravel"],
    repo: null,
    category: "Admin Dashboard",
    platform: "web",
    year: "2024",
    role: "Backend Developer",
    client: "Jadara Foundation (YES Africa)",
    audience: "YES Africa organizers managing the summit app and its participants.",
    team: LIONSGEEK_PRO_TEAM,
    challenge:
      "The Yes Mobile app needed a backend to manage its users, programs, notifications and content, with admin access restricted by role.",
    features: [
      { title: "Users", text: "Participant accounts managed by organizers." },
      { title: "Programs", text: "Summit programs published to the app." },
      { title: "Notifications", text: "Messages pushed to participants." },
      { title: "Multi-role admin", text: "Security-first access, restricted by role." },
    ],
    related: ["yes-mobile", "yes-africa"],
  },
];
