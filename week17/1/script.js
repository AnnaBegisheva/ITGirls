function getName() {
let userName = document.getElementById("userFullName").value.trim().toLowerCase();
let array = userName.split(" ");
let newArray = [];
for (let a of array) {
     newName = a[0].toUpperCase() + a.slice(1);
     newArray.push(newName);
}

document.getElementById("result").innerHTML = `Фамилия: ${newArray[0]},
                                               Имя: ${newArray[1]},
                                               Отчество: ${newArray[2]}
                                               `

}
