export type Product = {
  slug: string;
  title: string;
  category: string;
  description: string;
  price: number | null;
  format: string;
  cover: string;
  featured?: boolean;
  isFree?: boolean;
  buttonText?: string;
};

export const products: Product[] = [
  {
    slug: "the-blackout-recipe-book",
    title: "The Blackout Recipe Book",
    category: "Ebooks",
    description: "A practical, flavour-first collection of cupboard-friendly ideas for when the lights go out. A little inspiration for making more of what you have.",
    price: 5.99,
    format: "PDF ebook",
    cover: "/BookCover.png",
    featured: true
  },
  {
    slug: "the-gentle-reset",
    title: "The Gentle Reset",
    category: "Guides",
    description: "A calm, printable guide to making space, finding your focus and taking your next small step.",
    price: 3.99,
    format: "Printable PDF",
    cover: "/BookCover.png"
  },
  {
    slug: "a-little-reading-list",
    title: "A Little Reading List",
    category: "Free resources",
    description: "A simple sample download to welcome you to Pages & Purpose. Replace this with one of your own free resources whenever you're ready.",
    price: null,
    format: "Free PDF",
    cover: "/BookCover.png",
    isFree: true,
    buttonText: "Download free"
  }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
