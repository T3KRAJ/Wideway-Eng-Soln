import React, { useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { GlobalStyle } from './styles/GlobalStyle'

const Layout = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const getMode = () =>{
    return typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("mode")) : false
  }
  const [dark, setMode] = useState(getMode())
  
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  useEffect(() => {
    return typeof window !== 'undefined' ? localStorage.setItem("mode", JSON.stringify(dark)) : null
    
  }, [dark])


  return (
    <div className={dark? "dark-mode": "light-mode"}>
    <GlobalStyle />
      <Header theme = {dark} setTheme={setMode} toggle={toggle}/>
      
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;