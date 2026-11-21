import Link from "next/link";

const INSIDE_ITEMS = [
  "sweet and savoury breakfast ideas",
  "creative lunch and dinner recipes",
  "delicious no-cook meal inspiration",
  "clever ways to use tins, jars and long-life ingredients",
  "gourmet touches to make simple cupboard meals special",
  "unexpected cupboard essentials you might have overlooked",
];

const RECEIVE_ITEMS = [
  "a beautifully illustrated digital recipe book",
  "instant pdf download",
  "30–60 pages of foodie inspiration",
];

// Replace "#buy-now" with your live Stripe Payment Link when ready
const CHECKOUT_URL = "#buy-now";

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

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#1C3524]">
      {/* Top Bar */}
      <header className="w-full border-b border-[#1C3524]/15">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 text-[#1C3524]"
          >
            <BookMarkIcon className="h-7 w-7 text-[#F275B4] transition-transform duration-200 group-hover:-translate-y-0.5" />
            <span className="font-brand-display text-2xl tracking-tight text-[#1C3524]">
              pages &amp; purpose
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm lowercase tracking-wide">
            <a
              href="#about"
              className="text-[#1C3524]/80 transition-colors hover:text-[#F275B4]"
            >
              about
            </a>
            <a
              href="#inside"
              className="text-[#1C3524]/80 transition-colors hover:text-[#F275B4]"
            >
              what&apos;s inside
            </a>
            <a
              href={CHECKOUT_URL}
              className="rounded-full bg-[#1C3524] px-4 py-2 text-[#F5F2EB] transition-colors hover:bg-[#F275B4] hover:text-[#1C3524]"
            >
              get the pdf
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero / Book Showcase */}
        <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left: Editorial Copy */}
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1C3524]/20 bg-[#EFECE3] px-3.5 py-1 text-xs lowercase tracking-wider text-[#1C3524]">
                <span className="h-2 w-2 rounded-full bg-[#F275B4]" />
                digital recipe book • instant pdf download
              </div>

              <h1 className="font-brand-display text-5xl leading-[1.03] tracking-tight text-[#1C3524] sm:text-6xl md:text-7xl">
                the blackout{" "}
                <span className="italic text-[#F275B4]">recipe book</span>
              </h1>

              <p className="font-brand-display text-2xl italic text-[#1C3524] sm:text-3xl">
                because you&apos;re still a foodie when the lights go out!
              </p>

              <p className="max-w-xl text-base leading-relaxed text-[#1C3524]/85">
                who says blackout food has to be boring? discover how to make
                delicious, satisfying and surprisingly creative meals using
                everyday cupboard ingredients and long-life foods.
              </p>

              <p className="text-xs lowercase tracking-widest text-[#1C3524]/65">
                by barbara nunes • 30–60 pages • digital pdf
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  id="buy-now"
                  href={CHECKOUT_URL}
                  className="inline-flex items-center justify-center rounded-full bg-[#F275B4] px-7 py-3.5 text-sm font-medium lowercase tracking-wide text-[#1C3524] transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#e564a5]"
                >
                  get instant pdf download
                </a>
                <a
                  href="#inside"
                  className="inline-flex items-center justify-center rounded-full border border-[#1C3524] px-6 py-3.5 text-sm font-medium lowercase tracking-wide text-[#1C3524] transition-colors hover:bg-[#1C3524] hover:text-[#F5F2EB]"
                >
                  see what&apos;s inside
                </a>
              </div>
            </div>

            {/* Right: Book Cover Presentation */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-[#1C3524]/15 bg-[#1C3524] p-5 shadow-sm">
                <div className="overflow-hidden rounded-2xl bg-[#EFECE3]">
                  <img
                    src="/images/BookCover.png"
                    alt="The Blackout Recipe Book — Because You're Still a Foodie When the Lights Go Out, by Barbara Nunes"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between px-1 text-xs lowercase text-[#F5F2EB]/85">
                  <span>digital pdf edition</span>
                  <span className="font-medium text-[#F275B4]">
                    30–60 illustrated pages
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About & Store-Cupboard Philosophy */}
        <section
          id="about"
          className="border-y border-[#1C3524]/15 bg-[#1C3524] py-16 text-[#F5F2EB]"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <p className="text-xs lowercase tracking-widest text-[#F275B4]">
                store-cupboard foodie spirit
              </p>
              <h2 className="font-brand-display mt-2 text-4xl leading-tight sm:text-5xl">
                great meals without relying on a fridge.
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-[#F5F2EB]/90 sm:text-base md:col-span-7">
              <p>
                this foodie-inspired recipe book is designed to help you make the
                most of your store cupboard when the electricity goes out, with
                recipes that don&apos;t rely on a fridge or fresh ingredients.
              </p>
              <p>
                whether you&apos;re preparing for a power cut or simply looking
                for creative ways to use your store-cupboard ingredients, this
                book will help keep mealtimes interesting.
              </p>
            </div>
          </div>
        </section>

        {/* Inside the Book & What You'll Receive */}
        <section id="inside" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Inside You'll Discover */}
            <div className="rounded-3xl border border-[#1C3524]/15 bg-[#EFECE3] p-8 lg:col-span-7">
              <p className="text-xs lowercase tracking-widest text-[#F275B4] font-medium">
                inside you&apos;ll discover
              </p>
              <h2 className="font-brand-display mt-2 text-3xl text-[#1C3524] sm:text-4xl">
                creative cupboard &amp; long-life meals
              </h2>

              <ul className="mt-6 space-y-3.5 text-sm text-[#1C3524]/90 sm:text-base">
                {INSIDE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F275B4]" />
                    <span className="lowercase">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You'll Receive */}
            <div className="flex flex-col justify-between rounded-3xl border border-[#1C3524]/20 bg-[#F5F2EB] p-8 lg:col-span-5">
              <div>
                <p className="text-xs lowercase tracking-widest text-[#1C3524]/65">
                  what you&apos;ll receive
                </p>
                <h2 className="font-brand-display mt-2 text-3xl text-[#1C3524] sm:text-4xl">
                  instant digital access
                </h2>

                <ul className="mt-6 space-y-3.5 text-sm text-[#1C3524]/90 sm:text-base">
                  {RECEIVE_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F275B4]/25 text-xs font-semibold text-[#1C3524]">
                        ✓
                      </span>
                      <span className="lowercase">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl border border-[#F275B4]/60 bg-[#F275B4]/15 p-4 text-xs leading-relaxed text-[#1C3524]">
                <span className="font-semibold lowercase">please note:</span>{" "}
                <span className="lowercase">
                  this is a digital product. no physical book will be posted to
                  you.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1C3524]/15 bg-[#EFECE3]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs lowercase text-[#1C3524]/75 sm:flex-row">
          <div className="flex items-center gap-2">
            <BookMarkIcon className="h-5 w-5 text-[#1C3524]" />
            <span className="font-brand-display text-lg normal-case text-[#1C3524]">
              pages &amp; purpose
            </span>
            <span>• pagesandpurpose.co.uk</span>
          </div>
          <p>digital recipe books • instant pdf delivery</p>
        </div>
      </footer>
    </div>
  );
}
