
import Navigation from './components/Navigation'

function App() {
  const galleryImages = [
    './images/gallery/concrete01.jpeg',
    './images/gallery/drainage02.jpeg',
    './images/gallery/drainage03.jpeg',
    './images/gallery/drainage04.jpeg',
    './images/gallery/drainage05.jpeg',
    './images/gallery/excavation02.jpeg',
    './images/gallery/excavation03.jpeg',
    './images/gallery/excavation04.jpeg',
    './images/gallery/pavers00.jpeg',
    './images/gallery/pavers02.jpeg',
    './images/gallery/pavers03.jpeg',
    './images/gallery/pavers04.jpeg',
    './images/gallery/pavers05.jpeg',
    './images/gallery/pavers06.jpeg',
    './images/gallery/pavers07.jpeg',
    './images/gallery/rwall01.jpeg',
    './images/gallery/rwall02.jpeg',
    './images/gallery/rwall03.jpeg',
    './images/gallery/rwall04.jpeg',
    './images/gallery/sitework01.jpeg',
    './images/gallery/stones01.jpeg',
    './images/gallery/stones02.jpeg',
    './images/gallery/utilities01.jpeg',
    './images/gallery/utilities02.jpeg'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('./images/hero/hero01.jpeg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        

        {/* Services Text */}
        <div className="absolute bottom-36 left-4 right-4 md:bottom-32 md:left-16 md:right-auto text-white">
          <div className="text-2xl md:text-3xl font-black mb-4 text-center md:text-left drop-shadow-lg">
            <div className="block md:hidden">Excavating • Grading</div>
            <div className="block md:hidden">Sitework • Utilities</div>
            <div className="hidden md:block">Excavating • Grading • Sitework • Underground Utilities</div>
          </div>
          <div className="text-base md:text-lg font-semibold max-w-full md:max-w-md text-center md:text-left drop-shadow-md">
            Grasso Construction is a family owned and operated team 
            that has been serving the community with quality excavation and 
            site preparation services since 2003. We specialize in the 
            development of medium to large residential lots, small 
            commercial site projects and public or municipal projects.
          </div>
        </div>
      </section>

      {/* The Full Package Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">The Full Package</h2>
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

      {/* Our Work Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Work</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg aspect-square">
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Navigation Links */}
            <div className="flex space-x-8 mb-8 md:mb-0">
              <a href="#" className="hover:text-gray-300">Home</a>
              <a href="#" className="hover:text-gray-300">Our Services</a>
              <a href="#" className="hover:text-gray-300">Contact Us</a>
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

export default App
