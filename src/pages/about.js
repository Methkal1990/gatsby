import React from "react"
// import Layout from "../components/layout"
import Head from '../lang-switch/Head/index'
import { Layout } from "../lang-switch/"
import AboutMain from "../components/about/aboutMain"
import TeamList from "../components/about/teamList"
import Testimonials from "../components/about/testimonials"

const About = () => {
  return (
    <Layout>
      <>
        <Head title="about" />
        <section className="container">
          <div className="row">
            <h1 className="page-header">About Us</h1>
          </div>
          <AboutMain />
          <TeamList />
          <Testimonials />
        </section>
      </>
    </Layout>
  )
}

export default About
