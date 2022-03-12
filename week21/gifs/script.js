let searchGifs = (i) => {
    let searchRequest = document.querySelector('.search').value;

    fetch('https://api.giphy.com/v1/gifs/search?api_key=Y9QDRtJqJgbVios4mOhHlWq7az3YrqTJ&q=' + searchRequest + '&limit=5&offset=0&rating=g&lang=en'
        )
        .then(response => response.json())
        .then(gif => {
            console.log(gif);
            for (let i = 0; i < gif.data.length; i++) {
                let box = document.createElement("img");
                box.src = gif.data[i].images.original.url;
                let container = document.querySelector('.container');
                container.append(box);
            }
        })
        .catch(error => console.log(error));
}

let button = document.querySelector(".button")
button.onclick = function (e) {
    e.preventDefault();
    clearContainer();
    searchGifs();
    document.querySelector('.search').value = '';
}

let clearContainer = () => {
    document.querySelector('.container').innerHTML = '';
}