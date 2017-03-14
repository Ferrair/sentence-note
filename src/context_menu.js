/**
 * Created on 17/3/2.
 * @author Ferrair Wang
 */

/*
 * add custom item to chrome right-click menu (context menu)
 */
chrome.contextMenus.create({

    "title": "Note",
    "contexts": ["all"],
    "onclick": showNotePopup
});

/*
 * Save user select text and other configuration and pass it to note_edit.js
 */
var oEditInit;

/*
 * Save target noted page's URL.
 */
var sTargetURL;

/**
 * @function
 * @description show sentenceNotePopup that user can note here.
 * @param info Information about the item clicked and the context where the click happened.
 * @param tab The details of the tab where the click took place.
 */
function showNotePopup(info, tab) {
    var sSelectionText = info['selectionText'];
    var sNotedPageURL = info['pageUrl'];

    oEditInit = {
        sSelectionText: sSelectionText,
        sNotedPageURL: sNotedPageURL,
        iIndex: 0
    };

    chrome.tabs.create({
        url: chrome.extension.getURL('../note_edit.html'),
        active: false
    }, function (tab) {
       chrome.windows.create({
            tabId: tab.id,
            type: 'popup',
            focused: true
        });
    });
}