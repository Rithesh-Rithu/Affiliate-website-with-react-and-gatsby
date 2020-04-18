import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Infoblock from "../components/Reuseable/Infoblock"
import Heading from '../components/Reuseable/Heading'


const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Infoblock heading="How can we help you?" />
    <section className="py-3">
            <Heading title="Contact Us"/> 
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
  </Layout>

)


export default ContactPage
