import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Menu from './components/HomePage/Hero/Menu'
import Footer from './components/Footer/Footer'


const App = () => {
      const [menu, setMenu] = useState(false)
    const [dark, setDark] = useState(false)
      
  
  return (
   <div className={`relative ${dark ? "bg-zinc-900" : "bg-white"}`}>
    <Navbar menu={menu} setMenu={setMenu} dark={dark} setDark={setDark} />
    <div className={`${!menu && 'hidden'}`}><Menu  /></div>
    <Home dark={dark} />
    <Footer dark={dark} />

   </div>
  )
}

export default App