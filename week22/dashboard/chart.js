const Chart = require('chart.js');

// setup block  
const dataPoints = [67, 33];
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
const barData = [43, 55, 39, 67, 83];
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            label: '% of done tasks',
            data: barData,
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