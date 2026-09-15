const website = document.getElementById("website");
const login = document.getElementById("login");
const setTimeOut = document.getElementById("timeout");
const set_Interval = document.getElementById("setInterval");
const sync = document.getElementById("sync");
const async = document.getElementById("async");
const promises = document.getElementById("promises");
const promises_all = document.getElementById("promises_all");
const async_await = document.getElementById("async_await");
const axios = document.getElementById("axios");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const login_btn = document.getElementById("login_btn");
const paragraph = document.getElementById("message");

website?.addEventListener("click", () => {
    window.location.href = "https://www.example.com";
    });
login?.addEventListener("click", () => {
    window.location.href = "login.html"
})
setTimeOut?.addEventListener("click", () => {
    window.location.href = "set_Timeout.html"
})
set_Interval?.addEventListener("click", () => {
    window.location.href = "set_Interval.html"
})
sync?.addEventListener("click", () => {
    window.location.href = "sync.html"
})
async?.addEventListener("click", () => {
    window.location.href = "async.html"
})
async_await?.addEventListener("click", () => {
    window.location.href = "async_await.html"
})
promises?.addEventListener("click", () => {
    window.location.href = "promises.html"
})
promises_all?.addEventListener("click", () => {
    window.location.href = "promises_all.html"
})
axios?.addEventListener("click", () => {
    window.location.href = "axios.html"
})
const checkCredentials = (usernameInput, passwordInput) => {
    if (usernameInput.length < 6){
        throw new Error("Username text must be at least 6 characters");
    }
    if (passwordInput.length < 10){
        throw new Error("Password text must be at least 10 characters");
    }
}
const login_check = () => {
    const usernameText = usernameInput.value;
    const passwordText = passwordInput.value;
    try {
        checkCredentials(usernameText, passwordText);
        paragraph.textContent ="Authenticated";
        paragraph.style.color ="green";
        username.value = "";
        password.value = "";
    }
    catch (error){
        paragraph.textContent =error.message;
        paragraph.style.color ="red";
    }
    finally {
        console.log("Login mission completed");
    }
}
login_btn?.addEventListener("click", login_check);

