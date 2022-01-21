function check () {
    let name = document.getElementById ('userName');
    let surname = document.getElementById ('userSurname');
    let email = document.getElementById ('userEmail');
    let password = document.getElementById ('userPW');
    let passwordConf = document.getElementById ('userPWConf');
    let c = true;

    document.getElementsByClassName('error').innerHTML="";

    if (name.value == '') {
        document.getElementById ('errorName').style.display='flex';
        name.style.border="1px solid #d93025";
        c = false;
    } else {
        document.getElementById ('errorName').style.display='none';
        name.style.removeProperty('border');
    }

    if (surname.value == '') {
        document.getElementById ('errorSurname').style.display='flex';
        surname.style.border="1px solid #d93025";
        c = false;
    } else {
        document.getElementById ('errorSurname').style.display='none';
        surname.style.removeProperty('border');
    }

    if (name.value == '' && surname.value == '') {
        document.getElementById ('errorNameSurname').style.display='flex';
        name.style.border="1px solid #d93025";
        surname.style.border="1px solid #d93025";
        document.getElementById('errorName').innerHTML="";
        document.getElementById('errorSurname').innerHTML="";
        c = false;
    } else {
        document.getElementById ('errorNameSurname').style.display='none';
        name.style.removeProperty('border');
        surname.style.removeProperty('border');
}

    if (email.value == '') {
        document.getElementById ('errorEmail').style.display='flex';
        document.getElementById ('loginLabel').style.display='none';
        email.style.border="1px solid #d93025";
        c = false;
    } else if (email.value.length <=5) {
        document.getElementById ('errorEmailLength').style.display='flex';
        document.getElementById ('loginLabel').style.display='none';
        email.style.border="1px solid #d93025";
        c = false;
    } else if (!isEmail(email.value)) {
        document.getElementById ('errorEmailSymbols').style.display='flex';
        document.getElementById ('loginLabel').style.display='none';
        email.style.border="1px solid #d93025";
        c = false;
    } else {
        document.getElementById ('errorEmail').style.display='none';
        document.getElementById ('errorEmailLength').style.display='none';
        document.getElementById ('errorEmailSymbols').style.display='none';
        email.style.removeProperty('border');
}

    if (password.value == '') {
        document.getElementById ('errorPW').style.display='flex';
        document.getElementById ('PWLabel').style.display='none';
        password.style.border="1px solid #d93025";
        c = false;
    } else if (password.value.length <=7) {
        document.getElementById ('errorPWLength').style.display='flex';
        document.getElementById ('PWLabel').style.display='none';
        password.style.border="1px solid #d93025";
        c = false;
    } else if (!isPW (password.value)) {
        document.getElementById ('errorPWSymbols').style.display='flex';
        document.getElementById ('PWLabel').style.display='none';
        password.style.border="1px solid #d93025";
        c = false;
    } else {
        document.getElementById ('errorPW').style.display='none';
        document.getElementById ('errorPWLength').style.display='none';
        document.getElementById ('errorPWSymbols').style.display='none';
        password.style.removeProperty('border');
    }

    if (password.value !== passwordConf.value) {
        document.getElementById ('errorPWConf').style.display='flex';
        document.getElementById ('PWLabel').style.display='none';
        passwordConf.style.border="1px solid #d93025";
        c = false;
    } else {
        document.getElementById ('errorPWConf').style.display='none';
        passwordConf.style.removeProperty('border');
}
    
    if (c == true) {
        alert (`Hello, ${name.value}`);
    }
}   

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
}
