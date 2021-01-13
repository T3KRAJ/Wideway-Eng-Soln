import React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Services from "../components/Services"
import "./index.css"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
    <Hero />
    <About />
    <Services />
    <Gallery />
    <Contact />
  </Layout>
)

export default IndexPage
