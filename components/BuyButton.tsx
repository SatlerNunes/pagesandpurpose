import { ArrowUpRight } from 'lucide-react';

const blackoutPaymentLink = 'https://buy.stripe.com/eVq7sMd2B52b8CbbGz43S00';

export default function BuyButton({ label = 'Get the ebook' }: { label?: string }) {
  const url = process.env.NEXT_PUBLIC_STRIPE_BLACKOUT_URL?.trim() || blackoutPaymentLink;

  return (
    <a className="button button-dark" href={url} target="_blank" rel="noopener noreferrer">
      {label}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
