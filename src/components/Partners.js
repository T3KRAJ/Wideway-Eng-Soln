import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AOS from "aos"

const Partners = () => {
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1200, once: false })
  })
  const data = useStaticQuery(graphql`
    query PartnersQuery {
      allPartnerDataJson {
        edges {
          node {
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            name
            link
          }
        }
      }
    }
  `)

  function getPartners(data) {
    const partnerArray = []
    data.allPartnerDataJson.edges.forEach((item, index) => {
      partnerArray.push(
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" key={index} data-aos="flip-right" data-aos-easing="linear" data-aos-duration="1500">
        <div className="px-14">
          <Img
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
            className="shadow-lg rounded max-w-full mx-auto"
            style={{ maxWidth: "120px" }}
          />
          <div className="pt-10 mt-10 text-center">
            <h5 className="text-xl font-bold hover:text-indigo-900">{item.node.name}</h5>
          </div>
        </div>
      </div>
      )
    })
    return partnerArray
  }
  return (
      <section className="pt-20 pb-16 items-center"  id="partners">
        <div className="container mx-auto lg:px-8 sm:px-4" >
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl text-indigo-500 font-semibold">Our Partners</h2>
            </div>
          </div>
          <div className="w-full px-10 pt-10">

          <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">

            {getPartners(data)}
            </div>
          </div>
          </div>
        </div>
      </section>
  )
}

export default Partners
