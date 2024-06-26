Highcharts.chart('container2', {
    chart: {
        type: 'bar',
        backgroundColor: 'rgba(255,255,255,0)',
        borderRadius: 16,
        // margin: 16
    },
    plotOptions: {
        column: { colorByPoint: true }
    },
    title: {
        text: 'Dana yang Digunakan',
        align: 'left',
        style: {
            // color: "#fafafa",
            font: 'bold 1.3rem "Rubik", sans-serif',
            // lineHeight: '2rem'
        }
    },
    subtitle: {
        text: 'Sumber: Survei Jakpat dari 426 responden yang pernah bermain judi <i>online</i>, 29 Oktober 2023.',
        align: 'left',
        style: {
            // color: "#fafafa",
            font: 'normal 13px "Rubik", sans-serif',
            // lineHeight: '2rem'
        }
    },
    xAxis: {
        //         Penghasilan pribadi 81.2% 

        // Tabungan 22.5%

        // Meminjam uang dari saudara/teman 6.1%

        // Menggunakan layanan pinjaman online 5.9%

        // Menjual barang 5.2%

        // Lainnya 3,3%
        categories: ['Penghasilan pribadi', 'Tabungan', 'Pinjam ke saudara', 'Pinjaman Online', 'Jual Barang', 'Lainnya'],
        labels: {
            // text: null,
            style: {
                // color: "#fafafa",
                font: '.75rem "Rubik", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: false
        }

        // title: {
        //     title: false,
        //     style: {
        //         // color: "#fafafa",
        //         // font: 'bold 1rem "Source Code Pro", sans-serif',
        //         // lineHeight: '2rem'
        //         // textOutline: false
        //     }
        // }
        // min: 0,
        // title: {
        //     text: 'Population (millions)',
        //     align: 'high'
        // },
        // labels: {
        //     overflow: 'justify'
        // },
        // gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' %'
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            borderColor: 'transparent',
            dataLabels: {
                enabled: true,
                style: {
                    // color: "#fafafa",
                    font: '1rem "Rubik", sans-serif',
                    // lineHeight: '2rem'
                    textOutline: false
                },
            },
            groupPadding: 0.1
        }
    },
    // legend: {
    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'top',
    //     x: -40,
    //     y: 80,
    //     floating: true,
    //     borderWidth: 1,
    //     backgroundColor:
    //         Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    //     shadow: true
    // },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '',
        data: [
            { name: 'Penghasilan Pribadi', y: 81.2 },
            { name: 'Tabungan', y: 22.5 },
            { name: 'Pinjam ke Saudara', y: 6.1 },
            { name: 'Pinjaman <i>Online</i>', y: 5.9 },
            { name: 'Jual Barang', y: 5.2 },
            { name: 'Lainnya', y: 3.3 }
        ]
    }]

});

