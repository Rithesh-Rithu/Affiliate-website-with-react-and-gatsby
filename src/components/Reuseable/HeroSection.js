import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import Art1 from "../../images/art1.jpg"
import Art4 from "../../images/art4.jpg"
import Art5 from "../../images/art5.jpg"
import Art2 from "../../images/art2.jpg"
import Art3 from "../../images/art3.jpg"
import Art6 from "../../images/art6.jpg"

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
                                <a href="/product2" className="btn btn-outline-primary btn-block mb-3">Click here to redirect to <b>Shoes</b> page</a>
                                <p className="card-text">A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with appearance originally being tied to function. Additionally, fashion has often dictated many design elements, such as whether shoes have very high heels or flat ones. Contemporary footwear in the 2010s varies widely in style, complexity and cost. Basic sandals may consist of only a thin sole and simple strap and be sold for a low cost. High fashion shoes made by famous designers may be made of expensive materials, use complex construction and sell for hundreds or even thousands of dollars a pair. Some shoes are designed for specific purposes.</p>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-12 col-md-6 my-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-dark"><b>Play like a Champion Today</b></h5>
                                <a href="/product1" className="btn btn-outline-primary btn-block mb-3">Click here to redirect to <b>Sports</b> page</a>
                                <p className="card-text">Sport includes all forms of competitive physical activity or games which, through casual or organized participation, at least in part aim to use, maintain or improve physical ability and skills while providing enjoyment to participants, and in some cases, entertainment for spectators. Sports can bring positive results to one's physical health. Hundreds of sports exist, from those between single contestants, through to those with hundreds of simultaneous participants, either in teams or competing as individuals. In certain sports such as racing, many contestants may compete, simultaneously or consecutively, with one winner; in others, the contest (a match) is between two sides, each attempting to exceed the other. Some sports allow a "tie" or "draw", in which there is no single winner.</p>
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
                                <a href="/product6" className="btn btn-outline-primary btn-block mb-3">Click here to redirect to <b>Wacthes</b> page</a>
                                <p className="card-text">A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities. A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain. The study of timekeeping is known as horology. Watches progressed in the 17th century from spring-powered clocks, which appeared as early as the 14th century. During most of its history the watch was a mechanical device, driven by clockwork, powered by winding a mainspring, and keeping time with an oscillating balance wheel. These are called mechanical watches. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 my-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-dark"><b>Explore the foodie in you</b></h5>
                                <a href="/product3" className="btn btn-outline-primary btn-block mb-3">Click here to redirect to <b>Home & Kitchen</b> page</a>
                                <p className="card-text">A kitchen is a room or part of a room used for cooking and food preparation in a dwelling or in a commercial establishment. A modern middle-class residential kitchen is typically equipped with a stove, a sink with hot and cold running water, a refrigerator, and worktops and kitchen cabinets arranged according to a modular design. Many households have a microwave oven, a dishwasher, and other electric appliances. The main functions of a kitchen are to store, prepare and cook food (and to complete related tasks such as dishwashing). The room or area may also be used for dining (or small meals such as breakfast), entertaining and laundry. The design and construction of kitchens is a huge market all over the world.Commercial kitchens are found in restaurants, cafeterias, etc</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-5">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img-top" src={Art2} alt="22"/>                            
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 my-5">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img-top" src={Art3} alt="31"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-dark"><b>Beauty is power, a smile is its sword</b></h5>
                                <a href="/product4" className="btn btn-outline-primary btn-block mb-3">Click here to redirect to <b>Health & Beauty</b> page</a>
                                <p className="card-text">Beauty is the ascription of a property or characteristic to an animal, idea, object, person or place that provides a perceptual experience of pleasure or satisfaction. Beauty is studied as part of aesthetics, culture, social psychology and sociology. An "ideal beauty" is an entity which is admired, or possesses features widely attributed to beauty in a particular culture, for perfection. Ugliness is the opposite of beauty.

The experience of "beauty" often involves an interpretation of some entity as being in balance and harmony with nature, which may lead to feelings of attraction and emotional well-being. Because this can be a subjective experience, it is often said that "beauty is in the eye of the beholder."Often, given the observation that empirical observations of things that are considered beautiful often align among groups in consensus.</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-12 col-md-6 my-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-dark"><b>The perfect back-up partners</b></h5>
                                <a href="/product5" className="btn btn-outline-primary btn-block mb-3">Click here to redirect to <b>Data Storage Devices</b> page</a>
                                <p className="card-text">Data storage is the recording (storing) of information (data) in a storage medium. DNA and RNA, handwriting, phonographic recording, magnetic tape, and optical discs are all examples of storage media. Recording is accomplished by virtually any form of energy. Electronic data storage requires electrical power to store and retrieve data.

Data storage in a digital, machine-readable medium is sometimes called digital data. Computer data storage is one of the core functions of a general purpose computer. Electronic documents can be stored in much less space than paper documents.Barcodes and magnetic ink character recognition (MICR) are two ways of recording machine-readable data on paper.A recording medium is a physical material that holds information.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-5">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img-top" src={Art6} alt="22"/>                            
                            </div>
                        </div>
                    </div>

                </div> 
            </div>
        </div>
        
    )
}




      