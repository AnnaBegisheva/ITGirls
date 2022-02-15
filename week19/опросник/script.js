class Cat {
    constructor(name, owner, email, tel, breed, food, sex, weight) {
        this.name = name;
        this.owner = owner;
        this.email = email;
        this.tel = tel;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
        this.weight = weight;
    }
};

function createCat() {
    let catName = document.getElementById('name').value;
    let catOwner = document.getElementById('owner').value;
    let catEmail = document.getElementById('email').value;
    let catTel = document.getElementById('tel').value;
    let catBreed = document.getElementById('breed').value;
    let catFood = [];
    let catSex = document.querySelector('input[name="sex"]:checked').value;
    let catWeight = document.getElementById('weight').value;
    getCheckedCheckBoxes(catFood);

        let cat = new Cat (catName, catOwner, catEmail, catTel, catBreed, catFood, catSex, catWeight);
        console.log(cat);
};

function getCheckedCheckBoxes(catFood) {
    let checkboxes = document.getElementsByName('food');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            catFood.push(checkboxes[i].value);
        }
    }
};

