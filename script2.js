// DECLARE CONTINENT FROM QUERY STRING
var view = window.location.href.split("?")[1];


var countries = {};

var getCountries = new XMLHttpRequest();
getCountries.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        d3.csv.parse(this.responseText).forEach(function (country) {
            Object.keys(country).forEach(function (key) {
                if (country[key].indexOf('\n') > 0)
                    country[key] = country[key].split("\n");
            })
            countries[country.Code] = country;
        })


        console.log(countries);


        addListeners();
    }
};
getCountries.open("GET", "../countries.csv", true);
getCountries.send();




function hideThem(callback) {
    document.querySelectorAll(".datamaps-subunit").forEach(function (country) {
        country.classList.add("hidden");
    });
    unHideThem();
}

function unHideThem(callback) {
    continents[continent].codes.forEach(function (code) {
        //    console.log(code);
        if (document.querySelector("#Sudan"))
            document.querySelector("#Sudan").classList.remove("hidden");
    })
}

function addListeners() {


    document.querySelectorAll("#Sudan path, #Sudan text").forEach(function (child) {
            child.addEventListener('click', function (event) {
                createpopup(countries["SDN"]);
                console.log("what's going on")
                event.preventDefault();
            }, false);
           child.addEventListener("touchend", function (event) {
                createpopup("Sudan");
                event.preventDefault();
            }, false);

    });


        document.querySelector("#popup").addEventListener("touchend", function (event) {
            this.classList.add("hidden");
            event.preventDefault();
        }, false); document.querySelector("#popup").addEventListener("click", function (event) {
            this.classList.add("hidden");
            event.preventDefault();
        }, false);

        document.querySelector("#popup_insides").addEventListener('click', cancel_cancel); document.querySelector("#popup_insides").addEventListener("touchend", cancel_cancel);
    }

    var template = Handlebars.compile(document.querySelector('#country_popup').innerHTML);


    function cancel_cancel(event) {
        event.stopPropagation();
    }


    function createpopup(code) {
        var popup = document.querySelector("#popup_insides");
        console.log("Sudan");
        var country = countries["SDN"];
        if (popup.parentElement.classList.contains("hidden")) {
            popup.parentElement.classList.remove("hidden");
        }
        popup.innerHTML = template(country);
    }
