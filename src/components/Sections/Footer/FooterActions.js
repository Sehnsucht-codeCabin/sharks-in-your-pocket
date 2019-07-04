import React from "react"
import swal from "@sweetalert/with-react"

export const viewDisclaimer = () => {
  swal({
    // title: "Project launched!",
    // text:
    //   "You can check the original book cover right here, which means that I do not own any rights over it and the one presented at the top of this page is just for presentation purposes. Thank you.",
    icon: "info",
    button: "",
    content: (
      <div>
        You can check the original book cover{" "}
        <a
          href="https://www.behance.net/gallery/35024783/Book-Cover-Sharks-In-Your-Pocket"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "orange" }}
        >
          right here
        </a>
        , which means that I do not own any rights over it and the one presented
        at the top of this page is just for presentation purposes. Thank you.
      </div>
    ),
    //confirmButtonColor: "#A5DC86",
    closeOnClickOutside: true,
    closeOnEsc: true,
    className: "customAlert",
  })
}
