function check () {
    let name = document.getElementById ('userName');
    let surname = document.getElementById ('userSurname');
    let email = document.getElementById ('userEmail');
    let password = document.getElementById ('userPW');
    let passwordConf = document.getElementById ('userPWConf');

    document.getElementsByClassName('error').innerHTML="";

    if (name.value == '') {
        document.getElementById ('errorName').style.display='flex';
    }

    if (surname.value == '') {
        document.getElementById ('errorSurname').style.display='flex';
    }

    if (name.value == '' && surname.value == '') {
        document.getElementById ('errorNameSurname').style.display='flex';
        document.getElementById('errorName').innerHTML="";
        document.getElementById('errorSurname').innerHTML="";
    }

    if (email.value == '') {
        document.getElementById ('errorEmail').style.display='flex';
        document.getElementById ('loginLabel').style.display='none';
    }

    if (password.value == '') {
        document.getElementById ('errorPW').style.display='flex';
        document.getElementById ('PWLabel').style.display='none';
    }

    if (password.value == true && passwordConf.value == '') {
        document.getElementById ('errorPWConf').style.display='flex';
        document.getElementById ('PWLabel').style.display='none';
    }
}