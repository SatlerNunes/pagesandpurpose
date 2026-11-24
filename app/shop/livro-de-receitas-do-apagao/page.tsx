import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, FileDown } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Livro de Receitas do Apagão',
  description: 'Receitas criativas com ingredientes da despensa. Ebook ilustrado em português por Barbara Nunes.',
};

export default function LivroDoApagao() {
  return (
    <div lang="pt-BR">
      <nav className="container breadcrumb" aria-label="Navegação da loja">
        <Link href="/shop"><ArrowLeft size={15} aria-hidden="true" /> Voltar à loja</Link>
      </nav>
      <section className="container detail-grid">
        <div className="detail-visual">
          <div className="detail-cover">
            <Image
              src="/images/capa-livro-apagao.png"
              alt="Capa de O Livro de Receitas do Apagão, por Barbara Nunes"
              fill
              priority
              sizes="(max-width: 800px) 80vw, 500px"
            />
          </div>
          <p>Barbara Nunes</p>
        </div>
        <div className="detail-copy">
          <p className="eyebrow">EBOOK EM PORTUGUÊS</p>
          <h1>O Livro de Receitas do Apagão</h1>
          <p><em>Porque você continua foodie mesmo sem luz!</em></p>
          <p>Quem disse que comida de apagão precisa ser sem graça?</p>
          <p>Descubra como preparar refeições criativas e saborosas com latas, potes e outros ingredientes que você já tem na despensa.</p>
          <div className="buy-area">
            <p className="digital-label"><FileDown size={19} aria-hidden="true" /> EBOOK DIGITAL EM PDF</p>
            <div className="button-row">
              <a className="button button-dark" href="https://buy.stripe.com/cNi00k3s1cuDbOn4e743S01" target="_blank" rel="noopener noreferrer">
                Comprar pelo Stripe <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-preview" href="/previews/livro-apagao-preview.pdf" target="_blank" rel="noopener noreferrer">
                Ver prévia
              </a>
            </div>
            <p className="payment-note">Produto digital. Nenhum livro físico será enviado.</p>
          </div>
        </div>
      </section>
      <section className="container receive-section">
        <p className="eyebrow">O QUE VOCÊ VAI RECEBER</p>
        <h2>PDF ilustrado para baixar</h2>
        <ul className="inside-list">
          <li>40 páginas ilustradas</li>
          <li>Mais de 30 receitas para café da manhã, almoço e jantar</li>
          <li>Ideias de lanches para crianças</li>
          <li>Achados de despensa que você talvez não tenha pensado em guardar para um apagão</li>
        </ul>
      </section>
    </div>
  );
}
