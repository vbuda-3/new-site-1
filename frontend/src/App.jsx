import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import FeaturedItems from './components/FeaturedItems/FeaturedItems.jsx'
import NotFound from './components/NotFound.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define your routes */}
        {/* route has a path and element where you put the component */}
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/featured-items" element={<FeaturedItems />} />

        {/* Wildcard route for 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  )
}

export default App