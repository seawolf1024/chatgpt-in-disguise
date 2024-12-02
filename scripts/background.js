chrome.action.onClicked.addListener((tab) => {
  console.log("Tab listener!");
    if (tab.url && tab.url.includes("chatgpt.com")) {
      console.log("ChatGpt website detected!!!");
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["scripts/content.js"]
      });
    }else{
      console.log("Not ChatGpt website detected!!!");
    }
  });
  