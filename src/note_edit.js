/**
 * Created on 17/3/4.
 * @author Ferrair Wang
 */

/*
 * get user select text and other configuration from background
 */
var oEditInit;

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sentence-note-popup-submit').addEventListener('click', onSaveNote);

    /*
     * get user select text and other configuration from background
     */
    oEditInit = chrome.extension.getBackgroundPage().oEditInit;

    document.getElementById('sentence-note-popup-label').innerHTML = oEditInit.sSelectionText;
});


function onSaveNote(oEvent) {
    oEvent.preventDefault();
    var sNote = document.getElementById("sentence-note-popup-input").value;

    var sSelectionText = oEditInit.sSelectionText;
    var sNotedPageURL = oEditInit.sNotedPageURL;
    var iIndex = oEditInit.iIndex;
    /*
     * Store the note created by user with key where the user note(URL + selectedText).
     */
    localStorage.setItem(sNotedPageURL + "---" + sSelectionText + "---" + iIndex, sNote);

    window.close();
}