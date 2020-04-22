import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import Heading from "./Heading"
import { Link } from "gatsby"

export default function HeroSection({img, heroclass}) {
    return (
        <div className="">
        <BackgroundImage  fluid={img} className={heroclass}>
        <h1 className="text-white text-uppercase display-3 title">Buy the best out of best</h1>
            <div>
                <h4 className="welcome">Welcome to fashionfreaky.com !!!</h4>
            </div>

        </BackgroundImage>
            


        <BackgroundImage  fluid={img} className={heroclass}>
        
            
            <div className="row">
                <div className="col-sm-12 col-md-6">
                <section className="my-4 py-3 title">
                    <Heading title="Our Team" />
                    <div className="row">
                        <div className="col-10 col-sm-8 mx-auto text-center">
                            <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                            </p>
                            <Link to = "/about">
                                <button className="btn btn-warning btn-lg">
                                    Our Team
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
                </div>   
                <div className="col-sm-12 col-md-6">
                <section className="my-4 py-3 title">
                    <Heading title="Services" />
                    <div className="row">
                        <div className="col-10 col-sm-8 mx-auto text-center">
                            <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                            </p>
                            <Link to = "/products">
                                <button className="btn btn-warning btn-lg">
                                    Services
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
                </div>          
            </div>  
        </BackgroundImage>

        <BackgroundImage  fluid={img} className={heroclass}>
        
            
            <div className="row">
                <div className="col-sm-12 col-md-6">
                <section className="my-4 py-3 title">
                    <Heading title="About" />
                    <div className="row">
                        <div className="col-10 col-sm-8 mx-auto text-center">
                            <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                            </p>
                            <Link to = "/about">
                                <button className="btn btn-warning btn-lg">
                                    About
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
                </div>   
                <div className="col-sm-12 col-md-6">
                <section className="my-4 py-3 title">
                    <Heading title="Contact" />
                    <div className="row">
                        <div className="col-10 col-sm-8 mx-auto text-center">
                            <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                            </p>
                            <Link to = "/contact">
                                <button className="btn btn-warning btn-lg">
                                    COntact
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
                </div>          
            </div>  
        </BackgroundImage>
</div>        

        
    )
}




      