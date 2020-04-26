import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Infoblock from "../components/Reuseable/Infoblock"


const ContactPage = () => (
  <Layout >
    <SEO title="Contact" />
    <div className="cont">
    <div className="container">
    <div className="row">
        <div className="col-12 col-md-6 info">
    <Infoblock heading="How can we help you?" />
        </div>
    <div className="col-12 col-md-6 info">
    <section className="py-3">
            <h1 className="display-3 conthead ">Contact Us</h1> 
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/mpzjgzgw" method="POST">
                    <div className="form-group">
                        <input type="text" name="name" id="name" placeholder="Your Name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Your Email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="phone" id="phone" placeholder="Your Mobile" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <textarea type="text" name="description" id="description" placeholder="Your message" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
                </form>
            </div>
        </section>
        </div>        </div></div></div>
  </Layout>

)


export default ContactPage
