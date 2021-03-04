import { Link } from 'gatsby'
import React from 'react'

const thanks = () => {
  const logo = require("../assets/images/navlogo.svg")

    return (
        <div class="min-h-screen bg-gray-200 flex justify-center items-center p-1">
   <div class="max-w-2xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
      <div id="header" class="flex"> 
         <img alt="mountain" class="w-40 rounded-md  border-gray-300" src={logo} />
         <div id="body" class="flex flex-col ml-5">
            <h4 id="name" class="text-xl font-semibold mb-2">Thank You!</h4>
            <p id="job" class="text-gray-800 mt-2">Awesome! We are really excited to work with you. We ll contact you shortly.</p>
            <Link to="/" class="text-blue-800 mt-2">Go back</Link>
         </div>
      </div>
    </div>
    </div>
    )
}

export default thanks
