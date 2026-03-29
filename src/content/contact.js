import { personalInfo } from "./personal";

export const contactContent = {
  sectionIntro:
    "For software engineering, full-stack product work, or Generative AI collaboration, reach out directly.",
  socialLinks: [
    { label: "LinkedIn", href: personalInfo.linkedin },
    { label: "Email", href: `mailto:${personalInfo.email}` },
    { label: "Phone", href: `tel:${personalInfo.phone.replace(/\s+/g, "")}` }
  ]
};
