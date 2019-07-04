import React from "react"
import "./ReviewsSection.scss"
import Peterson from "../../../images/peterson.jpg"
import Dahlia from "../../../images/dahlia.jpg"
import Justin from "../../../images/justin.jpg"
import Gregory from "../../../images/frost.jpg"
import Alexa from "../../../images/alexa.png"

const ReviewsSection = () => (
  <section id="reviews-section">
    <div className="section-content-wrapper">
      <p className="section-id" id="reviews">
        Reviews
      </p>

      <div className="section-sub-content-wrapper">
        <p className="section-title">Bitten readers</p>

        <div className="reviews-section__column-wrapper">
          <div className="reviews-section__review-wrapper">
            <div className="reviews-section__quote-wrapper">
              <div className="balloon">
                “After reading this book, my kids back home asked me to quit my
                job!”
              </div>
            </div>

            <div className="reviews-section__author-wrapper">
              <img src={Peterson} alt="David Crock" />
              <p>David Crock</p>
              <em>M. Director at BitBite</em>
            </div>
          </div>

          <div className="reviews-section__review-wrapper">
            <div className="reviews-section__quote-wrapper">
              <div className="balloon">
                “Powerful and yet so simple to understand. I think adults should
                read it, too.”
              </div>
            </div>

            <div className="reviews-section__author-wrapper">
              <img src={Dahlia} alt="Dahlia Lovelace" />
              <p>Dahlia Lovelace</p>
              <em>Office Manager at Yelp</em>
            </div>
          </div>
        </div>

        <div className="reviews-section__column-wrapper">
          <div className="reviews-section__review-wrapper">
            <div className="reviews-section__quote-wrapper">
              <div className="balloon">
                “My spreadsheets cried out loud when they knew I was reading
                it.”
              </div>
            </div>

            <div className="reviews-section__author-wrapper">
              <img src={Justin} alt="Justin Timberjust" />
              <p>Justin Timberjust</p>
              <em>Accountant at Malwire</em>
            </div>
          </div>

          <div className="reviews-section__review-wrapper">
            <div className="reviews-section__quote-wrapper">
              <div className="balloon">
                “It's cool. For the first time, I was not bored when reading
                about something.”
              </div>
            </div>

            <div className="reviews-section__author-wrapper">
              <img src={Gregory} alt="Gregory Alvarez" />
              <p>Gregory Alvarez</p>
              <em>Highschool Student</em>
            </div>
          </div>
        </div>

        <div className="reviews-section__column-wrapper">
          <div
            className="reviews-section__review-wrapper"
            style={{ marginBottom: 0 }}
          >
            <div className="reviews-section__quote-wrapper">
              <div className="balloon">
                “I liked the drawings of big sharks and little fishes swimming
                underwater.”
              </div>
            </div>

            <div className="reviews-section__author-wrapper">
              <img src={Alexa} alt="Alexa Patterson" />
              <p>Alexa Patterson</p>
              <em>Unsharked 5-year old</em>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ReviewsSection
