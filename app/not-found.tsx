import Link from "next/link";
export default function NotFound() {
  return <section className="page-shell narrow-page"><p className="eyebrow">A LITTLE DETOUR</p><h1>Page not <em>found.</em></h1><p>We couldn't find that page. Let's get you back to something lovely.</p><Link href="/" className="button button-dark">Back to the homepage ↗</Link></section>;
}
