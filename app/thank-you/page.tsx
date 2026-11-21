import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You! | Pages & Purpose",
  robots: {
    index: false,
    follow: false,
  },
};

// Replace "#" with your ebook download link once ready
const EBOOK_DOWNLOAD_URL = "#";

export default function ThankYouPage() {
  return (
    <div className="thank-you-wrapper">
      <div className="thank-you-box">
        <h1>Thank you for your order!</h1>
        <p>
          Your copy of <strong>When the Lights Go Out</strong> is ready. Use the button below to download your PDF guide.
        </p>

        <a href={EBOOK_DOWNLOAD_URL} className="btn-primary" download>
          Download Your Ebook (PDF)
        </a>

        <Link href="/" className="back-link">
          ← Return to Pages &amp; Purpose
        </Link>
      </div>
    </div>
  );
}
