function changeMeOne () {
    let elem = document.getElementById('first'); 
    elem.style.background = '#b3e5fc';
}

function changeMeTwo () {
    let elem = document.getElementById('second'); 
    elem.style.background = elem.style.background === 'seagreen' ? '#b39ddb' : 'seagreen';
};

function select (sender) {
    sender.classList.add ("selected");
}