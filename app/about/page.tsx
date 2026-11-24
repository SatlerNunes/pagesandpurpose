import { existsSync } from 'node:fs';
import { join } from 'node:path';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import styles from './about.module.css';

export const metadata: Metadata = { title: 'About' };

const portrait = '/images/barbara-portrait.jpg';
const instagram = [
  { label: 'Personal Instagram', handle: 'barbarasatlernunes' },
  { label: 'Bible With Barbs', handle: 'biblewithbarbs' },
];

export default function About() {
  const hasPortrait = existsSync(join(process.cwd(), 'public', portrait));

  return (
    <section className={`container ${styles.about}`}>
      <div className={styles.intro}>
        <h1>The person behind <em>Pages &amp; Purpose</em></h1>
        <p>Hey, friend! I’m Barbara, the person behind Pages &amp; Purpose. I enjoy turning ideas into things people can use, from study guides to simple resources for everyday life. I made this little library so I could share those pages with you.</p>
      </div>

      <aside className={styles.profile} aria-label="Barbara’s profile and Instagram links">
        <div className={styles.portrait}>
          {hasPortrait ? (
            <Image src={portrait} alt="Barbara Nunes" fill sizes="(max-width: 760px) 85vw, 360px" />
          ) : (
            <Image src="/images/mark.webp" alt="" width={90} height={75} unoptimized />
          )}
        </div>
        <ul className={styles.socials}>
          {instagram.map(({ label, handle }) => (
            <li key={handle}>
              <a href={`https://www.instagram.com/${handle}/`}>
                <span><strong>{label}</strong><span>@{handle}</span></span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <div className={styles.story}>
        <p>I love creating, and I usually have more ideas in my head than I know what to do with. Some never make it onto paper. Others get halfway there. I’m learning to stick with the things I want to make and see them through.</p>
        <p>That’s where the name Pages &amp; Purpose came from. An idea can sit on a page for years, even if I was excited when I first wrote it down. I’m learning that it takes purpose to bring it to life.</p>
        <p>Even when I’m full of doubts and can’t see where I’m going, I often look back and find that I’ve ended up exactly where I needed to be. God has woven the details of my life together in ways I can’t quite explain. I’m still overwhelmed by how deeply He loves and cares for me, and I hope that somewhere in these pages, you get to experience some of that love too.</p>
        <p>It’s funny how things happen. I’ve had a book on my heart for over seven years, and I’ve been writing it for more than a year. Somehow, a recipe book about cooking during a blackout made it here first.</p>
        <p>It started with a simple thought. <em>If the power goes out, I still want to sit around the table with my family and enjoy a good meal.</em> That thought became my first ebook, and the book made me want to build a website of my own to share it. With a little help from ChatGPT, here we are.</p>
        <p>I’m so glad you’re here. I hope Pages &amp; Purpose becomes a place where you feel at home and want to keep coming back.</p>
        <Link href="/shop/blackout-recipe-book" className="button button-dark">
          Explore my first ebook <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
