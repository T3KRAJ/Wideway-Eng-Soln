import React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
// import Gallery from '../components/Gallery'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/Services"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Services />
    {/* <Gallery /> */}
    <Contact />
  </Layout>
)

export default IndexPage