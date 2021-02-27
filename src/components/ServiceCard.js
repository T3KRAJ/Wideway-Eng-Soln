import React, { useEffect, useState } from "react"
import AOS from "aos"
// import { Parallax, Background } from "react-parallax"

const ServiceCard = props => {
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1200, once: false })
  })
  const [state, setState] = useState("none")
  return (
    <>
      <div
        className="w-full flex flex-col p-4 sm:w-full lg:w-1/3"
        data-aos="zoom-in-up"
      >
        <div
          id="services"
          onMouseOver={() => {
            return setState("inline-block")
          }}
          onFocus={() => void 0}
          onMouseLeave={() => {
            setState("none")
          }}
          role="button"
          tabIndex="0"
          className="parallax-background cards hover:bg-purple-200 flex-1 px-10 py-12 rounded-lg  text-center items-center hover:mt-48"
        >
          <div
            id="parallax-demo"
            data-rellax-speed="7"
            className="parallax-inner h-24 w-full mb-10 mt-0 text-center items-center  -mt-10"
            style={{ backgroundImage: `url(${props.src})` }}
          ></div>

          {props.service}
          {/* Description */}
          <div
            className=" rounded-2xl  absolute inset-0 justify-center items-center h-96 w-full -mt-28 transition duration-700 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
            style={{
              display: `${state}`,
              background: "#a1a0a0",
              fontWeight: 900,
            }}
          >
            <div
              className="w-20 h-20 rounded-full mx-auto flex-none bg-cover rounded-t sm:rounded-2xl lg:rounded-t-none lg:rounded-l text-center "
              style={{ backgroundImage: `url(${props.src})` }}
              title="Woman holding a mug"
            ></div>
            <div className="border-r border-b border-l border-none lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mt-4">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {props.service}
                </div>
                <p className="text-gray-700 text-sm align-text-left font-serif">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Voluptatibus quia, nulla!
                  Maiores et perferendis eaque, exercitationem praesentium
                  nihil.
                </p>
              </div>
            </div>
          </div>
          {/*End of Description */}
        </div>
      </div>
    </>
  )
}

export default ServiceCard
