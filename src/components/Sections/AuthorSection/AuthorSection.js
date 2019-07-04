import React from "react"
import "./AuthorSection.scss"
import DanielPic from "../../../images/author-pic.png"

const AuthorSection = () => (
  <section id="author-section">
    <div className="section-content-wrapper">
      <p className="section-id" id="author">
        The Author
      </p>

      <div className="section-sub-content-wrapper">
        <p className="section-title">
          <span style={{ marginRight: "10px" }}>“</span>(...) I've been a
          storyteller since I can remember.
          <span style={{ marginLeft: "10px" }}>”</span>
        </p>

        <div>
          <div id="author-section__pic-wrapper">
            <img src={DanielPic} alt="Author Pic" />

            <div id="author-section__social-wrapper">
              <div>
                <i className="fa fa-twitter" />
              </div>
              <div>
                <i className="fa fa-facebook" />
              </div>
              <div>
                <i className="fa fa-linkedin" />
              </div>
            </div>
          </div>

          <div id="author-section__bio-wrapper">
            <div>
              <p>
                Hi! My name is Daniel and I've been a storyteller since I can
                remember.
              </p>
              <p>
                At the age of 10, I got an old typewriter and became a night owl
                that likes scribbling and imagining a whole world of things that
                end in "ing". You can find me at my desk torturing my pen with
                long labor hours.
              </p>
              <p>
                By reading this book, I hope you and your kids have the same
                amount of fun I had when I first wrote it. Cheers!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AuthorSection
