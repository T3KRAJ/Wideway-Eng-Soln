import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"

const Header = ( props) => {
  const navlogo = require("../assets/images/navlogo.svg")

  return (
    <>
    <nav>
      <Bar>
        <Info>+49 30 209164630</Info>
        <Info>info@widewayengineers.com</Info>
      </Bar>
    <MainNav>
      <NavLink to="/">
        <Logo src={navlogo} alt="logo" />
      </NavLink>
      <Bars onClick={props.toggle} />
      <NavMenu>
        {menuData.map(({ link, title }, index) => (
          <NavLink
            to={link}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={index}
          >
            {title}
          </NavLink>
        ))}
        <label className="switch">
          <input 
          type="checkbox"
          onChange={()=>{props.setTheme(!(props.theme))}}
          checked={props.theme}  
          />
          <span className="slider round"></span>
        </label>
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/trips">
          Make a deal
        </Button>
      </NavBtn>
      </MainNav>
      </nav>
    </>
  )
}

export default Header

const Bar = styled.div `
  background: blue;
  color: #fff;
  height: 26px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.28rem calc((100vw - 1300px) / 2);
  font-size: 0.85rem ;
  z-index: 100;
  overflow: hidden;
  position: fixed;
`

const Info = styled.p `
  margin: 0 20px;
`

const MainNav = styled.nav`
  background: #212221;
  height: 62px;
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
  color: #fff;
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
  margin-right: -40px;
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
