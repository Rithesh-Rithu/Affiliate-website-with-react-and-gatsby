import React from 'react'
import { Link } from 'gatsby'
import Navbar from "../components/Reuseable/Navbar"
import Footer from "../components/Reuseable/Footer"
import Background from "../components/Reuseable/Background"
import { graphql } from 'gatsby'
import SEO from "../components/seo"


const products = ({data}) => (
    <div>
      <SEO title="Products" />
      <Background img={data.img.childImageSharp.fluid}  heroclass="hero-background"/> 
  
      <Navbar />
      <div className="container">
        <div className="row">
              <Link to="/shoes">Shoes</Link>

              <Link to="/tshirts">T-Shirts</Link>
              <Link to="/earphones">Earphones</Link>
      </div>
      <div className=" hero-background">
                <div className="row row-content-1">
                    <div className="col-3">
                    
                        <img src="https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="img-thumbnail"/>                        
                    </div>
                    <div className="col-3">
                        <img src="https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="img-thumbnail"/>
                    </div>
                    <div className="col-3">
                        <img src="https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="img-thumbnail"/>
                    </div>
                    <div className="col-3">
                        <img src="https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="img-thumbnail"/>
                    </div>
                </div>
                <div className="row row-content-2">
                    <div className="col-3">
                        <img src="https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="img-thumbnail"/>
                    </div>
                    <div className="col-3">
                        <img src="https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="img-thumbnail"/>
                    </div>
                    <div className="col-3">
                        <img src="https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="img-thumbnail"/>
                    </div>
                    <div className="col-3">
                        <img src="https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="img-thumbnail"/>
                    </div>
                </div>
        </div>     
      </div>
      <Footer />
    </div>
  )

export default products

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.jpg" }) {
     childImageSharp {
       fluid(quality: 100) {
        ...GatsbyImageSharpFluid_tracedSVG
       }
     }
   }
}
`