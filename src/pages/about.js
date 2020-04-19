import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Infoblock from "../components/Reuseable/Infoblock"
import DualInfoblock from "../components/Reuseable/DualInfoblock"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    <DualInfoblock heading="A message from CEO" img="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?cs=srgb&dl=portrait-of-a-woman-247204.jpg&fm=jpg" />
    <Infoblock heading="About Vision" /> 
  </Layout>

)


export default AboutPage
