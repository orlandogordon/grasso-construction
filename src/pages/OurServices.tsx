import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

const OurServices = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Services Section */}
      <section className="py-16 bg-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Excavating */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="./images/services/excavating.jpeg" 
                alt="Excavating" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Excavating</h3>
                <p className="text-gray-600">
                  Grasso Construction can offer many excavation & earthwork services. These include preparation for 
                  basements, pools, driveways, and many other residential and commercial projects.
                </p>
              </div>
            </div>

            {/* Concrete */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="./images/services/concrete.jpeg" 
                alt="Grading" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Concrete</h3>
                <p className="text-gray-600">
                  At Grasso Construction our team delivers professional concrete solutions for residential and commercial 
                  projects. We offer services such as driveways, sidewalks, patios & foundation work with quality craftsmanship.
                </p>
              </div>
            </div>

            {/* Underground Utilities */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="./images/services/utilities.jpeg" 
                alt="Underground Utilities" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Underground Utilities</h3>
                <p className="text-gray-600">
                  At Grasso Construction, we are first for all of your underground utility installation needs and underground 
                  utility installations.
                </p>
              </div>
            </div>

            {/* Drainage */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="./images/services/drainage.jpeg" 
                alt="Drainage" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Drainage</h3>
                <p className="text-gray-600">
                  At Grasso Construction, we offer many drainage & water management services including French drains, 
                  dry well systems, and much more.
                </p>
              </div>
            </div>

            {/* Sitework */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="./images/services/sitework.jpeg" 
                alt="Sitework" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sitework</h3>
                <p className="text-gray-600">
                  At Grasso Construction, we offer many site preparation and earthwork services including land clearing, concrete 
                  demolition, and site prep.
                </p>
              </div>
            </div>

            {/* Stone Spreading */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="./images/services/stones.jpeg" 
                alt="Stone Spreading" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Stone Spreading</h3>
                <p className="text-gray-600">
                  At Grasso Construction, we are experts in stone spreading and stone installation. We offer stone for backyards, driveways, 
                  walkways and much more.
                </p>
              </div>
            </div>

            {/* Pavers */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="./images/services/pavers.jpeg" 
                alt="Stone Spreading" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pavers</h3>
                <p className="text-gray-600">
                  At Grasso Construction our team creates beautiful hardscaping with quality paver installations. We offer services such as 
                  paver patios, walkways, driveways & decorative stonework to enhance your property.
                </p>
              </div>
            </div>

            {/* Retaining Walls */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="./images/services/rwall.jpeg" 
                alt="Stone Spreading" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Retaining Walls</h3>
                <p className="text-gray-600">
                  At Grasso Construction our team builds durable retaining walls to prevent erosion and create usable space. We offer services 
                  such as stone walls, block walls & terracing solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Navigation Links */}
            <div className="flex space-x-8 mb-8 md:mb-0">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/services" className="hover:text-gray-300">Our Services</Link>
              <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
            </div>
            
            {/* Contact Info */}
            <div className="text-center md:text-right">
              <div className="text-2xl font-bold mb-2">(732) 123-4567</div>
              <div className="text-gray-300 mb-2">info@grassoconstruction.com</div>
              <div className="text-gray-300">
                <div>Mon-Fri 8:00AM-5:00PM</div>
                <div>Saturday By Appointment</div>
              </div>
              <div className="mt-4">
                <span className="text-gray-400">@grassoconstruction</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>Copyright 2025 Grasso Construction. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default OurServices