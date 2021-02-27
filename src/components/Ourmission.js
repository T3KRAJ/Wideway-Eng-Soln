import React, { useEffect } from "react"
import AOS from "aos"

export default function Ourmission() {
  const logo = require("../assets/images/ourmission.png")
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1200, once: false })
  })
  return (
    <div
      id="about"
      className="md:h-screen items-center md:flex max-w-md overflow-hidden p-12 md:container md:mx-auto shadow-2xl  rounded-t"
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: "perspective(960px)",
        }}
        className="animate-none h-50 mt-20 md:h-auto lg:h-auto w-full md:w-1/3  lg:w-1/3  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden p-4"
      >
        <img
          className="h-50 md:h-auto lg:h-auto w-full md:w-full lg:w-full  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden p-4"
          src={logo}
          title="Site's logo"
          alt="logo"
          data-aos="fade-up-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
      </div>

      <div
        data-aos="fade-left"
        className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
      >
        <div>
          <div className="text-black mb-2 text-center">
            <span
              className="uppercase tracking-wide text-black  text-3xl text-indigo-500 font-semibold mb-5 text-center"
              id="heading"
            >
              OUR MISSION
            </span>
          </div>
          <p className="mt-10 block text-black-900 lg:text-xl text-align-center">
            Annihilation of the barriers between the nations has provided a
            welcome opportunity to the international traders to broaden the
            market and take any commodity across the globe in order to
            strengthen the bonds overseas. So , with an insight to stimulate
            thought of global trading we are providing consumers variety of
            goods with effective service and greater choice and our chief Moto
            is to offer the best.
          </p>
        </div>
      </div>
    </div>
  )
}
