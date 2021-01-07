import React, {useEffect} from 'react'
import AOS from 'aos';
import styled from 'styled-components'
import { Button } from './Button'
import HeroImg from '../assets/images/hero.jpg'
import "aos/dist/aos.css"
function Hero() {
    useEffect(() => {
        AOS.init({
          once: false,
          duration:2000,
          delay:200
        });
      }, []);
    
    return (
        <HeroContainer>
            <HeroBg>
                <HeroPic src={HeroImg} alt="hero"/>
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>
                        <div data-aos="zoom-in">Accelerating Product Engineering for Enterprises</div>
                    </HeroH1>
                    <Button primary="true" big="true" to="/trips">Get Started</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;


const HeroContainer = styled.div `
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    color: #fff;
    :before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.6) 100%,
        ),
        linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            transparent 100%
        )
    }
`
const HeroBg = styled.div `
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height:100%;
    overflow: hidden;
`
const HeroPic = styled.img `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`
const HeroContent = styled.div `
    z-index: 3;
    height: calc(100vh-80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`
const HeroItems = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
    text-align: center;
    align-items: center;
    max-height: 100%;
`
const HeroH1 = styled.h1 `
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    padding: 0 1rem;
`