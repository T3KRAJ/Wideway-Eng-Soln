import React, { useEffect, useState, useContext } from "react"
import AOS from "aos"
import styled from "styled-components"
import { Button } from "./Button"
import HeroImg from "../assets/images/heroimg.svg"
import BgImg from "../assets/images/hero.png"
import BgImg1 from "../assets/images/whitebg.svg"
import "aos/dist/aos.css"
import {ShareContext} from "./ShareContextProvider"

function Hero() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 2000,
      delay: 200,
    })
  }, [])
  
  const {collapsedShare } = useContext(ShareContext);

 

  return (
    <HeroContainer>
      <HeroBg>
       {collapsedShare ? <Bg src={BgImg} alt="bg" />: <Bg src={BgImg1} alt="bg" />} 
      </HeroBg>
      <HeroContent>
        <HeroItems>
        
        <HeroH1 data-aos="zoom-in" id="heroH1">Engineering Your Journey</HeroH1>
          <HeroP data-aos="zoom-in" id="heroP">
            Delivering exponential value to engineering enterprises by
            collaborating with them across three key tenets
          </HeroP>
          
       
         
          
          <ButtonWrap>
            <Button
              primary="true"
              round="true"
              big="true"
              to="about"
              className="mx-2"
            >
              Get Started
            </Button>
            <Button big="true" round="true" to="about">
              Get Started
            </Button>
          </ButtonWrap>
        </HeroItems>
        <HeroPic src={HeroImg} alt="hero" />
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #00c;
  height: 100vh;
  padding: 0;
  margin: 0;
  position: relative;
  color: #fff;
`
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Bg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroPic = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  z-index: 1;
  margin-top: 2.5rem;
  @media screen and (max-width: 600px) {
    display: none;
  }
`
const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  z-index: 3;
  height: calc(100vh-80px);
  max-height: 100%;
  padding: 2.5rem calc((100vw - 1300px) / 2);
`
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  z-index: 3;
  height: calc(100vh-80px);
  max-height: 100%;
  padding: 2rem calc((100vw - 1300px) / 2);
`
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 0.7rem;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
  align-items: left;
  max-height: 100%;
`
const HeroH1 = styled.h1`
  font-size: clamp(0.4rem, 7vw, 3rem);
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  padding: 0 2rem;
`

const HeroP = styled.p`
    text-align: left
    font-size: clamp(0.2rem, 2vw, 1rem);
    margin-bottom: 1.5rem;
    padding: 0 2rem;
`
