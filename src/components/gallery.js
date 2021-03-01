import React, {useEffect} from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { ImLocation } from "react-icons/im"
import AOS from 'aos';

const Gallery = () => {
  useEffect(() => {
    AOS.init({delay:200,duration:1200,once:false});
  })
  const data = useStaticQuery(graphql`
      query GalleryQuery {
        allGalleryDataJson {
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
            }
          }
        }
      }
  `)

  function getPic(data) {
    const picArray = []
    data.allGalleryDataJson.edges.forEach((item, index) => {
      picArray.push(
        <ProductCard key={index} data-aos="zoom-in">
          <ProductImg
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
          </ProductInfo>
        </ProductCard>
      )
    })
    return picArray
  }
  return (
    <ProductContainer>
      <div className="text-black mb-10 text-center">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-indigo-500 text-center">
          Gallery
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
            </div>
      <ProductWrapper>{getPic(data)}</ProductWrapper>
    </ProductContainer>
  )
}

export default Gallery

const ProductContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-content: center;
    padding: 0 2rem;
    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr, 1fr;
    }
    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
    }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transform: 0.2s ease;
`

const ProductImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bazier(o.o75, 0.83, 0.165, 1);
  &:hover {
    filter: brightness(100%);
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  top: 375px;
`

const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`