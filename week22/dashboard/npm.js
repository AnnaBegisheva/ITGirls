const moment = require ('moment');
let today = moment().format("dddd MMMM Do");
console.log(today);
document.querySelector(".today").innerHTML = today;


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


  const tasksDatepicker = require('js-datepicker');
  const tasksPicker = tasksDatepicker('#tasksDatepicker', {
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
  