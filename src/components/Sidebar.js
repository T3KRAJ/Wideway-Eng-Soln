import React from "react";
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkScroll} from 'react-scroll'
import { Button } from "./Button";
import {menuData} from '../data/MenuData' 

function Sidebar({ isOpen, toggle, theme, setTheme, initialTheme }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu >
        {menuData.map(({link, title}, index) => (
          <SidebarLink to={link} key={index} onClick={toggle} activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            {title}
          </SidebarLink>
        ))}
                <Dark>
                <label className="switch ml-10 -mr-14 ">
                  <input
                    type="checkbox"
                    value={theme}
                    onChange={() => {
                      setTheme(!theme)
                    }}
                    checked={theme}
                  />
                  <span
                    className={theme ? "slider round" : "slider1 round"}
                  ></span>
                </label>
             
            </Dark>
        </SidebarMenu>

        <SideBtnWrap>
        <Button primary="true" onClick={toggle} round="true" big="true" to="/trips">Make a deal</Button>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;


const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #212221;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transform: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
` 

const CloseIcon = styled(FaTimes)`
    color: #DDEDF4;    
`

const Icon = styled.div`
    position: fixed;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

const SidebarWrapper = styled.div`
    color: #DDEDF4;
`

const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    text-decoration: none;
    color: #DDEDF4; 
    cursor: pointer;
    &:hover {
       color:#1181B2;
       transition: 0.2s ease-in-out; 
    }
`

const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    @media screen and (max-width:480px) {
        grid-template-rows: repeat(6, 60px)
    }
`
const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

const Dark = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  ${'' /* @media screen and (max-width: 760px) {
    display: none;
  } */}
`