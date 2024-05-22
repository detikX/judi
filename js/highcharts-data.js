// Data retrieved from https://netmarketshare.com/
// Make monochrome colors
const colors = Highcharts.getOptions().colors.map((c, i) =>
    // Start out with a darkened base color (negative brighten), and end
    // up with a much brighter color
    Highcharts.color(Highcharts.getOptions().colors[0])
        .brighten((i - 3) / 7)
        .get()
);

// Build the chart
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: '#0c0427',
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in February, 2022',
        align: 'left'
    },
    tooltip: {
        // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors,
            borderRadius: 5,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.y} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'Instagram', y: 46 },
            { name: 'Youtube', y: 45 },
            { name: 'Facebook', y: 45 },
            { name: 'TikTok', y: 27 },
            { name: 'X', y: 16 },
            { name: 'Lainnya', y: 4 }
        ]
    }]
});

// { name: 'Instagram', y: 46 },
//             { name: 'Youtube', y: 45 },
//             { name: 'Facebook', y: 45 },
//             { name: 'TikTok', y: 27 },
//             { name: 'X', y: 16 },
//             { name: 'Lainnya', y: 4 }
