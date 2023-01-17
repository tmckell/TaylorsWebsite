Highcharts.chart('column_container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Strawberries', 'Mangos', 'Pineapple', 'Cantaloupe', 'Bananas']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Taylor',
        data: [7, 5, 8, -4, 3]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});