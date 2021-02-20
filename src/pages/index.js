import React from "react"
import About from "../components/About"
import Contact from "../../src/components/Contact"
import Hero from "../../src/components/Hero"
import Gallery from '../../src/components/Gallery'
import Layout from "../../src/components/Layout"
import SEO from "../../src/components/seo"
import Services from "../../src/components/Services"
import "./index.css"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Services />
    <Gallery />
    <Contact />
  </Layout>
)

export default IndexPage