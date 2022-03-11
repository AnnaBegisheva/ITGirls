let searchGifs = (i) => {
let searchRequest = document.querySelector('.search').value;

    fetch('https://api.giphy.com/v1/gifs/search?api_key=Y9QDRtJqJgbVios4mOhHlWq7az3YrqTJ&q=' + searchRequest + '&limit=5&offset=0&rating=g&lang=en', {
        mode: 'no-cors'
    })
        .then(response => response.json())
        .then(gif => {
            console.log(gif);
            for(let i = 0; i < gif.data.length; i++) {
                let box = document.createElement("img");
                box.src = gif.data[i].url;
                let container = document.querySelector('.container');
                container.append(box);
            }
        })
        .catch(error => console.log(error));
}

button.addEventListener('click', function(){
    searchGifs();
}
);