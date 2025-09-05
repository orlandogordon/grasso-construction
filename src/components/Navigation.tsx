import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent shadow-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              GRASSO CONSTRUCTION
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-gray-600' 
                    : 'text-white hover:text-gray-300'
                }`}
              >
                Home
              </a>
              <a
                href="#"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-gray-600' 
                    : 'text-white hover:text-gray-300'
                }`}
              >
                Our Services
              </a>
              <a
                href="#"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-gray-600' 
                    : 'text-white hover:text-gray-300'
                }`}
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 focus:outline-none transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-900 hover:text-gray-600 focus:text-gray-600' 
                  : 'text-white hover:text-gray-300 focus:text-gray-300'
              }`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          {/* Backdrop overlay for the header area when menu is open */}
          <div className="absolute inset-x-0 top-0 h-16 backdrop-blur-sm -z-10"></div>
          <div className={`px-2 pt-2 pb-3 space-y-1 border-t transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/90 backdrop-blur-sm shadow-lg' 
              : 'bg-black/20 backdrop-blur-sm'
          }`}>
            <a
              href="#"
              className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-900 hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-900 hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Our Services
            </a>
            <a
              href="#"
              className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-900 hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation