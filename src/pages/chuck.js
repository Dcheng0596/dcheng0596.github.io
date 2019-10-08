import React, {useState, useEffect, useCallback} from "react"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"

import chuck from "../images/chuck.svg"
import chuckStyles from "../styles/chuck.module.scss"

function ChuckPage () {
  const [joke, setJoke] = useState([]);

  const handleClick = useCallback (() => {
    axios.get("http://api.icndb.com/jokes/random?exclude=[explicit]").
    then(res => {
        setJoke({
            joke: res.data.value.joke,
            id: res.data.value.id
        });
        console.log(joke);    
    });
  }, []);
  
    
  return (
    <Layout>
      <SEO title="Chuck" />
      <div className={chuckStyles.background}>
        <h1>Chuck Norris Joke Generator</h1>
        <button onClick={handleClick}>Generate</button>
        <h2>{joke.joke}</h2>
      </div>
    </Layout>
  )
}

export default ChuckPage
