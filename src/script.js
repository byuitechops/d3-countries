import data from './countries.csv'
import template from './template.hbs'

// // GRAB THE CONTINENT NAME FOR SORTING LATER.
var continent = document.querySelector("#theMap").getAttribute('data-continent');
var countries = {}
data.forEach(function (country) {
    if (country.Continent === continent) {
        countries[country.id] = country;
    }
})
addListeners()
if(window.location.hash.match(/accessible/i)){
    document.querySelector('body').innerHTML = '<a href="#">Return</a>'+Object.values(countries).sort((a,b) => (b.id < a.id)*2-1).map(template).join('\n')
    document.querySelectorAll('img').forEach(img => img.parentNode.removeChild(img))
    document.querySelectorAll('link').forEach(link => link.parentNode.removeChild(link))
}

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