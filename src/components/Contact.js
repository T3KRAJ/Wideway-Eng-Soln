import React, { useEffect } from "react"
import styled from "styled-components"
import AOS from "aos"

const Contact = () => {
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1200, once: false })
  })
  return (
    <div
      id="contact"
      className=" md:h-screen md:flex max-w-md mx-auto rounded-xl shadow-xl overflow-hidden max-w-screen-xl p-4 mx-auto md:max-w-screen-xl  mb-16"
    >
      <div
        id="heading"
        className="pl-8 md:max-w-2xl w-full md:w-1/2 lg:w-1/2 text-center sm:text-left mb-5 text-white-900 mt-10"
        data-aos="fade-right"
      >
        <div
          data-aos="fade-down"
          className="uppercase tracking-wide text-sm text-xl font-black font-bold md:mt-20 xl:mt-28 sm:mb-4 text-center"
        >
          Our Office
        </div>

        <br/>
        <Loc className="items-stretch md:items-center text-left tracking-wider font-bold ">
          <span className="ml-16 text-center text-bold">Registered Office</span>
          <br />
          <br />
          331/6 Sarna Toli, Kadru, Doranda
          <br />
          Ranchi - 834002 Jharkahnd, India
          <br />
          Ph: +91 7455824744, +91 9760117913
          <br />
          Email:info@widewaysolutions.com
          <br />
          <br />
          <br />
          <span className="ml-16 text-center text-bold"> Corporate Office</span>
          <br />
          <br />
          Kheri Gaon, Dehradun
          <br />
          Uttarakhand 248007 India
          <br />
          Ph: +91 9760117913
          <br />
          Email:sales@widewaysolutions.com
          <br />
          <br />
        </Loc>
      </div>

      <div
        className="md:flex-shrink-0 w-full md:w-1/2 lg:w-1/2 mt-10"
        data-aos="fade-left"
      >
        <div
          data-aos="fade-down"
          className="uppercase tracking-wide text-xl mt-20 font-extrabold text-center"
        >
          Want to work with us?
        </div>
        <div
          data-aos="fade-down"
          className="tracking-wide text-sm text-center"
        >
          Complete this form and we will get back to you in 24 hours.
        </div>

        <form
          target="_blank"
          action="https://formsubmit.co/sales@widewaysolutions.com"
          method="POST"
          className="shadow-sm rounded-md md:max-w-4xl p-8 text-black-900 font-extrabold"
        >
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New submission!" />
          <div className="mb-6">
            <label htmlFor="name" className="mb-3 block">
              Full name:
            </label>
            <input
              type="text"
              id="name"
              name="Full Name"
              className=" bg-white rounded-md border border-gray-900 p-3 focus:outline-none w-full md:max-w-4xl"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="mb-3 block">
              Email address:
            </label>
            <input
              type="email"
              id="email"
              name="Email Address"
              className="bg-white rounded-md border border-gray-900 p-3 focus:outline-none w-full"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="name" className=" mb-3 block">
              Phone:
            </label>
            <input
              type="number"
              id="contacts"
              name="Phone Number"
              className="bg-white rounded-md border border-gray-900 p-3 focus:outline-none w-full"
              placeholder="+91 7845215178"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="name" className="mb-3 block">
              Message:
            </label>
            <textarea
              name="Message"
              className="resize-none border rounded-md bg-white rounded-md border border-gray-900 p-3 focus:outline-none w-full"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-3 px-12 bg-indigo-500 hover:bg-teal-600 mr-5 rounded-md text-white-500 text-lg focus:outline-none w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

const Loc = styled.div`
  padding: 9.3rem 3.4rem;
  @media screen and (max-width: 760px) {
    padding: 2rem 0rem 1rem 0rem;
  }
`
