import React from "react"
import IntroSection from "./IntroSection/IntroSection"
import ReviewsSection from "./ReviewsSection/ReviewsSection"
import AuthorSection from "./AuthorSection/AuthorSection"
import SubscribeSection from "./SubscribeSection/SubscribeSection"
import "./Sections.scss"

const Sections = () => (
  <div id="sections-wrapper">
    <IntroSection />
    <ReviewsSection />
    <AuthorSection />
    <SubscribeSection />
  </div>
)

export default Sections
