import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Pages and Purpose home">
        <span className="brand-name">Pages <i>&</i> Purpose</span>
        <span className="brand-caption">A little space for good things</span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/shop">The shop</Link>
        <Link href="/freebies">Free resources</Link>
        <Link href="/about">Our story</Link>
        <Link href="/contact" className="nav-contact">Get in touch <span>↗</span></Link>
      </nav>
    </header>
  );
}
