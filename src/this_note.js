/**
 * Created on 17/3/8.
 * @author Ferrair Wang
 */
document.addEventListener('DOMContentLoaded', function () {
    var oTable = document.getElementById('sentence-note-view-table');

    for (var i = 0, len = localStorage.length; i < len; i++) {
        var sKey = localStorage.key(i);
        var sValue = localStorage[sKey];

        var oTableLength = oTable.rows.length;
        var oRow = oTable.insertRow(oTableLength - 1);

        var sTargetURL = chrome.extension.getBackgroundPage().sTargetURL;

        // insert cell and show table
        if (sTargetURL === sKey.split("---")[0]) {
            oRow.insertCell(0).innerHTML = sKey.split("---")[1];
            oRow.insertCell(1).innerHTML = sValue;
        }
    }
});