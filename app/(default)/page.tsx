export const metadata = {
  title: 'Dionysas',
  description: 'Revolutionize your restaurant with AI',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import PartnerZigzag from '@/components/partners-zigzag'
import DescriptionZigZag from '@/components/description-zigzag'
import Introduction from '@/components/intro'

export default function Home() {
  const noNewsletter=true;
  return (
    <>
      <Hero />
      <DescriptionZigZag/>
      <Introduction/>
      <Features />
      <PartnerZigzag/>
      {noNewsletter&&<Newsletter />}
    </>
  )
}
