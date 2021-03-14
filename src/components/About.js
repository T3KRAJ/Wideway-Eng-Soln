import React, { useEffect } from "react"
import AOS from "aos"
import { Button } from "./Button"

const About = () => {
  const logo = require("../assets/images/logo.svg")
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1200, once: false })
  })
  return (
    <div class="container mx-auto pt-20"
     id="about">
    <div class="w-full max-w-6xl p-10 lg:p-20 mx-auto md:text-left">
      <h1 class="text-4xl text-center text-indigo-500 font-semibold my-8">About Us</h1>
      <div class="md:flex items-center -mx-10">
        <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
          <div class=""
          style={{
          transformStyle: "preserve-3d",
          transform: "perspective(960px)",
        }}>
            <img src={logo} class="w-full" alt="" data-aos="flip-left"/>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-8" data-aos="fade-left">
          <div class="mb-10">
            <p class="text-lg font-sans text-primary-lighter ">
            Annihilation of the barriers between the nations has
            brovided a welcome opportunity to the international traders to
            broaden the market and take any commodity across the globe in order
            to strengthen the boods overseas. <br />
            The thought of global trading we are providing consumers variety of
            goods with effective service and queater choice with regard to this
            chief motto is to<br />
            taking into consideration the wants and make a go of in this domain.
            of global trading we are providing consumers variety of
            goods with effective service and queater choice with regard to this
            chief motto is to offer best and the contentment of the purchaser
            taking into consideration the wants and make a go of in this domain.
            </p>
          </div>
          <div>
            <p className="mt-4 md:mt-8">
              <Button size="sm" primary="true" className="border-none">
              Get Started
              </Button>
            </p>

          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default About
