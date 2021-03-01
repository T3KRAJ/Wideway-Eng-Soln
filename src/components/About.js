import React, { useEffect } from "react"
import AOS from "aos"
import { Button } from "./Button"

const About = () => {
  const logo = require("../assets/images/logo.svg")
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1200, once: false })
  })
  return (
 
    <section id="about" className="bg-white border-b py-4 shadow-lg">
      <div className="container max-w-7xl mx-auto m-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-indigo-500 text-center">
          About Us
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div
            className="w-full sm:w-1/2 p-6 mt-12"
            style={{
              transformStyle: "preserve-3d",
              transform: "perspective(960px)",
            }}
          >
            <img
              className="w-5/6 sm:h-64 mx-auto"
              src={logo}
              title="Site's logo"
              alt="logo"
              data-aos="flip-left"
            />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6" data-aos="fade-left">
            <div className="align-middle">
              <p className="text-lg leading-relaxed mt-4 mb-4">
                Annihilation of the barriers between the nations has brovided a
                welcome opportunity to the international traders to broaden the
                market and take any commodity across the globe in order to
                strengthen the boods overseas. So with an insight to stimulate
                the thought of global trading we are providing consumers variety
                of goods with effective service and queater choice with regard
                to this chief motto is to offer best and the contentment of the
                purchaser taking into consideration the wants and make a go of
                in this domain.
              </p>
              <div className="flex items-center">
                <div className="text-sm text-center mt-2">
                  <Button round="true" primary="true" to="/contact">
                    Contact us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
