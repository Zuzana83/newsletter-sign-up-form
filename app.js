const subscribeForm = document.getElementById("subscribe-form");
const emailEl = document.getElementById("email");
const errorEl = document.querySelector(".error");
const sectionEl = document.querySelector(".subscribe");
const messageEl = document.querySelector(".msg-wrapper");
const subscribeEl = document.querySelector(".subscribe-form-wrapper");
const dismissBtn = document.querySelector(".dismiss-btn");
const msgEmailEl = document.getElementById("subscribe-email");

const emailPattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
let userEmailAddress;

const handleEmailChange = () => {
    const emailAddress = emailEl.value.trim();

    userEmailAddress = emailAddress?emailAddress:"";

    // if(emailAddress) {
    //     userEmailAddress = emailAddress;
    // } else {
    //     userEmailAddress = ""
    // }

    if(!emailAddress) {
        errorEl.classList.add("show");
    } else if (!emailPattern.test(emailAddress)) {
        errorEl.classList.add("show");
        emailEl.classList.add("invalid")
    } else {
        errorEl.classList.remove("show");
        emailEl.classList.remove("invalid")
    }
}

const showMessage = () => {
    subscribeEl.classList.add("hide");
    messageEl.classList.add("show");
    msgEmailEl.textContent = userEmailAddress;
}

const hideMessage = () => {
    subscribeEl.classList.remove("hide");
    messageEl.classList.remove("show");
}

emailEl.addEventListener("change", handleEmailChange);

subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault()
    handleEmailChange();
    showMessage();
    emailEl.value = "";
});

dismissBtn.addEventListener("click", hideMessage);