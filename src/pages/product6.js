import React from 'react'
import Navbar from "../components/Reuseable/Navbar"
import Footer from "../components/Reuseable/Footer"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import Coursecart from "../components/Cart/Coursecart"
import Layout from '../components/layout'
 

const products = ({data}) => (
    <Layout>
      <SEO title="Watches" />
      <div className="row py-5">
            <div className="col text-center mb-4 pad">
                <h1 className="display-4 text-warning">Watches</h1>
            </div>
      </div>
      <Coursecart courses={data.courses} />
      </Layout>
  )

export default products

export const query = graphql`
{
   courses:allContentfulProduct6 {
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