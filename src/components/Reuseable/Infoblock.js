import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-navtheme  py-3 ">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                        The Products mentioned in  our site has been well filtered by our team to provide you the best and cheap products according to the reviews and ratings of the products. We can provide the details(avg customer ratings & reviews) of any other products which you are interested but not mentioned in our site by contacting our team.</p>
                        <p>Also if you have any feedback about our site, please submit it...</p>
                        <Link to = "/contact">
                            <button className="btn btn-warning btn-lg">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
