import React from 'react'
import BackgroundImage from 'gatsby-background-image'


export default function HeroSection({img, heroclass}) {
    return (
        <div className="">
            <BackgroundImage  fluid={img} className={heroclass}>
                <div className="home">
                    <h1 className="text-white text-uppercase display-3 title"><b><i>Buy the best out of best</i></b></h1>
                        <div>
                            <h4 className="welcome"><b>Welcome to BestIndianProduct.in !!!</b></h4>
                        </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3">
                        
                    </div>
                    <div className="col-12 col-md-6">
                        
                    </div>
                </div>  
            </BackgroundImage>  
            <div className="container">
                <div className="row">
                    <div className="">

                    </div>
                    <div className="">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="">

                    </div>
                    <div className="">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="">

                    </div>
                    <div className="">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="">

                    </div>
                    <div className="">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="">

                    </div>
                    <div className="">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="">

                    </div>
                    <div className="">
                        
                    </div>
                </div>
            </div> 
        </div>
        
    )
}




      