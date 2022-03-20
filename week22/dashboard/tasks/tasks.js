const datepicker = require('js-datepicker');
const picker = datepicker('#datepicker', {
    // Event callbacks.
    onSelect: instance => {
        // Show which date was selected.
        console.log(instance.dateSelected)
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
const title = document.querySelector('.newTask_title').value;
const body = document.querySelector('.newTask_textarea').value;

const task = {
    title: title,
    body: body,
    done: false
}

const createTask = () => {
    let section = document.querySelector('.tasks__narrow');
    let newTask = document.createElement('div');
    newTask.classList.add('task', 'task__active');
    section.append(newTask);

    let delButton = document.createElement('button');
    delButton.classList.add('delButton');
    delButton.innerText = "X";
    newTask.append(delButton);

    let icon = document.createElement('img');
    icon.src = '../assets/solution.svg';
    icon.classList.add('task_icon');
    newTask.append(icon);

    let text = document.createElement('div');
    text.classList.add('task_text');
    newTask.append(text);

    let title = document.createElement('h3');
    title.classList.add('task_title');
    let titleValue = document.querySelector('.newTask_title').value;
    title.innerText = titleValue;
    text.append(title);

    let body = document.createElement('p');
    body.classList.add('task_body');
    let bodyValue = document.querySelector('.newTask_textarea').value;
    body.innerHTML = bodyValue;
    text.append(body);

    let checkbox = document.createElement('div');
    checkbox.classList.add('task_checkbox');
    newTask.append(checkbox);

    let tick = document.createElement('img');
    tick.src = '../assets/tick.png';
    tick.classList.add('tick', 'tick__hidden');
    checkbox.append(tick);
};

addButton.onclick = function () {
    createTask();
};

const toggleDone = (event) => {
    event.target.closest(".task").classList.toggle("task__done");
};

const toggleTick = (event) => {
    let target = event.target;
    if (target.className == 'task_checkbox') {
        target.children[0].classList.toggle("tick__visible");
    } else {
        target.classList.toggle("tick__visible");
    }
    
};

const checkbox = document.querySelectorAll('.task_checkbox');
for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", toggleDone);
    checkbox[i].addEventListener("click", toggleTick);
};


