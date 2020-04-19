import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function HeroSection({img, heroclass}) {
    return (
        <div className="">
        <BackgroundImage  fluid={img} className={heroclass}>
        <h1 className="display-3 ">
            <p className=""><strong>Welcome to fashionfreaky.com !!!</strong></p>
        </h1>

        </BackgroundImage>
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
    )
}

