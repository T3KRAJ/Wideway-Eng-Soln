import React from 'react'
import innovative from "../assets/images/innovation.svg"
import transportation from "../assets/images/transportation.svg"
import factory from "../assets/images/factory.svg"

const ServiceCard = () => {
    return (
        <div>
             <div className="-mx-4 flex flex-wrap ">
          <div
            className="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3 "
            style={{ backgroundImage: "url(../assets/images/innovative.jpg)" }}
          >
            <div className=" hover:bg-purple-100 flex-1 px-10 py-12 bg-white rounded-lg shadow-lg text-center items-center hover:mt-48">
              <img
                src={innovative}
                className="h-24 w-full mb-10 mt-0 text-center items-center  -mt-10"
              />
              Innovation
            </div>
          </div>
          <div className="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
            <div className="flex-1 px-10 py-12 bg-white hover:bg-purple-100 rounded-lg shadow-lg text-center items-center">
              <img
                src={factory}
                className="h-24 w-full mb-10 mt-0 text-center items-center -mt-10"
              />
              Manufacturing 
            </div>
          </div>
          <div className="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3 ">
            <div className="flex-1 px-10 py-12 bg-white hover:bg-purple-100 rounded-lg shadow-lg text-center items-center">
              <img
                src={transportation}
                className="h-24 w-full mb-10 mt-0 text-center items-center -mt-10 "
              />
              Hospitality and Transportation
            </div>
          </div>
        </div>
        </div>
    )
}

export default ServiceCard;