# ChromeExtension-GoogleDocsUtil
When writing a Chrome Extension, in some cases you want to work with Google Docs. 
But working with Google Docs is not easy, it does not follow the normal way of interacting with homepages from a Chrome Extension. 

This googleDocsUtil.js script is made to help interacting with a Google Docs document. It works as a Content Script and should be accessed from another of your Content Scripts.


# Features
- Get the text of the Google Docs document
- Get the caret index in the Google Docs document
- Get the current word at the caret
- Get the user selection in the Google Docs document
- Highlight from/to index in the Google Docs document
- Remove highlight

# Example
Please see ![sample-extension](/sample-extension) for a fully working Chrome Extension which can get the text from a Google Doc page. 

# Usage

```
//contentScript.js

//Get the current state of the Google Docs document. After a change to the google docs document call the getGoogleDocument() again to get the changes.
var googleDocument = googleDocsUtil.getGoogleDocument();

//All the text is in the array googleDocument.text
//NOTICE: if the Google Docs document contains multiple pages, not all the pages may be loaded
var loadedText = "";
for(var i= 0; i < googleDocument.text.length; i++)
{
   console.log("Text at line " + i + ": " + googleDocument.text[i]);
}

//The selected text
console.log("The selected text is: " + googleDocument.selectedText);


//Get the word at the caret
var currentWord = googleDocsUtil.getWordAtCaret(googleDocument);
console.log("The caret is at index: " + googleDocument.caret.index);
console.log("The caret is on line: " + googleDocument.caret.line);
console.log("The caret is at the index on line: " + googleDocument.caret.lineIndex);
console.log("The caret is at the word: " + currentWord);

//Gets the text from index 10 to 20
var foundText = googleDocsUtil.getText(10, 20, googleDocument);

//Higlights the index 10 to 20
googleDocsUtil.highlight(10, 20, googleDocument);

//Removes the highlight
//googleDocsUtil.removeHighlightNodes();

```

# Interface
googleDocsUtil provides the following Interface: 

```
function getGoogleDocument(); /* Returns a googleDocument object used below*/
function findWordAtCaret(googleDocument);
function getText(startIndex, endIndex, googleDocument);
function highlight(startIndex, endIndex, googleDocument);
function removeHighlightNodes();
function cleanDocumentText(text);
```

## function getGoogleDocument()
**Desciption** 

The main call to get all the information about the Google Docs document.

**Arguments**

None

**Returns** 

An element containing
```
{
  text: [] /*An array of strings, each string is a line in the document. Means the number of strings is the number of lines in the document*/ 
  selectedText /* Contains the selected text, if no text is selected it is an empty string */
  caret: {
    index /* index of the caret in the document */
    lineIndex /* index of the caret on the current line */
    line /*the line the caret is on*/
  },
  nodes: /* Google Docs have all its text in span elements of class "kix-wordhtmlgenerator-word-node", the nodes is a list of metadata about each node */
  [{
    index /* The start index of the node */
	line /* The line the node is on*/
	lineIndex /* The start index of the node on the line*/
	node /* A reference to the "kix-wordhtmlgenerator-word-node" containing the actual text*/
	lineElement /* A reference to the "kix-lineview" which contains the node element*/
	text /* The text the node contains */
  }]
}
```

## function findWordAtCaret(googleDocument)
**Desciption** 

Returns the word the caret is at. If there is no word at the cursor, it will return an empty string.

**Arguments** 

googleDocument: Returned from getGoogleDocument()

**Returns** 

A string of the found word at the cursor

## function getText(startIndex, endIndex, googleDocument)
**Desciption** 

Get the text within from the start index to end index

**Arguments** 

startIndex: The start index in the text

endIndex: The end index in the text

googleDocument: The returned object from getGoogleDocument() 

**Returns** 

A string of the found text


## function highlight(startIndex, endIndex, googleDocument)
**Desciption** 

Creates an highlight starting at startIndex and ends at endIndex. If the text changes remove the highlight and set a new highlight

**Arguments** 

startIndex: The start index in the text

endIndex: The end index in the text

googleDocument: Returned from getGoogleDocument()

**Returns** 

void
 
## function removeHighlightNodes()
**Desciption** 
Removes all highlights

**Arguments** 

None

**Returns** 

void

## function cleanDocumentText(text)
**Desciption** 

If the text from the document is recived from elsewhere, you can use this method to clean the text of nonsensable characters.
 
**Arguments** 

text: Text from the Google Docs document recived from elsewhere. 

**Returns** 

The text cleaned of \u200B and non breaking spaces.

# Limitations
It can only get the text of what is loaded in Google Docs. 
When you open a Google Docs document, Google Docs only load the text of first page. The rest of the text is not loaded before the user scrolls down.

# Not implemented
- Get other peoples caret index in the same document
- Get other peoples selected text in the same document

# MIT License 
Copyright (c) 2017 Dictus ApS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.