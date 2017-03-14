/**
 * Created on 17/3/2.
 *
 * @author 王启航
 * @version 1.0
 */

document.addEventListener('DOMContentLoaded', function () {
    var oTable = document.getElementById('sentence-note-view-all-table');

    for (var i = 0, len = localStorage.length; i < len; i++) {
        var sKey = localStorage.key(i);
        var sValue = localStorage[sKey];

        var oTableLength = oTable.rows.length;
        var oRow = oTable.insertRow(oTableLength - 1);

        // insert cell and show table
        oRow.insertCell(0).innerHTML = sKey.split("---")[0];
        oRow.insertCell(1).innerHTML = sKey.split("---")[1];
        oRow.insertCell(2).innerHTML = sValue;
    }
});