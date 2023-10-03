import Image from 'next/image'
import stuckAtHome from 'public/images/White/Stuck at Home Brainstorming.svg'
import yuppiesManaging from 'public/images/White/Yuppies Managing.svg'



export default function Introduction() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-6">
            <h1 className="h2 ">P.E.A.R.L Program</h1>
          </div>

            <div className="grid ">
                {/* 1st item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                    {/* Image */}
                    <div className="max-w-xl md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0" data-aos="fade-up">
                        <Image  className="max-w-full mx-auto h-auto" src={stuckAtHome} width={540} height={405}  alt={"brainstorming"} />
                    </div>
                    {/* Content */}
                    <div className="max-w-xl md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                        <div className="md:pr-4 lg:pr-12 xl:pr-16">
                        <p className="p text-xl mb-4">
                        Dive into our P.E.A.R.L consulting program, a collaborative venture where we develop our tools alongside our insights, granting you early access to test and benefit from our innovative solutions. Beyond tool access, we provide insightful analysis reports to empower your restaurant's journey towards operational excellence and meaningful impact. Discover the symbiosis of groundbreaking technology and seasoned expertise with P.E.A.R.L.</p>
                        </div>
          <a href="/pearlProgram">
          <button
            className="text-white py-2 px-4 rounded bg-orange-500 hover:bg-orange-300 shadow-md"
            style={{
              borderRadius: '12px',
              boxShadow: '0 1px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            Learn more about P.E.A.R.L
          </button>
        </a>
                    </div>
                </div>


            </div>

            

        </div>
      </div>
    </section>
  )
}