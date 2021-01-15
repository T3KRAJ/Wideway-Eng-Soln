import React, { useEffect } from "react"
import innovative from "../assets/images/innovation.svg"
import transportation from "../assets/images/transportation.svg"
import factory from "../assets/images/factory.svg"
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
        <h1 className="uppercase tracking-wide text-black text-4xl text-indigo-500 font-semibold text-center" id="heading">
          Our Services
        </h1>
        <div className="-mx-4 flex flex-wrap my-24">
          <ServiceCard src={innovative} service="Innovation" />
          <ServiceCard
            src={transportation}
            service="Hospitality and Transportation"
          />
          <ServiceCard src={factory} service="Manufacturing " />
          <ServiceCard src={factory} service=" Manufacturing " />
          <ServiceCard src={innovative} service="Innovation" />
          <ServiceCard
            src={transportation}
            service=" Hospitality and Transportation"
          />
        </div>
    </div>
    
  )
}
export default Services

