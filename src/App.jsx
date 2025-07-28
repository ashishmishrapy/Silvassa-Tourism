import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Menu from './components/Navbar/Menu'
import Footer from './components/Footer/Footer'


const App = () => {
      const [menu, setMenu] = useState(false)
      
  
  return (
   <div className={`relative`}>
    <Navbar menu={menu} setMenu={setMenu}/>
    <div className={`${!menu && 'hidden'}`}><Menu  /></div>
    <Home />
    <Footer />

   </div>
  )
}

export default App