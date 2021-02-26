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
    const picArray = []
    data.allPartnerDataJson.edges.forEach((item, index) => {
      picArray.push(

        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" key={index} data-aos="zoom-in">
        <div className="px-6">
          <Img
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
            className="shadow-lg rounded-full max-w-full mx-auto"
            style={{ maxWidth: "120px" }}
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">{item.node.name}</h5>
          </div>
        </div>
      </div>
      )
    })
    return picArray
  }
  return (
    <div>
      <section className="pt-20 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Our Partners</h2>
            </div>
          </div>
          <div className="flex flex-wrap">
            {getPartners(data)}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partners
