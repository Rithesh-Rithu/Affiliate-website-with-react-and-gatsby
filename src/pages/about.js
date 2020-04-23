import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import Back from "../components/Reuseable/Back"

const AboutPage = ({data}) => (
    <Layout>
    <SEO title="About"/>
     <Back img={data.img.childImageSharp.fluid}  heroclass="hero-background"/> 
  
  </Layout>
)


export default AboutPage



export const query = graphql`
{
  img: file(relativePath: { eq: "4.jpg" }) {
     childImageSharp {
       fluid(quality: 100) {
        ...GatsbyImageSharpFluid_tracedSVG
       }
     }
   }
}
` 