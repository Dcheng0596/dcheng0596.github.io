import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import headShot from "../images/headShot.jpeg"
import aboutStyles from "../styles/about.module.scss"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className={aboutStyles.about}>
      <div className={aboutStyles.border}>
        <img className={aboutStyles.headShot} src={headShot} alt="Darien Cheng"/>
      </div>
      <article className={aboutStyles.aboutMe}>
        <h1>About Me</h1>
        <p>
          Hi, my name's Darien and I'm a graduate from CUNY Brooklyn College with a B.S in Computer Science.
          Born and raised in Brooklyn I have a huge love for the city and after a half a year journey in China
          I am back to start a career in Software Development.
        </p>
        <p>
          I love coding because it's always a journey. It's a long road of problem solving and debugging but at the
          end of it there's something to show for it. There is always something new to learn or old to revisit and
          room to grow. I am most proficient with C++, C#, Java and currently interested in Front-End technologies and tools such as Sass, React, Gatsby, and Node.
        </p>
        <p>
          When I'm not building something or thinking up another project you can find me sketching, playing cards or spending a day gaming with friends. 
        </p>
      </article>
    </div>
  </Layout>
)

export default AboutPage
