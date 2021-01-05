import React from "react"

const ContactData = () => {
  return (
    <div class="md:flex max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl mt-16 bg-gray-200 ">
      <div class="p-8 md:max-w-2xl w-full md:w-1/2 lg:w-1/2 text-center sm:text-left mb-5">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-5 text-center">
          Our Office
        </div>

        <p class="mt-2 text-gray-500 text-left tracking-wider font-bold">
          Wipro Limited
          <br />
          Doddakannelli, Sarjapur Road
          <br />
          Bengaluru - 560 035, India
          <br />
          Ph: +91 (80) 46827999, +91 (80) 61427999, +91 (80) 46726000
          <br />
          Fax: +91 (80) 28440054
          <br />
        </p>
      </div>

      <div class="md:flex-shrink-0 w-full md:w-1/2 lg:w-1/2 mt-5">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">
          Send us a message
        </div>
        <form action="#" class="shadow-sm rounded-md md:max-w-4xl p-8">
          <div class="mb-6">
            <label for="name" class="mb-3 block text-gray-700">
              Full name:
            </label>
            <input
              type="text"
              id="name"
              class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full md:max-w-4xl"
              placeholder="John Doe"
              required
            />
          </div>
          <div class="mb-6">
            <label for="email" class="mb-3 block text-gray-700">
              Email address:
            </label>
            <input
              type="email"
              id="email"
              class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div class="mb-8">
            <label for="name" class="mb-3 block text-gray-700">
              Contact Number:
            </label>
            <input
              type="number"
              id="contact"
              class="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
              placeholder="+91 7845215178"
              required
            />
          </div>
          <div class="mb-8">
            <label for="name" class="mb-3 block text-gray-700">
              Message:
            </label>
            <textarea
              class="resize-none border rounded-md bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="py-3 px-12 bg-indigo-500 hover:bg-teal-600 mr-5 rounded-md text-white-500 text-lg focus:outline-none w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactData
