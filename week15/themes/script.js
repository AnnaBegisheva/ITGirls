function changeHeader () {
    switch (document.getElementById("theme").value)
    {
        case "light": document.getElementById ('header').style.backgroundColor='#d7d2ce';
break;
        case "dark":document.getElementById ('header').style.backgroundColor='#292827';
        break;

        case "bright":document.getElementById ('header').style.backgroundColor='#CCCC51';
        break;
    }
}

function changeFooter () {
    switch (document.getElementById("theme").value)
    {
        case "light": document.getElementById ('footer').style.backgroundColor='#d7d2ce';
break;
        case "dark":document.getElementById ('footer').style.backgroundColor='#292827';
        break;

        case "bright":document.getElementById ('footer').style.backgroundColor='#CCCC51';
        break;
    }
}

function changeText1 () {
    switch (document.getElementById("theme").value)
    {
        case "light": document.getElementById ('header').style.color='black';
break;
        case "dark":document.getElementById ('header').style.color='white';
        break;

        case "bright":document.getElementById ('header').style.color='black';
        break;
    }
}

function changeText2 () {
    switch (document.getElementById("theme").value)
    {
        case "light": document.getElementById ('footer').style.color='black';
break;
        case "dark":document.getElementById ('footer').style.color='white';
        break;

        case "bright":document.getElementById ('footer').style.color='black';
        break;
    }
}


theme.addEventListener("change", changeHeader);
theme.addEventListener("change", changeFooter);
theme.addEventListener("change", changeText1);
theme.addEventListener("change", changeText2);