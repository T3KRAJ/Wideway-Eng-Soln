import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"

const Header = ( props) => {
  const logo = require("../assets/images/logo.svg")
  const logo2 = require("../assets/images/logo 2.png")

  return (
    <>
    <Bar>
      <p>+49 30 209164630</p>
      <p>info@widewayengineers.com</p>
    </Bar>
    <Nav>
      <NavLink to="/">
        <Logo src={logo2} alt="logo" />
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
    </Nav>
    </>
  )
}

export default Header

const Bar = styled.div `
  display: flex;
  background: blue;
  color: #fff;
  justify-content: space-around;
  position: sticky;
`
const Nav = styled.nav`
  background: #212221;
  height: 80px;
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
