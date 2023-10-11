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

  const sections = [
    <Hero />,
    <DescriptionZigZag />,
    <Features />,
    <Introduction />,
    <Newsletter />
  ];
  return (
    <>
    {sections.map((section, index) => (
        <section key={index} className={index % 2 === 1 ? 'bg-slate-50' : ''}>
          {section}
        </section>
      ))}
    </>
  )
}
