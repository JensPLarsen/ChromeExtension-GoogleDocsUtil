# ChromeExtension-GoogleDocsUtil
When writing a Chrome Extension, in some cases you want to work with Google Docs. 
But working with Google Docs is not easy, it does not follow the normal way of interacting with homepages from a Chrome Extension. 

This googleDocsUtil.js script is made to help interacting with a Google Docs document. It works as a Content Script and should be accessed another of your Content Scripts.


# Features
- Get the text of the Google Docs document
- Get the caret index in the Google Docs document
- Highlight from/to index in the Google Docs document
- Remove highlight

# Installation
1. Add the googleDocsUtil.js to your Google Extension folder
2. Add the googleDocsUtil.js as a content script in your manifest.json


# Limitations
It can only get the text of what is loaded in Google Docs. 
If you have many pages in a Google Docs, the first time you open the document Google Docs will only load the text of first page. This means we can only get the text of the first page before the user scrolls to the bottom of the page. 

# Not implemented
- Get the selected text
- Get the other peoples caret index
 

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