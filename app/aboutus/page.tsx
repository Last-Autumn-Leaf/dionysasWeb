export const metadata = {
    title: 'About us',
    description: 'About Dionysas',
  }
  
  import Link from 'next/link'
import PartnerZigzag from './partners-zigzag'

  export default function AboutUs() {
    return (
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
  
      <PartnerZigzag/>
  
        </div>
      </section>
    )
  }
  