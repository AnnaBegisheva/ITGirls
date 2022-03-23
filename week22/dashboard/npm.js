const moment = require ('moment');
let today = moment();
document.querySelector(".today").innerHTML = today.format("dddd MMMM Do");

const createTask = (titleValue, bodyValue, doneValue) => {
    let section = document.querySelector('.tasks');
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

    let icon = document.createElement('img');
    icon.src = 'assets/solution.svg';
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
    tick.src = 'assets/tick.png';
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

const toggleDone = (event) => {
    event.target.closest(".task").classList.toggle("task__done");
};

const toggleTick = (event) => {
    let target = event.target;
    let date = today.format("ddd MMM D YYYY");
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
    updateProgress();
};

const checkbox = document.querySelectorAll('.task_checkbox');
for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", toggleDone);
    checkbox[i].addEventListener("click", toggleTick);
};

const getTasks = () => {
    let section = document.querySelector('.tasks');
    let max = section.children.length;
    for (let i = max; i > 1; i--) {
        const element = section.children[i - 1];
        element.remove();
    }

    let date = today.format("ddd MMM D YYYY");
    let storedTasksJSON = localStorage.getItem(date);
    let message = document.querySelector('.message');
    if (storedTasksJSON == null) {
        message.innerHTML = "No tasks for the day";
    } else {
        let storedTasks = JSON.parse(storedTasksJSON);
        if (storedTasks.length == 0) {
            message.innerHTML = "No tasks for the day";
        } else {
            message.innerHTML = "Tasks for today:";
        }
        let newArray = storedTasks.slice(0,5);
        newArray.forEach(element => {
            createTask(element.title, element.body, element.done)
        });
    };
};

document.addEventListener("DOMContentLoaded", function (event) {
    getTasks();
});

const Chart = require('chart.js');

const getProgress = (date) => {
    let storedTasksJSON = localStorage.getItem(date);
    if (storedTasksJSON == null) {
        return 0;
    } else {
        let storedTasks = JSON.parse(storedTasksJSON);
        if (storedTasks.length == 0) {
            return 0;
        } else {
            let counter = 0;
            storedTasks.forEach(element => {
                if (element.done == true) {
                    counter++;
                }
            });
            return counter * 100 / storedTasks.length;
        }
    }
};

let todayWeekday = moment().day(); 
let week = [];
let weekdays = [];

for (let i = 7; i >= 1; i--) {
    let newDateNumber = todayWeekday - i;
    let newDate = moment().day(newDateNumber).format("ddd MMM D YYYY");
    let newWeekday = moment().day(newDateNumber).format('ddd');
    let dayProgress = getProgress(newDate);
    week.push(dayProgress);
    weekdays.push(newWeekday);
};

// setup block  
const progress = getProgress(today.format("ddd MMM D YYYY"));
const dataPoints = [progress, 100 - progress];
const data = {
    labels: ['My progress'],
    datasets: [{
        label: 'My progress',
        data: dataPoints,
        backgroundColor: [
            'rgba(139, 196, 255, 0.5)',
            'transparent'
        ],
        borderColor: [
            'rgb(46, 88, 255)',
            'transparent'
        ],
        borderWidth: 1,
        borderRadius: 5,
        cutout: '80%'
    }]
};

// counter plugin block
const counter = {
    id: 'counter',
    beforeDraw(chart, args, options) {
        const {
            ctx,
            chartArea: {
                top,
                right,
                bottom,
                left,
                width,
                height
            }
        } = chart
        ;
        ctx.save();
        // 1 how to get the position

        // 2 how to write text + automate text
        ctx.font = options.fontSize + 'px ' + options.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillStyle = options.fontColor;
        ctx.fillText(dataPoints[0] + '%', width / 2, (height / 2) + (options.fontSize * 0.34));

        //x0 - starting point on the horizontal level l/r
        //y0 - starting point on the vertical level t/b
        //x1 - length of the shape in pixels horizontaal level
        //y1 - length of the shape in pixels vertical level
    }
}

// config block
const config = {
    type: 'doughnut',
    data,
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
            counter: {
                fontColor: 'rgb(46, 88, 255)',
                fontSize: '50',
                fontFamily: 'sans-serif'
            }
        }
    },
    plugins: [counter]
};

//render init block
const myChart = new Chart(
    document.getElementById('myChart'),
    config);

//-----------------------

const ctx = document.getElementById('barChart').getContext('2d');
// const barData = [43, 55, 39, 67, 83];
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: weekdays,
        datasets: [{
            label: '% of done tasks',
            data: week,
            barThickness: 15,
            backgroundColor: [
                'rgba(139, 196, 255, 0.5)'
            ],
            hoverBackgroundColor: [
                'rgb(139, 196, 255)'
            ],
            borderColor: [
                'rgb(46, 88, 255)'
            ],
            borderWidth: 1,
            borderRadius: 5
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

const updateProgress = () => {
    let currentProgress = getProgress(today.format("ddd MMM D YYYY"));
    let dataPoints = [currentProgress, 100 - currentProgress];
    myChart.data.datasets[0].data = dataPoints;

    myChart.update();
};