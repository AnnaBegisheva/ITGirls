let searchGifs = (i) => {

    let searchRequest = document.querySelector('.search').value;
    let container = document.querySelector('.container');

    if (searchRequest == '') {
        let message = document.createElement("div");
        message.innerHTML = 'Введите свой запрос для поиска gif';
        container.append(message);
    } else {

        fetch('https://api.giphy.com/v1/gifs/search?api_key=Y9QDRtJqJgbVios4mOhHlWq7az3YrqTJ&q=' + searchRequest + '&limit=5&offset=0&rating=g&lang=en')
            .then(res => {
                res.json();

                if (res.status >= 500 & res.status < 600) {
                    alert("Сервер недоступен");
                } else {
                    fetch('https://api.giphy.com/v1/gifs/search?api_key=Y9QDRtJqJgbVios4mOhHlWq7az3YrqTJ&q=' + searchRequest + '&limit=5&offset=0&rating=g&lang=en')
                        .then(response => response.json())
                        .then(gif => {
                            console.log(gif);
                            for (let i = 0; i < gif.data.length; i++) {
                                let box = document.createElement("img");
                                box.src = gif.data[i].images.original.url;
                                container.append(box);
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            })
            .catch(err => {
                alert("Нет подключения к интернету");
            })
    }
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