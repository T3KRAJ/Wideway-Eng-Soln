import React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Gallery from '../components/gallery'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/Services"
import "./index.css"
import Partners from "../components/Partners"
import Ourmission from "../components/Ourmission"
const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
  
    <Hero />
    <About />
    <Ourmission/>
    <Services />
    <Gallery />
    <Partners />
    <Contact />
  </Layout>
)

export default IndexPage