import React, { Component } from 'react'
import Img from 'gatsby-image'

const getCaty = items => {
    let holdItems = items.map(items => {
        return items.node.category
    })
    let holdCategories = new Set(holdItems)
    let categories = Array.from(holdCategories)
    categories = ["All", ...categories]
    return categories
}

export default class Coursecartbest extends Component {
    constructor(props){
        super(props)
        this.state={
            courses: props.courses.edges,
            mycourses: props.courses.edges,
            mycategories: getCaty(props.courses.edges)
        }
    }

    catyClick = category => {
        let keepItsafe = [...this.state.courses]

        if (category==='All'){
            this.setState(() => {
                return {mycourses: keepItsafe}
            })
        } else {
            let holdme = keepItsafe.filter(({node}) => node.category === category)
            this.setState(() => {
                return {mycourses: holdme}
            })
        }
    }

    render() {
        
        return (
            <section className="">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-12 mx-auto text-center">
                        {this.state.mycategories.map((category, index) => {
                            return (
                                <button 
                                type="button" 
                                className="btn btn-outline-dark btn-block m-3 px-3" 
                                key={index} 
                                onClick={() => {
                                    this.catyClick(category)
                                }}
                                >
                                    <b>{category}</b>
                                </button>
                            )
                        })
                        }
                    </div>
                </div>
                <div className="row">
                    {this.state.mycourses.map(({node}) => (
                        node.category === "Combo Shoes under 1000" ? (
                            
                                <div key={node.id} className="col-12 col-md-6">
                                    <div className="card">
                                        <div className="card-img-center">
                                            <Img fluid={node.image.fluid} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title1"><b>{node.title}</b></h5>
                                            
                                            <a className="btn btn-primary btn-block" href={node.url} target="_blank" rel="noopener noreferrer">View in Amazon</a>
                                        </div>
                                    <div className="bot-mar"></div>
                                    <div><br/><br/></div>
                                    </div>
                                </div>
    
                             
                        ) : (
                            
                                <div key={node.id} className="col-12 col-md-6">
                                    <div className="card">
                                        <div className="card-img-center">
                                            <Img fluid={node.image.fluid} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title1"><b>{node.title}</b></h5>
                                            <ul>
                                                <li className="card-text">{node.description1}</li>
                                                <li className="card-text">{node.description2}</li>
                                                <li className="card-text">{node.description3}</li>
                                                <li className="card-text">{node.description4}</li>
                                                <li className="card-text">{node.description5}</li>
                                                <li className="card-text">{node.description6}</li>
                                                <li className="card-text">{node.description7}</li>
                                            </ul>
                                            <a className="btn btn-primary btn-block" href={node.url} target="_blank" rel="noopener noreferrer">View in Amazon</a>
                                        </div>
                                    <div className="bot-mar"></div>
                                    <div><br/><br/></div>
                                    </div>
                                </div>
    
                            
                        )
                    ))
                    }

                </div>
            </div>
        </section>
        )
    }
}