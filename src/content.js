/**
 * Created on 17/3/4.
 * @author Ferrair Wang
 */
function dynamicLoad(filename) {
    var fileRef = document.createElement("link");
    fileRef.setAttribute("rel", "stylesheet");
    fileRef.setAttribute("type", "text/css");
    fileRef.setAttribute("href", filename);
    document.head.appendChild(fileRef);
}


var sentenceNotePopup = document.createElement("div");
sentenceNotePopup.id = "sentenceNotePopup";

var sentenceNotePopupTitle = document.createTextNode("Note Here!");
sentenceNotePopup.appendChild(sentenceNotePopupTitle);

var sentenceNotePopupInput = document.createElement("input");
sentenceNotePopup.appendChild(sentenceNotePopupInput);

var sentenceNotePopupSubmit = document.createElement("button");
sentenceNotePopup.appendChild(sentenceNotePopupSubmit);

// document.body.appendChild(sentenceNotePopup);