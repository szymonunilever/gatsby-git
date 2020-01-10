import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/gatsby-icon.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `10px`,
      }}
    >
      <h1 style={{ margin: 0 }}>
      <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize:`18px`,
          }}>
        <img 
        style={{
           width:`50px`,
           margin:`0`,
          }} 
          src={Logo} alt="Gaatsby Git Logo Site" />
          <span>{siteTitle}</span>
        </Link>
      </h1>
    </div>
    <ul style={{
         background:`grey`,
         margin:`0 auto`,
         width: `960px`,
        }}>
      <li style={{
        display:`inline-block`,
        margin: `10px`,
      }}
      >
        <Link style={{
         color: `#ffffff`,
        }}
        to="/">Home</Link></li>
      <li
      style={{
        display:`inline-block`,
        color: `#ffffff`,
        margin: `0 10px`,
      }}
      >
        <Link style={{
         color: `#ffffff`,
        }}
         to="/about">About</Link></li>
               <li
      style={{
        display:`inline-block`,
        color: `#ffffff`,
        margin: `0 10px`,
      }}
      >
        <Link style={{
         color: `#ffffff`,
        }}
         to="/page-2">Page2</Link></li>
               <li
      style={{
        display:`inline-block`,
        color: `#ffffff`,
        margin: `0 10px`,
      }}
      >
        <Link style={{
         color: `#ffffff`,
        }}
         to="/page-3">Page3</Link></li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
