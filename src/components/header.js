import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/logo.svg"
import headerStyles from  "../styles/header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <nav>
      <ul className={headerStyles.navList}>
        <li className={headerStyles.logo}>
          <a href="/">
            <img src={logo} alt="logo" width="25" />
          </a>
        </li>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/projects">PROJECT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
