function initializeOptions() {
  chrome.storage.sync.get(["ask_before_save"]).then((result) => {
    ask_before_save.checked = result.ask_before_save;
  });

  chrome.storage.sync.get(["automatic_login"]).then((result) => {
    automatic_login.checked = result.automatic_login;
  });
}
initializeOptions();

const automatic_login = document.querySelector("#automatic_login");
const ask_before_save = document.querySelector("#ask_before_save");

automatic_login.addEventListener("change", (e) => {
  chrome.storage.sync.set({ automatic_login: automatic_login.checked });
});

ask_before_save.addEventListener("change", (e) => {
  chrome.storage.sync.set({ ask_before_save: ask_before_save.checked });
});
