document.addEventListener("DOMContentLoaded", function (event) {
    breakingBad(0);
});

let breakingBad = (i) => {
    fetch('https://www.breakingbadapi.com/api/characters/')
        .then(response => response.json())
        .then(hero => {
            console.log(hero);

            document.getElementById("image").src = hero[i].img;
            document.getElementById("name").innerHTML = "<strong>Name: </strong>" + hero[i].name;
            document.getElementById("nickname").innerHTML = "<strong>Nickname: </strong>" + hero[i].nickname;
            document.getElementById("birthday").innerHTML = "<strong>Birthday: </strong>" + hero[i].birthday;
            document.getElementById("occupation").innerHTML = "<strong>Occupation: </strong>" + hero[i].occupation;
            document.getElementById("portrayed").innerHTML = "<strong>Portrayed by: </strong>" + hero[i].portrayed;

        })
        .catch(error => console.log(error));
}