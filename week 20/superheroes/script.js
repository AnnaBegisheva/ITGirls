let superheroesBase = `[{
    "photo": "assets/batman.jpg",
    "name": "Batman",
    "universe": "DC",
    "alterEgo": "Брюс Уэйн",
    "powers": "интеллект, обширные познания, знания боевых искусств, ловкость",
    "occupation": "борец с преступностью, филантроп, миллиардер",
    "friends": "Робин, Бэтгерл",
    "description": "по популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом. Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций."
}, {
    "photo": "assets/superman.jpg",
    "name": "Супермен",
    "universe": "DC",
    "alterEgo": "Кларк Кент",
    "powers": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    "occupation": "борец за справедливость",
    "friends": "собака Крипто",
    "description": "полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты."
}, {
    "photo": "assets/wonderwoman.jpg",
    "name": "Чудо-женщина",
    "universe": "DC",
    "alterEgo": "Диана Принс",
    "powers": "сверхчеловеческая сила искорость, выносливость, полет",
    "occupation": "супергероиня, секретарь-референт",
    "friends": "Лига Справедливости, Бэтмен, Супермен",
    "description": "пора бы разбавить эту мужскую вечеринку по-настоящему крутой девчонкой. Принцесса-амозонка родилась на мистическом острове Темескира, расположенном в центре Бермудского треугольника, где пропадают самолеты. Свое настоящее имя — Диана — она получила в честь древнегреческой богини охоты, а суперспособности — от богини любви Афродиты. Растили героиню в исключительно женском обществе, поэтому Чудо-женщина часто появляется в культуре как символ феминизма. У Дианы есть супер-снаряжение: лассо истины и тиара. Первое было сковано богом огня Гефестом, и оно никогда не промахивается. Человек, попавший в его петлю, неизбежно расскажет свои секреты, вспомнит забытое и даже подчинится приказам. Тиара же работает как метательное оружие, способное рассечь что угодно. Корона со звездой в центре символизирует патриотизм американской героини и служит стильным аксессуаром"
}]`;


document.addEventListener("DOMContentLoaded", function (event) {
    createCard();
});

let superheroes = JSON.parse(superheroesBase);

const createCard = () => {
    let hero = superheroes[i];
    let name = document.querySelector('.name');
    name.innerHTML = hero.name;
    let image = document.querySelector('.image');
    let img = document.createElement("img");
    img.setAttribute("src", hero.photo);
    image.innerHTML = '';
    image.append(img);

    let card = document.querySelector('.card');
    let universe = document.createElement("div");
    universe.innerHTML = "<strong>Вселенная: </strong>" + hero.universe;
    let alterEgo = document.createElement("div");
    alterEgo.innerHTML = "<strong>Альтер Эго: </strong>" + hero.alterEgo;
    let occupation = document.createElement("div");
    occupation.innerHTML = "<strong>Род деятельности: </strong>" + hero.occupation;
    let powers = document.createElement("div");
    powers.innerHTML = "<strong>Суперсилы: </strong>" + hero.powers;
    let friends = document.createElement("div");
    friends.innerHTML = "<strong>Друзья: </strong>" + hero.friends;
    let description = document.createElement("div");
    description.innerHTML = "<strong>Подробнее: </strong>" + hero.description;
    card.innerHTML = '';
    card.append(universe, alterEgo, powers, occupation, friends, description);

    let savedRating = localStorage.getItem(hero.name);

    if (savedRating != null) {
        ratingValue.innerHTML = "Ваша оценка: " + savedRating;
        document.getElementById("rating").value = savedRating;
    } else {
        ratingValue.innerHTML = '';
        document.getElementById("rating").value = 0;
    }
};

rating.onchange = function () {
    let ratingValue = document.querySelector(".ratingValue");
    let rating = document.getElementById("rating").value;
    ratingValue.innerHTML = "Ваша оценка: " + rating;
    localStorage.setItem(superheroes[i].name, rating);
}

let i = 0;
prev.onclick = function () {
    if (i <= 0) i = superheroes.length;
    i--;
    return createCard();
};

next.onclick = function () {
    if (i >= superheroes.length - 1) i = -1;
    i++;
    return createCard();
}