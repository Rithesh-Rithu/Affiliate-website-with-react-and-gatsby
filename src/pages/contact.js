import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Contact from "../components/Contact/contact"
import { graphql, StaticQuery } from 'gatsby'

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Contact" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="Contact Us" 
      subtitle="" 
      heroclass="about-background" 
    />
    <Infoblock heading="How can we help you?" /> 
    <Contact />
  </Layout>

)

export const query = graphql`
{
  img: file(relativePath: { eq: "contact.jpg" }) {
     childImageSharp {
       fluid(quality: 100) {
        ...GatsbyImageSharpFluid_tracedSVG
       }
     }
   }
}
`

export default ContactPage
