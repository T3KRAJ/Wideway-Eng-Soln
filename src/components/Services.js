import React, { useEffect } from "react"
import innovative from "../assets/images/innovation.svg"
import transportation from "../assets/images/transportation.svg"
import factories from "../assets/images/factory1.svg"
import ServiceCard from "./ServiceCard"
import AOS from "aos"


const Services = (props) => {
  useEffect(() => {
    const AOS = require("aos")
    AOS.init({
      once: true,
    })
  }, [])

  useEffect(() => {
    if (AOS) {
      AOS.refresh()
    }
  })
  return (
 
    <div className="md:h-screen p-12 md:container md:mx-auto items-center text-center" id="services">
        <h3 className="w-full my-2 text-5xl font-bold leading-tight text-indigo-500 text-center">
          Services <span className="bg-danger h-1 w-20 block mt-4 object-top"></span>
        </h3>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t bg-danger"></div>
        </div>
        <div className="-mx-4 flex flex-wrap my-16">
          <ServiceCard src={innovative} service="Innovation" />
          <ServiceCard
            src={transportation}
            service="Hospitality and Transportation"
          />
          <ServiceCard src={factories} service="Manufacturing " />
          <ServiceCard src={transportation} service=" Manufacturing " />
          <ServiceCard src={factories} service="Innovation" />
          <ServiceCard
            src={transportation}
            service=" Hospitality and Transportation"
          />
        </div>
    </div>
    
  )
}
export default Services

