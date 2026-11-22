import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products.filter((product) => product.featured || product.isFree);
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> GOOD THINGS, THOUGHTFULLY MADE</p>
          <h1>Pages for your<br /><em>next purpose.</em></h1>
          <p className="hero-intro">A growing collection of thoughtful ebooks, useful guides and little resources to make everyday life feel that bit easier, brighter and more inspired.</p>
          <div className="hero-actions">
            <Link href="/shop" className="button button-dark">Explore the shop <span>↗</span></Link>
            <Link href="/freebies" className="button button-outline">Browse free resources</Link>
          </div>
          <p className="hero-note">DIGITAL DOWNLOADS · MADE TO KEEP</p>
        </div>
        <div className="hero-art">
          <div className="art-sun" />
          <div className="art-arch">
            <div className="art-book">
              <img src="/BookCover.png" alt="Pages & Purpose featured ebook placeholder cover" />
            </div>
          </div>
          <div className="art-sparkle sparkle-one">✳</div>
          <div className="art-sparkle sparkle-two">✳</div>
          <div className="art-caption">A good read<br />is always in season.</div>
        </div>
      </section>

      <section className="intro-strip">
        <span className="strip-mark">P&amp;P</span>
        <p>For curious minds, busy days and all the little things in between.</p>
        <span className="strip-flower">✳</span>
      </section>

      <section className="section section-products">
        <div className="section-heading">
          <div><p className="eyebrow">A GOOD PLACE TO START</p><h2>A few things to <em>explore.</em></h2></div>
          <Link href="/shop" className="text-link">View everything ↗</Link>
        </div>
        <div className="product-grid">
          {featured.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>

      <section className="free-callout">
        <div className="free-flower">✳</div>
        <div><p className="eyebrow">A LITTLE GIFT FROM US</p><h2>Good things don't<br /><em>always cost a thing.</em></h2><p>Explore our free printables and resources — a little something to get you started.</p></div>
        <Link href="/freebies" className="button button-light">Find your freebie <span>↗</span></Link>
      </section>

      <section className="closing-note">
        <p className="eyebrow">THE PAGES &amp; PURPOSE PROMISE</p>
        <h2>Useful things, with a little <em>more feeling.</em></h2>
        <p>We believe the right words, ideas and resources can make a difference. Everything here is created to be useful, approachable and worth keeping.</p>
      </section>
    </>
  );
}
