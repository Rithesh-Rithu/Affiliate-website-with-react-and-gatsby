import React from 'react'
import Background from "../components/Reuseable/Background"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layout'
const products = ({data}) => (
    <Layout>
        <SEO title="Products" />
        <Background img={data.img.childImageSharp.fluid}  heroclass="hero-background"/> 
      </Layout>
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