chrome.storage.local.get({ option: "default" }, function (data) {
  chrome.storage.local.set(data /*...*/);
});
