import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://pagesandpurpose.co.uk"),
  title: {
    default: "Pages & Purpose | Thoughtful reads and useful resources",
    template: "%s | Pages & Purpose"
  },
  description: "Discover thoughtful ebooks, practical guides and lovely free resources from Pages & Purpose.",
  openGraph: {
    title: "Pages & Purpose",
    description: "Thoughtful reads. Useful resources. A little inspiration for whatever comes next.",
    url: "https://pagesandpurpose.co.uk",
    siteName: "Pages & Purpose",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <div className="announcement">A little something useful for your next chapter <span>✳</span></div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
