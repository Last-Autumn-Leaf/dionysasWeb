
import Image from 'next/image';
import newsletterImage from 'public/images/newsletter.svg';

export default function Newsletter() {

  const emailAddress = 'contact@dionysas.com';
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
                <Image 
                  src={newsletterImage} 
                  alt={`contact us`} 
                />
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center ">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h1 className="h2 text-2xl text-center text-orange mb-4"> Let's explore how we can infuse innovation into your dining narrative and make your restaurant the talk of the town.</h1>
                <div className="flex justify-center items-center">
                  <a className="btn text-white bg-orange shadow" href={`mailto:${emailAddress}`}>Contact us</a>
                </div>
                
                {/* CTA form */}

                {false&&<form className="w-full lg:w-auto ">
                  <div className="flex flex-col sm:flex-row  max-w-xs mx-auto sm:max-w-md lg:mx-0 justify-center items-center ">
                    {/* <input type="email" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" /> */}
                    <a className="btn text-white bg-orange shadow " href={`mailto:${emailAddress}`}>Contact us</a>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                </form>}

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}