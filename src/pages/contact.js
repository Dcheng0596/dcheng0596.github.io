import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import git from "../images/social/gitHub.png"
import link from "../images/social/linkedIn.png"
import contactStyles from "../styles/contact.module.scss"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <blockquote className={contactStyles.quote}>
      <p>"Knowing is not enough, we must apply. Willing is not enough, we must do"</p>
      <footer>—Johann Wolfgang von Goethe</footer>
    </blockquote>
    <div className={contactStyles.links}>
      <a href="https://www.github.com/dcheng0596" target="_blank">
        <img src={git} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/dariencheng" target="_blank">
        <img src={link} alt="LinkedIn" />
      </a>
    </div>
  </Layout>
)

export default ContactPage