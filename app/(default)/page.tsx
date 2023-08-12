export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import PartnerZigzag from '@/components/partners-zigzag'
import DescriptionZigZag from '@/components/description-zigzag'

export default function Home() {
  const noNewsletter=true;
  return (
    <>
      <Hero />
      <DescriptionZigZag/>
      <Features />
      <PartnerZigzag/>
      {noNewsletter&&<Newsletter />}
    </>
  )
}
