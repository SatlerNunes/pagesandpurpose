import { blackout, freeResources } from './catalog';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href="#main">
            <img src="/images/mark.webp" alt="" width="38" height="32" />
            <span>Pages &amp; Purpose</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#shop">Shop</a>
            <a href="#resources">Free resources</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero wrap" aria-labelledby="home-title">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true" /> The digital bookshop</p>
            <h1 id="home-title">Read something.<br /><em>Try something.</em><br />Learn something.</h1>
            <p className="intro">Ebooks, practical guides and study materials for curious minds. Find ideas you can put to use in the kitchen, at your desk and in everyday life.</p>
            <div className="actions">
              <a className="button" href="#shop">Explore the shop</a>
              <a className="text-link" href="#resources">Free resources</a>
            </div>
          </div>

          <figure className="book-display">
            <figcaption><span>New release</span><span>Recipe ebook</span></figcaption>
            <a href="#shop" aria-label="Explore The Blackout Recipe Book">
              <img className="book-cover" src={blackout.cover} alt="The Blackout Recipe Book illustrated front cover" width="959" height="1500" fetchPriority="high" />
            </a>
          </figure>
        </section>

        <section id="shop" className="shop" aria-labelledby="shop-title">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow">The shop</p>
              <h2 id="shop-title">From the bookshelf</h2>
            </div>
            <article className="product">
              <div className="product-cover">
                <img src={blackout.cover} alt="The Blackout Recipe Book front cover" width="959" height="1500" loading="lazy" />
              </div>
              <div className="product-copy">
                <p className="eyebrow">Recipe ebook · Digital PDF</p>
                <h3>{blackout.title}</h3>
                <p className="tagline">{blackout.tagline}</p>
                <p>{blackout.description} The recipes are designed for cooking and eating during a power cut, using ingredients you can keep in the cupboard.</p>
                <div className="actions product-actions">
                  {blackout.checkout ? (
                    <a className="button" href={blackout.checkout}>
                      Buy the ebook{blackout.price ? ' · ' + blackout.price : ''}
                    </a>
                  ) : (
                    <span className="availability">Checkout opening soon</span>
                  )}
                </div>
                <details>
                  <summary>Inside the book</summary>
                  <ul>{blackout.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
                </details>
                <details>
                  <summary>What you’ll receive</summary>
                  <p>An illustrated digital recipe book with 30–60 pages of foodie inspiration, delivered as a PDF. No physical book will be posted.</p>
                </details>
              </div>
            </article>
          </div>
        </section>

        <section id="resources" className="wrap resources" aria-labelledby="resources-title">
          <div>
            <p className="eyebrow">The resource shelf</p>
            <h2 id="resources-title">Free resources</h2>
          </div>
          {freeResources.length ? (
            <ul>{freeResources.map(resource => (
              <li key={resource.url}><a className="text-link" href={resource.url}>{resource.title}</a></li>
            ))}</ul>
          ) : <p>Free guides and study materials will appear here as they’re released.</p>}
        </section>

        <section id="about" className="about" aria-labelledby="about-title">
          <div className="wrap about-inner">
            <img src="/images/wordmark.webp" alt="Pages & Purpose" width="650" height="94" loading="lazy" />
            <div>
              <h2 id="about-title">About the bookshop</h2>
              <p>Pages &amp; Purpose is an independent digital bookshop for practical ebooks and study materials. The collection begins with <em>The Blackout Recipe Book</em> and will grow to include free and paid downloads.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner"><span>© Pages &amp; Purpose</span><a href="#main">Back to top</a></div>
      </footer>
    </>
  );
}
