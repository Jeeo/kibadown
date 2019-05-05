document.querySelector('#button').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, 
      {file: './scripts/content.js'})
  });
})

