import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import git from "../images/social/gitHub.png"
import chuck from "../images/social/chuck.png"
import projectStyles from "../styles/projects.module.scss"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1 className={projectStyles.header}>Projects</h1>
    <div className={projectStyles.gridContainer}>
      <div>
        <h2><a href="https://smashframedata.com" target="_blank">Smash Frame Data</a></h2>
        <p>A responsive web app that displays frame data for Super Smash Brother games. 
           Features real-time character search filter and game toggle.
        </p>
        <p>Technologies: React.js, Node.js, Sass</p>
        <div className={projectStyles.links}>
          <a href="https://www.github.com/dcheng0596/smash-frame-data" target="_blank">
            <img src={git} alt="GitHub" />
          </a>
        </div>
      </div>
      <div>
        <h2><a href="/the-duel">The Duel</a></h2>
        <p>A client server Unity action game that outs two players head on over a network.
           Features a lobby based matching making system and real time combat with health tracking.
        </p>
        <p>Technologies: Unity, C#, HLAPI</p>
        <div className={projectStyles.links}>
          <a href="https://www.github.com/dcheng0596/4900project" target="_blank">
            <img src={git} alt="GitHub" />
          </a>
        </div>
      </div>
      <div>
        <h2><a href="https://www.openprocessing.org/sketch/598151" target="_blank">Target Practice</a></h2>
        <p>A processing sketch that tests and scores your mouse accuracy. Click the growing and shrinking 
           circles before they dissapear.
        </p>
        <p>Technologies: Processing, Processing.js</p>
        <div className={projectStyles.links}>
          <a href="https://www.openprocessing.org/sketch/598151" target="_blank">
            <img src={git} alt="GitHub" />
          </a>
        </div>
      </div>
      <div>
        <h2><Link to="/chuck">Chuck Norris Joke Generator</Link></h2>
        <p>We all could use a joke from time to time. Who better to than the man himself.</p>
        <p></p>
        <p>Technologies: Javascript</p>
        <div className={projectStyles.links}>
          <a href="https://en.wikipedia.org/wiki/Chuck_Norris" target="_blank">
            <img src={chuck} alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default ProjectsPage