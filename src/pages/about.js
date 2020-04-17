import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import DualInfoblock from "../components/Reuseable/DualInfoblock"
import Teamphotosection from "../components/About/Teamphotosection"

import { graphql, StaticQuery } from 'gatsby'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="About *****" 
      subtitle="" 
      heroclass="about-background" 
    />
    <DualInfoblock heading="A message from CEO" img="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?cs=srgb&dl=portrait-of-a-woman-247204.jpg&fm=jpg" />
    <Infoblock heading="About Vision" /> 
    <Teamphotosection />
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

export default AboutPage
