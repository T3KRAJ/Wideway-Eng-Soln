import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import AOS from "aos"

const Services = props => {
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

  const data = useStaticQuery(graphql`
  query ServicesQuery {
    allServiceDataJson {
      edges {
        node {
          img {
            extension
            publicURL
          }
          alt
          desc
          title
        }
      }
    }
  }
  
`)


function getServices(data) {
  const serviceArray = []
  data.allServiceDataJson.edges.forEach((item, index) => {
    serviceArray.push(
          <div
          key={index} data-aos="flip-right" data-aos-easing="linear" data-aos-duration="1500"
            className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 w-full mx-auto rounded-3xl shadow-lg bg-white px-10 pt-16 pb-10 text-gray-600"
            style={{ maxWidth: "325px" }}
          >
            <div className="w-full mb-10 text-center">
            { (item.node.img.extension === 'svg') ?
              <img
                alt={item.node.alt}
                src={item.node.img.publicURL}
                className="w-32 h-32 border rounded-full mx-auto mb-10"
              /> : null}
              <h2 className="font-bold text-xl text-indigo-500 mb-3">
                {item.node.title}
              </h2>
              <p className="text-sm leading-tight h-12">
                {item.node.desc}
              </p>
            </div>
          </div>
    )
  })
  return serviceArray
}

  return (
    <div id="services">
    <div className="container flex justify-center mx-auto pt-16 pb-8 sm:pb-4">
        <div>
          <h1 className="text-4xl text-indigo-500 font-semibold my-8">
            What We Do
          </h1>
        </div>
      </div>
    <div className="w-full bg-gray-100 pt-8 sm:pb-4">
      <div className="container mx-auto">
        <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
          {getServices(data)}
        </div>
      </div>
    </div>
    </div>
  )
}
export default Services
