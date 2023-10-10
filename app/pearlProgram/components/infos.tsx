import Image from 'next/image'
import stuckAtHome from 'public/images/White/Stuck at Home Brainstorming.svg'
import yuppiesManaging from 'public/images/White/Yuppies Managing.svg'



  const methodology = [
    {
      button: "Preliminary Assessment",
      description:
        "Before diving into any program, we offer a free, in-depth assessment of your restaurant's unique challenges and data landscape.",
    },
    {
      button: "Data Health Evaluation",
      description: "Is your data clean, organized, and sufficient for starting your AI project?",
    },
    {
      button: "In-Depth Consulting on Sales, Labor, and Inventory",
      description: "Customized reports designed to offer actionable insights and strategies.",
    },
    {
      button: "Skill Development for Your Team",
      description:
        "A personalized weekly mentorship program lasting 12 weeks to help your staff understand and implement our analyses for future self-reliance.",
    },
  ];

export default function Infos() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-6">
            <h1 className="h2 ">Introducing the<br/> P.E.A.R.L Program</h1>
          </div>

            <div className="grid ">
                {/* 1st item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                    {/* Image */}
                    <div className="max-w-xl md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0" data-aos="fade-up">
                        <Image  className="max-w-full mx-auto h-auto" src={stuckAtHome}   alt={"brainstorming"} />
                    </div>
                    {/* Content */}
                    <div className="max-w-xl md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                        <div className="md:pr-4 lg:pr-12 xl:pr-16">
                            <p className='p text-xl mb-4 text-bluesea'>
                                Empower Your Restaurant Business with Data Science and AI
                            </p>
                        <p className="p text-xl mb-4">
                        The P.E.A.R.L. Program is a comprehensive, turnkey solution designed by Dionysas to enable restaurants to leverage data science and artificial intelligence effectively. 
                        Whether you're struggling with inventory management, customer satisfaction, or performance analytics, our tailored consulting services can offer you game-changing insights.
                        </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto text-center pb-4 md:pb-6">
                    <h1 className="h2 ">Our methodology</h1>
                </div>

                    {methodology.map((item, index) => (
                        <div key={index} className='md:grid md:grid-cols-3 md:gap-y-4 justify-center items-center mb-4'>
                            <div className='flex justify-center mb-4'>
                                <button
                                    className="text-white text-xl font-bold py-2 px-2 rounded-full bg-orange-500 shadow-md text-center"
                                    style={{
                                        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.25)',
                                        maxWidth: 275,
                                        minWidth: 250,
                                        minHeight: 75,
                                    }}
                                >
                                {item.button}
                                </button>
                            </div>

                            <p className="p text-m mb-4 md:col-span-2">
                                {item.description}
                            </p>
                        </div>
                        
                    ))}


                {/* 2nd item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                    {/* Content */}
                    <div className="max-w-xl md:w-full mx-auto md:col-span-7 lg:col-span-6 mb-4" data-aos="fade-left">
                        <div className="md:pl-4 lg:pl-12 xl:pl-16">
                            <h1 className="h2 mb-4">Why PEARL ?</h1>
                            <ul className="p text-l  mb-2 list-disc ml-4">
                                <li>Industry Expertise: Our background in serving, kitchen operations, and restaurant management enables us to understand your business intimately.</li>
                                <li>State-of-the-Art AI Tools: From sentiment analysis of customer reviews to real-time inventory management, we offer cutting-edge solutions.</li>
                                <li>Customization: We know each restaurant is unique. That's why our F.A.R. Program is customized to meet the specific needs of your establishment.</li>
                                <li>After-Program Support: Our involvement doesn't end with the delivery of the program. We offer continuous support and further customization based on real-world performance and feedback.</li>
                            </ul>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="max-w-xl md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                        <Image  className="max-w-full mx-auto h-auto" src={yuppiesManaging} width={540} height={405}  alt={"managing"} />
                    </div>
                </div>

                <div className='flex justify-center mb-4'>
                    <a href='https://guggfn2clt9.typeform.com/to/GMyBNj1p' target="_blank" rel="noopener noreferrer">
                        <button
                            className="text-white text-base md:text-xl font-bold py-2 px-2 rounded-xl bg-orange-500 hover:bg-orange-300 shadow-md text-center"
                            style={{
                                boxShadow: '0 1px 4px rgba(0, 0, 0, 0.25)',
                                minWidth: 250,
                                minHeight: 75,
                            }}
                        >
                            Ready to propel your restaurant into the future with the P.E.A.R.L. Program?<br/>
                            <span className='text-bluesea'>Contact us today for your complimentary preliminary assessment.</span>
                        </button>
                    </a>
                </div>

            </div>

            

        </div>
      </div>
    </section>
  )
}