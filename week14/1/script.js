function showMessage () {
    let name = document.getElementById ('name').value;
    let result = `Привет, ${name}`;
    document.getElementById('result').innerHTML = result;
}

