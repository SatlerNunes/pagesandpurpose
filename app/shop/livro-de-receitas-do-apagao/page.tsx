import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import styles from './store.module.css';

export const metadata: Metadata = { title: 'Shop Ebooks' };

export default function Shop() {
  return (
    <div className={styles.store}>
      <div className="container">
        <header className={styles.intro}>
          <h1>THE SHOP</h1>
          <p>Practical resources for everyday life</p>
        </header>

        <div className={styles.catalogue}>
          <Link href="/shop/blackout-recipe-book" className={styles.product}>
            <div className={styles.cover}>
              <Image
                src="/images/BookCover.png"
                alt="The Blackout Recipe Book cover"
                fill
                sizes="(max-width: 720px) 70vw, 270px"
              />
            </div>
            <div className={styles.label}>
              <span>ENGLISH · PDF</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </div>
            <h2>The Blackout Recipe Book</h2>
            <p>Creative meals from everyday cupboard essentials.</p>
            <span className={styles.action}>View ebook →</span>
          </Link>

          <Link href="/shop/livro-de-receitas-do-apagao" className={styles.product} lang="pt-BR">
            <div className={styles.cover}>
              <Image
                src="/images/capa-livro-apagao.png"
                alt="Capa de O Livro de Receitas do Apagão"
                fill
                sizes="(max-width: 720px) 70vw, 270px"
              />
            </div>
            <div className={styles.label}>
              <span>PORTUGUÊS · PDF</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </div>
            <h2>O Livro de Receitas do Apagão</h2>
            <p>Receitas criativas com ingredientes que você já tem na despensa.</p>
            <span className={styles.action}>Ver ebook →</span>
          </Link>

          <section className={styles.soon}>
            <p className={styles.label}>COMING SOON</p>
            <h2>More to<br /><em>discover.</em></h2>
            <p>New ebooks, study materials and free downloads are on their way.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
