import React from "react"
import { FaBeer, FaUber, FaUser } from "react-icons/fa"
import innovative from "../assets/images/innovation.svg"
import transportation from "../assets/images/transportation.svg"
import factory from "../assets/images/factory.svg"
import ServiceCard from "./ServiceCard"
const ServicesData = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 bg-gray-100 mt-10 items-center text-center ">
        <h1 className="uppercase tracking-wide text-black  text-4xl text-indigo-500 font-semibold mb-5 text-center mt-5">
          Our Services
        </h1>
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  )
}
export default ServicesData
