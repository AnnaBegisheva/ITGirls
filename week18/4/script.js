function generateNote() {
    let newNote = document.getElementById("newNote").value;
    let newNoteTitle = document.getElementById("newNoteTitle").value;
    let note = `${newNoteTitle} ${newNote}`

    if (localStorage.getItem(newNoteTitle) == null) {
        addNote(newNote, newNoteTitle);
    } else {
        alert("Заголовок уже существует");
    }
}

function addNote(newNote, newNoteTitle) {

    localStorage.setItem(`${newNoteTitle}`, newNote);
    if (newNote != '') {
        createDiv(newNote, newNoteTitle);
    }
}

function createDiv(newNote, newNoteTitle) {
    let noteList = document.createElement('div');
    noteList.innerHTML = `<strong>${newNoteTitle}</strong> <br> ${newNote}`;
    notesContainer.append(noteList);
}

document.addEventListener("DOMContentLoaded",
    function () {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            createDiv(value, key);
        }
    });