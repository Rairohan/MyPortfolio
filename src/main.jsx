
import { createRoot } from 'react-dom/client'
import './index.css'
import Body from '/components/Body.jsx'
import Navbar from '/components/Navbar.jsx'
import About from '/components/About.jsx'
import Tech from '/components/Tech.jsx'
import Projects from '/components/Projects'
import Contact from '/components/Contact.jsx'
createRoot(document.getElementById('root')).render(
 <>
  <Navbar />
  <Body/>
  <About />
  <Tech />
  <Projects />
  <Contact />
 </>
)
