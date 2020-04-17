import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import DualInfoblock from "../components/Reuseable/DualInfoblock"
import Coursecart from '../components/Cart/Coursecart'
import { graphql, StaticQuery } from 'gatsby'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="i write code" 
      subtitle="learncodeonline.in" 
      heroclass="hero-background" 
    />
    <Infoblock heading="About Us" /> 
    <Coursecart courses={data.courses}/>
    <DualInfoblock heading="Our Team" img="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?cs=srgb&dl=portrait-of-a-woman-247204.jpg&fm=jpg" />
  </Layout>

)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.jpg" }) {
     childImageSharp {
       fluid(quality: 100) {
        ...GatsbyImageSharpFluid_tracedSVG
       }
     }
   }
   courses: allContentfulCourses {
    edges{
      node{
        id
        title
        price
        category
        description{
          description
        }
        image{
          fixed(width:200,height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
}
}
`

export default IndexPage
