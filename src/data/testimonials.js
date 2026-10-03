import mhijir from "../assets/images/testimonials/mhijir.webp";
import tihadazemmour from "../assets/images/testimonials/tihadazemmour.webp";
import bouziane from "../assets/images/testimonials/bouziane.webp";

// `relation` says how the person knows Mehdi (shown next to the role).
// `project` (slug) shows the quote on that case study; `excerpt` is the short version used there.
export const testimonials = [
  {
    name: "Mahdi Bouziane",
    relation: "Client",
    role: "President, Tihad Azemmour",
    project: "tihad-azemmour-women",
    excerpt:
      "A women's football club with more than 60 players across U15, U17 and Seniors needs solid tools, and Mahdi built one to fit us. He took the time to understand how an amateur club really runs, and he turned our needs into a clear, reliable platform that fully carries our identity as the Dragonnes.",
    quote: "As President of Tihad Azemmour Women, I'm grateful to Mahdi for developing tihadazemmourwomen.ma, our club's website and management platform.\n\nA women's football club with more than 60 players across U15, U17 and Seniors needs solid tools, and Mahdi built one to fit us. He took the time to understand how an amateur club really runs, and he turned our needs into a clear, reliable platform that fully carries our identity as the Dragonnes.\n\nHe was always available and attentive, and he never lost sight of the purpose: giving young women athletes a club that is professional on and off the pitch.\n\nTechnical skill, listening and commitment make Mahdi a partner I recommend without hesitation.\n\nديما اتحاد 🐉",
    image: tihadazemmour,
  },
  {
    name: "Oumaima Mhijir",
    relation: "Client",
    role: "CEO, Jadara Foundation",
    quote: "I am really impressed by you, not only by your technical skills but also by your ability to transform a more or less clear vision into a tangible project. Your reactivity and professionalism just wowed me. Thank you, sidi.",
    image: mhijir,
  },
  {
    name: "Mahdi Bouziane",
    relation: "Manager",
    role: "Executive Director, LionsGeek",
    quote: "I've had the privilege of watching Mahdi grow from a learner in the very first cohort of the LionsGEEK Coding School into its Head Coach, and one of the pillars of our organization.\n\nAs Head Coach, he combines strong full-stack skills with a real gift for teaching. He is demanding, patient and inspiring. He led the team behind ADA, a conversational metahuman of Ada Lovelace that won the Jury's Coup de Cœur at AVATARS 2026 in Brussels.\n\nReliable, curious and deeply committed to social impact, Mahdi is a talent I recommend without reservation.",
    image: bouziane,
  },
];

export const projectTestimonial = (slug) => testimonials.find((testimonial) => testimonial.project === slug);
