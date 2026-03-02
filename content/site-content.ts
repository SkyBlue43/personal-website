export type Project = {
  title: string;
  summary: string;
  stack: string[];
  impact: string;
  links: {
    live?: string;
    repo?: string;
  };
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  achievements: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const siteContent = {
  identity: {
    // TODO: Replace with your name
    name: "Your Name",
    // TODO: Replace with your professional title
    title: "Frontend Engineer",
    // TODO: 1 sentence on what you do and who you help
    tagline:
      "I build reliable web experiences that help teams ship faster and users accomplish goals with confidence.",
    // TODO: Replace with your city/state or preferred location format
    location: "Denver, CO",
    // TODO: Add your preferred email
    email: "you@example.com",
    links: {
      // TODO: Add your LinkedIn profile URL
      linkedin: "https://www.linkedin.com/in/your-profile",
      // TODO: Add your GitHub profile URL
      github: "https://github.com/your-username",
      // TODO: Add your resume URL (Google Drive, PDF in /public, etc.)
      resume: "#"
    }
  },
  about: {
    // TODO: 3-5 lines about your professional background and strengths
    paragraph:
      "I care about building products that are both technically solid and genuinely useful. I enjoy collaborating across design, product, and engineering to turn complex requirements into clean, maintainable interfaces."
  },
  experience: [
    {
      // TODO: Replace with your latest role
      role: "Senior Frontend Engineer",
      // TODO: Replace with company name
      company: "Company Name",
      // TODO: Replace with real dates
      period: "2023 - Present",
      achievements: [
        // TODO: Add achievement + metric
        "Led redesign of core dashboard, reducing time-to-complete key workflow by 35%.",
        // TODO: Add achievement + metric
        "Improved Lighthouse performance score from 68 to 95 across top landing pages.",
        // TODO: Add achievement + metric
        "Built reusable component system used across 4 product squads."
      ]
    },
    {
      role: "Frontend Engineer",
      company: "Previous Company",
      period: "2020 - 2023",
      achievements: [
        "Implemented accessibility updates that improved WCAG compliance across customer-facing flows.",
        "Partnered with backend team to define API contracts for new onboarding experience.",
        "Created internal documentation that reduced onboarding time for new engineers."
      ]
    }
  ] as ExperienceItem[],
  projects: [
    {
      // TODO: Replace with real project name
      title: "Project One",
      // TODO: 1-2 lines describing what this project is
      summary:
        "A modern analytics platform that helps operations teams spot issues and act quickly.",
      // TODO: Replace with real stack
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      // TODO: Add tangible impact/result
      impact: "Cut report generation time from minutes to seconds for internal users.",
      links: {
        // TODO: Add deployed URL
        live: "https://example.com",
        // TODO: Add repository URL
        repo: "https://github.com/your-username/project-one"
      }
    },
    {
      title: "Project Two",
      summary:
        "A responsive appointment booking interface focused on low-friction mobile interactions.",
      stack: ["React", "TypeScript", "Framer Motion"],
      impact: "Increased booking completion rate by 18% after launch.",
      links: {
        live: "https://example.com",
        repo: "https://github.com/your-username/project-two"
      }
    }
  ] as Project[],
  skills: [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "HTML", "CSS", "Accessibility"]
    },
    {
      category: "Backend / APIs",
      items: ["Node.js", "REST APIs", "GraphQL"]
    },
    {
      category: "Tooling",
      items: ["Git", "Jest", "Playwright", "CI/CD"]
    }
  ] as SkillGroup[]
};
