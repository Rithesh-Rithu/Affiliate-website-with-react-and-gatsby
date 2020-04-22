import React from 'react'
import Navbar from "../components/Reuseable/Navbar"
import Footer from "../components/Reuseable/Footer"
import Productcart6 from "../components/Cart/productcart1"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
 

const products = ({data}) => (
    <div>
      <SEO title="Products" />
      <Navbar />
      <Productcart6 img={data.img.childImageSharp.fluid}  heroclass="hero-background"/> 
      <Footer />
      </div>
  )

export default products

export const query = graphql`
{
  img: file(relativePath: { eq: "5.jpg" }) {
     childImageSharp {
       fluid(quality: 100) {
        ...GatsbyImageSharpFluid_tracedSVG
       }
     }
   }
}
`