import React from "react"
import "./IntroSection.scss"
import BookCover from "../../../images/book-cover-ipad.png"
import swal from "@sweetalert/with-react"

const sendNotification = () => {
  // swal({
  //   content: <div>You need to fill in both input fields, please.</div>,
  //   icon: "warning",
  //   button: "",
  //   closeOnClickOutside: true,
  //   closeOnEsc: true,
  //   className: "customAlert",
  // })
}

const IntroSection = () => (
  <section id="book-section">
    <div className="section-content-wrapper">
      <p className="section-id" id="book">
        The Book
      </p>
      <div className="section-sub-content-wrapper">
        <div id="book-section__cover-wrapper">
          <img alt="Book Cover" src={BookCover} />
        </div>
        <div id="book-section__description-wrapper">
          <h1>UNSHARK YOUR CHILDREN.</h1>

          {/* <p id="book-title">Sharks In Your Pocket</p>
          <p style={{ marginTop: "5px" }}>by Daniel Silva</p> */}
          <p id="punchline">
            A dangerous book, not for your kids but for capitalism itself.
          </p>
          <button
            onClick={() => {
              sendNotification()
            }}
          />
          <p id="offer">(printed book + digital e-book bundle)</p>
        </div>
        <div id="book-section__sponsor-wrapper">
          <div className="book-section__sponsor" />
          <div className="book-section__sponsor" />
          <div className="book-section__sponsor" />
          <div className="book-section__sponsor" />
        </div>
      </div>
    </div>
  </section>
)

export default IntroSection
