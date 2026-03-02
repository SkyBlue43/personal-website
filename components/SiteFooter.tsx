import { siteContent } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        {siteContent.identity.name} · {new Date().getFullYear()}
      </p>
      <p>Built with Next.js</p>
    </footer>
  );
}
