import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteContent } from "@/content/site-content";

export default function Home() {
  const { identity, about, experience, projects, skills } = siteContent;
  const experienceYears = `${experience.length}+ roles`;
  const projectCount = `${projects.length}+ projects`;
  const stackCount = `${skills.reduce((total, group) => total + group.items.length, 0)} skills`;

  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="hero outlined-card">
        <div className="hero-grid">
          <div>
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
        subtitle="A quick overview of how I work and what I focus on"
      >
        <article className="outlined-card">
          <p>{about.paragraph}</p>
        </article>
      </Section>

      <Section
        id="experience"
        title="Experience"
        subtitle="Roles where I shipped meaningful product improvements"
      >
        <div className="grid single-column-gap experience-grid">
          {experience.map((item) => (
            <article className="outlined-card experience-card" key={`${item.company}-${item.role}`}>
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
        subtitle="Selected work with outcomes and implementation detail"
      >
        <div className="grid two-column-grid">
          {projects.map((project) => (
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
                {project.links.live ? <a href={project.links.live}>Live Site</a> : null}
                {project.links.repo ? <a href={project.links.repo}>Repository</a> : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        title="Skills"
        subtitle="Tools and technologies I use to deliver production-ready work"
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
        subtitle="Open to full-time roles, contract work, and technical collaboration"
      >
        <article className="outlined-card contact-card">
          <p>
            Best way to reach me: <a href={`mailto:${identity.email}`}>{identity.email}</a>
          </p>
          <div className="link-row">
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
