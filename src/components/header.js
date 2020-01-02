import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
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
