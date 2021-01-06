import React from "react"
import { Button } from "./Button"
const AboutData = () => {
  const logo = require("../assets/images/logo.png")

  return (
    <div className="md:flex max-w-md mx-auto rounded-xl shadow-2xl overflow-hidden md:max-w-5xl mt-16  bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 ">
      <img
        class="h-48 md:h-auto lg:h-auto w-full md:w-1/3  lg:w-1/3  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        src={logo}
        style={{ backgroundImage: "url('../assets/images/logo.png')" }}
        title="Site's logo"
      />
      <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-gradient-to-r from-purple-200 via-pink-200 to-red-200">
        <div class="mb-8">
          <div class="text-black   mb-2 text-center">
            <span class="uppercase tracking-wide text-black  text-xl text-indigo-500 font-semibold mb-5 text-left">
              A LITTLE ABOUT US
            </span>
            <br />
            <span className="text-left font-bold text-sm">
              SIMPLE THINGS SHOULD BE SIMPLE, COMPLEX THINGS SHOULD BE POSSIBLE.
            </span>
          </div>
          <p class="text-grey-darker text-base text-left font-serif mt-7 ">
            We are Wideway Engineering Solution, providing multiple IT Services
            in various fields. We work together to design, create, build,
            develop products that we are proud of, for the people who believe in
            achieving their dreams. We provide IT Services according to your
            requirement, weather it be Mobile app development or Web App
            development, from Games to full fledged SAAP Software, various types
            of Server Development to Search Engine Optimization. The services
            provided by us are handled by top professionals, whose work will
            satisfy all your requirements.
          </p>
        </div>
        <div class="flex items-center">
          {/* <img class="w-10 h-10 rounded-full mr-4" src={logo} alt="logo1" /> */}
          <div class="text-sm text-center">
            <Button
              round="true"
              to="/contact"
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutData
