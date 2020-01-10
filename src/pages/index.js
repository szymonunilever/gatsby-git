import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import VideoPlayer from "../components/VideoPlayer"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey Beautiful People from far galaxy!!!</h1>
    <p>Witojcie w naszej bajce. Gdzie kelner lata po niebie :)</p>
    <p>Cos tu jeszzcze zmienimy, co ty na to?</p>
    <Link to="<www.onet.pl">New link</Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <VideoPlayer />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
