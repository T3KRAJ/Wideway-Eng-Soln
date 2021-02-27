import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const Header = props => {
  const listener = useRef(null);
  const [scrollState, setScrollState] = useState("top")

  useEffect(() => {
    listener.current = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 120) {
        if (scrollState !== "scrolled") {
          setScrollState("scrolled")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])
  const navlogo = require("../assets/images/navlogo.svg")

  return (
    <>
    <div className="icon-bar">
  <a   rel=" noreferrer" href="https://www.facebook.com/Widewaysolutionscom-107382601397950/" target="_blank" className="facebook"><FontAwesomeIcon icon={faFacebook} size="sm"  role="button" aria-label="Facebook"/></a> 
  <a  rel=" noreferrer" href="https://twitter.com/WidewayEngenie1/" target="_blank" className="twitter"><FontAwesomeIcon icon={faTwitter} size="sm" role="button" aria-label="Twitter"/></a> 
  <a  rel=" noreferrer" href="https://web.whatsapp.com/" target="_blank" className="whatsapp"><FontAwesomeIcon icon={faWhatsapp} size="sm" role="button" aria-label="Whatsapp"/></a>
  <a  rel=" noreferrer" href="https://www.instagram.com/wideway_engineering_solutions/" target="_blank" className="instagram"><FontAwesomeIcon icon={faInstagram} size="sm" role="button" aria-label="Instagram"/></a> 

</div>
      <nav ref={listener}>
        <Bar>
          <Info>+91 7455824744</Info>
          <Info>info@widewaysolutions.com</Info>
        </Bar>
        <MainNav postn={scrollState} id="mainNav" theme={props.theme !== null ? props.theme.toString(): null}>
          <NavLink to="/">
            <Logo src={navlogo} alt="logo" />
          </NavLink>

          <Bars onClick={props.toggle} />
          <NavMenu >
            {menuData.map(({ link, title }, index) => (
              <NavLink
               postn={scrollState}
               theme={props.theme !== null ? props.theme.toString(): null}
               id="navLink"
                to={link}
                // activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={index}
              >
                {title}
              </NavLink>
            ))}

          </NavMenu>
          <NavBtn>
            <Button primary="true" round="true" to="/trips">
              Make a deal
            </Button>
          </NavBtn>
          
          <NavBtn>
            <Dark>
           
                <label className="switch ml-10 -mr-14 ">
                  <input
                    type="checkbox"
                    onChange={() => {
                      props.setTheme(!props.theme)
                    }}
                    checked={props.theme}
                  />
                  <span
                    className={props.theme ? "slider round" : "slider1 round"}
                  ></span>
                </label>
             
            </Dark>
          </NavBtn>
        </MainNav>
      </nav>
    </>
  )
}

export default Header

const Bar = styled.div`
  background: #104C91;
  color: #fff;
  height: 26px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.28rem calc((100vw - 1300px) / 2);
  font-size: 0.85rem;
  z-index: 200;
  overflow: hidden;
  position: fixed;
`

const Info = styled.p`
  margin: 0 0px;
`

const MainNav = styled.nav`
  background: ${({postn, theme}) => (theme)? (postn==="top" ? 'transparent' : '#121212ea'): (postn==="top" ? 'transparent' : '#121212ea')};
  height: ${({postn}) => (postn==="top" ? '75px' : '62px')};
  top: 26px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  overflow: hidden;
  position: fixed;
`

const NavLink = styled(Link)`
  color:${({postn, theme}) => (theme)? (postn==="top" ? '#104c92' : '#fff'): (postn==="top" ? '#fff' : '#fff')};
  font-weight: 900;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const Logo = styled.img`
  width: 20%;
  height: 100%;
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 240px;
  @media screen and (max-width: 760px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 760px) {
    display: none;
  }
`

const Dark = styled.label`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
`
