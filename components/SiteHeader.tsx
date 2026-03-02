import { siteContent } from "@/content/site-content";

export function SiteHeader() {
  const initials = siteContent.identity.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <header className="site-header">
      <div className="brand-block">
        <span className="brand-mark">{initials || "YN"}</span>
        <div>
          <p className="name">{siteContent.identity.name}</p>
          <p className="location">{siteContent.identity.location}</p>
        </div>
      </div>
      <nav className="top-nav">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-cta" href={siteContent.identity.links.resume}>
        Resume
      </a>
    </header>
  );
}
