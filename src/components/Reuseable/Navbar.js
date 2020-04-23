import React, { Component } from 'react'
import { Link } from 'gatsby';
import logo from '../../images/logo.png'

export default class Navbar extends Component {
    render() {
        return (
        <div className="container">
            <div className="row">
            <div className="navbar navbar-expand-md bg-navtheme text-white fixed-top">    
                <div className="container col-12 col-sm-10 col-md-2">
                    <Link to = "/" className="">
                        <img className="lo" src={logo} alt="logo goes here" width="40px" />
                    </Link>
                    <h2 className="ff">bestindianproduct.in</h2>
                </div>
                <div className="col-md-3">
                </div>
                <div className="container col-5 col-sm-5 col-md-3">
                        <div className="row">      
                        <a className="btn btn-primary text-white" href="/products">All Categories</a>
                            <a href="#" className="dropdown menu-large nav-item  dropdown-toggle btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                                <div className="dropdown-menu megamenu">
                                    <div classsName="">
                                        <div className="row">
                                            <div className="col-lg-4 text-center">
                                                <div className="">
                                                    <a href="/product1" className="thumbnail">
                                                        <img className="w" src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-center">
                                                <div className="">
                                                    <a href="/product2" className="thumbnail">
                                                        <img className="w" src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-center">
                                                <div className="">
                                                    <a href="/product3" className="thumbnail">
                                                        <img className="w" src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-center">
                                                <div className="">
                                                    <a href="/product4" className="thumbnail">
                                                        <img className="w" src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-center">
                                                <div className="">
                                                    <a href="/product5" className="thumbnail">
                                                        <img className="w" src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-center">
                                                <div className="">
                                                    <a href="/product6x" className="thumbnail">
                                                        <img className="w" src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        </div></div>
                            
                </div>

            </div>
            <div className="container col-12 col-sm-12 col-md-4">
            <a href="/" className="btn text-white">Home</a>
            <a href="/products" className="btn text-white">Products</a>
            <a href="/contact" className="btn text-white">Contact</a>
            <a href="/about" className="btn text-white">About</a>
            </div>
        </div>    
        </div>
        
        </div>
        )
    }
}
