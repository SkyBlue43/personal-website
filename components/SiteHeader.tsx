import { siteContent } from "@/content/site-content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div>
        <p className="name">{siteContent.identity.name}</p>
        <p className="location">{siteContent.identity.location}</p>
      </div>
      <nav>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
