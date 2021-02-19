import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer className="footer">
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Wideway Engineering solutions</h1>
          <p>Find Great Experiences in Villages of Nepal with Vaolo®. </p>
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
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/about">Support</FooterLink>
          <FooterLink to="/about">Destinations</FooterLink>
          <FooterLink to="/about">Sponsorship</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  display: grid;
  color: #fff;
  background: #20213f;
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

const FooterLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 0.5rem;
  color: #3d3d4e;
  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
