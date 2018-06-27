// JSON to be injected into the google document the purpose of this is
// to respond to the message sent by the popup to the page, so that
// the page can respond with the selected text.

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        var googleDocument = googleDocsUtil.getGoogleDocument();
        console.log("The selected text is: " + googleDocument.selectedText);
        sendResponse(googleDocument.selectedText);
    }) ;
