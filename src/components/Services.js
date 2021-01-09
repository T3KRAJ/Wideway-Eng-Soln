import React, { useEffect } from "react"
import innovative from "../assets/images/innovation.svg"
import transportation from "../assets/images/transportation.svg"
import factory from "../assets/images/factory.svg"
import ServiceCard from "./ServiceCard"
import AOS from "aos"
import styled from "styled-components"

const Services = () => {
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
    // <ServiceContainer id="services" >
    <div className="md:h-screen  max-w-screen-xl mx-auto px-4  items-center text-center">
      <div className="mt-48">
        <h1 className="uppercase tracking-wide text-black text-4xl text-indigo-500 font-semibold text-center mt-48 mb-0">
          Our Services
        </h1>
        <div className="-mx-4 flex flex-wrap ">
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
    </div>
    // </ServiceContainer>
  )
}
export default Services

const ServiceContainer = styled.div`
  display: flex;
  background: #ffd;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 0 1rem;
  position: relative;
  :before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`
