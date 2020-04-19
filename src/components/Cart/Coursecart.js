import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'
import Img from 'gatsby-image'

const getCaty = items => {
    let holdItems = items.map(items => {
        return items.node.category
    })
    let holdCategories = new Set(holdItems)
    let categories = Array.from(holdCategories)
    categories = ["all", ...categories]
    return categories
}

export default class Coursecart extends Component {
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

        if (category==='all'){
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
            <section className="py-5">
                <div className="container pad">
                    <Heading title="Courses"/>
                    <div className="row my-3">
                        <div className="col-10 mx-auto text-center">
                            {this.state.mycategories.map((category, index) => {
                                return (
                                    <button 
                                    type="button" 
                                    className="btn btn-info m-3 px-3" 
                                    key={index} 
                                    onClick={() => {
                                        this.catyClick(category)
                                    }}
                                    >
                                        {category}
                                    </button>
                                )
                            })
                            }
                        </div>
                    </div>
                    <div className="row">
                        {this.state.mycourses.map(({node}) => {
                            return(
                                <div key={node.id} className="col-11 col-md-6 d-flex my-3 mx-auto">
                                    <Img fixed={node.image.fixed} />
                                    <div className="flex-group-1 px-3">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb=0">{node.title}</h6>
                                        </div>
                                        <p className="text-muted">
                                            <small>{node.description.description}</small>
                                        </p>
                                        <h6 className="mb=0 text-success">$ {node.price}</h6>
                                        <a className="btn btn-warning" href={node.description.description} target="_blank" role="button">Buy now</a>
                                    </div> 
                                </div>
                            )
                        })
                        } 
                    </div>
                </div>
            </section>
        )
    }
}
