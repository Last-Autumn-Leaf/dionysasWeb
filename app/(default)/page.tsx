import DescriptionZigZag from '@/app/(default)/components/description-zigzag'
import flavicon from 'public/favicon.ico'
import Hero from './components/hero'
import Features from './components/features'
import Newsletter from './components/newsletter'
import Introduction from './components/intro'

export const metadata = {
  title: 'Dionysas',
  description: 'Revolutionize your restaurant with AI',
  icons: flavicon.src 
};


export default function Home() {
  const noNewsletter=true;
  return (
    <>
      <Hero />
      <DescriptionZigZag/>
      <Features />
      <Introduction/>
      {noNewsletter&&<Newsletter />}
    </>
  )
}
