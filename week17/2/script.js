let comments = [];

function checkSpam() {
    let str = document.getElementById("newComment").value;
    str = str.replace(/viagra/ig, "***")
    str = str.replace(/xxx/ig, "***")

    comments.push(str);
    generateComment()
}

function generateComment() {
    let commentBox = "";
    for (let comment of comments) {
        commentBox += `<div>${comment}</div>`
    }
    document.getElementById("box").innerHTML = commentBox;
}

document.addEventListener("DOMContentLoaded",
    function () {
        generateComment();
    }
);