
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, FileDown, Check } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Livro de Receitas do Apagão',
  description: 'Receitas criativas com ingredientes da despensa. Ebook ilustrado em português por Barbara Nunes.',
};

const inside = [
  'Ideias doces e salgadas para o café da manhã',
  'Receitas criativas para almoço e jantar',
  'Inspiração para refeições deliciosas sem precisar cozinhar',
  'Maneiras criativas de utilizar enlatados, conservas e alimentos de longa duração',
  'Toques gourmet para transformar refeições simples em pratos especiais',
  'Alimentos essenciais para a despensa que você talvez não tenha considerado',
  'Receitas vegetarianas e veganas identificadas, incluindo opções adaptáveis para veganos',
  'Valores nutricionais estimados para cada receita',
];

export default function LivroDoApagao() {
  return (
    <div lang="pt-BR">
      <nav className="container breadcrumb" aria-label="Navegação da loja">
        <Link href="/shop">
          <ArrowLeft size={15} aria-hidden="true" /> Voltar à loja
        </Link>
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

          <p>
            Descubra como preparar refeições criativas e saborosas
            com latas, potes e outros ingredientes que você já tem
            na despensa.
          </p>

          <div className="buy-area">
            <p className="digital-label">
              <FileDown size={19} aria-hidden="true" /> EBOOK DIGITAL EM PDF
            </p>

            <div className="button-row">
              <a
                className="button button-dark"
                href="https://buy.stripe.com/cNi00k3s1cuDbOn4e743S01"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar pelo Stripe <ArrowUpRight size={18} aria-hidden="true" />
              </a>

              <a
                className="button button-preview"
                href="/previews/livro-apagao-preview.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver prévia
              </a>
            </div>

            <p className="payment-note">
              Produto digital. Nenhum livro físico será enviado.
            </p>
          </div>
        </div>
      </section>

      <section className="detail-more">
        <div className="container more-grid">
          <div>
            <p className="eyebrow">O QUE VOCÊ ENCONTRA NO LIVRO</p>

            <h2>
              Ingredientes de longa duração.<br />
              <em>Ideias surpreendentes.</em>
            </h2>
          </div>

          <ul className="inside-list">
            {inside.map(x => (
              <li key={x}>
                <Check size={19} aria-hidden="true" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container receive-section">
        <p className="eyebrow">O QUE VOCÊ VAI RECEBER</p>

        <h2>Livro digital de receitas em PDF</h2>

        <ul className="inside-list">
          <li>Livro digital de receitas com 44 páginas</li>
          <li>30 receitas acompanhadas de imagens</li>
          <li>Receitas para café da manhã, almoço, jantar e lanches</li>
          <li>Ideias de lanches para crianças</li>
          <li>Receitas vegetarianas e veganas</li>
          <li>Alimentos essenciais para a despensa que você talvez não pense em estocar para um apagão</li>
          <li>Uma página com dicas extras para preparar e aquecer alimentos durante um apagão</li>
          <li>Valores nutricionais estimados para cada receita</li>
        </ul>
      </section>
    </div>
  );
}
