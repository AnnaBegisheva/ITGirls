const JSdatepicker = require('js-datepicker');
const picker = JSdatepicker('#datepicker', {
    // Event callbacks.
    onSelect: instance => {
        // Show which date was selected.
        console.log(instance.dateSelected);
        getTasks();
    },
    onMonthChange: instance => {
        // Show the month of the selected date.
        console.log(instance.currentMonthName)
    },

    // Customizations.
    formatter: (input, date, instance) => {
        // This will display the date as `1/1/2019`.
        input.value = date.toDateString()
    },
    position: 'br', // Top right.
    startDay: 1, // Calendar week starts on a Monday.
    customDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    overlayButton: 'Go!',
    overlayPlaceholder: 'Enter a year',

    // Settings.
    alwaysShow: true, // Never hide the calendar.
    dateSelected: new Date(), // Today is selected.
    maxDate: new Date(2099, 0, 1), // Jan 1st, 2099.
    minDate: new Date(2016, 5, 1), // June 1st, 2016.
    startDate: new Date(), // This month.
    showAllDates: true, // Numbers for leading & trailing days outside the current month will show.

    // Disabling things.
    // noWeekends: true, // Saturday's and Sunday's will be unselectable.
});

//---------------

const createTask = (titleValue, bodyValue, doneValue) => {
    let section = document.querySelector('.tasks__narrow');
    let newTask = document.createElement('div');
    if (section.children.length == 1) {
        newTask.id = Number(1);
    } else {
        newTask.id = Number(section.children[section.children.length - 1].id) + 1;
    }
    if (doneValue == true) {
        newTask.classList.add('task', 'task__done');
    } else {
        newTask.classList.add('task')
    }
    section.append(newTask);

    let delButton = document.createElement('button');
    delButton.classList.add('delButton');
    delButton.innerText = "X";
    newTask.append(delButton);
    delButton.addEventListener("click", delTask);

    let icon = document.createElement('img');
    icon.src = '../assets/solution.svg';
    icon.classList.add('task_icon');
    newTask.append(icon);

    let text = document.createElement('div');
    text.classList.add('task_text');
    newTask.append(text);

    let title = document.createElement('h3');
    title.classList.add('task_title');

    title.innerText = titleValue;
    text.append(title);

    let body = document.createElement('p');
    body.classList.add('task_body');

    body.innerHTML = bodyValue;
    text.append(body);

    let checkbox = document.createElement('div');
    checkbox.id = newTask.id;
    checkbox.classList.add('task_checkbox');
    newTask.append(checkbox);
    checkbox.addEventListener("click", toggleDone);
    checkbox.addEventListener("click", toggleTick);

    let tick = document.createElement('img');
    tick.src = '../assets/tick.png';
    if (doneValue == true) {
        tick.classList.add('tick', 'tick__visible');
    } else {
        tick.classList.add('tick');
    }

    tick.id = newTask.id;
    checkbox.append(tick);

    return newTask.id;
};

const addToLocalStorage = (date, storedTasks) => {
    JSONstoredTasks = JSON.stringify(storedTasks);
    localStorage.setItem(date, JSONstoredTasks);
};

const getFromLocalStorage  = (date) => {
    let JSONstoredTasks = localStorage.getItem(date);
    return JSON.parse(JSONstoredTasks);
};

addButton.onclick = function () {
    let titleValue = document.querySelector('.newTask_title').value;
    let bodyValue = document.querySelector('.newTask_textarea').value;
    if (titleValue != '' & bodyValue != '') {
        let id = createTask(titleValue, bodyValue, false);
        addTaskToLocalStorage(id);
        document.getElementById('form').reset();
    } else {
        alert("Нельзя добавить пустую задачу!")
    }
};

const toggleDone = (event) => {
    event.target.closest(".task").classList.toggle("task__done");
};

const toggleTick = (event) => {
    let target = event.target;
    let date = document.querySelector('.datepicker').value;
    let storedTasks = getFromLocalStorage(date);
    let checkbox = target;

    if (target.className == 'task_checkbox') {
        checkbox = target.children[0];
    }

    checkbox.classList.toggle("tick__visible");
    storedTasks.forEach(element => {
        if (element.id == checkbox.id) {
            element.done = !element.done;
        }
    });
    addToLocalStorage(date, storedTasks);
};

const checkbox = document.querySelectorAll('.task_checkbox');
for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", toggleDone);
    checkbox[i].addEventListener("click", toggleTick);
};

const delTask = (event) => {
    let task = event.target.closest(".task");
    task.remove();
    let date = document.querySelector('.datepicker').value;
    let tasks = getFromLocalStorage(date);
    let index = -1;
    for (let i = 0; i < tasks.length; i++) {
        const element = tasks[i];
        if (task.id == element.id) {
            index = i;
            break;
        }
    }
    if (index > -1) {
        tasks.splice(index, 1);
    }
    addToLocalStorage(date, tasks);
};

const delButton = document.querySelectorAll('.delButton');
for (let i = 0; i < delButton.length; i++) {
    delButton[i].addEventListener("click", delTask);
};

const addTaskToLocalStorage = (id) => {
    let title = document.querySelector('.newTask_title').value;
    let body = document.querySelector('.newTask_textarea').value;
    let task = {
        title: title,
        body: body,
        done: false,
        id: id
    }

    let date = document.querySelector('.datepicker').value;
    let storedTasks = localStorage.getItem(date);

    if (storedTasks == null) {
        let tasks = [];
        tasks.push(task);
        addToLocalStorage(date, tasks);
    } else {
        let parsedTasks = JSON.parse(storedTasks);
        parsedTasks.push(task);
        addToLocalStorage(date, parsedTasks);
    };
};

const getTasks = () => {
    let section = document.querySelector('.tasks__narrow');
    let max = section.children.length;
    for (let i = max; i > 1; i--) {
        const element = section.children[i - 1];
        element.remove();
    }

    let date = document.querySelector('.datepicker').value;
    let storedTasksJSON = localStorage.getItem(date);
    let message = document.querySelector('.message');
    if (storedTasksJSON == null) {
        message.innerHTML = "No tasks for the day";
    } else {
        let storedTasks = JSON.parse(storedTasksJSON);
        if (storedTasks.length == 0) {
            message.innerHTML = "No tasks for the day";
        } else {
            message.innerHTML = "Tasks for the day:";
        }
        storedTasks.forEach(element => {
            createTask(element.title, element.body, element.done)
        });
    };
};

document.addEventListener("DOMContentLoaded", function (event) {
    getTasks();
});