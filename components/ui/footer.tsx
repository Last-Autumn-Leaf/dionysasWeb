import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4 flex justify-center items-center rounded-full 
            border-4 border-solid border-gray-600 hover:border-blue-500 w-14 h-14
            text-gray-600 hover:text-blue-500 bg-white hover:bg-slate-200
            transition duration-300 ease-in-out">
              <a 
              href="https://www.linkedin.com/company/dionysas/" 
              target="_blank" 
              className="flex justify-center items-center rounded-full shadow " 
              aria-label="LinkedIn">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; Dionysas.com. All Right Reserved</div>

        </div>

      </div>
    </footer>
  )
}
