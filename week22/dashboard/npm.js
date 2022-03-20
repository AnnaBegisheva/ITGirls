const moment = require ('moment');
let today = moment().format("dddd MMMM Do");
console.log(today);
document.querySelector(".today").innerHTML = today;
