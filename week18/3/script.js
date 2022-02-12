function checkSpam() {
    let comment = document.getElementById("newComment").value;
    comment = comment.replace(/viagra/ig, "***")
    comment = comment.replace(/xxx/ig, "***")

    generateComment(comment)
}

function generateComment(comment) {
    let name = document.getElementById("author").value;

    if (comment != '' && name != '') {
        let wrapper = document.createElement('div');
        let commentBox = document.createElement('div');
        let avatarBox = document.createElement('div');
        let path = document.getElementById('avatarImg');

        commentBox.innerHTML = `<strong>${name}:</strong> <br> ${comment}`;
        
        message.append(wrapper);
        wrapper.append(avatarBox);
        wrapper.append(commentBox);
        avatarBox.style.background = window.getComputedStyle(path).background;
        avatarBox.style.backgroundSize = 'cover';
        avatarBox.style.backgroundRepeat = 'no-repeat';
    }
    checkAuthor()
}

document.addEventListener("DOMContentLoaded",
    function () {
        let name = localStorage.getItem('name');
        if (name != null) {
            document.getElementById('author').value = name;
        }
    });

function checkAuthor() {
    let author = document.getElementById('author').value;

    if (localStorage.getItem('name') == null || localStorage.getItem('name') != author) {
        localStorage.setItem('name', author);
    }
};

function changeAvatar () {
    let avatarPath = document.getElementById("avatarURL").value;
    let avatarImg = document.getElementById("avatarImg");
    avatarImg.style.background = `url(${avatarPath})`;
    avatarImg.style.backgroundSize = 'cover';
    avatarImg.style.backgroundRepeat = 'no-repeat';
}