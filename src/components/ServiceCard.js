import React, { useEffect } from "react"
import AOS from "aos"
import { Parallax, Background } from 'react-parallax'; 

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

      <div id = "services" className="cards hover:bg-purple-200 flex-1 px-10 py-12 rounded-lg shadow-xl text-center items-center hover:mt-48">
        <img
          src={props.src}
          alt="logo"
          className="h-24 w-full mb-10 mt-0 text-center items-center pt-8 -mt-10"
        />

        {props.service}
      </div>
    </div>
 
    </>
  )
}

export default ServiceCard
