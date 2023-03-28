chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ automatic_login: true, ask_before_save: false });
});
