/**
 * Created on 17/3/1.
 * @author Ferrair Wang
 */

/**
 * Add event listeners once the DOM has fully loaded by listening for the
 * `DOMContentLoaded` event on the document, and adding your listeners to
 * specific elements when it triggers.
 *
 * @see https://developer.chrome.com/extensions/contentSecurityPolicy
 **/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('idPopupViewAllNotesButton').addEventListener('click', function () {
        /*
         * create a new tab named all_notes.html by call chrome'API.
         */
        chrome.tabs.create({
            url: chrome.extension.getURL("all_notes.html"),
            active: true
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('idPopupViewThisPageButton').addEventListener('click', function () {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            /*
             * Save current page url.
             */
            chrome.extension.getBackgroundPage().sTargetURL = tabs[0].url;
            /*
             * create a new tab named this_note.html by call chrome'API.
             */
            chrome.tabs.create({
                url: chrome.extension.getURL("this_note.html"),
                active: true
            });
        });
    });
});