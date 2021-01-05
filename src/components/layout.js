import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { GlobalStyle } from './styles/GlobalStyle'

const Layout = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <div>
    <GlobalStyle />
      <Header toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;