function check() {
    let name = document.getElementById('userName');
    let surname = document.getElementById('userSurname');
    let email = document.getElementById('userEmail');
    let password = document.getElementById('userPW');
    let passwordConf = document.getElementById('userPWConf');
    let validForm = true;

    document.getElementsByClassName('error').innerHTML = "";

    function showErrorMessage(input, errorID) {
        document.getElementById(errorID).style.display = 'flex';
        input.style.border = "1px solid #d93025";
        validForm = false;
    };

    function hideErrorMessage(input, errorID) {
        document.getElementById(errorID).style.display = 'none';
        input.style.removeProperty('border');
    };

    if (name.value == '' && surname.value == '') {
        showErrorMessage(name, 'errorUsername');
        showErrorMessage(surname, 'errorUsername');
        document.getElementById('errorUsernameText').innerHTML = "Укажите имя и фамилию";
    } else if (name.value == '') {
        showErrorMessage(name, 'errorUsername');
        document.getElementById('errorUsernameText').innerHTML = "Укажите имя";
    } else if (surname.value == '') {
        showErrorMessage(surname, 'errorUsername');
        document.getElementById('errorUsernameText').innerHTML = "Укажите фамилию";
    } else {
        hideErrorMessage(name, 'errorUsername');
        hideErrorMessage(surname, 'errorUsername');
    };


    if (email.value == '') {
        showErrorMessage(email, 'errorEmail');
        document.getElementById('loginLabel').style.display = 'none';
        document.getElementById('errorEmailText').innerHTML = "Укажите имя пользователя";
    } else if (email.validity.tooLong || email.validity.tooShort) {
        showErrorMessage(email, 'errorEmail');
        document.getElementById('loginLabel').style.display = 'none';
        document.getElementById('errorEmailText').innerHTML = "Имя пользователя должно содержать от 6 до 30 символов.";
    } else if (!isEmail(email.value)) {
        showErrorMessage(email, 'errorEmail');
        document.getElementById('loginLabel').style.display = 'none';
        document.getElementById('errorEmailText').innerHTML = "Имя пользователя может включать буквы латинского алфавита (a-z), цифры (0-9) и точку (.).";
    } else {
        hideErrorMessage(email, 'errorEmail');
    };


    if (password.value == '') {
        showErrorMessage(password, 'errorPW');
        document.getElementById('PWLabel').style.display = 'none';
        document.getElementById('errorPWText').innerHTML = "Введите пароль";
    } else if (password.validity.tooShort) {
        showErrorMessage(password, 'errorPW');
        document.getElementById('PWLabel').style.display = 'none';
        document.getElementById('errorPWText').innerHTML = "Пароль не может быть короче 8 символов.";
    } else if (!isPW(password.value)) {
        showErrorMessage(password, 'errorPW');
        document.getElementById('PWLabel').style.display = 'none';
        document.getElementById('errorPWText').innerHTML = "Пароль должен включать буквы, цифры и специальные символы."
    } else if (password.value !== passwordConf.value) {
        showErrorMessage(password, 'errorPW');
        document.getElementById('PWLabel').style.display = 'none';
        document.getElementById('errorPWText').innerHTML = "Подтвердите пароль";
    } else {
        hideErrorMessage(password, 'errorPW');
    };

    if (validForm == true) {
        alert(`Hello, ${name.value}`);
        document.getElementById('form').reset();
    }
};

function isEmail(email) {
    return /^([a-zA-Z0-9\.]+)$/.test(email);
};

function isPW(password) {
    return /^([A-Za-zА-Яа-яЁё0-9\.-_]+)$/.test(password);
};

function myFunction() {
    let x = document.getElementById("userPW");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
};