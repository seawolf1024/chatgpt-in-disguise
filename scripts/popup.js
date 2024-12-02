
document.getElementById("applyStyles").addEventListener("click", () => {
    // Query the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      
      // Check if the active tab is ChatGPT
      if (activeTab.url && activeTab.url.includes("chatgpt.com")) {
        console.log("ChatGPT website detected! Applying styles...");
        
        // Inject the content script
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          files: ["scripts/content.js"],
        });
      } else {
        console.log("Not on ChatGPT website.");
        alert("This action only works on https://chatgpt.com.");
      }
    });
  });
  