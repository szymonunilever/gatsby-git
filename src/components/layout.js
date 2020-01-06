/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <Helmet>
          <meta charSet="utf-8" />

          <meta property="og:url" content="https://musing-hermann-232a26.netlify.com/" />
          <meta property="og:type" content="Szymon article" />
          <meta property="og:title" content="Szymon Title" />
          <meta property="og:description" content="Szymon Description of article." />
          <meta property="og:image" content="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" />


          <title>My Title is Szymon</title>
          <link rel="canonical" href="https://musing-hermann-232a26.netlify.com/" />
          <script type="text/javascript">
                    {`
                  var addthis_share = {
                    url: "${data.site.siteMetadata.siteUrl}",
                    passthrough : {
                      twitter: {
                        via: "CleverClickMe",
                        hashtags: "javascript,react, SzymonCode"
                      }
                    },
                  }
                `}
                  </script>
        </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <Link to="">Home page</Link>
        </footer>
      </div>
    </>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
