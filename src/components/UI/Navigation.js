import React from "react"
import "./Navigation.scss"
import * as NavigationActions from "./NavigationActions"

const Navigation = () => {
  return (
    <React.Fragment>
      {/* button to activate nav */}
      <div id="nav-bar">
        <button
          id="nav-bar__hamburguer-btn"
          onClick={() => {
            NavigationActions.openNav()
          }}
        >
          <span id="nav-bar__hamburguer-btn-span" />
        </button>
      </div>
      {/* hidden nav */}
      <nav>
        <ul>
          <a className="menu-link" href="#book-section">
            <li
              className="menu-item"
              onClick={() => {
                NavigationActions.openNav()
              }}
            >
              <span>The Book</span>
            </li>
          </a>
          <a className="menu-link" href="#reviews-section">
            <li
              className="menu-item"
              onClick={() => {
                NavigationActions.openNav()
              }}
            >
              <span>Reviews</span>
            </li>
          </a>
          <a className="menu-link" href="#author-section">
            <li
              className="menu-item"
              onClick={() => {
                NavigationActions.openNav()
              }}
            >
              <span>The Author</span>
            </li>
          </a>
          <a className="menu-link" href="#contact-section">
            <li
              className="menu-item"
              style={{ borderBottom: "0" }}
              onClick={() => {
                NavigationActions.openNav()
              }}
            >
              <span>Subscribe and Contact</span>
            </li>
          </a>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Navigation
