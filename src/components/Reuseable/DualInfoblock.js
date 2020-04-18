import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'
export default function DualInfoblock({heading, img}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container pad">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                        </p>
                    </div>
                    <div className="d-none d-lg-block col-4">
                        <div className="card bg-dark">
                            <img src={img} className="card-img-top" alt="i goes here" />
                            <div className="card-body">
                                <h5 className="card-title text-success">Just click photos</h5>
                                    <p className="card-text text-white">Lorem ipsum dolor montes, nascetur ridiculus mus. Donec quam felis,</p>
                                    <Link to="#" className="btn btn-warning btn-block">{heading}</Link>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </section>
    )
}
