import React, { Component } from 'react'
import { Link } from 'gatsby';
import logo from '../../images/logo.png'

export default class Navbar extends Component {
    render() {
        return (
        <div className="container">
            <div className="row">
            <nav className="navbar navbar-expand-md bg-navtheme text-white fixed-top">    
                <div className="container col-10 col-sm-10 col-md-4">
                    <Link to = "/" className="navbar-brand">
                        <img className="lo" src={logo} alt="logo goes here" width="40px" />
                    </Link>
                
                    <h2 className="ff">freakyfashion.com</h2>
                </div>
                <div className="container col-3 col-sm-3 col-md-3">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary"><a className="text-white" href="http://localhost:8000/products/">All</a></button>
                        <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only"></span>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="http://localhost:8000/shoes/">Shoes</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="">Product</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="">Product</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="">Product</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="">Product</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="">Product</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="">Product</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="">Product</a>
                        </div>
                </div>
            </div>
            <div className="container col-12 col-sm-12 col-md-5">
            <a href="/" className="btn text-white">Home</a>
            <a href="/products" className="btn text-white">Products</a>
            <a href="/contact" className="btn text-white">Contact</a>
            <a href="/about" className="btn text-white">About</a>
            </div>
        </nav>    
        </div>
        
        </div>
        )
    }
}
