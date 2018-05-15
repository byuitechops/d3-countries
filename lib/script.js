// GRAB THE CONTINENT NAME FOR SORTING LATER.
var continent = document.querySelector("#theMap").getAttribute('data-continent');
var countries = {};

var getCountries = new XMLHttpRequest();
getCountries.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        d3.csvParse(this.responseText).forEach(function (country) {
            if (country.Continent === continent) {
                countries[country.id] = country;
            }
        })
        addListeners();
        if(window.location.hash.match(/accessible/i)){
            document.querySelector('body').innerHTML = '<a href="#">Return</a>'+Object.values(countries).map(template).join('\n')
            document.querySelectorAll('img').forEach(img => img.parentNode.removeChild(img))
            document.querySelectorAll('link').forEach(link => link.parentNode.removeChild(link))
        }
    }
};
getCountries.open("GET", "lib/countries.csv", true);
getCountries.send();

function addListeners() {
    var selector = "";
    Object.keys(countries).forEach(function (country) {
        selector = "#" + countries[country].id + " path, #" + countries[country].id + " text";
        var edge_lord = Array.from(document.querySelectorAll(selector))
        edge_lord.forEach(function (child) {
            child.addEventListener('click', function (event) {
                createpopup(countries[country].id);
                event.preventDefault();
            }, false);
            child.addEventListener("touchend", function (event) {
                createpopup(countries[country].id);
                event.preventDefault();
            }, false);

        });
    })




    document.querySelector("#popup").addEventListener("touchend", function (event) {
        this.classList.add("hidden");
        event.preventDefault();
    }, false);
    document.querySelector("#popup").addEventListener("click", function (event) {
        this.classList.add("hidden");
        event.preventDefault();
    }, false);
    document.querySelector("#popup_insides").addEventListener('click', cancel_cancel);
    document.querySelector("#popup_insides").addEventListener("touchend", cancel_cancel);
}

var template = Handlebars.compile(document.querySelector('#country_popup').innerHTML);

function cancel_cancel(event) {
    event.stopPropagation();
}

function createpopup(code) {
    var popup = document.querySelector("#popup_insides");
    var country = countries[code];
    if (popup.parentElement.classList.contains("hidden")) {
        popup.parentElement.classList.remove("hidden");
    }
    popup.innerHTML = template(country) + "<div id='close_popup'>+</div>";
    document.querySelector("#close_popup").addEventListener('click', hide_popup);
}

function hide_popup() {
    var popup = document.querySelector("#popup");
    popup.classList.add("hidden");
}

window.onhashchange = function(){
    location.reload()
}