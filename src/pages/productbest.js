import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import Coursecartbest from "../components/Cart/Coursecartbest"
import Layout from '../components/layout'
 

const products = ({data}) => (
    <Layout>
      <SEO title="Sports" />
      <div className="row py-5">
            <div className="col text-center mb-4 pad">
                <h1 className="display-4 text-warning">Sports</h1>
            </div>
      </div>
      <Coursecartbest courses={data.courses} />
      </Layout>
  )

export default products

export const query = graphql`
{
   courses:allContentfulProductbest {
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