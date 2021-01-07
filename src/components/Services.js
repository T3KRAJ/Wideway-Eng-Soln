import React, {useEffect} from "react"
import innovative from "../assets/images/innovation.svg"
import transportation from "../assets/images/transportation.svg"
import factory from "../assets/images/factory.svg"
import ServiceCard from "./ServiceCard"
import AOS from 'aos';
const Services = () => {
  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });
  return (
    <div id="services" className="mt-10 mb-10">
      <div className="max-w-screen-xl mx-auto px-4 bg-gray-100 mt-10 items-center text-center ">
        <h1 className="uppercase tracking-wide text-black text-4xl text-indigo-500 font-semibold mb-5 text-center mt-5">
          Our Services
        </h1>
        <div className="-mx-4 flex flex-wrap ">
        <ServiceCard src={innovative} service="Innovation" />
        <ServiceCard src= {transportation} service="Hospitality and Transportation" />
        <ServiceCard src= {factory} service="Manufacturing " /> 
        <ServiceCard src= {factory} service=" Manufacturing "  />
        <ServiceCard src={innovative} service="Innovation"/>
        <ServiceCard src= {transportation} service=" Hospitality and Transportation" />
        </div>
      </div>
    </div>
  )
}
export default Services
