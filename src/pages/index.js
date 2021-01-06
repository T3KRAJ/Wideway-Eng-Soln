import React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Services from "../components/Services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Services />
    <Contact />
  </Layout>
)

export default IndexPage
