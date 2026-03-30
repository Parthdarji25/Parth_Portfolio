import chatbotImage from "../assets/chatbot.png";

export const projectsContent = {
  sectionIntro:
    "Representative work and initiative areas derived from the resume and shipped production responsibilities.",
  items: [
    {
      id: "rag-chatbot",
      icon: "◈",
      title: "RAG-Based Customer Support Chatbot",
      kicker: "LLM + retrieval workflow",
      summary:
        "Built a RAG-based chatbot using embeddings and LLM orchestration for customer support, improving information access and AI-assisted response quality.",
      image: chatbotImage,
      tags: ["RAG", "Embeddings", "LLM Orchestration", "Customer Support"]
    },
    {
      id: "nuxt-migration",
      icon: "⌁",
      title: "Vue / Nuxt Migration",
      kicker: "Performance and maintainability",
      summary:
        "Migrated an application from Vue.js 2 / Nuxt.js 2 to Vue.js 3 / Nuxt.js 3, improving performance, maintainability, and scalability. Optimized page load speed by refining image handling, lazy loading, and code splitting, resulting in better Core Web Vitals (LCP, CLS) scores.",
      image: chatbotImage,
      tags: ["Vue.js 3",
        "Nuxt.js 3",
        "Migration",
        "Performance",
        "Core Web Vitals",
        "Scalability"]
    },
    {
      id: "membership-platform",
      icon: "▣",
      title: "Unified Membership & Online Access Systems",
      kicker: "Production full-stack work",
      summary:
        "Implemented phone verification, membership linking, and online access systems while owning end-to-end feature development and rollout support.",
      image: chatbotImage,
      tags: ["Full Stack", "Phone Verification", "Access Systems", "Production Delivery"]
    }
  ]
};
