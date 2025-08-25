import { getCookie } from "./cookie.js";

const handleAuth = () => {
  const cookie = getCookie();
  const url = document.URL;

  if (
    (cookie && url.includes("auth")) ||
    (!cookie && url.includes("dashboard"))
  ) {
    location.assign("index.html");
    return false;
  }
};

export default handleAuth;
