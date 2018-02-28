var continents = {
    africa: {
        projection: function (element) {
            var projection = d3.geo.equirectangular()
                .center([23, -3])
                .rotate([4.4, 0])
                .scale(400)
                .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
            var path = d3.geo.path()
                .projection(projection);

            return {
                path: path,
                projection: projection
            };
        },
        codes: ['DZA', 'AGO', 'BWA', 'BDI', 'CMR', 'CPV', 'CAF', 'TCD', 'COM',
                'MYT', 'COG', 'COD', 'BEN', 'GNQ', 'ETH', 'ERI', 'DJI', 'GAB',
                'GMB', 'GHA', 'GIN', 'CIV', 'KEN', 'LSO', 'LBR', 'LBY', 'MDG',
                'MWI', 'MLI', 'MRT', 'MUS', 'MAR', 'MOZ', 'NAM', 'NER', 'NGA',
                'GNB', 'REU', 'RWA', 'SHN', 'STP', 'SEN', 'SYC', 'SLE', 'SOM',
                'ZAF', 'ZWE', 'SSD', 'ESH', 'SDN', 'SWZ', 'TGO', 'TUN', 'UGA', 'EGY', 'TZA', 'BFA', 'ZMB']
    },
    north_america: {
        projection: "",
        codes: ['ATG', 'BHS', 'BRB', 'BMU', 'BLZ', 'VGB', 'CAN', 'CYM', 'CRI',
                    'CUB', 'DMA', 'DOM', 'SLV', 'GRL', 'GRD', 'GLP', 'GTM', 'HTI',
                    'HND', 'JAM', 'MTQ', 'MEX', 'MSR', 'ANT', 'CUW', 'ABW', 'SXM',
                    'BES', 'NIC', 'UMI', 'PAN', 'PRI', 'BLM', 'KNA', 'AIA', 'LCA',
                    'MAF', 'SPM', 'VCT', 'TTO', 'TCA', 'USA', 'VIR']
    },
    south_america: {
        projection: "",
        codes: ['ARG', 'BOL', 'BRA', 'CHL', 'COL', 'ECU', 'FLK', 'GUF', 'GUY', 'PRY', 'PER', 'SUR', 'URY', 'VEN']
    },
    europe: {
        projection: function (element) {
            var projection = d3.geo.equirectangular()
                .center([10, 50])
                .rotate([4.4, 0])
                .scale(800)
                .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
            var path = d3.geo.path()
                .projection(projection);
            return {
                path: path,
                projection: projection
            }
        },
        codes: ['ALB', 'AND', 'AZE', 'AUT', 'ARM', 'BEL', 'BIH', 'BGR',
                'BLR', 'HRV', 'CYP', 'CZE', 'DNK', 'EST', 'FRO', 'FIN',
                'ALA', 'FRA', 'GEO', 'DEU', 'GIB', 'GRC', 'VAT', 'HUN',
                'ISL', 'IRL', 'ITA', 'KAZ', 'LVA', 'LIE', 'LTU', 'LUX',
                'MLT', 'MCO', 'MDA', 'MNE', 'NLD', 'NOR', 'POL', 'PRT',
                'ROU', 'RUS', 'SMR', 'SRB', 'SVK', 'SVN', 'ESP', 'SJM',
                'SWE', 'CHE', 'TUR', 'UKR', 'MKD', 'GBR', 'GGY', 'JEY', 'IMN']
    },
    asia: {
        projection: "",
        codes: ['AFG', 'AZE', 'BHR', 'BGD', 'ARM', 'BTN', 'IOT', 'BRN', 'MMR', 'KHM',
                                   'LKA', 'CHN', 'TWN', 'CXR', 'CCK', 'CYP', 'GEO', 'PSE', 'HKG', 'IND',
                                   'IDN', 'IRN', 'IRQ', 'ISR', 'JPN', 'KAZ', 'JOR', 'PRK', 'KOR', 'KWT',
                                   'KGZ', 'LAO', 'LBN', 'MAC', 'MYS', 'MDV', 'MNG', 'OMN', 'NPL', 'PAK',
                                   'PHL', 'TLS', 'QAT', 'RUS', 'SAU', 'SGP', 'VNM', 'SYR', 'TJK', 'THA',
                                   'ARE', 'TUR', 'TKM', 'UZB', 'YEM', 'null', 'null', 'null']
    },
    australia: {
        projection: "",
        codes: ['ASM', 'AUS', 'SLB', 'COK', 'FJI', 'PYF', 'KIR', 'GUM', 'NRU', 'NCL',
                                        'VUT', 'NZL', 'NIU', 'NFK', 'MNP', 'UMI', 'FSM', 'MHL', 'PLW', 'PNG',
                                        'PCN', 'TKL', 'TON', 'TUV', 'WLF', 'WSM', 'null']
    },
    antarctica: {
        projection: "",
        codes: ['ATA', 'BVT', 'SGS', 'ATF', 'HMD']
    }
};
// DECLARE CONTINENT FROM QUERY STRING
var continent = "africa";

var countries = {};

var getCountries = new XMLHttpRequest();
getCountries.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        d3.csv.parse(this.responseText).forEach(function(country){
            Object.keys(country).forEach(function(key){
                if (country[key].indexOf('\n') > 0)
                    country[key] = country[key].split("\n");
            })
            countries[country.Code] = country;
        })


        console.log(countries);

        makeMap();
        hideThem();
        addListeners(continent);
    }
};
getCountries.open("GET", "./countries.csv", true);
getCountries.send();




//basic map config with custom fills, mercator projection
function makeMap() {

    var map = new Datamap({
        scope: 'world',
        element: document.getElementById('container1'),
        projection: 'mercator',
        height: 600,
        fills: {
            defaultFill: 'lightblue'
        },
        setProjection: continents[continent].projection,
        geographyConfig: {
            //        dataUrl: null, //if not null, datamaps will fetch the map JSON (currently only supports topojson)
            //        hideAntarctica: true,
            //        borderWidth: 1,
            //        borderOpacity: 1,
            //        borderColor: '#FDFDFD',
            //        popupTemplate: function(geography, data) { //this function should just return a string
            //          return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
            //        },
            //        popupOnHover: true, //disable the popup while hovering
            highlightOnHover: true,
            highlightFillColor: 'black',
            highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
            //        highlightBorderWidth: 2,
            //        highlightBorderOpacity: 1
        },
        data: {
            //          RUS: {fillKey: 'lt50' },
            //          CAN: {fillKey: 'lt50' },
            //          BRA: {fillKey: 'gt50' },
            //          ARG: {fillKey: 'gt50'},
            //          COL: {fillKey: 'gt50' },
            //          AUS: {fillKey: 'gt50' },
            //          ZAF: {fillKey: 'gt50' },
            //          MAD: {fillKey: 'gt50' }
        }
    })
}

function hideThem(callback) {
    document.querySelectorAll(".datamaps-subunit").forEach(function (country) {
        country.classList.add("hidden");
    });
    unHideThem();
}
function unHideThem(callback) {
    continents[continent].codes.forEach(function (code) {
        //    console.log(code);
        if (document.querySelector("." + code))
            document.querySelector("." + code).classList.remove("hidden");
    })
}
function addListeners(continent) {
    continents[continent].codes.forEach(function (code) {
        if (document.querySelector("." + code) ){

            document.querySelector("." + code).addEventListener('click', function () {
                createpopup(code);
            })
        }
    });

    document.querySelector("#popup").addEventListener('click', function () {this.classList.add("hidden");})
    document.querySelector("#popup_insides").addEventListener('click', cancel_cancel)
}

var template = Handlebars.compile(document.querySelector('#country_popup').innerHTML);
//
//var countries = {
//    SDN: {
//        name: "Sudan",
//        political: ["Freedomhouse score: 8/100 (2018)", "Type of Government: Presidential Republic"],
//        geography: ["Capital: Khartoum", "Primary natural resources: Petroleum, small reserves of iron ore, copper, chromium ore, zinc,tungsten, mica, silver, gold", "Topography: generally flat, featureless plain; desert dominates the north", "Climate: hot and dry; arid desert; rainy season varies by region (April to November)"],
//        health: ["Life expectancy: 64.4 years (2017)", "Infant mortality rate: 48.8 deaths/ 1000 live births (2017)", "Primary Causes of Death: 1-Influenza and Pneumonia, 2- Stroke, 3-Diarrhoeal diseases, 4-Coronary Heart Disease, 5- Malnutrition. (2017)"],
//        economic: ["GDP per capita: $4,600 (2017 est.)", "Currency-Exchange rate: 18.06 Sudanese Pounds to 1 U.S Dollar (Feb 2018)", "Big Mac Index:  N/A", "GDP growth by country Income inequality: 3.6% (2018)", "Income Inequality:"],
//        business: ["Corruption Perceptions Index: 14 and 170th /176 (2016)", "Heritage Index of Economic Freedom: 49.4 overall (2018)"],
//        general: ["Literacy Rate: 75.9% (2015)",
//"Religions: Sunni Muslim, small Christian minority",
//"languages: Arabic (official), English (official), Nubian, Ta Bedawie, Fur",
//"Population: 37,345,935 (July 2017)"]
//    }
//};



function cancel_cancel(event) {
    event.stopPropagation();
}


function createpopup(code) {
    var popup = document.querySelector("#popup_insides");
    console.log(countries[code]);
    var country = countries[code];
    if (popup.parentElement.classList.contains("hidden")) {
        popup.parentElement.classList.remove("hidden");
    }
    popup.innerHTML = template(country);
}
