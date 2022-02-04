let date = new Date(new Date - 86400* 4 * 1000);
// let date = new Date(new Date - 1);
// let date = new Date(new Date - 30 * 1000);
// let date = new Date(new Date - 5 * 60 * 1000);

function formatDate(date) {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60;
    let distance = new Date() - date;
    options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };

    if (distance < second) {
        alert("прямо сейчас");
    } else if (distance < minute && distance > second) {
        alert(Math.floor((distance % minute) / second) + "сек. назад");
    } else if (distance < hour && distance > minute) {
        alert(Math.floor((distance % hour) / minute) + "мин. назад");
    } else {
        alert(date.toLocaleString('ru', options));
    }

}

formatDate(date)

