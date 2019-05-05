chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'www.facebook.com'},
          css: ["video"]
      }),
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

})

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  const { url } = message;
  console.log(url)
  chrome.downloads.download({url: url}, function (id){
    return
  });
});