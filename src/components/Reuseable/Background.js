import React from 'react'
import SEO from "../seo"
import BackgroundImage from 'gatsby-background-image'
import Sports from "../../images/sports.jpg"
import Shoes from "../../images/shoes.jpg"
import Home from "../../images/home.jpg"
import Health from "../../images/health.jpg"
import Data from "../../images/data.jpg"
import Watches from "../../images/watches.jpg"


export default function products({img, heroclass}) {
  return (
    
    <BackgroundImage  fluid={img} className={heroclass}>
    <div>
        <SEO title="Products" />
        <div className="container">
            <div className="row my-5">
                <div className="col-12 col-md-4 row-content-bg">
                    <div className="">
                        <a href="/product1">
                        <img className="card-img-top" src={Shoes} alt="Shoe section" /></a>
                        <a className="my-1" href="/product1">
                            <h5 className="card-title btn btn-outline-warning btn-block"><b>Shoes</b></h5>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-4 row-content-bg">
                    <div className="">
                            <a href="/product2">
                            <img className="card-img-top" src={Sports} alt="Card image cap"/></a>
                            <a className="my-1" href="/product2">
                                <h5 className="card-title btn btn-outline-warning btn-block"><b>Sports</b></h5>
                            </a>
                        </div>
                    </div>
                <div className="col-12 col-md-4 row-content-bg">
                    <div className="">
                        <a href="/product3">
                        <img className="card-img-top" src={Home} alt="Card image cap"/></a>
                        <a href="/product3" className="my-1">
                            <h5 className="card-title btn btn-outline-warning btn-block"><b>Home & Kitchen</b></h5>
                            
                        </a>
                    </div>
                </div>
            
                <div className="col-12 col-md-4 row-content-bg"> 
                    <div className="">
                        <a href="/product4">  
                        <img className="card-img-top" src={Health} alt="Card image cap"/></a>
                        <a href="/product4" className="my-1">
                            <h5 className="card-title btn btn-outline-warning btn-block"><b>Health & Beauty Care</b></h5>
                            
                        </a>
                    </div>
               </div>
            
            
                <div className="col-12 col-md-4 row-content-bg">
                    <div className="">
                        <a href="/product5">
                        <img className="card-img-top" src={Data} alt="Card image cap"/></a>
                        <a href="/product5" className="my-1">
                            <h5 className="card-title btn btn-outline-warning btn-block"><b>Data Storage Devices</b></h5>
                            
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-4 row-content-bg">
                    <div className="">
                        <a href="/product6">
                            <img className="card-img-top" src={Watches} alt="Card image cap"/></a>
                            <a href="/product6" className="my-1">
                                <h5 className="card-title btn btn-outline-warning btn-block"><b>Watches</b></h5>
                               
                            </a>
                        </div>
                    </div>
                
                
            </div>

            <div className="container">
            <div className="row my-5">
                <div className="col-sm-10 col-md-6">
                   <h2 className="text-white">Best filtered results by our team</h2>
                   <a className="text-primary" href="/product7"><h5>best <b>sports</b> shoes in <b>india</b></h5></a>
                   <a className="text-primary" href="/product7"><h5>best <b>loafers</b> under <b>500</b></h5></a>
                   <a className="text-primary" href="/product7"><h5><b>best watches</b> for <b>boys</b> and <b>girls</b></h5></a>
                   <a className="text-primary" href="/product7"><h5><b>sneakers</b> under <b>500</b></h5></a>
                   <a className="text-primary" href="/product7"><h5>air <b>pump</b> under <b>250</b></h5></a>
                   <a className="text-primary" href="/product7"><h5><b>cricket</b> shoes under <b>2000</b></h5></a>
                   <a className="text-primary" href="/product7"><h5><b>combo</b> shoes under <b>1000</b></h5></a>
                   <a className="text-primary" href="/product7"><h5>best watches <b>under 2500 rupees in india</b></h5></a>
                   <a className="text-primary" href="/product7"><h5><b>pen drives</b> under <b>500</b></h5></a>
                </div>
            </div>
            </div>
        </div>     
    </div>
      
    
    </BackgroundImage>
   
  )
}