import
 React, { useEffect } from "react"
import AOS from "aos"
import { Button } from "./Button"

const About = () => {
  const logo = require("../assets/images/logo.svg")
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1200, once: false })
  })
  return ( 
 
      <div
        id = "about"
        className="md:h-screen items-center md:flex max-w-md overflow-hidden p-8 md:container md:mx-auto"
      >
     <div style={{transformStyle: "preserve-3d", transform: "perspective(960px)"}} className="animate-none h-50 mt-20 md:h-auto lg:h-auto w-full md:w-1/3  lg:w-1/3  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden p-4">
       <img
          className="h-50 md:h-auto lg:h-auto w-full md:w-full lg:w-full  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden p-4"
          src={logo}
          title="Site's logo"
          alt="logo"
          data-aos="flip-left"
        />
     </div>
        
      
        <div
         
          data-aos="fade-left"
          className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
        >
          <div>
            <div className="text-black mb-2 text-center">
              <span className="uppercase tracking-wide text-black  text-4xl text-indigo-500 font-semibold mb-5 text-center" id="heading">
                ABOUT US
              </span>
            </div>
            <p className="text-lg font-semibold mt-10">
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
            <div className="text-sm text-center mt-10">
              <Button
                round="true"
                primary="true"
                to="/contact"
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

