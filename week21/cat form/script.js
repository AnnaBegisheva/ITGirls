let postButton = document.querySelector('.postButton')

postButton.onclick = function (e) {
    e.preventDefault();
    // displayString();

    fetch("https://httpbin.org/post ", {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));

    document.getElementById('form').reset();
};

let base64String = "";

function imageUploaded() {
    let file = document.querySelector(
        'input[type=file]')['files'][0];

    let reader = new FileReader();
    reader.onload = function () {
        base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");
    }
    reader.readAsDataURL(file);
}

// function displayString() {
//     let image = document.createElement("img");
//     image.src = `data:image/jpg;base64,${base64String}`;
//     document.getElementById("result").append(image);
// }