import { existsSync } from 'node:fs';
import { join } from 'node:path';
import Image from 'next/image';import Link from 'next/link';import {Check,FileDown,ArrowLeft} from 'lucide-react';import BuyButton from '@/components/BuyButton';import type {Metadata} from 'next';export const metadata:Metadata={title:'The Blackout Recipe Book',description:'Creative and satisfying recipes using cupboard ingredients and long-life foods. A digital recipe ebook by Barbara Nunes.'};
const inside=['Sweet and savoury breakfast ideas','Creative lunch and dinner recipes','Delicious no-cook meal inspiration','Clever ways to use tins, jars and long-life ingredients','Gourmet touches to make simple cupboard meals special','Unexpected cupboard essentials you might have overlooked'];
const previewPath = '/previews/blackout-recipe-book-preview.pdf';

export default function Product(){
  const hasPreview = existsSync(join(process.cwd(), 'public', previewPath));

  return <><div className="container breadcrumb"><Link href="/shop"><ArrowLeft size={15}/> All ebooks</Link><span>/</span><span>The Blackout Recipe Book</span></div><section className="container detail-grid"><div className="detail-visual"><div className="detail-cover"><Image src="/images/BookCover.png" alt="Cover of The Blackout Recipe Book by Barbara Nunes" fill priority sizes="(max-width: 800px) 80vw, 500px"/></div><p>Cover artwork · Barbara Nunes</p></div><div className="detail-copy"><p className="eyebrow">DIGITAL RECIPE BOOK</p><h1>The Blackout<br/><em>Recipe Book</em></h1><p className="detail-tagline">Because You’re Still a Foodie When the Lights Go Out!</p><p>Who says blackout food has to be boring?</p><p>Discover how to make delicious, satisfying and surprisingly creative meals using everyday cupboard ingredients and long-life foods.</p><p>This foodie-inspired recipe book is designed to help you make the most of your store cupboard when the electricity goes out, with recipes that don’t rely on a fridge or fresh ingredients.</p><div className="buy-area"><p className="digital-label"><FileDown size={19}/> DIGITAL PDF EBOOK</p><div className="button-row">
  <BuyButton label="Buy securely with Stripe"/>
  {hasPreview ? (
    <a className="button button-preview" href={previewPath} target="_blank" rel="noopener noreferrer">
      Preview
    </a>
  ) : (
    <button className="button button-disabled" type="button" disabled aria-describedby="preview-status">
      Preview
    </button>
  )}
</div>
{!hasPreview && <p className="payment-note" id="preview-status">Preview coming soon</p>}<p className="payment-note">Digital product only · No physical book will be posted</p></div></div></section><section className="detail-more"><div className="container more-grid"><div><p className="eyebrow">WHAT'S INSIDE</p><h2>Long-life ingredients.<br/><em>Unexpected ideas.</em></h2></div><ul className="inside-list">{inside.map(x=><li key={x}><Check size={19}/>{x}</li>)}</ul></div></section><section className="container receive-section"><p className="eyebrow">WHAT YOU'LL RECEIVE</p><h2>The tinned food cookbook,<br/><em>you didn't know you needed.</em></h2><div className="receive-grid"><div><span>01 /</span><h3>Illustrated ebook</h3><p>A beautifully illustrated digital recipe book.</p></div><div><span>02 /</span><h3>PDF download</h3><p>A convenient digital format to save and read.</p></div><div><span>03 /</span><h3>Foodie inspiration</h3><p>40 pages collection of creative ideas.</p></div></div><p className="receive-note"></p></section></>}
