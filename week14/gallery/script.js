let slider_img = document.querySelector (".photo");
let images = ["photo-1.jpeg", "photo-2.jpeg", "photo-3.jpeg"];

let i = 0;

function prev () {
    if (i <= 0 ) i = images.length;
    i--;
    return setImg();
}

function next () {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute ("src", images[i])
}