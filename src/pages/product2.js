import React from 'react'
import Navbar from "../components/Reuseable/Navbar"
import Footer from "../components/Reuseable/Footer"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import Coursecart from "../components/Cart/Coursecart"
 

const products = ({data}) => (
    <div>
      <SEO title="Shoes" />
      <Navbar />
      <div className="row py-5">
            <div className="col text-center mb-4 pad">
                <h1 className="display-4 text-warning">Shoes</h1>
            </div>
      </div>
      <Coursecart courses={data.courses} />
      <Footer />
      </div>
  )

export default products

export const query = graphql`
{
   courses:allContentfulProduct2 {
    edges {
      node {
        id
        title
        category
        description1
        description2
        description3
        description4
        description5
        description6
        description7
        url
        image {
        fluid{
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
  }
}
}
  } 
`