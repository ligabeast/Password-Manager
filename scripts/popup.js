const automaticLogin = document.querySelector("#automatic_login");
const askBeforeSave = document.querySelector("#ask_before_save");
const managePasswords = document.querySelector(".Logo-Container");

function initializeOptions() {
  chrome.storage.sync.get(["ask_before_save"]).then((result) => {
    askBeforeSave.checked = result.ask_before_save;
  });

  chrome.storage.sync.get(["automatic_login"]).then((result) => {
    automaticLogin.checked = result.automatic_login;
  });
}
initializeOptions();

automaticLogin.addEventListener("change", (e) => {
  chrome.storage.sync.set({ automatic_login: automaticLogin.checked });
});

askBeforeSave.addEventListener("change", (e) => {
  chrome.storage.sync.set({ ask_before_save: askBeforeSave.checked });
});

managePasswords.addEventListener("click", (e) => {
  chrome.tabs.create({ url: "html/options.html" });
});
