function stripePaymentLink(value) {
  if (!value) return null;
  try {
    const link = new URL(value);
    if (link.origin === 'https://buy.stripe.com' && link.pathname.length > 1) return link.href;
  } catch {
    return null;
  }
  return null;
}

export const blackout = {
  title: 'The Blackout Recipe Book',
  cover: '/images/blackout-cover.webp',
  tagline: 'Because you’re still a foodie when the lights go out!',
  description: 'Discover how to make delicious, satisfying and surprisingly creative meals using everyday cupboard ingredients and long-life foods.',
  checkout: stripePaymentLink(process.env.NEXT_PUBLIC_BLACKOUT_STRIPE_URL),
  price: process.env.NEXT_PUBLIC_BLACKOUT_PRICE,
  topics: [
    'Sweet and savoury breakfast ideas',
    'Creative lunch and dinner recipes',
    'No-cook meal inspiration',
    'Clever ways to use tins, jars and long-life ingredients',
    'Gourmet touches for simple cupboard meals',
    'Unexpected cupboard essentials',
  ],
};

export const freeResources = [];
