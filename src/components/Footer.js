import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
  return (
    <FooterContainer className="footer">
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Wideway Engineering solutions</h1>
          <p>Delivering exponential value to engineering enterprises by collaborating with them across three key tenets </p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/about">Support</FooterLink>
          <FooterLink to="/about">Destinations</FooterLink>
          <FooterLink to="/about">Sponsorship</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
      <FooterLinkItems>
        <FooterLinkTitle>Videos</FooterLinkTitle>
        <FooterLink to="/about">About us</FooterLink>
        <FooterLink to="/about">Contact</FooterLink>
        <FooterLink to="/about">Support</FooterLink>
        <FooterLink to="/about">Destinations</FooterLink>
        <FooterLink to="/about">Sponsorship</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle style={{alignContent:"center"}}>Social Media</FooterLinkTitle>
          <FooterLink href="https://www.facebook.com/Widewaysolutionscom-107382601397950" target="_blank"><FontAwesomeIcon icon={faFacebook} size="lg"  color="#104c92" align="center"/></FooterLink>
          <FooterLink href="https://twitter.com/WidewayEngenie1" target="_blank"><FontAwesomeIcon icon={faTwitter} size="lg"  color="#104c92"/></FooterLink>
          <FooterLink href="https://www.instagram.com/wideway_engineering_solutions/ " target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg"  color="#104c92"/></FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  display: grid;
  color: #fff;
  background: #121212ea;
  padding: 5rem calc((100vw - 1100px) / 2);
  grid-template-columns: repeat(2, 1fr);
`

const FooterDesc = styled.div`
  padding: 0 2rem;
  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }
  @media screen and (max-width: 760px) {
    padding: 1rem;
  }
`

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    margin-left: 2.4rem;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;
  @media screen and (max-width: 760px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 0.5rem;
  color: #3d3d4e;
  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
