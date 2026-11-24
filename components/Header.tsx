'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const links=[{href:'/shop',label:'The Shop'},{href:'/resources',label:'Free Resources'},{href:'/about',label:'About'}];
export default function Header(){const [open,setOpen]=useState(false);return <header className="site-header"><div className="container header-inner"><Link href="/" className="brand" onClick={()=>setOpen(false)}><Image src="/images/mark.webp" width={48} height={48} alt="" className="brand-icon"/><span>Pages <i>&</i> Purpose</span></Link><nav className={open?'nav nav-open':'nav'} aria-label="Main navigation">{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</Link>)}</nav><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open}>{open?<X/>:<Menu/>}</button></div></header>}
