function finalCountdown(revange) {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date(revange)

    let x = setInterval(function () {
        let now = new Date()
        let distance = countDown - now;


        document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % day) / hour),
            document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute),
            document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

        //do something later when date is reached
        if (distance < 0) {
            let headline = document.getElementById("finalMessage"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("videoContent");

            headline.innerText = "The Future is here!";
            countdown.style.display = "none";
            content.style.display = "block";

            clearInterval(x);
        }
        //seconds
    }, 1000)
};

let revange = new Date(); //сейчас
revange.setSeconds(revange.getSeconds() + 250);


finalCountdown(revange)

