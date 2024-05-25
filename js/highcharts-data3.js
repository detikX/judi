const colors_ = Highcharts.getOptions().colors,
    categories = [
        'Sumatera',
        'Jawa',
        'Nusa Tenggara',
        'Kalimantan',
        'Sulawesi',
        'Maluku - Papua',
    ],
    data = [
        {
            y: 241,
            color: colors_[2],
            drilldown: {
                name: 'Sumatera',
                categories: [

                    'Aceh',
                    'Sumatera Utara',
                    'Sumatera Barat',
                    'Riau',
                    'Jambi',
                    'Sumatera Selatan',
                    'Bengkulu',
                    'Lampung',
                    'Kepulauan Bangka Belitung',

                ],
                data: [
                    //Aceh 27
                    // Sumatera Utara 44
                    // Sumatera Barat 19
                    // Riau 33
                    // Jambi 15
                    // Sumatera Selatan 34
                    // Bengkulu 11
                    // Lampung 38
                    // Kepulauan Bangka Belitung 20
                    27,
                    44,
                    19,
                    33,
                    15,
                    34,
                    11,
                    38,
                    20,
                ]
            }
        },
        {
            y: 717,
            color: colors_[3],
            drilldown: {
                name: 'Jawa',
                categories: [

                    'DKI Jakarta ',
                    'Jawa Barat',
                    'Jawa Tengah',
                    'DI Yogyakarta',
                    'Jawa Timur',
                    'Banten',
                ],
                data: [
                    //                     DKI Jakarta 29

                    // Jawa Barat 157

                    // Jawa Tengah 131

                    // DI Yogyakarta 6

                    // Jawa Timur 307

                    // Banten 87
                    29,
                    157,
                    131,
                    6,
                    307,
                    87,

                ]
            }
        },
        {
            y: 32,
            color: colors_[5],
            drilldown: {
                name: 'Nusa Tenggara',
                categories: [
                    // 'Bali',

                    'Nusa Tenggara Timur',
                    'Nusa Tenggara Barat',
                ],
                data: [
                    // 6.62,
                    2,
                    30,
                ]
            }
        },
        {
            y: 109,
            color: colors_[1],
            drilldown: {
                name: 'Kalimantan',
                categories: [
                    //                     Kalimantan Barat 38

                    // Kalimantan Tengah 18

                    // Kalimantan Selatan 10

                    // Kalimantan Timur 43
                    'Kalimantan Barat',
                    'Kalimantan Tengah',
                    'Kalimantan Selatan',
                    'Kalimantan Timur',

                ],
                data: [
                    38,
                    18,
                    10,
                    43,

                ]
            }
        },
        {
            y: 80,
            color: colors_[6],
            drilldown: {
                name: 'Sulawesi',
                categories: [
                    //                     Sulawesi Utara 7

                    // Sulawesi Tengah 10

                    // Sulawesi Selatan 56

                    // Sulawesi Tenggara 5

                    // Gorontalo 2
                    'Sulawesi Utara',
                    'Sulawesi Tengah',
                    'Sulawesi Selatan',
                    'Sulawesi Tenggara',
                    'Gorontalo'
                ],
                data: [
                    7, 10, 56, 5, 2
                ]
            }
        },
        {
            y: 12,
            color: colors_[7],
            drilldown: {
                name: 'Maluku',
                categories: [
                    //                     Maluku 1

                    // Maluku Utara 1

                    // Papua 10
                    'Maluku',
                    'Maluku Utara',
                    'Papua',

                ],
                data: [
                    1, 1, 10
                ]
            }
        }

    ],
    browserData = [],
    versionsData = [],
    dataLen = data.length;

let i,
    j,
    drillDataLen,
    brightness;


// Build the data arrays
for (i = 0; i < dataLen; i += 1) {

    // add browser data
    browserData.push({
        name: categories[i],
        y: data[i].y,
        color: data[i].color
    });

    // add version data
    drillDataLen = data[i].drilldown.data.length;
    for (j = 0; j < drillDataLen; j += 1) {
        const name = data[i].drilldown.categories[j];
        brightness = 0.2 - (j / drillDataLen) / 5;
        versionsData.push({
            name,
            y: data[i].drilldown.data[j],
            color: Highcharts.color(data[i].color).brighten(brightness).get(),
            custom: {
                version: name.split(' ')[1] || name.split(' ')[0]
            }
        });
    }
}

// Create the chart
Highcharts.chart('container3', {
    chart: {
        type: 'pie',
        backgroundColor: '#0c0427',
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
        text: 'Sumber: Badan Pusat Statistik',
        align: 'left',
        style: {
            color: "#fafafa",
            font: 'normal 13px "Rubik", sans-serif',
        }
    },
    plotOptions: {
        pie: {
            shadow: false,
            center: ['50%', '50%']
        }
    },
    tooltip: {
        // valueSuffix: '%'
    },
    series: [{
        name: 'Browsers',
        data: browserData,
        size: '45%',
        dataLabels: {
            color: '#ffffff',
            distance: '-50%'
        }
    }, {
        name: 'Perceraian',
        data: versionsData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
            format: '<b>{point.name}:</b> <span style="opacity: 0.5">' +
                '{y}</span>',
            filter: {
                property: 'y',
                operator: '>',
                value: 1
            },
            style: {
                fontWeight: 'normal'
            }
        },
        id: 'versions'
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 400
            },
            chartOptions: {
                series: [{
                }, {
                    id: 'versions',
                    dataLabels: {
                        distance: 10,
                        format: '{point.custom.version}',
                        filter: {
                            property: 'percentage',
                            operator: '>',
                            value: 2
                        }
                    }
                }]
            }
        }]
    }
});
