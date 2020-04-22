import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroSection from "../components/Reuseable/HeroSection"
import { graphql } from 'gatsby'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection img={data.img.childImageSharp.fluid}  heroclass="hero-background"/> 
  </Layout>

)



export default IndexPage


export const query = graphql`
{
  img: file(relativePath: { eq: "3.jpg" }) {
     childImageSharp {
       fluid(quality: 100) {
        ...GatsbyImageSharpFluid_tracedSVG
       }
     }
   }
}
`