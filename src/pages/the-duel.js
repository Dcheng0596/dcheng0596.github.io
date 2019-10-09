import React, {useState, useEffect, useCallback} from "react"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"

import video from "../videos/the-duel.mp4"
import drop from "../images/social/dropBox.png"
import duelStyles from "../styles/duel.module.scss"

function TheDuelPage () {
  return (
    <Layout>
      <SEO title="The Duel" />
      <div className={duelStyles.container}>
        <h1>The Duel</h1>
        <video width="720" controls>
          <source src={video} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <div className={duelStyles.links}>
          <a href="https://www.dropbox.com/s/9gn8ex7xx2m2aas/the-duel-setup-windows.exe?dl=0" target="_blank">
            <img src={drop} alt="GitHub" />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default TheDuelPage
