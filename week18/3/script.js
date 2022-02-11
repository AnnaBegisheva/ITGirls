const comments = [];

function checkSpam() {
    let str = document.getElementById("newComment").value;
    str = str.replace(/viagra/ig, "***")
    str = str.replace(/xxx/ig, "***")

    comments.push(str);
    generateComment()
}

function generateComment() {
    let str = document.getElementById("newComment").value;
    let name = document.getElementById("author").value;

    if (str != '' && name !='') {
        let commentBox = document.createElement('div');
        for (let comment of comments) {
            commentBox.innerHTML = `${name}: ${comment}`
        }
        message.append(commentBox);
    }
    checkAuthor()
}

document.addEventListener("DOMContentLoaded",
    function () {
        let name = localStorage.getItem('name');
        if (name != null) {
            document.getElementById('author').value = name;
        }
        generateComment();
    });

function checkAuthor() {
    let author = document.getElementById('author').value;

    if (localStorage.getItem('name') == null || localStorage.getItem('name') != author) {
        localStorage.setItem('name', author);
    }
};

