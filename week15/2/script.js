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
        document.getElementById ('userName').style.border="1px solid #d93025";
        c = false;
    } 

    if (surname.value == '') {
        document.getElementById ('errorSurname').style.display='flex';
        document.getElementById ('userSurname').style.border="1px solid #d93025";
        c = false;
    } 

    if (name.value == '' && surname.value == '') {
        document.getElementById ('errorNameSurname').style.display='flex';
        document.getElementById ('userName').style.border="1px solid #d93025";
        document.getElementById ('userSurname').style.border="1px solid #d93025";
        document.getElementById('errorName').innerHTML="";
        document.getElementById('errorSurname').innerHTML="";
        c = false;
    } 

    if (email.value == '') {
        document.getElementById ('errorEmail').style.display='flex';
        document.getElementById ('loginLabel').style.display='none';
        document.getElementById ('userEmail').style.border="1px solid #d93025";
        c = false;
    } else if (email.value.length <=5) {
        document.getElementById ('errorEmailLength').style.display='flex';
        document.getElementById ('loginLabel').style.display='none';
        document.getElementById ('userEmail').style.border="1px solid #d93025";
        c = false;
    } else if (!isEmail(email.value)) {
        document.getElementById ('errorEmailSymbols').style.display='flex';
        document.getElementById ('loginLabel').style.display='none';
        document.getElementById ('userEmail').style.border="1px solid #d93025";
        c = false;
    } 

    if (password.value == '') {
        document.getElementById ('errorPW').style.display='flex';
        document.getElementById ('PWLabel').style.display='none';
        document.getElementById ('userPW').style.border="1px solid #d93025";
        c = false;
    } else if (password.value.length <=7) {
        document.getElementById ('errorPWLength').style.display='flex';
        document.getElementById ('PWLabel').style.display='none';
        document.getElementById ('userPW').style.border="1px solid #d93025";
        c = false;
    } else if (!isPW (password.value)) {
        document.getElementById ('errorPWSymbols').style.display='flex';
        document.getElementById ('PWLabel').style.display='none';
        document.getElementById ('userPW').style.border="1px solid #d93025";
        c = false;
    } 

    if (password.value !== passwordConf.value) {
        document.getElementById ('errorPWConf').style.display='flex';
        document.getElementById ('PWLabel').style.display='none';
        document.getElementById ('userPWConf').style.border="1px solid #d93025";
        c = false;
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
