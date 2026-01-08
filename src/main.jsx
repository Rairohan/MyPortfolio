
import { createRoot } from 'react-dom/client'
import './index.css'
import Body from '/components/Body.jsx'
import Navbar from '/components/Navbar.jsx'
createRoot(document.getElementById('root')).render(
 <>
  <Navbar />
  <Body/>
 </>
)
