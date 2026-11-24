import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Free Resources' };

export default function Resources() {
  const bookMask = 'url("/images/mark.webp") center / contain no-repeat';

  return (
    <>
      <section className="page-intro container">
        <h1 className="section-heading resources-heading">FREE Resources</h1>
        <p className="section-subtitle">Free materials coming soon</p>
      </section>

      <section className="container resources-empty">
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            width: 44,
            height: 37,
            backgroundColor: 'var(--pink)',
            mask: bookMask,
            WebkitMask: bookMask,
          }}
        />
        <h2>Something thoughtful<br />is on its way.</h2>
        <p>We haven’t published a free download just yet. Check back as our collection grows.</p>
        <Link href="/shop" className="button button-dark">
          Explore the shop <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
