function generateNote() {
    let newNote = document.getElementById("newNote").value;
    let newNoteTitle = document.getElementById("newNoteTitle").value;
    let note = `${newNoteTitle} ${newNote}`

    if (localStorage.getItem(newNoteTitle) == null && newNote != '' && newNoteTitle != '') {
        addNote(newNote, newNoteTitle);
        document.getElementById("newNote").value = "";
        document.getElementById("newNoteTitle").value = "";
    } else {
        alert("Заголовок уже существует или поле не заполнено");
    }
}

function addNote(newNote, newNoteTitle) {
    localStorage.setItem(newNoteTitle, newNote);
    if (newNote != '' && newNoteTitle != '') {
        createDiv(newNote, newNoteTitle);
    } else {
        alert("Добавьте заметку");
    }
}

function createDiv(newNote, newNoteTitle) {
    let noteList = document.createElement('div');
    noteList.innerHTML = `<strong>${newNoteTitle}</strong> ${newNote}`;
    noteList.id = newNoteTitle;
    notesContainer.append(noteList);
    createBtn(noteList)
}

function createBtn(noteList, newNoteTitle) {
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Удалить заметку";
    noteList.append(deleteBtn);
    deleteBtn.addEventListener("click", () => noteList.remove());
    deleteBtn.addEventListener("click", () =>  localStorage.removeItem(noteList.id));
}

        document.addEventListener("DOMContentLoaded",
            function () {
                for (let i = 0; i < localStorage.length; i++) {
                    let key = localStorage.key(i);
                    let value = localStorage.getItem(key);
                    createDiv(value, key);
                }
            });