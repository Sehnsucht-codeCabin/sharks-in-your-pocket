import React from "react"
import "./SubscribeSection.scss"
import * as SubscribeActions from "./SubscribeActions"

const SubscribeSection = () => (
  <section id="contact-section">
    <div className="section-content-wrapper">
      <p className="section-id" id="contact">
        Subscribe and Contact
      </p>

      <div className="section-sub-content-wrapper">
        <p className="section-title">
          Subscribe now and get the first two chapters for free!
        </p>

        <form id="contactForm" action="#" method="post">
          <label
            onClick={event => {
              SubscribeActions.addMoveLabelClass(event)
            }}
            htmlFor="name"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="field-info"
            onFocus={event => {
              SubscribeActions.addMoveLabelClass(event)
            }}
            onBlur={event => {
              SubscribeActions.removeLabelClass(event)
            }}
          />
          <label
            onClick={event => {
              SubscribeActions.addMoveLabelClass(event)
            }}
            htmlFor="e-mail"
          >
            Your e-mail
          </label>
          <input
            name="name"
            type="email"
            id="e-mail"
            className="field-info"
            onFocus={event => {
              SubscribeActions.addMoveLabelClass(event)
            }}
            onBlur={event => {
              SubscribeActions.removeLabelClass(event)
            }}
          />

          <button
            onClick={event => {
              SubscribeActions.sendMessage(event)
            }}
          />
        </form>

        <p className="section-title" style={{ marginTop: "40px" }}>
          Or contact us.
        </p>

        <div id="contact-section__block-wrapper">
          <div className="contact-section__contact-block">
            <div>
              <p>Milan</p>
            </div>
            <div>
              498 Clemi Road <br /> Italy 599491
            </div>
          </div>
          <div className="contact-section__contact-block">
            <div>
              <p>Paris</p>
            </div>
            <div>
              Overhoeksplein 2 <br /> 1031 KS France
            </div>
          </div>
          <div className="contact-section__contact-block">
            <div>
              <i className="fa fa-paper-plane" />
            </div>
            <div>
              info@publish.com <br /> +532 94 6459 200
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default SubscribeSection
