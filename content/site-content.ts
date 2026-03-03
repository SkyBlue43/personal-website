export type Project = {
  title: string;
  summary: string;
  stack: string[];
  impact: string;
  links: {
    live?: string;
    repo?: string;
    backend?: string;
    frontend?: string;
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
    name: "Skyler Williams",
    title: "Full-Stack Engineer",
    tagline:
      "I build full-stack web applications that make learning and day-to-day workflows simpler, faster, and more reliable.",
    location: "Provo, Utah",
    email: "skyaw2001@outlook.com",
    links: {
      linkedin: "https://www.linkedin.com/in/skyler-williams-b8b153345",
      github: "https://github.com/SkyBlue43",
      resume: "/resume.pdf",
    },
  },
  about: {
    paragraph:
      "I am a Computer Science student at BYU with hands-on experience building full-stack applications, teaching software fundamentals, and leading research projects. I enjoy turning complex technical ideas into practical tools people can use immediately. My strengths are clear communication, ownership of end-to-end project flow, and building reliable systems with modern web and cloud tooling.",
  },
  experience: [
    {
      role: "Head Research Assistant",
      company: "Brigham Young University",
      period: "Apr 2025 - Present",
      achievements: [
        "Developed a Chinese tone-learning web application using Next.js, TypeScript, Python, and FastAPI.",
        "Collaborate weekly with professors, graduate students, and peers to plan and execute research milestones.",
        "Manage project flow by defining tasks, shipping updates, and communicating progress clearly.",
      ],
    },
    {
      role: "Computer Science Teaching Assistant",
      company: "Brigham Young University",
      period: "Aug 2024 - Present",
      achievements: [
        "Support students one-on-one with Conda setup, terminal workflows, and Python development.",
        "Teach lab sections four times per week covering Python fundamentals and problem-solving strategies.",
        "Grade assignments and projects with actionable feedback to help students improve quickly.",
      ],
    },
    // {
    //   role: "Youth Counselor",
    //   company: "For the Strength of Youth",
    //   period: "Jun 2024 - Aug 2024",
    //   achievements: [
    //     "Taught and mentored groups of 10-30 youth in weekly sessions focused on leadership and personal development.",
    //     "Worked closely with a co-counselor to plan daily support and guidance strategies for participants.",
    //   ],
    // },
    // {
    //   role: "Full-Time Volunteer Representative",
    //   company: "The Church of Jesus Christ of Latter-day Saints",
    //   period: "Jul 2020 - Jun 2022",
    //   achievements: [
    //     "Led groups of up to 30 volunteers, ran weekly training meetings, and tracked progress through regular reports.",
    //     "Collaborated with diverse companions in high-commitment service environments across Colorado and Sao Paulo, Brazil.",
    //     "Provided daily technical troubleshooting support for volunteers in the field.",
    //   ],
    // },
  ] as ExperienceItem[],
  projects: [
    {
      title: "JWT Pizza",
      summary:
        "A school project that focused on automation, cloud infrastructure and logging/metrics",
      stack: ["Node.js", "JavaScript", "React", "AWS"],
      impact:
        "Learned how to create a full stack application with a pipeline and cloud infrastructure",
      links: {
        backend: "https://github.com/SkyBlue43/jwt-pizza-service",
        frontend: "https://github.com/SkyBlue43/jwt-pizza",
      },
    },
    {
      title: "Tweeter Clone",
      summary:
        "A school project that focuses on full stack, software architecture of tweeter",
      stack: ["AWS Lambda", "Dynamo DB", "Typescript", "React"],
      impact:
        "Learned how to correctly structure a codebase and utilize scalable AWS features such as AWS lambda and Dynamo DB",
      links: {
        repo: "https://github.com/SkyBlue43/tweeter-clone",
      },
    },
    {
      title: "Mandarin Tonal App",
      summary:
        "A research project that is a full stack application that helps students learn chinese tones visually",
      stack: ["Python", "Typescript", "React"],
      impact:
        "Learned how to make a full stack application that helps students visually see their tone",
      links: {
        repo: "https://github.com/SkyBlue43/mandarin-tonal-app",
      },
    },
  ] as Project[],
  skills: [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      category: "Backend / APIs",
      items: ["Node.js", "Python", "FastAPI", "Java", "C++", "C", "REST APIs"],
    },
    {
      category: "Cloud / Data / Tooling",
      items: [
        "AWS (EC2, S3, Lambda, API Gateway, CloudFormation)",
        "SQL",
        "MySQL",
        "Supabase",
        "Git",
        "Bash",
      ],
    },
  ] as SkillGroup[],
};
