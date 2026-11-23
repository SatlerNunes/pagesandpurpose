import styles from './shop-entry.module.css';
import Image from 'next/image';import Link from 'next/link';import {ArrowRight} from 'lucide-react';
export default function Home(){return <><section className="hero"><div className="container hero-grid"><div className="hero-copy"><h1>Resources created with intention to help you navigate real life.</h1><p className="hero-description">Hey Friend! I’m Barbara. I made this little library to share things I’ve loved creating, from recipe books to guides and resources for everyday life. I’m so glad you’re here.</p><div className="button-row"><Link href="/shop" className="button button-dark">Explore the collection <ArrowRight size={18}/></Link><Link href="/resources" className="text-link">Discover free resources <ArrowRight size={17}/></Link></div></div><div className="hero-art"><div className="hero-art-inner"><div className="hero-tag">OUR FIRST RELEASE <span>01 / 01</span></div><div className="cover-frame"><Image src="/images/BookCover.png" alt="The Blackout Recipe Book by Barbara Nunes cover" fill priority sizes="(max-width: 800px) 70vw, 340px" className="cover-image"/></div><div className="hero-art-bottom"><span>THE BLACKOUT RECIPE BOOK</span><span>BY BARBARA NUNES</span></div></div><div className="hero-sticker">A little<br/>different.<span><Image src="/images/mark.webp" width={16} height={13} alt="" /></span></div></div></div></section><section className={styles.banner}>
  <div className={`container ${styles.bannerWords}`}>
    <span>EBOOKS</span>
    <span>STUDY GUIDES</span>
    <span>PRACTICAL TOOLKITS</span>
    <span>MADE WITH PURPOSE</span>
  </div>
</section>
<section className="section">
  <Link href="/shop" className={`container ${styles.entry}`}>
    <div>
      <h2 className="section-heading shop-heading">THE SHOP</h2>
      <p className="section-subtitle">Practical resources for everyday life</p>
    </div>
    <span className={styles.action}>
      Explore the shop <ArrowRight size={20} aria-hidden="true" />
    </span>
  </Link>
</section>
<section className="coming-section"><div className="container coming-inner"><span className="asterisk"><Image src="/images/mark.webp" width={34} height={28} alt="" className={styles.closingMark} /></span><p className="eyebrow">THIS IS JUST THE BEGINNING</p><h2>Pages written with a purpose<br/><em>To be lived beyond the pages</em></h2><p>Our library is growing. New ebooks, guides and study resources will be joining the shelves soon.</p><Link href="/resources" className="button button-light">Explore resources <ArrowRight size={18}/></Link></div></section></>}
