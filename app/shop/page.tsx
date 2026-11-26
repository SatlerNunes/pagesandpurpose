
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
            <p>30 Cupboard Recipes, from everyday staples to a few less obvious tins</p>

            <div style={{ margin: '16px 0' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '10px' }}>
                What's inside the ebook?
              </h3>
              <ul style={{
                listStyleType: 'disc',
                paddingLeft: '20px',
                fontSize: '0.9rem',
                lineHeight: '1.6',
                textAlign: 'left'
              }}>
                <li>44-page digital recipe book</li>
                <li>30 recipes with accompanying images</li>
                <li>Breakfast, lunch, dinner and snack recipes</li>
                <li>Kid-friendly snack ideas</li>
                <li>Vegetarian and vegan recipes</li>
                <li>Cupboard staples you might not think to stock for a blackout</li>
                <li>A page of extra tips for preparing and warming food during a blackout</li>
                <li>Estimated nutritional values for each recipe</li>
              </ul>
            </div>

            <p><strong className={styles.price}>£3.99</strong></p>
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
            <p>30 receitas com produtos de armário, do básico ao diferenciado</p>

            <div style={{ margin: '16px 0' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '10px' }}>
                O que você encontra neste e-book?
              </h3>
              <ul style={{
                listStyleType: 'disc',
                paddingLeft: '20px',
                fontSize: '0.9rem',
                lineHeight: '1.6',
                textAlign: 'left'
              }}>
                <li>Livro digital de receitas com 44 páginas</li>
                <li>30 receitas acompanhadas de imagens</li>
                <li>Receitas para café da manhã, almoço, jantar e lanches</li>
                <li>Ideias de lanches para crianças</li>
                <li>Receitas vegetarianas e veganas</li>
                <li>Alimentos essenciais que você talvez não pense em estocar para um apagão</li>
                <li>Uma página com dicas extras para preparar e aquecer alimentos durante um apagão</li>
                <li>Valores nutricionais estimados para cada receita</li>
              </ul>
            </div>

            <p><strong className={styles.price}>£3.99</strong></p>
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
