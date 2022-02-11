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

    if (str != '') {
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

bannerImage = document.getElementById('avatar');
imgData = getBase64Image(bannerImage);
localStorage.setItem("imgData", imgData);


function getBase64Image(img) {
    let avatar = document.createElement("canvas");
    avatar.width = img.width;
    avatar.height = img.height;

    let ctx = avatar.getContext("2d");
    ctx.drawImage(img, 0, 0);

    let dataURL = avatar.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function fetchimage() {
    let dataImage = localStorage.getItem('imgData');
    let bannerImg = document.getElementById('tableBanner');
    bannerImg.src = "data:image/png;base64," + dataImage;
}