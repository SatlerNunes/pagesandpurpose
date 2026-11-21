import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pages & Purpose | Practical Guides for Home, Faith & Family",
  description:
    "Thoughtful, practical digital guides for modern households—starting with a calm, step-by-step home blackout handbook.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="site-header">
            <Link href="/" className="brand">
              Pages <span>&amp;</span> Purpose
            </Link>
            <nav className="nav-links">
              <a href="/#inside">What&apos;s Inside</a>
              <a href="/#upcoming">Future Guides</a>
              <a href="/#faq">FAQ</a>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="site-footer">
            <p>&copy; 2026 Pages &amp; Purpose (pagesandpurpose.co.uk). All rights reserved.</p>
            <p style={{ marginTop: "6px" }}>Questions? Contact hello@pagesandpurpose.co.uk</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
