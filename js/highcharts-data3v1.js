Highcharts.chart('container3', {
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
        text: 'Sumber: Survei Jakpat dari 426 responden yang pernah bermain judi online, 29 Oktober 2023.',
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
        categories: ['Jawa Timur', 'Tabungan', 'lala', 'Pinjaman Online', 'Jual Barang', 'Lainnya'],
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
            style: {
                // color: "#fafafa",
                font: 'bold 1rem "Source Code Pro", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        }
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
    credits: {
        enabled: false
    },
    series: [{
        name: 'Persen',
        data: [
            { name: 'Jawa Timur', y: 307 },
            { name: 'Tabungan', y: 157 },
            { name: 'lala', y: 131 },
            { name: 'Pinjaman Online', y: 87 },
            { name: 'Jual Barang', y: 56 },
            { name: 'Lainnya', y: 44 },
            { name: 'Jawa Timur', y: 43 },
            { name: 'Tabungan', y: 38 },
            { name: 'lala', y: 38 },
            { name: 'Pinjaman Online', y: 34 },
            { name: 'Jual Barang', y: 33 },
            { name: 'Lainnya', y: 30 },
            { name: 'Jawa Timur', y: 29 },
            { name: 'Tabungan', y: 27 },
            { name: 'lala', y: 20 },
            { name: 'Pinjaman Online', y: 19 },
            { name: 'Jual Barang', y: 18 },
            { name: 'Lainnya', y: 15 },
            { name: 'Jawa Timur', y: 11 },
            { name: 'Tabungan', y: 10 },
            { name: 'lala', y: 10 },
            { name: 'Pinjaman Online', y: 10 },
            { name: 'Jual Barang', y: 7 },
            { name: 'Lainnya', y: 6 },
            { name: 'Tabungan', y: 5 },
            { name: 'lala', y: 2 },
            { name: 'Pinjaman Online', y: 2 },
            { name: 'Jual Barang', y: 1 },
        ]
    }]
});
