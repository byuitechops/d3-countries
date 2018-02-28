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
               projection: function (element) {
            var projection = d3.geo.equirectangular()
                .center([-90, 40])
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
        codes: ['ATG', 'BHS', 'BRB', 'BMU', 'BLZ', 'VGB', 'CAN', 'CYM', 'CRI',
                    'CUB', 'DMA', 'DOM', 'SLV', 'GRL', 'GRD', 'GLP', 'GTM', 'HTI',
                    'HND', 'JAM', 'MTQ', 'MEX', 'MSR', 'ANT', 'CUW', 'ABW', 'SXM',
                    'BES', 'NIC', 'UMI', 'PAN', 'PRI', 'BLM', 'KNA', 'AIA', 'LCA',
                    'MAF', 'SPM', 'VCT', 'TTO', 'TCA', 'USA', 'VIR']
    },
    south_america: {
                projection: function (element) {
            var projection = d3.geo.equirectangular()
                .center([-50, -20])
                .rotate([4.4, 0])
                .scale(450)
                .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
            var path = d3.geo.path()
                .projection(projection);

            return {
                path: path,
                projection: projection
            };
        },
        codes: ['ARG', 'BOL', 'BRA', 'CHL', 'COL', 'ECU', 'FLK', 'GUF', 'GUY', 'PRY', 'PER', 'SUR', 'URY', 'VEN']
    },
    europe: {
        projection: function (element) {
            var projection = d3.geo.equirectangular()
                .center([20, 50])
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
                projection: function (element) {
            var projection = d3.geo.equirectangular()
                .center([100 , 38])
                .rotate([4.4, 0])
                .scale(350)
                .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
            var path = d3.geo.path()
                .projection(projection);
            return {
                path: path,
                projection: projection
            }
        },
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
var view = window.location.href.split("?")[1];
var continent;
if (Object.keys(continents).includes(view))
    continent = view;
else{
    continent = 'undefined';
    window.alert("Please select a continent.")
}

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
        height: '95vh',
        fills: {
            defaultFill: '#ABDDA4'
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
            highlightFillColor: '#FC8D59',
            highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
            //        highlightBorderWidth: 2,
            //        highlightBorderOpacity: 1
        },
        data: {
            //          RUS: {fillKey: 'lt50' }, //example
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

            document.querySelector("." + code).addEventListener('click', function (event) {
                createpopup(code);
                event.preventDefault();
    },false);
                document.querySelector("." + code).addEventListener("touchend",function (event) {
        createpopup(code);
    event.preventDefault();
    },false);

        }
    });

    document.querySelector("#popup").addEventListener("touchend",function (event) {
        this.classList.add("hidden");
    event.preventDefault();
    },false);
    document.querySelector("#popup").addEventListener("click",function (event) {
        this.classList.add("hidden");
    event.preventDefault();
    },false);

    document.querySelector("#popup_insides").addEventListener('click', cancel_cancel)
        document.querySelector("#popup_insides").addEventListener("touchend", cancel_cancel);
}

var template = Handlebars.compile(document.querySelector('#country_popup').innerHTML);


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
