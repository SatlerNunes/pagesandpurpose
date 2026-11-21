import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const editorialSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "pages & purpose | The Blackout Recipe Book",
  description:
    "Because you're still a foodie when the lights go out. Creative cupboard and long-life meals in a digital PDF recipe book by Barbara Nunes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${editorialSerif.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-screen bg-[#F5F2EB] text-[#1C3524] font-sans antialiased selection:bg-[#F275B4] selection:text-[#1C3524]">
        {children}
      </body>
    </html>
  );
}
