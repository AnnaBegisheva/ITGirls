function getName() {
     let userName = document.getElementById("userFullName").value.toLowerCase().replace(/ +/g, ' ').trim();
     let array = userName.split(" ");
     const newArray = ['', '', ''];
     for (let i = 0; i < array.length; i++) {
          let a = array[i];
          newName = a[0].toUpperCase() + a.slice(1);
          newArray[i] = newName;
     }


     document.getElementById("result").innerHTML = `<div>Фамилия: ${newArray[0]}</div> <div>Имя: ${newArray[1]}</div> <div>Отчество: ${newArray[2]}</div>`
}

/*
for (let a of array) {
          newName = a[0].toUpperCase() + a.slice(1);
          newArray.push(newName);
     }
     */