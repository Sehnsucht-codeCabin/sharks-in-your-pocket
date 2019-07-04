import React, { Component } from "react"
import Navigation from "../components/UI/Navigation"
import Sections from "../components/Sections/Sections"
import Footer from "../components/Sections/Footer/Footer"
import SweetScroll from "sweet-scroll"
import { Helmet } from "react-helmet"

import "./index.scss"

class IndexPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sharks in Your Pocket</title>
          <link rel="canonical" href="http://sharksinyourpocket.surge.sh/" />
        </Helmet>
        {/* NAV SECTION */}
        <Navigation />
        {/* SECTIONS */}
        <Sections />
        {/* FOOTER */}
        <Footer />
      </React.Fragment>
    )
  }

  componentDidMount() {
    // init scroll
    new SweetScroll({
      trigger: "a[href^='#']",
      duration: 500, // Specifies animation duration in integer
      easing: "easeOutExpo", // Specifies the pattern of easing
      offset: 1,
      vertical: true,
      preventDefault: true,
    })
  }
}

export default IndexPage
