import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="cover-link" aria-label={`View ${product.title}`}>
        <div className="cover-frame">
          {/* Replace public/BookCover.png with your own cover image later. */}
          <img src={product.cover} alt={`${product.title} cover`} className="product-cover" />
          {product.isFree && <span className="free-sticker">A little freebie</span>}
        </div>
      </Link>
      <div className="product-meta">{product.category} <span>·</span> {product.format}</div>
      <h3><Link href={`/products/${product.slug}`}>{product.title}</Link></h3>
      <p>{product.description}</p>
      <div className="card-bottom">
        <strong>{product.isFree ? "Free" : `£${product.price?.toFixed(2)}`}</strong>
        <Link href={`/products/${product.slug}`} className="text-link">{product.isFree ? "Get your copy ↗" : "Discover more ↗"}</Link>
      </div>
    </article>
  );
}
