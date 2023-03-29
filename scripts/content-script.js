window.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    const inputEmail = getEmail();
    const inputPassword = getEmail();
  }, 2000);
});

function getEmail() {
  return document.querySelector("input[type='email']");
}

function getPassword() {
  return document.querySelector("input[type='password']");
}
