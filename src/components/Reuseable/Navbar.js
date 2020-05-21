import React, { Component } from 'react'
import { Link } from 'gatsby';
import logo from '../../images/logo.png'

export default class Navbar extends Component {
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="navbar navbar-expand-md bg-navtheme text-white fixed-top">    
                    <div className="container col-12 col-sm-10  col-md-2">
                        <Link to = "/" className="">
                            <img className="lo" src={logo} alt="logo goes here" width="40px" />
                        </Link>
                        <a href="/" className="text-white"><h2 className="ff">cartlify.in</h2></a>
                    </div>
                   
                   <div className="col-12 col-md-6"> 
                        
                   </div>
               

           
                    <div className="container col-12 col-sm-12 col-md-4">
                        <a href="/" className="btn btn-outline-light text-white">Home</a>
                        <div className="dropdown">
                        <a href="/products" className="btn btn-outline-light text-white button">Products</a>
                        <div className="dropdown-content">
                            <a href="/product2">Shoes</a>
                            <a href="/product3">Home & Kitchen</a>
                            <a href="/product4">Health & Beauty Care</a>
                            <a href="/product5">Data Storage Devices</a>
                            <a href="/product1">Sports</a>                    
                            <a href="/product6">Watches</a>
                        </div>
                        </div>
                        <a href="/contact" className="btn btn-outline-light text-white">Contact</a>
                        <a href="/about" className="btn btn-outline-light text-white">About</a>
                    </div>
                </div>  
            </div>  
        </div>
        
        )
    }
}
