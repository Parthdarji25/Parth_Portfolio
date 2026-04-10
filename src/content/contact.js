import { personalInfo } from "./personal";

export const contactContent = {
  sectionIntro:
    "For software engineering, full-stack product work, or Generative AI collaboration, reach out directly.",
  socialLinks: [
    {
      label: "Let's Connect on LinkedIn",
      value: "@parthdarji05",
      href: personalInfo.linkedin,
      hint: "Explore my experience & network",
      message: "Redirecting to LinkedIn...",
    },
    {
      label: "Get In Touch Using Email ID",
      href: `mailto:${personalInfo.email}`,
      hint: "Start a conversation",
      copyValue: personalInfo.email,
      message: "Email copied. Ready when you are.",
    },
    {
      label: "Phone Number",
      href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
      hint: "Available for quick discussions",
      copyValue: personalInfo.phone,
      message: "Phone number copied and dialer ready.",
    },
  ],
};
