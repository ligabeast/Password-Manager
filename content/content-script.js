window.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    console.log(getEmail());
    console.log(getPassword());
  }, 2000);
});

function getEmail() {
  return document.querySelector("input[type='email']");
}

function getPassword() {
  return document.querySelector("input[type='password']");
}
