import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/content/site-content";

export const metadata: Metadata = {
  title: `${siteContent.identity.name} | ${siteContent.identity.title}`,
  description: siteContent.identity.tagline,
  openGraph: {
    title: `${siteContent.identity.name} | ${siteContent.identity.title}`,
    description: siteContent.identity.tagline,
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
