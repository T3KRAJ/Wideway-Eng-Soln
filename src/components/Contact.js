import React, { useEffect } from "react"
import AOS from "aos"

const Contact = () => {
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1200, once: false })
  })
  return (
    <div
      id="contact"
      className="md:h-screen md:flex max-w-md rounded-xl shadow-xl overflow-hidden max-w-screen-xl mx-auto my-16 md:max-w-screen-xl"
    >
      <div
        id="heading"
        className="md:max-w-2xl w-full md:w-1/2 lg:w-1/2 text-center sm:text-left my-auto text-white-900"
        data-aos="fade-right"
      >
        <div
          data-aos="fade-down"
          className="uppercase tracking-wide text-2xl font-black font-bold text-center"
        >
          Our Office
        </div>

        <br />
        <div className="items-stretch md:items-center text-center tracking-wider font-bold">
          <span className="font-bold text-xl text-indigo-500 mb-3">Registered Office</span>
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
          <span className="font-bold text-xl text-indigo-500 mb-3"> Corporate Office</span>
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
        </div>
      </div>

      <div
        className="md:flex-shrink-0 w-full md:w-1/2 lg:w-1/2 my-auto mx-auto p-4"
        data-aos="fade-left"
      >
        <div
          data-aos="fade-down"
          className="uppercase tracking-wide text-xl font-extrabold text-center"
        >
          Want to work with us?
        </div>
        <div data-aos="fade-down" className="tracking-wide text-sm text-center">
          Complete this form and we will get back to you in 24 hours.
        </div>

        <form
          name="contactForm"
          method="POST"
          action="/thanks"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          id="contact-form"
          className="shadow-sm rounded-md md:max-w-4xl p-8 text-black-900 font-extrabold"
        >
          <div className="mb-6">
            <label htmlFor="contant-form-name" className="mb-3 block">
              Full name:
            </label>
            <input
              type="text"
              id="contant-form-name"
              name="fullname"
              className=" bg-white rounded-md border border-gray-900 p-3 focus:outline-none w-full md:max-w-4xl"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="contant-form-email" className="mb-3 block">
              Email address:
            </label>
            <input
              type="email"
              id="contant-form-email"
              name="email"
              className="bg-white rounded-md border border-gray-900 p-3 focus:outline-none w-full"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="contant-form-phone" className=" mb-3 block">
              Phone:
            </label>
            <input
              type="number"
              id="contant-form-phone"
              name="phone"
              className="bg-white rounded-md border border-gray-900 p-3 focus:outline-none w-full"
              placeholder="+91 7845215178"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="contant-form-message" className="mb-3 block">
              Message:
            </label>
            <textarea
            id="contant-form-message"
              name="message"
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
