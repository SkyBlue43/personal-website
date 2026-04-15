import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteContent } from "@/content/site-content";
import Image from "next/image";

export default function Home() {
  const { identity, about, experience, projects, skills } = siteContent;
  const experienceYears = `${experience.length}+ roles`;
  const projectCount = `${projects.length}+ projects`;
  const stackCount = `${skills.reduce(
    (total, group) => total + group.items.length,
    0
  )} skills`;

  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="hero outlined-card">
        <div className="hero-grid">
          <div className="hero-main">
            <figure className="hero-photo-frame">
              <Image
                src="/selfie.jpeg"
                alt="Profile photo placeholder"
                width={220}
                height={280}
                priority
              />
            </figure>
            <div className="hero-intro">
              <p className="eyebrow">{identity.title}</p>
              <h1>{identity.name}</h1>
              <p className="hero-copy">{identity.tagline}</p>
              <div className="cta-row">
                <a className="button" href="#projects">
                  View Projects
                </a>
                <a className="button button-ghost" href={identity.links.resume}>
                  View Resume
                </a>
              </div>
            </div>
          </div>
          <aside className="hero-aside">
            <p className="eyebrow">Snapshot</p>
            <ul className="hero-metrics">
              <li>
                <span>{experienceYears}</span>
                Experience timeline
              </li>
              <li>
                <span>{projectCount}</span>
                Featured builds
              </li>
              <li>
                <span>{stackCount}</span>
                Production tools
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <Section
        id="about"
        title="About"
        subtitle="How I work"
      >
        <article className="outlined-card">
          <p>{about.paragraph}</p>
        </article>
      </Section>

      <Section
        id="experience"
        title="Experience"
        subtitle="Recent roles"
      >
        <div className="grid single-column-gap experience-grid">
          {experience.map((item) => (
            <article
              className="outlined-card experience-card"
              key={`${item.company}-${item.role}`}
            >
              <div className="card-heading-row">
                <h3>
                  {item.role} · {item.company}
                </h3>
                <p>{item.period}</p>
              </div>
              <ul>
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        title="Projects"
        subtitle="Selected work"
      >
        <div className="grid two-column-grid">
          {projects.map((project) => {
            const projectLinks = [
              { label: "Live Site", href: project.links.live },
              { label: "Repository", href: project.links.repo },
              { label: "Frontend Repo", href: project.links.frontend },
              { label: "Backend Repo", href: project.links.backend },
            ].filter((link): link is { label: string; href: string } =>
              Boolean(link.href)
            );

            return (
              <article className="outlined-card project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="impact">Impact: {project.impact}</p>
                <div className="tag-row">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="link-row">
                  {projectLinks.map((link) => (
                    <a key={link.href} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        id="skills"
        title="Skills"
        subtitle="Tools & tech"
      >
        <div className="grid three-column-grid">
          {skills.map((group) => (
            <article className="outlined-card skill-card" key={group.category}>
              <h3>{group.category}</h3>
              <ul className="skill-list">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        title="Contact"
        subtitle="Let's connect"
      >
        <article className="outlined-card contact-card">
          <p>
            Best way to reach me:{" "}
            <a href={`mailto:${identity.email}`}>{identity.email}</a>
          </p>
          <div className="link-row">
            <a href={identity.links.website}>Website</a>
            <a href={identity.links.linkedin}>LinkedIn</a>
            <a href={identity.links.github}>GitHub</a>
            <a href={identity.links.resume}>Resume</a>
          </div>
        </article>
      </Section>

      <SiteFooter />
    </main>
  );
}
