import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata:Metadata={metadataBase:new URL('https://pagesandpurpose.co.uk'),title:{default:'Pages & Purpose | Ebooks & Thoughtful Resources',template:'%s | Pages & Purpose'},description:'Explore thoughtfully created ebooks, practical guides and free study resources. Discover The Blackout Recipe Book.',openGraph:{title:'Pages & Purpose',description:'Resources to equip, encourage and transform.',url:'https://pagesandpurpose.co.uk',siteName:'Pages & Purpose',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-GB"><body><Header/><main>{children}</main><Footer/></body></html>}
