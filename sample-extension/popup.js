// This code runs in the popup window to communicate with the page
// itself, get the selected text, then display that result in the
// popup's html.

function setChildTextNode(elementId, text) {
  document.getElementById(elementId).innerText = text;
}

function displayHighlight() {
    setChildTextNode("snippet", "running...");

    console.log("displaying highlight in popup...") ;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.sendRequest(tab.id, "popup", function handler(response) {
            setChildTextNode("snippet", response);
        }) ;
    }) ;
}

// When popup window is loaded, immediately display the selectedText
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', displayHighlight) ;
}) ;
