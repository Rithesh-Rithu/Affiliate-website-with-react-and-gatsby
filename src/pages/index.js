import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroSection from "../components/Reuseable/HeroSection"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection/>
  </Layout>

)



export default IndexPage
