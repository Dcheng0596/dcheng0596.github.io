import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import homeStyles from "../styles/home.module.scss"
import logo from "../images/logo.svg"
import "../styles/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={homeStyles.name}>
      <img className={homeStyles.logo} src={logo} alt="D.C"></img>
      <h1 className={homeStyles.arien}>arien</h1>
      <h1 className={homeStyles.heng}>heng</h1>
    </div>
    <p className={homeStyles.tag}>Developer <span>that</span> develops <span>on</span> devices</p>
  </Layout>
)

export default IndexPage
