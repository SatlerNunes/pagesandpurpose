import styles from './shop-entry.module.css';
import Image from 'next/image';import Link from 'next/link';import {ArrowRight} from 'lucide-react';
export default function Home(){return <><section className="hero"><div className="container hero-grid"><div className="hero-copy"><h1>Resources to equip, encourage and transform.</h1><p className="hero-description">Resources created with purpose to help you navigate life</p><div className="button-row"><Link href="/shop" className="button button-dark">Explore The Shop <ArrowRight size={18}/></Link><Link href="/resources" className="text-link">Discover free resources <ArrowRight size={17}/></Link></div></div><div className={`hero-art ${styles.heroArt}`}><div className="hero-art-inner"><div className="hero-tag">OUR FIRST RELEASE <span>NOVEMBER 2026</span></div><Link href="/shop/blackout-recipe-book" className={`cover-frame ${styles.coverLink}`} aria-label="Buy The Blackout Recipe Book"><Image src="/images/BookCover.png" alt="The Blackout Recipe Book by Barbara Nunes cover" fill priority sizes="(max-width: 800px) 70vw, 340px" className="cover-image"/></Link><div className={`hero-art-bottom ${styles.coverCaption}`}><span>The Blackout Recipe Book</span><span>BY BARBARA NUNES</span></div></div></div></div></section><section className={styles.banner}>
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
<section className="coming-section"><div className="container coming-inner"><span className="asterisk"><Image src="/images/mark.webp" width={34} height={28} alt="" className={styles.closingMark} /></span><p className="eyebrow">THIS IS JUST THE BEGINNING</p><h2 className={styles.closingHeading}>Written with a <strong>purpose</strong><br/><em>To be lived beyond the <strong>pages</strong></em></h2><p>Our library is growing. New ebooks, guides and study resources will be joining the shelves soon.</p></div></section></>}
