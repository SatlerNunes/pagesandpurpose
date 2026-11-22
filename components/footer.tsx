import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link href="/" className="footer-brand">Pages <i>&</i> Purpose</Link>
        <p>Thoughtful reads. Useful resources. A little inspiration for whatever comes next.</p>
      </div>
      <div className="footer-links">
        <Link href="/shop">Shop</Link>
        <Link href="/freebies">Free resources</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Pages &amp; Purpose</div>
    </footer>
  );
}
