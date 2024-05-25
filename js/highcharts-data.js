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
        text: ' ',
        align: 'left',
        style: {
            color: "#fafafa",
            font: 'bold 2rem "Jersey 20", sans-serif',
            // lineHeight: '2rem'
        }


    },
    subtitle: {
        text: 'Sumber: Survei Populix pada 21-28 November 2023.',
        align: 'left',
        style: {
            color: "#fafafa",
            // font: ' sans-serif'
            font: 'normal 13px "Rubik", sans-serif',
        }
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
                },
                style: {
                    // color: "#fafafa",
                    font: '1rem "Rubik", sans-serif',
                    // lineHeight: '2rem'
                },
            }
        }
    },
    series: [{
        name: 'Persen',
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
