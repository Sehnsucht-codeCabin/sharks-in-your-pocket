import React from "react"
import swal from "@sweetalert/with-react"

export const addMoveLabelClass = event => {
  removeLabelClass()

  if (event.target.tagName === "LABEL") {
    event.target.classList.add("move-label")
  } else {
    event.target.previousElementSibling.classList.add("move-label")
  }
}

export const removeLabelClass = () => {
  document.querySelectorAll(".field-info").forEach(el => {
    if (el.value === "") {
      el.previousElementSibling.classList.remove("move-label")
    }
  })
}

export const sendMessage = event => {
  event.preventDefault()
  if (
    document.getElementById("name").value === "" &&
    document.getElementById("e-mail").value === ""
  ) {
    fillFieldWarning()
  } else {
    asyncAjaxRequest()
  }
}

const fillFieldWarning = () => {
  swal({
    content: <div>You need to fill in both input fields, please.</div>,
    icon: "warning",
    button: "",
    closeOnClickOutside: true,
    closeOnEsc: true,
    className: "customAlert",
  })
}

const asyncAjaxRequest = () => {
  // const newAsyncRequest =
  //   window.XMLHttpRequest == true
  //     ? new XMLHttpRequest()
  //     : new ActiveXObject("Microsoft.XMLHTTP")
  const newAsyncRequest = new XMLHttpRequest()
  newAsyncRequest.open("POST", "mailer.php", true)
  newAsyncRequest.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
  )
  newAsyncRequest.onreadystatechange = () => {
    if (newAsyncRequest.readyState === 4 && newAsyncRequest.status === 200) {
      // SUCCESS
      swal({
        content: (
          <div>
            Your order was received successfully. Thank you very much and we'll
            get back to you pretty soon :)
          </div>
        ),
        icon: "success",
        button: "",
        closeOnClickOutside: true,
        closeOnEsc: true,
        className: "customAlert",
      }).then(response => {
        // empty all fields
        document.getElementById("name").value = ""
        document.getElementById("e-mail").value = ""
        removeLabelClass()
      })
    } else {
      // ERROR
      swal({
        content: (
          <div>Oops, seems like we've run into an issue. Please try again.</div>
        ),
        icon: "error",
        button: "",
        closeOnClickOutside: true,
        closeOnEsc: true,
        className: "customAlert",
      }).then(response => {
        // empty all fields
        document.getElementById("name").value = ""
        document.getElementById("e-mail").value = ""
        removeLabelClass()
      })
    }
  }
  newAsyncRequest.send(serializeData(document.getElementById("contactForm")))
}

const serializeData = form => {
  var field,
    l,
    s = []

  if (typeof form == "object" && form.nodeName == "FORM") {
    var len = form.elements.length

    for (var i = 0; i < len; i++) {
      field = form.elements[i]
      if (
        field.name &&
        !field.disabled &&
        field.type != "button" &&
        field.type != "file" &&
        field.type != "hidden" &&
        field.type != "reset" &&
        field.type != "submit"
      ) {
        if (field.type == "select-multiple") {
          l = form.elements[i].options.length

          for (var j = 0; j < l; j++) {
            if (field.options[j].selected) {
              s[s.length] =
                encodeURIComponent(field.name) +
                "=" +
                encodeURIComponent(field.options[j].value)
            }
          }
        } else if (
          (field.type != "checkbox" && field.type != "radio") ||
          field.checked
        ) {
          s[s.length] =
            encodeURIComponent(field.name) +
            "=" +
            encodeURIComponent(field.value)
        }
      }
    }
  }
  return s.join("&").replace(/%20/g, "+")
}
