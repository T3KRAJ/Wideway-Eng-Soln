import React, { useEffect } from "react"
import AOS from "aos"
import { Button } from "./Button"

const About = () => {
  const logo = require("../assets/images/logo.svg")
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1200, once: false })
  })
  return (
    // <div
    //   id="about"
    //   className="md:h-screen items-center md:flex max-w-md overflow-hidden p-12 md:container md:mx-auto  "
    // >
    //   <div
    //     style={{
    //       transformStyle: "preserve-3d",
    //       transform: "perspective(960px)",
    //     }}
    //     className="animate-none h-50 mt-20 md:h-auto lg:h-auto w-full md:w-1/3  lg:w-1/3  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden p-4"
    //   >
    //     <img
    //       className="h-50 md:h-auto lg:h-auto w-full md:w-full lg:w-full  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden p-4"
    //       src={logo}
    //       title="Site's logo"
    //       alt="logo"
    //       data-aos="flip-left"
    //     />
    //   </div>

    //   <div
    //     data-aos="fade-left"
    //     className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    //   >
    //     <div>
    //       <div className="text-black mb-2 text-center">
    //         <span
    //           className="uppercase tracking-wide text-black  text-4xl text-indigo-500 font-semibold mb-5 text-center"
    //           id="heading"
    //         >
    //           ABOUT US
    //         </span>
    //       </div>
    //       <p className="mt-10 block text-black-900 lg:text-xl">
    //         Annihilation of the barriers between the nations has
    //         brovided a welcome opportunity to the international traders to
    //         broaden the market and take any commodity across the globe in order
    //         to strengthen the boods overseas. So with an insight to stimulate
    //         the thought of global trading we are providing consumers variety of
    //         goods with effective service and queater choice with regard to this
    //         chief motto is to offer best and the contentment of the purchaser
    //         taking into consideration the wants and make a go of in this domain.
    //       </p>
    //     </div>
    //     <div className="flex items-center">
    //       <div className="text-sm text-center mt-10">
    //         <Button round="true" primary="true" to="/contact">
    //           Contact us
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
