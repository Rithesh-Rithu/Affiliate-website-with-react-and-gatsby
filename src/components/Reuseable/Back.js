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
                        We believe in living for today and tomorrow! Because our decisions have a lasting impact, we make them thoughtfully. Our mission is to help people by providing the best and cheap products available online. We hope you enjoy the products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us  
                        </p>
                        <Link to = "/contact">
                            <button className="btn btn-warning btn-lg">
                               <b>Feel free to contact us !!!</b>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        
                </BackgroundImage>
    )
}
