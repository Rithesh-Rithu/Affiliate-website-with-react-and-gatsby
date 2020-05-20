import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import Art1 from "../../images/art1.jpg"
import Art4 from "../../images/art4.jpg"
import Art5 from "../../images/art5.jpg"

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
            </BackgroundImage>  
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 my-5">
                        <div className="card">
                            <img className="card-img-top" src={Art1} alt="11"/>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-6 my-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-dark"><b>Bring power to your steps</b></h5>
                                <p className="card-text">A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with appearance originally being tied to function. Additionally, fashion has often dictated many design elements, such as whether shoes have very high heels or flat ones. Contemporary footwear in the 2010s varies widely in style, complexity and cost. Basic sandals may consist of only a thin sole and simple strap and be sold for a low cost. <a href="/product2">High fashion shoes</a> made by famous designers may be made of expensive materials, use complex construction and sell for hundreds or even thousands of dollars a pair. Some shoes are designed for specific purposes, such as boots designed specifically for mountaineering or skiing.Traditionally, shoes have been made from leather, wood or canvas. </p>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-12 col-md-6 my-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-dark"><b>Play like a Champion Today</b></h5>
                                <p className="card-text">Sport includes all forms of competitive physical activity or games which, through casual or organized participation, at least in part aim to use, maintain or improve physical ability and skills while providing enjoyment to participants, and in some cases, entertainment for spectators. <a href="/product1">Sports</a> can bring positive results to one's physical health. Hundreds of sports exist, from those between single contestants, through to those with hundreds of simultaneous participants, either in teams or competing as individuals. In certain sports such as racing, many contestants may compete, simultaneously or consecutively, with one winner; in others, the contest (a match) is between two sides, each attempting to exceed the other. Some sports allow a "tie" or "draw", in which there is no single winner; others provide tie-breaking methods to ensure one winner and one loser.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-5">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img-top" src={Art4} alt="22"/>                            
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 my-5">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img-top" src={Art5} alt="31"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 my-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-dark"><b>Fashion that ticks</b></h5>
                                <p className="card-text">A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities. A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps or any other kind of bracelet. A <a href="/product6">pocket watch</a> is designed for a person to carry in a pocket, often attached to a chain. The study of timekeeping is known as horology. Watches progressed in the 17th century from spring-powered clocks, which appeared as early as the 14th century. During most of its history the watch was a mechanical device, driven by clockwork, powered by winding a mainspring, and keeping time with an oscillating balance wheel. These are called mechanical watches. In the 1960s the electronic quartz watch was invented, which was powered by a battery and kept time with a vibrating quartz crystal.</p>
                            </div>
                        </div>
                    </div>

                </div> 
            </div>
        </div>
        
    )
}




      