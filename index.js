import { getCookie } from "./utils/cookie.js";

const loginButton = document.getElementById("login");
const dashboardButton = document.getElementById("dashboard");

const init = () => {
  const cookie = getCookie();

  cookie
    ? (loginButton.style.display = "none")
    : (dashboardButton.style.display = "none");
};

document.addEventListener("DOMContentLoaded", init);
