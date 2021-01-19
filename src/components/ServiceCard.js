import React, { useEffect } from "react"
import AOS from "aos"
// import { Parallax, Background } from "react-parallax"

const ServiceCard = props => {
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1200, once: false })
  })

  return (
    <>
      <div
        className="w-full flex flex-col p-4 sm:w-full lg:w-1/3"
        data-aos="zoom-in-up"
      >
        <div
          id="services"
          className="parallax-background cards hover:bg-purple-200 flex-1 px-10 py-12 rounded-lg shadow-lg text-center items-center hover:mt-48"
        >
          <div
            id="parallax-demo"
            data-rellax-speed="7"
            className="parallax-inner h-24 w-full mb-10 mt-0 text-center items-center  -mt-10"
            style={{ backgroundImage: `url(${props.src})` }}
          ></div>

          {props.service}
        </div>
      </div>
    </>
  )
}

export default ServiceCard
