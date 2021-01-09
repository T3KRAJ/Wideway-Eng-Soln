import React, { useEffect } from "react"
import AOS from "aos"

const ServiceCard = props => {
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1200, once: false })
  })

  return (
    <div
      className="w-full flex flex-col p-4 sm:w-full lg:w-1/3 "
      data-aos="zoom-in-up"
      
    >
      <div id = "services" className="  hover:bg-purple-100 flex-1 px-10 py-12  rounded-lg shadow-lg text-center items-center hover:mt-48">
        <img
          src={props.src}
          alt="logo"
          className="h-24 w-full mb-10 mt-0 text-center items-center  -mt-10"
        />
        {props.service}
      </div>
    </div>
  )
}

export default ServiceCard
