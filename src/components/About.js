import React, { useEffect } from "react"
import AOS from "aos"
import { Button } from "./Button"

const About = () => {
  const logo = require("../assets/images/logo.svg")
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1200, once: false })
  })
  return (
        <div
      id="about"
      className="md:h-screen items-center md:flex max-w-md overflow-hidden p-8 md:container mx-auto  "
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: "perspective(960px)",
        }}
        className="animate-none h-50 mt-16 md:h-auto lg:h-auto w-full md:w-1/3  lg:w-1/3  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden p-4"
      >
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
        <div>
          <h1 className="text-4xl text-center text-indigo-500 font-semibold my-8">
            About Us
          </h1>
        </div>
          <p className="text-grey-900 lg:pr-28 lg:pl-4 lg:text-normal">
            Annihilation of the barriers between the nations has
            brovided a welcome opportunity to the international traders to
            broaden the market and take any commodity across the globe in order
            to strengthen the boods overseas. <br />
            the thought of global trading we are providing consumers variety of
            goods with effective service and queater choice with regard to this
            chief motto is to<br />
            taking into consideration the wants and make a go of in this domain.
            of global trading we are providing consumers variety of
            goods with effective service and queater choice with regard to this
            chief motto is to offer best and the contentment of the purchaser
            taking into consideration the wants and make a go of in this domain.
          </p>
        </div>
        <div className="flex items-center sm:pt-4 lg:p-4 mt-4">
          <div className="text-sm text-center">
            <Button  primary="true" to="/contact">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
