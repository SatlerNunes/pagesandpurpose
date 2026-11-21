import Link from "next/link";

function BookMarkIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 16C24.5 9.5 14.5 7.5 6 9V43C14.5 41.5 24.5 43.5 32 50C39.5 43.5 49.5 41.5 58 43V9C49.5 7.5 39.5 9.5 32 16Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 13.5V38.5C18 37.5 26 39.2 32 44.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53 13.5V38.5C46 37.5 38 39.2 32 44.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 16V50"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Replace "#" with your direct PDF download link or instructions link when ready
const PDF_DOWNLOAD_URL = "#";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#1C3524]">
      {/* Header */}
      <header className="w-full border-b border-[#1C3524]/15">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 text-[#1C3524]"
          >
            <BookMarkIcon className="h-7 w-7 text-[#F275B4] transition-transform duration-200 group-hover:-translate-y-0.5" />
            <span className="font-brand-display text-2xl tracking-tight text-[#1C3524]">
              pages &amp; purpose
            </span>
          </Link>

          <Link
            href="/"
            className="text-sm lowercase text-[#1C3524]/80 transition-colors hover:text-[#F275B4]"
          >
            back to home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl rounded-3xl border border-[#1C3524]/15 bg-[#EFECE3] p-8 sm:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1C3524]/20 bg-[#F5F2EB] px-3.5 py-1 text-xs lowercase tracking-wider text-[#1C3524]">
            <span className="h-2 w-2 rounded-full bg-[#F275B4]" />
            order confirmed • digital pdf
          </div>

          <h1 className="font-brand-display mt-5 text-4xl leading-tight text-[#1C3524] sm:text-5xl">
            thank you for your{" "}
            <span className="italic text-[#F275B4]">order!</span>
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-[#1C3524]/85 sm:text-base">
            your copy of{" "}
            <span className="font-medium italic">the blackout recipe book</span>{" "}
            by barbara nunes is ready[cite: 19]. get ready for creative,
            satisfying store-cupboard meals even when the lights go out[cite: 19].
          </p>

          {/* Download / Next Steps Box */}
          <div className="mt-8 rounded-2xl bg-[#1C3524] p-6 text-[#F5F2EB]">
            <p className="text-xs lowercase tracking-widest text-[#F275B4]">
              instant digital access
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#F5F2EB]/90">
              check your email for your receipt and download link—or use the
              button below if you have a direct file link set up.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <a
                href={PDF_DOWNLOAD_URL}
                className="inline-flex items-center justify-center rounded-full bg-[#F275B4] px-6 py-3 text-sm font-medium lowercase tracking-wide text-[#1C3524] transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#e564a5]"
              >
                download pdf book
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-[#F5F2EB]/30 px-5 py-3 text-sm lowercase text-[#F5F2EB] transition-colors hover:border-[#F275B4] hover:text-[#F275B4]"
              >
                return to store
              </Link>
            </div>
          </div>

          {/* Reminder */}
          <p className="mt-6 text-xs lowercase leading-relaxed text-[#1C3524]/70">
            please note: this is a digital product (30–60 page pdf)[cite: 19]. no
            physical book will be posted to you[cite: 19].
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1C3524]/15 bg-[#EFECE3]">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs lowercase text-[#1C3524]/75 sm:flex-row">
          <span>pages &amp; purpose • pagesandpurpose.co.uk</span>
          <span>thank you for supporting independent digital publishing</span>
        </div>
      </footer>
    </div>
  );
}
