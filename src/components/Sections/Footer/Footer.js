import React from "react"
import "./Footer.scss"
import * as FooterActions from "./FooterActions"

const Footer = () => (
  <footer>
    <p>Marco Abílio @ 2016 - 2019.</p>
    <p
      onClick={() => {
        FooterActions.viewDisclaimer()
      }}
    >
      Book cover Copyright Disclaimer!
    </p>
  </footer>
)

export default Footer
