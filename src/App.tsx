
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import OurServices from './pages/OurServices'
import ContactUs from './pages/ContactUs'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router basename="/grasso-construction">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
