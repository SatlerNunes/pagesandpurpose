import './styles.css';

export const metadata = {
  metadataBase: new URL('https://pagesandpurpose.co.uk'),
  title: 'Pages & Purpose | Ebooks and study materials',
  description: 'Browse recipe ebooks, practical guides and study resources at Pages & Purpose.',
  icons: { icon: '/images/mark.webp' },
};

export default function Layout({ children }) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
