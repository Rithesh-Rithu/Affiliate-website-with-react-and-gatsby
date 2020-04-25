import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import {Link} from 'gatsby'


    export default function Back({img, heroclass}) {
            return (
            <BackgroundImage  fluid={img} className={heroclass}>
               <section className="e my-4 py-3 title">
                <div className="container">
                <h1 className="abouth1 display-3">About Us</h1>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                        

                        </p>
                        <Link to = "/about">
                            <button className="btn btn-warning btn-lg">
                               About Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        
                </BackgroundImage>
    )
}
