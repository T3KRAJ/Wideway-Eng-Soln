import
 React, { useEffect } from "react"
import AOS from "aos"
import { Button } from "./Button"
import styled from "styled-components"

const About = () => {
  const logo = require("../assets/images/logo.svg")
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1200, once: false })
  })
  return ( 
  
      <div
        id = "about"
        className="md:h-screen items-center  md:flex max-w-md mx-auto rounded-xl shadow-2xl overflow-hidden mt-48 mb-24 max-w-screen-xl mx-auto md:max-w-screen-xl bg-gray"
      >
        <img
          
          className="h-50  md:h-auto lg:h-auto w-full md:w-1/3  lg:w-1/3  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          src={logo}
          style={{ backgroundImage: "url('../assets/images/logo.png')" }}
          title="Site's logo"
          alt="logo"
          data-aos="flip-left"
        />
        <div
         
          data-aos="fade-left"
          className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
        >
          <div className="mb-10 mt-4">
            <div className="text-black mb-2 text-center">
              <span className="uppercase tracking-wide text-black  text-4xl text-indigo-500 font-semibold mb-5 text-center">
                ABOUT US
              </span>
            </div>
            <p className="text-lg font-semibold mt-7">
              We are Wideway Engineering Solution, providing multiple IT
              Services in various fields. We work together to design, create,
              build, develop products that we are proud of, for the people who
              believe in achieving their dreams. We provide IT Services
              according to your requirement, weather it be Mobile app
              development or Web App development, from Games to full fledged
              SAAP Software, various types of Server Development to Search
              Engine Optimization. The services provided by us are handled by
              top professionals, whose work will satisfy all your requirements.
            </p>
          </div>
          <div className="flex items-center">
            {/* <img className="w-10 h-10 rounded-full mr-4" src={logo} alt="logo1" /> */}
            <div className="text-sm text-center mb-7">
              <Button
                round="true"
                to="/contact"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}
export default About

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
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
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  @media screen and (max-width: 760px){
    height: 100vh;
  }
`
