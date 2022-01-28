let basePrice = '';

const inputs = document.querySelectorAll('input');
const radioDrive = document.querySelectorAll('input[name="drive"]');
const radioGearbox = document.querySelectorAll('input[name="gearbox"]');
const radioFuel = document.querySelectorAll('input[name="fuel"]');
const safety = document.querySelectorAll('input[name="safety"]');
const optional = document.querySelectorAll('input[name="optional"]');

function calc() {
    switch (document.getElementById('carModel').value) {
        case "Fabia":
            basePrice = '1200000';
            break;
        case "Karoq":
            basePrice = '1700000';
            break;
        case "Kodiaq":
            basePrice = '2000000';
            break;
        case "Octavia":
            basePrice = '1600000';
            break;
        case "Rapid":
            basePrice = '1000000';
            break;
        case "Superb":
            basePrice = '2400000';
            break;
        case "Yeti":
            basePrice = '1500000';
            break;
    }

    let totalPrice = Number(basePrice);

    for (const radio of radioDrive) {
        if (radio.checked === true) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }
    for (const radio of radioGearbox) {
        if (radio.checked === true) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }
    for (const radio of radioFuel) {
        if (radio.checked === true) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }

    for (const checkbox of safety) {
        if (checkbox.checked === true && (checkbox.value = "1")) {
            totalPrice += 50000;
        }
    }

    for (const checkbox of safety) {
        if (checkbox.checked === true && (checkbox.value = "2")) {
            totalPrice += 100000;
        }
    }

    for (const checkbox of optional) {
        if (checkbox.checked === true && (checkbox.value = "1")) {
            totalPrice += 30000;
        }
    }

    for (const checkbox of optional) {
        if (checkbox.checked === true && (checkbox.value = "2")) {
            totalPrice += 50000;
        }
    }

    switch (document.getElementById('carInterior').value) {
        case "1":
            totalPrice += 50000;
            break;
        case "2":
            totalPrice += 100000;
            break;
        case "3":
            totalPrice += 150000;
            break;
    }

    const formatter = new Intl.NumberFormat('ru');
    
    if (document.getElementById('carModel').value == "0") {
        totalPrice = 0;
        alert ('Выберите модель автомобиля');
    } else {
        document.getElementById('yourPrice').innerText= formatter.format(totalPrice);
    }

}