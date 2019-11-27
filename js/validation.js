/**** 2.4.6.c - Validating form input by using appropriate JavaScript functions. ****/
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const mail = document.getElementById("mail");
const phone = document.getElementById("phone");
const msg = document.getElementById("msg");
const form = document.getElementById("contact-form");
const errorElement = document.getElementById("error");
const successElement = document.getElementById("success");

/****2.4.6.e - Use of BOM/DOM in emulating events through the use of event handlers. ********/
form.addEventListener("submit", (e) => {
    let messages = [];

    if (fName.value == "" || fName.value == null) {
        messages.push("First Name is required");
    }

    if (lName.value == "" || lName.value == null) {
        messages.push("Last Name is required");
    }

    if (mail.value == "" || mail.value == null) {
        messages.push("Email is required");
    }

    if (msg.value == "" || msg.value == null) {
        messages.push("Please provide a message");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(" \n ");
    } else {
        /********* 2.4.6.d - Use of JavaScript alerts for validation purposes. ********/
        alert("Thank you. Your message has been sent. We will get back to you as soon as possible.");
    }

});