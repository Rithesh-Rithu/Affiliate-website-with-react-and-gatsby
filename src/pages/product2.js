import React from 'react'
import Coursecart from "../components/Cart/Coursecart"
import Navbar from "../components/Reuseable/Navbar"
import Footer from "../components/Reuseable/Footer"
import { graphql } from 'gatsby'



const Product = ({data}) => (
    <div>
        <Navbar />
        <Coursecart courses={data.courses}/>
        <Footer />
    </div>
  
  )
            

export const query = graphql`
{
  courses: allContentfulProduct2 {
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

export default Product;