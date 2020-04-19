import React, { Component } from 'react'
import { Link } from 'gatsby';
import logo from '../../images/logo.png'

export default class Navbar extends Component {
    
    state={
        navbarState: false,
        navbarClass: "collapse navbar-collapse",
        menus: [{
            id:1,
            text:"Home",
            url: '/'
        },{
            id:2,
            text:"Products",
            url:'/products'
            
        },{
            id:3,
            text:"About",
            url:'/about'
        },{
            id:4,
            text:"Contact",
            url:'/contact'
        }]
    }

    myToggler= () => {
        this.state.navbarState ? this.setState({
            navbarState: false,
            navbarClass: "collapse navbar-collapse"
        }) : this.setState({
            navbarState: true,
            navbarClass: "collapse navbar-collapse show"
        })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-navtheme text-white fixed-top">
                <Link to = "/" className="navbar-brand ml-5">
                    <img src={logo} alt="logo goes here" width="40px" />
                </Link>
                <h2>fashionfreaky.com</h2>
                <div className="container search">
                <form className="d-flex justify-content-between search-inner">
                    <input type="text" className="form-control" id="search_input" placeholder="Search Here"/>
                    <button type="submit" className="btn btn-primary"><img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png" alt="search button goes here" className="searchpng"/></button>
                    <span className="ti-close" id="close_search" title="Close Search"></span>
                </form>
            </div>
                <button className="navbar-toggler" type="button" onClick={this.myToggler} >
                    <span className="text-white">Menu</span>
                </button>
                <div className={this.state.navbarClass}>
                    <ul className="navbar-nav ml-auto mr-5">
                        {this.state.menus.map(menu => {
                            return(
                                <b>
                                <li key={menu.id} className="nav-item">
                                    <Link to={menu.url} className="nav-link text-white">{menu.text}</Link>
                                </li> </b>
                            )
                        })}
                        
                    </ul>
                </div>
            </nav>
        )
    }
}
