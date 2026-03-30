import { personalInfo } from "./personal";

export const contactContent = {
  sectionIntro:
    "For software engineering, full-stack product work, or Generative AI collaboration, reach out directly.",
  socialLinks: [
    {
      label: "LinkedIn",
      value: "/in/parthdarji05",
      href: personalInfo.linkedin,
      hint: "Open profile",
      message: "LinkedIn opened in a new tab."
    },
    {
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      hint: "Copy + open mail app",
      copyValue: personalInfo.email,
      message: "Email copied and mail app ready."
    },
    {
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
      hint: "Copy + call directly",
      copyValue: personalInfo.phone,
      message: "Phone number copied and dialer ready."
    }
  ]
};
