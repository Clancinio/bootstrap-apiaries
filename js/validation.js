const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const mail = document.getElementById("mail");
const phone = document.getElementById("phone");
const msg = document.getElementById("msg");
const form = document.getElementById("contact-form");
const errorElement = document.getElementById("error");
const successElement = document.getElementById("success");

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
        alert("Thank you. Your message has been sent. We will get back to you as soon as possible.");
    }

});