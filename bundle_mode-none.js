/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _countries = __webpack_require__(1);

var _countries2 = _interopRequireDefault(_countries);

var _template = __webpack_require__(2);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// // GRAB THE CONTINENT NAME FOR SORTING LATER.
var continent = document.querySelector("#theMap").getAttribute('data-continent');
var countries = {};
_countries2.default.forEach(function (country) {
    if (country.Continent === continent) {
        countries[country.id] = country;
    }
});
addListeners();
if (window.location.hash.match(/accessible/i)) {
    document.querySelector('body').innerHTML = '<a href="#">Return</a>' + Object.values(countries).sort(function (a, b) {
        return (b.id < a.id) * 2 - 1;
    }).map(_template2.default).join('\n');
    document.querySelectorAll('img').forEach(function (img) {
        return img.parentNode.removeChild(img);
    });
    document.querySelectorAll('link').forEach(function (link) {
        return link.parentNode.removeChild(link);
    });
}

function addListeners() {
    var selector = "";
    Object.keys(countries).forEach(function (country) {
        selector = "#" + countries[country].id + " path, #" + countries[country].id + " text";
        var edge_lord = Array.from(document.querySelectorAll(selector));
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
    });

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
    popup.innerHTML = (0, _template2.default)(country) + "<div id='close_popup'>+</div>";
    document.querySelector("#close_popup").addEventListener('click', hide_popup);
}

function hide_popup() {
    var popup = document.querySelector("#popup");
    popup.classList.add("hidden");
}

window.onhashchange = function () {
    location.reload();
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var res = [{"id":"Swaziland","Country":"Swaziland","Continent":"Africa","fhs":"16/100 (2018)","gov":"Absolute Monarchy","Capital":"Mbabane(administrative capital) Lobamba (royal and legislative capital","pnr":"asbestos, coal, clay, casserite, hydropower, forests, small gold and diamond deposits, quarry stone, and talc","Topography":"mostly mountains and hills; some moderately sloping plains","Climate":"varies from tropical to near temperate","le":"52.1 years (2017)","imr":"48.8/1000 live births (2017)","pcod":"1- HIV/AIDS, 2- Stroke, 3- Influenza and Pneumonia, 4- Tuberculosis, 5- Diabetes Mellitus (2017)","GDPPC":"$9,900 2017 EST.","cer":"11.83 Emalangeni to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":" -0.9% (2017)","ii":"51.5 (2010)","cpi":"Not avaliable ","hioef":"55.9 overall (2018)","lr":"87.5% (2015)","Religions":"Christian 90% (Zionist - a blend of Christianity and indigenous ancestral worship - 40%, Roman Catholic 20%, other 30% - includes Anglican, Methodist, Mormon, Jehovah's Witness), Muslim 2%, other 8% (includes Baha'i, Buddhist, Hindu, indigenous religionist, Jewish) (2015 est.)","Languages":"English (official, used for government business), siSwati (official)","Population":"1,467,152 (July 2017)"},{"id":"Lesotho","Country":"Lesotho","Continent":"Africa","fhs":"64/100 (2018)","gov":"parliamentary constitutional monarchy","Capital":"Maseru","pnr":"water, agricultural and grazing land, diamonds, sand, clay, building stone\r\n","Topography":"mostly highland with plateaus, hills, and mountains\r\n","Climate":"temperate; cool to cold, dry winters; hot, wet summers\r\n","le":"53 years (2017)\r\n","imr":"46.1 deaths/1,000 live births (2017)","pcod":"1- HIV/AIDS, 2- Stroke, 3- Influenza and Pneumonia, 4- Diabetes Mellitus, 5- Coronary Heart Disease (2017)","GDPPC":" $3,900 2017 EST.","cer":"11.82 Maolit to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"3.1% (2017)","ii":"54.2 (2015)","cpi":"39 and 83rd/ 176 (2016)","hioef":"53.9 overall (2018)","lr":"79.4% (2015)","Religions":"Christian 80%, indigenous beliefs 20%","Languages":"Sesotho (official) (southern Sotho), English (official), Zulu, Xhosa","Population":"1,958,042 (July 2017) "},{"id":"South_Africa","Country":"South Africa","Continent":"Africa","fhs":"78/100 (2018)","gov":"parliamentary republic\r\n","Capital":"Pretoria (administrative capital); Cape Town (legislative capital); Bloemfontein (judicial capital)","pnr":"gold, chromium, antimony, coal, iron ore, manganese, nickel, phosphates, tin, rare earth elements, uranium, gem diamonds, platinum, copper, vanadium, salt, natural gas\r\n","Topography":"vast interior plateau rimmed by rugged hills and narrow coastal plain\r\n","Climate":"mostly semiarid; subtropical along east coast; sunny days, cool nights\r\n","le":"63.8 years (2017)","imr":"31 deaths/1,000 live births (2017)","pcod":"1- HIV/AIDS, 2- Stroke, 3- Diabetes Mellitus, 4- Coronary Heart Disease, 5- Influenza and Pneumonia (2017)","GDPPC":"$13,400 2017 EST.","cer":"11.91 Rand to 1 U.S. Dollar (March 2018)","bmi":"$2.45 vs $5.28 US","gdpg":"1.1% (2017)","ii":"63.4 (2011)","cpi":"45 and 64th/176 (2016)","hioef":"63.0 overall (2018)","lr":"94.4% (2015)","Religions":"Protestant 36.6% (Zionist Christian 11.1%, Pentecostal/Charismatic 8.2%, Methodist 6.8%, Dutch Reformed 6.7%, Anglican 3.8%), Catholic 7.1%, Muslim 1.5%, other Christian 36%, other 2.3%, unspecified 1.4%, none 15.1% (2001)","Languages":"isiZulu (official) 22.7%, isiXhosa (official) 16%, Afrikaans (official) 13.5%, English (official) 9.6%, Sepedi (official) 9.1%, Setswana (official) 8%, Sesotho (official) 7.6%, Xitsonga (official) 4.5%, siSwati (official) 2.5%, Tshivenda (official) 2.4%, isiNdebele (official)  (2011)","Population":"54,841,552  (July 2017)"},{"id":"Namibia","Country":"Namibia","Continent":"Africa","fhs":"77/100 (2018)","gov":"presidential republic\r\n","Capital":"Windhoek","pnr":"diamonds, copper, uranium, gold, silver, lead, tin, lithium, cadmium, tungsten, zinc, salt, hydropower, fish note: suspected deposits of oil, coal, and iron ore\r\n","Topography":"mostly high plateau; Namib Desert along coast; Kalahari Desert in east","Climate":"desert; hot, dry; rainfall sparse and erratic","le":"64 years (2017)","imr":"35.1 deaths/1,000 live births (2017)","pcod":"1- HIV/AIDS, 2- Stroke, 3- Coronary Heart Disease, 4- Influenza and Pneumonia, 5- Diabetes Mellitus (2017)","GDPPC":"$11,500 2017 EST.","cer":"11.88 Namibian Dollars to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"2.5% (2017)","ii":"61.3 (2010)","cpi":"52 and 53rd/176 (2016)","hioef":"58.5 overall (2018)","lr":"81.9% (2015)","Religions":"Christian 80% to 90% (at least 50% Lutheran), indigenous beliefs 10% to 20%","Languages":"Oshivambo languages 48.9%, Nama/Damara 11.3%, Afrikaans 10.4%, Otjiherero languages 8.6%, Kavango languages 8.5%, Caprivi languages 4.8%, English (official) 3.4% (2011 est)","Population":"2,484,780 (July 2017) "},{"id":"Botswana","Country":"Botswana","Continent":"Africa","fhs":"72/100 (2018)","gov":"parliamentary republic","Capital":"Gaborone","pnr":"diamonds, copper, nickel, salt, soda ash, potash, coal, iron ore, silver","Topography":"predominantly flat to gently rolling tableland; Kalahari Desert in southwest","Climate":"semiarid; warm winters and hot summers","le":"63.3 years (2017)","imr":"29.6 deaths/1,000 live births (2017)","pcod":"1- HIV/AIDS, 2- Stroke, 3- Coronary Heart Disease, 4- Diabetes Mellitus, 5- Hypertension (2017)","GDPPC":"$18,100 2017 EST.","cer":"9.58 Pulas to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"4.8% (2017)","ii":"60.5 (2009)","cpi":"60 and 35th/176 (2016)","hioef":"69.9 overall (2018)","lr":"88.5%  (2015)","Religions":"Christian 79.1%, Badimo 4.1%, other 1.4% (includes Baha'i, Hindu, Muslim, Rastafarian), none 15.2%, unspecified 0.3% (2011)","Languages":"Setswana 77.3%, Sekalanga 7.4%, Shekgalagadi 3.4%, English (official) 2.8%, Zezuru/Shona 2%, Sesarwa 1.7%, Sembukushu 1.6%, Ndebele 1%, other 2.8% (2011)","Population":"2,214,858 (July 2017)"},{"id":"Madagascar","Country":"Madagascar","Continent":"Africa","fhs":"56/100 (2018)","gov":"semi-presidential republic","Capital":"Antananarivo","pnr":"graphite, chromite, coal, bauxite, rare earth elements, salt, quartz, tar sands, semiprecious stones, mica, fish, hydropower","Topography":"narrow coastal plain, high plateau and mountains in center","Climate":"tropical along coast, temperate inland, arid in south","le":"66.3 years (2017)","imr":"41.2 deaths/1,000 live births (2017)","pcod":"1- Stroke, 2- Coronary Heart Disease, 3- Influenza and Pneumonia, 4- Tuberculosis, 5- Diarrhoeal diseases (2017)","GDPPC":"$1,600 2017 EST.","cer":"3,120 Malagasy Ariary to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"5.3% (2017)","ii":"40.6 (2010)","cpi":"26 and 145th/176 (2016)","hioef":"56.8 overall (2018)","lr":"64.7% (2015)","Religions":"Christian, indigenous religionist, Muslim","Languages":"French (official), Malagasy (official), English","Population":"25,054,161 (July 2017)"},{"id":"Mozambique","Country":"Mozambique","Continent":"Africa","fhs":"52/100 (2018)","gov":"presidential republic","Capital":"Maputo","pnr":"coal, titanium, natural gas, hydropower, tantalum, graphite","Topography":"mostly coastal lowlands, uplands in center, high plateaus in northwest, mountains in west","Climate":"tropical to subtropical","le":"53.7 years (2017)","imr":"65.9 deaths/1,000 live births (2017)","pcod":"1- HIV/AIDS, 2- Influenza and Pneumonia, 3- Stroke, 4- Tuberculosis, 5- Diarhoeal diseases (2017)","GDPPC":"$1,300 2017 EST.","cer":"62.20 Meticais to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"5.3% (2017)","ii":"45.6 (2008)","cpi":"27 and 142nd/176 (2016","hioef":"46.3 overall (2018)","lr":"58.8% (2015)","Religions":"Roman Catholic 28.4%, Muslim 17.9%, Zionist Christian 15.5%, Protestant 12.2% (includes Pentecostal 10.9% and Anglican 1.3%), other 6.7%, none 18.7%, unspecified 0.7% (2007 est.)","Languages":"Emakhuwa 25.3%, Portuguese (official) 10.7%, Xichangana 10.3%, Cisena 7.5%, Elomwe 7%, Echuwabo 5.1%, other Mozambican languages 30.1% (2007 est.)","Population":"26,573,706 (July 2017)"},{"id":"Zimbabwe","Country":"Zimbabwe","Continent":"Africa","fhs":"30/100 (2018)","gov":"semi-presidential republic","Capital":"Harare","pnr":"coal, chromium ore, asbestos, gold, nickel, copper, iron ore, vanadium, lithium, tin, platinum group metals","Topography":"mostly high plateau with higher central plateau (high veld); mountains in east","Climate":"tropical; moderated by altitude; rainy season (November to March)","le":"60.4 years (2017)","imr":"32.7 deaths/1,000 live births (2017)","pcod":"1- HIV/AIDS, 2- Influenza and Pneumonia, 3- Prostate Cancer, 4- Stroke, 5- Cervical Cancer (2017)","GDPPC":"$2,300 2017 EST.","cer":"30,000 Zimbabwean Dollars to 1 U.S. Dollar (March 2018). ","bmi":"No Data","gdpg":"0.8% (2017)","ii":"43.2 (2011)","cpi":"22 and 154th/ 176 (2016)","hioef":"44.0 overall (2018)","lr":"86.5% (2015)","Religions":"Protestant 74.8% (includes Apostolic 37.5%, Pentecostal 21.8%, other 15.5%), Roman Catholic 7.3%, other Christian 5.3%, traditional 1.5%, Muslim 0.5%, other 0.1%, none 10.5% (2015 est.)","Languages":"Shona (official), Ndebele (official), English (official), 13 minority official languages ","Population":"13,805,084 (July 2017) "},{"id":"Malawi","Country":"Malawi","Continent":"Africa","fhs":"63/100 (2018)","gov":"presidential republic","Capital":"Lilongwe","pnr":"limestone, arable land, hydropower, unexploited deposits of uranium, coal, and bauxite","Topography":"narrow elongated plateau with rolling plains, rounded hills, some mountains","Climate":"sub-tropical; rainy season (November to May); dry season (May to November)","le":"61.7 years (2017)","imr":"43.4 deaths/1,000 live births (2017)","pcod":"1- HIV/AIDS, 2- Stroke, 3- Influenza and Pneumonia, 4- Coronary Heart Disease, 5- Diarrhoeal diseases (2017)","GDPPC":"$1,200 2017 EST.","cer":"725.28 Malawian Kwachas to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"5% (2017)","ii":"46.1 (2010)","cpi":"31 and 120th/176 (2016)","hioef":"52.0 overall (2018)","lr":"62.1% (2015)","Religions":"Protestant 27.2% (includes Church of Central Africa Presbyterian 17.7%, Seventh Day Adventist/Baptist 6.9%, Anglican 2.6%), Catholic 18.4%, other Christian 41%, Muslim 12.1%, other 0.3%, none 1% (2015-16 est.)","Languages":"English (official), Chichewa (common), Chinyanja and 9 other tribal languages","Population":"19,196,246 (July 2017) "},{"id":"Zambia","Country":"Zambia","Continent":"Africa","fhs":"55/100 (2018)","gov":"presidential republic","Capital":"Lusaka; note - a proposal to build a new capital city in Ngabwe was announced in May 2017","pnr":"copper, cobalt, zinc, lead, coal, emeralds, gold, silver, uranium, hydropower","Topography":"mostly high plateau with some hills and mountains","Climate":"tropical; modified by altitude; rainy season (October to April)","le":"52.7 years (2017)","imr":"61.1 deaths/1,000 live births (2017)","pcod":"1- HIV/AIDS, 2- Stroke, 3- Influenza and Pneumonia, 4- Coronary Heart Disease, 5- Malaria (2017)","GDPPC":"$4,000 2017 EST.","cer":"9.57�Zambian Kwachas to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"4.5% (2017)","ii":"57.1 (2015)","cpi":"38 and 87th/176 (2016)","hioef":"54.3 overall (2018)","lr":"63.4% (2015)","Religions":"Protestant 75.3%, Roman Catholic 20.2%, other 2.7% (includes Muslim Buddhist, Hindu, and Baha'i), none 1.8% (2010 est.)","Languages":"Bembe 33.4%, Nyanja 14.7%, Tonga 11.4%, Zambia is said to have over 70 languages (2010 est.)","Population":"15.972 million (July 2017) "},{"id":"Angola","Country":"Angola","Continent":"Africa","fhs":"26/100 (2018)","gov":"presidential republic","Capital":"Luanda","pnr":"petroleum, diamonds, iron ore, phosphates, copper, feldspar, gold, bauxite, uranium","Topography":"narrow coastal plain rises abruptly to vast interior plateau","Climate":"semiarid in south and along coast to Luanda; north has cool, dry season (May to October) and hot, rainy season (November to April)","le":"60.2 years (2017)","imr":"67.6 deaths/1,000 live births (2017)","pcod":"1- Influenza and Pneumonia, 2- Diarrhoeal diseases, 3- Stroke, 4- Coronary Heart Disease, 5- HIV/AIDS (2017)","GDPPC":"$6,800 2017 EST.","cer":"214.08 Kwanza to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"1.6% (2017)","ii":"42.7 (2008)","cpi":"18 and 164th/176 (2016)","hioef":"48.6 overall (2018)","lr":"71.1% (2015)","Religions":"Roman Catholic 41.1%, Protestant 38.1%, other 8.6%, none 12.3% (2014 est.)","Languages":"Portuguese 71.2% (official), Umbundu 23%, Kikongo 8.2%, and 9 other languages (2014 est.)","Population":"29,310,273 (July 2017)"},{"id":"Tanzania","Country":"Tanzania","Continent":"Africa","fhs":"52/100 (2018)","gov":"presidential republic","Capital":"Dodoma (legislative capital), Dar es Salaam (administrative capital); note - Dodoma was designated the national capital in 1996 and serves as the meeting place for the National Assembly; Dar es Salaam remains the de facto capital, the country's largest city and commercial center, and the site of the executive branch offices and diplomatic representation; the government contends that it will complete the transfer of the executive branch to Dodoma by 2020","pnr":"hydropower, tin, phosphates, iron ore, coal, diamonds, gemstones, gold, natural gas, nickel","Topography":"plains along coast; central plateau; highlands in north, south","Climate":"varies from tropical along coast to temperate in highlands","le":"62.6 years (2017)","imr":"39.9 deaths/1,000 live births (2017)","pcod":"1- HIV/AIDS, 2- Influenza and Pneumonia, 3- Stroke, 4- Coronary Heart Disease, 5- Diarrhoeal diseases (2017) ","GDPPC":"$3,300 2017 EST.","cer":"2,261.15 Tanzanian Shillings to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"6.8% (2017)","ii":"37.8 (2011)","cpi":"32 and 116th/176 (2016)","hioef":"59.9 overall (2018)","lr":"77.9% (2015)","Religions":"Christian 61.4%, Muslim 35.2%, folk religion 1.8%, other 0.2%, unaffiliated 1.4%. (2010). note: Zanzibar is almost entirely Muslim","Languages":"Kiswahili or Swahili (official), Kiunguja, English (official) and 8 other languages.","Population":"53,950,935 (July 2017). "},{"id":"Burundi","Country":"Burundi","Continent":"Africa","fhs":"18/100 (2018)","gov":"presidential republic","Capital":"Bujumbura","pnr":"nickel, uranium, rare earth oxides, peat, cobalt, copper, platinum, vanadium, arable land, hydropower, niobium, tantalum, gold, tin, tungsten, kaolin, limestone","Topography":"hilly and mountainous, dropping to a plateau in east, some plains","Climate":"equatorial; high plateau with considerable altitude variation (772 m to 2,670 m above sea level); average annual temperature varies with altitude from 23 to 17 degrees Celsius but is generally moderate as the average altitude is about 1,700 m; average annual rainfall is about 150 cm; two wet seasons (February to May and September to November), and two dry seasons (June to August and December to January)","le":"60.9 years (2017)","imr":"58.8 deaths/1,000 live births (2017)","pcod":"1- Influenza and Pneumonia, 2- Stroke, 3- Diarrhoeal Diseases, 4- Malnutrition, 5- Coronary Heart Disease (2017) ","GDPPC":"$800 2017 EST.","cer":"1,759.65�Burundi Francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"0.1% (2017)","ii":"39.2 (2013)","cpi":"20 and 159th/176 (2016)","hioef":"50.9 overall (2018)","lr":"85.6% (2015 est.)","Religions":"Roman Catholic 62.1%, Protestant 23.9% (includes Adventist 2.3% and other Protestant 21.6%), Muslim 2.5%, other 3.6%, unspecified 7.9% (2008 est.)","Languages":"Kirundi 29.7% (official), Kirundi, French (official) , English (official) and English, unspecified 56.9% (2008 est.)","Population":"11,466,756 (July 2017). "},{"id":"Kenya","Country":"Kenya","Continent":"Africa","fhs":"48/100 (2018)","gov":"presidential republic","Capital":"Nairobi","pnr":"limestone, soda ash, salt, gemstones, fluorspar, zinc, diatomite, gypsum, wildlife, hydropower","Topography":"low plains rise to central highlands bisected by Great Rift Valley; fertile plateau in west","Climate":"varies from tropical along coast to arid in interior","le":"64.3 years (2017)","imr":"37.1 deaths/1,000 live births (2017)","pcod":"1- Influenza and Penumonia, 2- HIV/AIDS, 3- Stroke, 4- Diarrhoeal diseases, 5- Malnutrition (2017)","GDPPC":"$3,500 2017 EST.","cer":"101.31�Kenya Shillings to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"5.5% (2017)","ii":"47.7 (2005)","cpi":"26 and 145th/176 (2016)","hioef":"54.7 overall (2018)","lr":"78% (2015)","Religions":"Christian 83% (Protestant 47.7%, Catholic 23.4%, other Christian 11.9%), Muslim 11.2%, Traditionalists 1.7%, other 1.6%, none 2.4%, unspecified 0.2% (2009 est.)","Languages":"English (official), Kiswahili (official), numerous indigenous languages","Population":"47,615,739 (July 2017)."},{"id":"Rwanda","Country":"Rwanda","Continent":"Africa","fhs":"23/100 (2018)","gov":"presidential republic","Capital":"Kigali","pnr":"gold, cassiterite (tin ore), wolframite (tungsten ore), methane, hydropower, arable land","Topography":"mostly grassy uplands and hills; relief is mountainous with altitude declining from west to east","Climate":"temperate; two rainy seasons (February to April, November to January); mild in mountains with frost and snow possible","le":"64.3 years (2017)","imr":"29.7 deaths/1,000 live births (2017)","pcod":"1- Stroke, 2- Influenza and Pneumonia, 3- Coronary Heart Disease, 4- HIV/AIDS, 5- Diarrhoeal diseases (2017)","GDPPC":"$2,100 2017 EST.","cer":"855.50�Rwanda Francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"6.8% (2017)","ii":"50.4 (2013)","cpi":"54 and 50th/176 (2016)","hioef":"69.1 overall (2018)","lr":"70.5% (2015)","Religions":"Protestant 50.2% (includes Adventist 12% and other Protestant 38.2%), Roman Catholic 44.3%, Muslim 2%, other 0.9% (includes traditionalist/animist), none 2.5%, unspecified <.1 (2002 est.)","Languages":"Kinyarwanda (official) 93.2%, French (official) <.1, English (official) <.1, other 6.3% (2002 est.)","Population":"11,901,484 (July 2017). "},{"id":"Democratic_Republic_of_the_Congo","Country":"Democratic Republic of the Congo","Continent":"Africa","fhs":"16/100 (2018)","gov":"semi-presidential republic","Capital":"Kinshasa","pnr":"cobalt, copper, niobium, tantalum, petroleum, industrial and gem diamonds, gold, silver, zinc, manganese, tin, uranium, coal, hydropower, timber","Topography":"vast central basin is a low-lying plateau; mountains in east","Climate":"tropical; hot and humid in equatorial river basin; cooler and drier in southern highlands; cooler and wetter in eastern highlands; north of Equator - wet season (April to October), dry season (December to February); south of Equator - wet season (November to March), dry season (April to October)","le":"57.7 years (2017)","imr":"68.2 deaths/1,000 live births (2017)","pcod":"","GDPPC":"$800 2017 EST.","cer":"1,615.00�Congolese Francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"3% (2017)","ii":"42.1 (2012)","cpi":"21 and 156th/ 176 (2016)","hioef":"52.1 overall (2018)","lr":"77% (2016)","Religions":"Roman Catholic 50%, Protestant 20%, Kimbanguist 10%, Muslim 10%, other (includes syncretic sects and indigenous beliefs) 10%","Languages":"French (official), Lingala, Kingwana, Kikongo, Tshiluba","Population":"83,301,151 (July 2017)."},{"id":"Congo","Country":"Congo","Continent":"Africa","fhs":"20/100 (2018)","gov":"presidential republic","Capital":"Brazzaville","pnr":"petroleum, timber, potash, lead, zinc, uranium, copper, phosphates, gold, magnesium, natural gas, hydropower","Topography":"coastal plain, southern basin, central plateau, northern basin","Climate":"tropical; rainy season (March to June); dry season (June to October); persistent high temperatures and humidity; particularly enervating climate astride the Equator","le":"59.8 years (2017)","imr":"54.9 deaths/1,000 live births (2017)","pcod":"1- HIV/AIDS, 2- Stroke, 3- Coronary Heart Disease, 4- Influenza and Pneumonia, 5- Diarrhoeal diseases (2017)","GDPPC":"$6,700 2017 EST.","cer":"531.07 Cooperation Financiere en Afrique Centrale francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"2.8% (2017)","ii":"40.2 (2011)","cpi":"20 and 159th/176 (2016)","hioef":"38.9 overall (2018)","lr":"79.3% (2015)","Religions":"Roman Catholic 33.1%, Awakening Churches/Christian Revival 22.3%, Protestant 19.9%, Salutiste 2.2%, Muslim 1.6%, Kimbanguiste 1.5%, other 8.1%, none 11.3% (2010 est.)","Languages":"French (official), Lingala and Monokutuba, many local languages and dialects.","Population":"4,954,674 (July 2017). "},{"id":"Gabon","Country":"Gabon","Continent":"Africa","fhs":"23/100 (2018)","gov":"presidential republic","Capital":"Libreville","pnr":"petroleum, natural gas, diamond, niobium, manganese, uranium, gold, timber, iron ore, hydropower","Topography":"narrow coastal plain; hilly interior; savanna in east and south","Climate":"tropical; always hot, humid","le":"52.1 years (2017)","imr":"44.1 deaths/1,000 live births (2017)","pcod":"1- HIV/AIDS, 2- Influenza and Pneumonia, 3- Stroke, 4- Coronary Heart Disease, 5- Malaria (2017)","GDPPC":"$19,300 2017 EST.","cer":"531.07 Cooperation Financiere en Afrique Centrale francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"2.7% (2017)","ii":"41.5 (2005)","cpi":"35 and 101st/176 (2016)","hioef":"58.0 overall (2018)","lr":"83.2% (2015)","Religions":"Roman Catholic 42.3%, Protestant 12.3%, other Christian 27.4%, Muslim 9.8%, animist 0.6%, other 0.5%, none/no answer 7.1% (2012 est.)","Languages":"French (official), Fang, Myene, Nzebi, Bapounou/Eschira, Bandjabi","Population":"1,772,255 (July 2017) "},{"id":"Equitorial_Guinea","Country":"Equitorial Guinea","Continent":"Africa","fhs":"7/100 (2018)","gov":"presidential republic","Capital":"Malabo; note - a new capital of Oyala is being built on the mainland near Djibloho; Malabo is on the island of Bioko","pnr":"petroleum, natural gas, timber, gold, bauxite, diamonds, tantalum, sand and gravel, clay","Topography":"coastal plains rise to interior hills; islands are volcanic","Climate":"tropical; always hot, humid","le":"64.6 years (2017)","imr":"65.2 deaths/1,000 live births (2017)","pcod":"1- HIV/AIDS, 2- Influenza and Pneumonia, 3- Stroke, 4-Coronary Heart Disease, Diarrhoeal diseases (2017)","GDPPC":"$34,900 2017 EST.","cer":"531.07 Cooperation Financiere en Afrique Centrale francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"-7.8% (2017)","ii":"no data","cpi":"No Data","hioef":"42.0 overall (2018)","lr":"95.3% (2015)","Religions":"nominally Christian and predominantly Roman Catholic, pagan practices","Languages":"Spanish (official) 67.6%, other (includes French (official), Fang, Bubi) 32.4% (1994 census)","Population":"778,358 (July 2017)"},{"id":"Somalia","Country":"Somalia","Continent":"Africa","fhs":"7/100 (2018)","gov":"federal parliamentary republic","Capital":"Mogadishu","pnr":"uranium and largely unexploited reserves of iron ore, tin, gypsum, bauxite, copper, salt, natural gas, likely oil reserves","Topography":"mostly flat to undulating plateau rising to hills in north","Climate":"principally desert; northeast monsoon (December to February), moderate temperatures in north and hot in south; southwest monsoon (May to October), torrid in the north and hot in the south, irregular rainfall, hot and humid periods (tangambili) between monsoons","le":"52.8 years (2017)","imr":"94.8 deaths/1,000 live births (2017)","pcod":"1- Influenza and Pneumonia, 2- Diarrhoeal diseases, 3- Tuberculosis, 4- Stroke, 5- Malnutrition (2017)","GDPPC":"no data","cer":"577.00�Somali Shillings to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"3.5% (2017)","ii":"no data","cpi":"10 and 176th/176 (2016)","hioef":"No Data","lr":"No Data","Religions":"Sunni Muslim (Islam) (official, according to the 2012 Transitional Federal Charter)","Languages":"Somali (official), Arabic (official), Italian, English (2012)","Population":"11,031,386 (July 2017). "},{"id":"Ethiopia","Country":"Ethiopia","Continent":"Africa","fhs":"12/100 (2018)","gov":"federal parliamentary republic","Capital":"Addis Ababa","pnr":"small reserves of gold, platinum, copper, potash, natural gas, hydropower","Topography":"high plateau with central mountain range divided by Great Rift Valley","Climate":"tropical monsoon with wide topographic-induced variation","le":"62.6 years (2017)","imr":"49.6 deaths/1,000 live births (2017)","pcod":"1- Influenza and Penumonia, 2- Stroke, 3- HIV/AIDS, 4- Diarrhoeal diseases, 5- Malnutrition (2017)","GDPPC":"$2,100 2017 EST.","cer":"27.57 Birr to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"8.5% (2017)","ii":"33.3 (2010)","cpi":"34 and 108th/176 (2016)","hioef":"52.8 overall (2018)","lr":"49.1% (2015)","Religions":"Ethiopian Orthodox 43.5%, Muslim 33.9%, Protestant 18.5%, traditional 2.7%, Catholic 0.7%, other 0.6% (2007 est.)","Languages":"Oromo (official) 33.8%, Amharic (official) 29.3%, Somali (official) 6.2%, Tigrigna (official) 5.9%, English, Arabic and nine other local languages (2007 est.)","Population":"105,350,020 (July 2017). "},{"id":"South_Sudan","Country":"South Sudan","Continent":"Africa","fhs":"2/100 (2018)","gov":"presidential republic","Capital":"Juba","pnr":"hydropower, fertile agricultural land, gold, diamonds, petroleum, hardwoods, limestone, iron ore, copper, chromium ore, zinc, tungsten, mica, silver","Topography":"plains in the north and center rise to southern highlands along the border with Uganda and Kenya; the White Nile, flowing north out of the uplands of Central Africa, is the major geographic feature of the country; The Sudd (a name derived from floating vegetation that hinders navigation) is a large swampy area of more than 100,000 sq km fed by the waters of the White Nile that dominates the center of the country","Climate":"hot with seasonal rainfall influenced by the annual shift of the Inter-Tropical Convergence Zone; rainfall heaviest in upland areas of the south and diminishes to the north","le":"no data","imr":"62.8 deaths/1,000 live births (2017)","pcod":"","GDPPC":"$1,500 2017 EST.","cer":"130.26 South Sudanese Pounds to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"-3.4% (2017)","ii":"45.5 (2009)","cpi":"11 and 175th/176 (2016)","hioef":"No Data","lr":"27% (2009)","Religions":"animist, Christian","Languages":"English (official), Arabic , and 5 other regional languages","Population":"13,026,129 (July 2017)"},{"id":"Nigeria","Country":"Nigeria","Continent":"Africa","fhs":"50/100 (2018)","gov":"federal presidential republic","Capital":"Abuja","pnr":"natural gas, petroleum, tin, iron ore, coal, limestone, niobium, lead, zinc, arable land","Topography":"southern lowlands merge into central hills and plateaus; mountains in southeast, plains in north","Climate":"varies; equatorial in south, tropical in center, arid in north","le":"53.8 years (2017)","imr":"69.8 deaths/1,000 live births (2018)","pcod":"1- Influenza and Pneumonia, 2- HIV/AIDS, 3- Stroke, 4- Coronary Heart Disease, 5- Diarhoeal diseases (2017)","GDPPC":"$5,900 2017 EST.","cer":"361.00 Nairas to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"1.9% (2017)","ii":"43 (2009)","cpi":"28 and 136th/176 (2016)","hioef":"58.5 overall (2018)","lr":"59.6% (2015)","Religions":"Muslim 50%, Christian 40%, indigenous beliefs 10%","Languages":"English (official), Hausa, Yoruba, Igbo (Ibo), Fulani, over 500 additional indigenous languages","Population":"190,632,261 (July 2017). "},{"id":"Ghana","Country":"Ghana","Continent":"Africa","fhs":"83/100 (2018)","gov":"presidential republic","Capital":"Accra","pnr":"gold, timber, industrial diamonds, bauxite, manganese, fish, rubber, hydropower, petroleum, silver, salt, limestone","Topography":"mostly low plains with dissected plateau in south-central area","Climate":"tropical; warm and comparatively dry along southeast coast; hot and humid in southwest; hot and dry in north","le":"67 years (2017)","imr":"35.2 deaths/1,000 live births (2017)","pcod":"1- Stroke, 2- Influenza and Pneumonia, 3- Coronary Heart Disease, 4- Malaria, 5- HIV/AIDS (2017)","GDPPC":"$4,600 2017 EST.","cer":"4.42 Cedis to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"8.9% (2017)","ii":"42.8 (2006)","cpi":"43 and 70th/176 (2016)","hioef":"56.0 overall (2018)","lr":"76.6%  (2015)","Religions":"Christian 71.2% (Pentecostal/Charismatic 28.3%, Protestant 18.4%, Catholic 13.1%, other 11.4%), Muslim 17.6%, traditional 5.2%, other 0.8%, none 5.2% (2010 est.)","Languages":"Asante 16%, Ewe 14%, Fante 11.6%,English (official) other 31.2% (2010 est.)\r\n    ","Population":"27,499,924 (July 2017). "},{"id":"Benin","Country":"Benin","Continent":"Africa","fhs":"81/100 (2018)","gov":"presidential republic","Capital":"Porto-Novo (constitutional capital); Cotonou (seat of government)","pnr":"small offshore oil deposits, limestone, marble, timber","Topography":"mostly flat to undulating plain; some hills and low mountains","Climate":"tropical; hot, humid in south; semiarid in north","le":"62.3 years (2017)","imr":"52.8 deaths/1,000 live births (2017)","pcod":"1- Influenza and Pneumonia, 2- Stroke, 3- Coronary Heart Disease, 4- Malaria, 5- Diarrhoeal diseases (2017)","GDPPC":"$2,200 2017 EST.","cer":"529.00 Communaute Financiere Africaine Francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"6% (2017)","ii":"47.8 (2015)","cpi":"36 and 95th/176 (2016)","hioef":"56.7 overall (2018)","lr":"38.4% (2015)","Religions":"Muslim 27.7%, Roman Catholic 25.5%, Protestant 13.5% (Celestial 6.7%, Methodist 3.4%, other Protestant 3.4%), Vodoun 11.6%, other Christian 9.5%, other traditional religions 2.6%, other 2.6%, none 5.8% (2013 est.)","Languages":"French (official), Fon and Yoruba, tribal languages.","Population":"11,038,805 (July 2017). "},{"id":"Togo","Country":"Togo","Continent":"Africa","fhs":"47/100 (2018)","gov":"presidential republic","Capital":"Lome","pnr":"phosphates, limestone, marble, arable land","Topography":"gently rolling savanna in north; central hills; southern plateau; low coastal plain with extensive lagoons and marshes","Climate":"tropical; hot, humid in south; semiarid in north","le":"65.4 years (2017)","imr":"42.2 deaths/1,000 live births (2017)","pcod":"1- Influenza and Pneumonia, 2- HIV/AIDS, 3- Stroke, 4- Coronary Heart Disease, 5- Malaria (2017)","GDPPC":"$1,600 2017 EST.","cer":"529.00 Communaute Financiere Africaine Francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"5.3% (2017)","ii":"43 (2015)","cpi":"32 and 116th/176 (2016)","hioef":"47.8 overall (2018)","lr":"63.7% (2015)","Religions":"Christian 29%, Muslim 20%, indigenous beliefs 51%","Languages":"French (official), Ewe and Mina, Kabye and Dagomba","Population":"7,965,055 (July 2017)."},{"id":"Cote_Divoire","Country":"Cote Divoire","Continent":"Africa","fhs":"51/100 (2018)","gov":"presidential republic","Capital":"Yamoussoukro (legislative capital), Abidjan (administrative capital); note - although Yamoussoukro has been the official capital since 1983, Abidjan remains the administrative capital as well as the officially designated commercial capital; the US, like other countries, maintains its Embassy in Abidjan","pnr":"petroleum, natural gas, diamonds, manganese, iron ore, cobalt, bauxite, copper, gold, nickel, tantalum, silica sand, clay, cocoa beans, coffee, palm oil, hydropower","Topography":"mostly flat to undulating plains; mountains in northwest","Climate":"tropical along coast, semiarid in far north; three seasons - warm and dry (November to March), hot and dry (March to May), hot and wet (June to October)","le":"59 years (2017)","imr":"55.8 deaths/1,000 live births (2017)","pcod":"1- HIV/AIDS, 2- Influenza and Pneumonia, 3- Stroke, Coronary Heart Disease, Diarrhoeal diseases (2017)","GDPPC":"$3,900 2017 EST.","cer":"531.07 Cooperation Financiere en Afrique Centrale francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"7.3% (2017)","ii":"41.7 (2015)","cpi":"34 and 108th/176 (2016)","hioef":"62.0 overall (2018)","lr":"43.1%  (2015)","Religions":"Muslim 42.9%, Catholic 17.2%, Evangelical 11.8%, Methodist 1.7%, other Christian 3.2%, animist 3.6%, other religion 0.5%, none 19.1%. note: the majority of foreign migrant workers are Muslim (72.7%) and Christian (17.7%) (2014 est.)","Languages":"French (official), and 60 native dialects","Population":"24,184,810 (July 2017). "},{"id":"Liberia","Country":"Liberia","Continent":"Africa","fhs":"62/100 (2018)","gov":"presidential republic","Capital":"Monrovia","pnr":"iron ore, timber, diamonds, gold, hydropower","Topography":"mostly flat to rolling coastal plains rising to rolling plateau and low mountains in northeast","Climate":"tropical; hot, humid; dry winters with hot days and cool to cold nights; wet, cloudy summers with frequent heavy showers","le":"63.3 years (2017)","imr":"52.2 deaths/1,000 live births (2017)","pcod":"1- Influenza and Pneumonia, 2- Stroke, 3- Tuberculosis, 4- Coronary Heart Disease, 5- HIV/AIDS (2017)","GDPPC":"$900 2017 EST.","cer":"131.20�Liberian Dollars to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"4% (2017)","ii":"33.2 (2014)","cpi":"37 and 90th/176 (2016)","hioef":"50.9 overall (2018)","lr":"47.6% (2015)","Religions":"Christian 85.6%, Muslim 12.2%, Traditional 0.6%, other 0.2%, none 1.4% (2008 Census)","Languages":"English 20% (official), some 20 ethnic group languages","Population":"4,689,021 (July 2017)"},{"id":"Guinea","Country":"Guinea","Continent":"Africa","fhs":"41/100 (2018)","gov":"presidential republic","Capital":"Conakry","pnr":"bauxite, iron ore, diamonds, gold, uranium, hydropower, fish, salt","Topography":"generally flat coastal plain, hilly to mountainous interior","Climate":"generally hot and humid; monsoonal-type rainy season (June to November) with southwesterly winds; dry season (December to May) with northeasterly harmattan winds","le":"61 years (2017)","imr":"50 deaths/1,000 live births (2017)","pcod":"1- Influenza and Pneumonia, 2- Stroke, 3- Coronary Heart Disease, 4- Diarrhoeal diseases, 5- Malaria (2017)","GDPPC":"no data","cer":"9,000.00�Guinean Francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"5.8% (2017)","ii":"33.7 (2012)","cpi":"27 and 142nd/176 (2016","hioef":"52.2 overall (2018)","lr":"30.4% (2015)","Religions":"Muslim 86.2%, Christian 9.7%, animist/other/none 4.1% (2012 est.)","Languages":"French (official). note: each ethnic group has its own language.","Population":"12,413,867 (July 2017)"},{"id":"Sierra_Leone","Country":"Sierra Leone","Continent":"Africa","fhs":"66/100 (2018)","gov":"presidential republic","Capital":"Freetown","pnr":"diamonds, titanium ore, bauxite, iron ore, gold, chromite","Topography":"coastal belt of mangrove swamps, wooded hill country, upland plateau, mountains in east","Climate":"tropical; hot, humid; summer rainy season (May to December); winter dry season (December to April)","le":"58.6 years (2017)","imr":"68.4 deaths/1,000 live births (2017)","pcod":"1- Influenza and Pneumonia, 2- Tuberculosis, 3- Stroke, 4- Diarrhoeal diseases, 5- Coronary Heart Disease (2017)","GDPPC":"$1,800 2017 EST.","cer":"7,702.00�Leones to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"6.1% (2017)","ii":"34 (2011)","cpi":"30 and 123rd/176 (2016)","hioef":"51.8 overall (2018)","lr":"48.1% (2015)","Religions":"Muslim 78.6%, Christian 20.8%, other 0.3%, unspecified 0.2% (2013 est.)","Languages":"English (official), Mende, Temne, Krio","Population":"6,163,195 (July 2017)"},{"id":"Guinea_-_Bissau","Country":"Guinea - Bissau","Continent":"Africa","fhs":"41/100 (2018)","gov":"semi-presidential republic","Capital":"Bissau","pnr":"fish, timber, phosphates, bauxite, clay, granite, limestone, unexploited deposits of petroleum","Topography":"mostly low-lying coastal plain with a deeply indented estuarine coastline rising to savanna in east; numerous off-shore islands including the Arquipelago Dos Bijagos consisting of 18 main islands and many small islets","Climate":"tropical; generally hot and humid; monsoonal-type rainy season (June to November) with southwesterly winds; dry season (December to May) with northeasterly harmattan winds","le":"51 years (2017)","imr":"85.7 deaths/1,000 live births (2017)","pcod":"1- Influenza and Pneumonia, 2- HIV/AIDS, 3- Stroke, 4- Coronary Heart Disease, 5- Diarrhoeal diseases (2017)","GDPPC":"$1,800 2017 EST.","cer":"529.00 Communaute Financiere Africaine Francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"5% (2017)","ii":"50.7 (2010)","cpi":"16 and 168th/176 (2016)","hioef":"56.9 overall (2018)","lr":"59.9% (2015)","Religions":"Muslim 45.1%, Christian 22.1%, animist 14.9%, none 2%, unspecified 15.9% (2008 est.)","Languages":"Crioulo (lingua franca), Portuguese (official), Pular, Mandingo","Population":"1,792,338 (July 2017)"},{"id":"The_Gambia","Country":"The Gambia","Continent":"Africa","fhs":"41/100 (2018)","gov":"presidential republic","Capital":"Banjul","pnr":"fish, clay, silica sand, titanium (rutile and ilmenite), tin, zircon","Topography":"flood plain of the Gambia River flanked by some low hills","Climate":"tropical; hot, rainy season (June to November); cooler, dry season (November to May)","le":"65.1 years (2017)","imr":"60.2 deaths/1,000 live births (2017)","pcod":"1- Influenza and Pneumonia, 2- Stroke, 3- Coronary Heart Disease, 4- Tuberculosis, 5- Malaria (2017)","GDPPC":"$1,700 2017 EST.","cer":"47.20 Dalasis to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"3.5% (2017)","ii":"47.3 (2003)","cpi":"26 and 145th/176 (2016)","hioef":"52.3 overall (2018)","lr":"55.5% (2015)","Religions":"Muslim 95.7%, Christian 4.2%, none 0.1%, no response 0.1% (2013 est.)","Languages":"English (official), Mandinka, Wolof, Fula, other indigenous vernaculars","Population":"2,051,363 (July 2017)"},{"id":"Senegal","Country":"Senegal","Continent":"Africa","fhs":"75/100 (2018)","gov":"presidential republic","Capital":"Dakar","pnr":"fish, phosphates, iron ore","Topography":"generally low, rolling, plains rising to foothills in southeast","Climate":"tropical; hot, humid; rainy season (May to November) has strong southeast winds; dry season (December to April) dominated by hot, dry, harmattan wind","le":"62.1 years (2017)","imr":"49.1 deaths/1,000 live births (2017)","pcod":"1- Influenza and Pneumonia, 2- Stroke, 3- Diarrhoeal diseases, 4- Coronary Heart Disease, 5- Malaria (2017)","GDPPC":"$2,700 2017 EST.","cer":"529.00 Communaute Financiere Africaine Francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"7% (2017)","ii":"40.3 (2011)","cpi":"45 and 64th/176 (2016)","hioef":"55.7 overall (2018)","lr":"57.7% (2015)","Religions":"Muslim 96.1% (most adhere to one of the four main Sufi brotherhoods), Christian 3.6% (mostly Roman Catholic), animist 0.3% (2016 est.)","Languages":"French (official), Wolof, Pular, Jola, Mandinka, Serer, Soninke","Population":"14,668,522 (July 2017)"},{"id":"Cape_Verde","Country":"Cape Verde","Continent":"Africa","fhs":"90/100 (2018)","gov":"parliamentary republic","Capital":"Praia","pnr":"salt, basalt rock, limestone, kaolin, fish, clay, gypsum","Topography":"steep, rugged, rocky, volcanic","Climate":"temperate; warm, dry summer; precipitation meager and erratic","le":"72.4 years (2017)","imr":"21.9 deaths/1,000 live births (2017)","pcod":"1- Stroke, 2- Coronary Heart Disease, 3- Influenza and Pneumonia, 4- Lung Disease, 5- Tuberculosis (2017) ","GDPPC":"$6,900 2017 EST.","cer":"89.65 Cabo Verdean Escudos to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"4.1% (2017)","ii":"47.2 (2007)","cpi":"59 and 38th/176 (2016)","hioef":"60.0 overall (2018)","lr":"86.8% (2015)","Religions":"Roman Catholic 77.3%, Protestant 4.6% (includes Church of the Nazarene 1.7%, Adventist 1.5%, Assembly of God 0.9%, Universal Kingdom of God 0.4%, and God and Love 0.1%), other Christian 3.4% (includes Christian Rationalism 1.9%, Jehovah's Witness 1%, and New Apostolic 0.5%), Muslim 1.8%, other 1.3%, none 10.8%, unspecified 0.7% (2010 est.)","Languages":"Portuguese (official), Crioulo","Population":"560,899 (July 2017)"},{"id":"Djibouti","Country":"Djibouti","Continent":"Africa","fhs":"26/100 (2018)","gov":"semi-presidential republic","Capital":"Djibouti","pnr":"potential geothermal power, gold, clay, granite, limestone, marble, salt, diatomite, gypsum, pumice, petroleum","Topography":"coastal plain and plateau separated by central mountains","Climate":"desert; torrid, dry","le":"63.6 years (2017)","imr":"45.8 deaths/1,000 live births (2017)","pcod":"1- Tuberculosis, 2- Stroke, 3- Influenza and Pneumonia, 4- HIV/AIDS, 5- Coronary Heart Disease (2017)","GDPPC":"$3,600 2017 EST.","cer":"177.72�Djiboutian Francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"7% (2017)","ii":"44.1 (2013)","cpi":"30 and 123rd/176 (2016)","hioef":"45.1 overall (2018)","lr":"No Data","Religions":"Muslim 94%, Christian 6%","Languages":"French (official), Arabic (official), Somali, Afar","Population":"865,267 (July 2017)"},{"id":"Eritrea","Country":"Eritrea","Continent":"Africa","fhs":"3/100 (2018)","gov":"presidential republic","Capital":"Asmara (Asmera)","pnr":"gold, potash, zinc, copper, salt, possibly oil and natural gas, fish","Topography":"dominated by extension of Ethiopian north-south trending highlands, descending on the east to a coastal desert plain, on the northwest to hilly terrain and on the southwest to flat-to-rolling plains","Climate":"hot, dry desert strip along Red Sea coast; cooler and wetter in the central highlands (up to 61 cm of rainfall annually, heaviest June to September); semiarid in western hills and lowlands","le":"65.2 years (2017)","imr":"45 deaths/1,000 live births (2017)","pcod":"1- Stroke, 2- Influenza and Pneumonia, 3- Coronary Heart Disease, 4- Diarrhoeal diseases, 5- Malnutrition (2017)","GDPPC":"$1,400 2017 EST.","cer":"15 Nakfa to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"3.6%  (2017)","ii":"no data","cpi":"18 and 164th/176 (2016)","hioef":"41.7 overall (2018)","lr":"73.8% (2015)","Religions":"Muslim, Coptic Christian, Roman Catholic, Protestant","Languages":"Tigrinya (official), Arabic (official), English (official), Tigre, Kunama, Afar, other Cushitic languages","Population":"5,918,919 (July 2017)"},{"id":"Uganda","Country":"Uganda","Continent":"Africa","fhs":"37/100 (2018)","gov":"presidential republic","Capital":"Kampala","pnr":"copper, cobalt, hydropower, limestone, salt, arable land, gold","Topography":"mostly plateau with rim of mountains","Climate":"tropical; generally rainy with two dry seasons (December to February, June to August); semiarid in northeast","le":"55.9 years (2017)","imr":"56.1 deaths/1,000 live births (2017)","pcod":"1- HIV/AIDS, 2- Influenza and Pneumonia, 3- Stroke, Coronary Heart Disease, Diarrhoeal diseases (2017)","GDPPC":"$2,400 2017 EST.","cer":"3,657.65�Ugandan Shillings to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"5.2% (2017)","ii":"42.4 (2012)","cpi":"25 and 151st/176 (2016","hioef":"62.0 overall (2018)","lr":"78.4%  (2015)","Religions":"Protestant 45.1% (Anglican 32.0%, Pentecostal/Born Again/Evangelical 11.1%, Seventh Day Adventist 1.7%, Baptist .3%), Roman Catholic 39.3%, Muslim 13.7%, other 1.6%, none 0.2% (2014 est.)","Languages":"English (official), Ganda or Luganda, other Niger-Congo languages, Nilo-Saharan languages, Swahili, Arabic","Population":"39,570,125 (2014) "},{"id":"Sudan","Country":"Sudan","Continent":"Africa","fhs":"8/100 (2018)","gov":"presidential republic","Capital":"Khartoum","pnr":"petroleum; small reserves of iron ore, copper, chromium ore, zinc, tungsten, mica, silver, gold; hydropower","Topography":"generally flat, featureless plain; desert dominates the north","Climate":"hot and dry; arid desert; rainy season varies by region (April to November)","le":"64.4 years (2017)","imr":"48.8 deaths/1,000 live births (2017)","pcod":"1- Influenza and Pneumonia, 2- Stroke, 3- Diarrhoeal diseases, 4- Coronary Heart Disease, 5- Malnutrition (2017)","GDPPC":"$4,600 2017 EST.","cer":"18.16�Sudanese Pounds to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"3.6% (2017)","ii":"35.4 (2009)","cpi":"14 and 170th/176 (2016)","hioef":"49.4 overall (2018)","lr":"75.9% (2015)","Religions":"Sunni Muslim, small Christian minority","Languages":"Arabic (official), English (official), Nubian, Ta Bedawie, Fur","Population":"37,345,935 (July 2017)"},{"id":"Chad","Country":"Chad","Continent":"Africa","fhs":"18/100 (2018)","gov":"presidential republic","Capital":"N'Djamena","pnr":"petroleum, uranium, natron, kaolin, fish (Lake Chad), gold, limestone, sand and gravel, salt","Topography":"broad, arid plains in center, desert in north, mountains in northwest, lowlands in south","Climate":"tropical in south, desert in north","le":"50.6 years(2017)","imr":"85.4 deaths/1,000 live births(2017)","pcod":"1- Influenza and Pneumonia, 2- HIV/AIDS, 3- Diarrhoeal diseases, 4- Stroke, 5- Coronary Heart Disease (2017)","GDPPC":"$2,400 2017 EST.","cer":"531.07 Cooperation Financiere en Afrique Centrale francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"2.4% (2017)","ii":"43.3 (2011)","cpi":"20 and 159th/176 (2016)","hioef":"49.3 overall (2018)","lr":"22.3% (2016)","Religions":"Muslim 52.1%, Protestant 23.9%, Roman Catholic 20%, animist 0.3%, other Christian 0.2%, none 2.8%, unspecified 0.7% (2014-15 est.)","Languages":"French (official), Arabic (official), Sara (in south), more than 120 different languages and dialects","Population":"12,075,985 (July 2017)"},{"id":"Niger","Country":"Niger","Continent":"Africa","fhs":"50/100 (2018)","gov":"semi-presidential republic","Capital":"Niamey","pnr":"uranium, coal, iron ore, tin, phosphates, gold, molybdenum, gypsum, salt, petroleum","Topography":"predominately desert plains and sand dunes; flat to rolling plains in south; hills in north","Climate":"desert; mostly hot, dry, dusty; tropical in extreme south","le":"55.9 years(2017)","imr":"81.1 deaths/1,000 live births","pcod":"1- Influenza and Pneumonia, 2- Stroke, 3- Diarrhoeal diseases, 4- Coronary Heart Disease, 5- Malaria (2017)","GDPPC":"$1,200 2017 EST.","cer":"529.00 Communaute Financiere Africaine Francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"4.7% (2017)","ii":"34 (2014)","cpi":"35 and 101st/176 (2016)","hioef":"49.5 overall (2018)","lr":"19.1% (2015)","Religions":"Muslim 80%, other (includes indigenous beliefs and Christian) 20%","Languages":"French (official), Hausa, Djerma","Population":"19,245,344 (July 2017)"},{"id":"Central_African_Republic","Country":"Central African Republic","Continent":"Africa","fhs":"9/100 (2018)","gov":"presidential republic","Capital":"Bangui","pnr":"diamonds, uranium, timber, gold, oil, hydropower","Topography":"vast, flat to rolling plateau; scattered hills in northeast and southwest","Climate":"tropical; hot, dry winters; mild to hot, wet summers","le":"52.8 years(2017)","imr":"86.3 deaths/1,000 live births(2017)","pcod":"1- HIV/AIDS, 2- Diarrhoeal diseases, 3- Influenza and Pneumonia, 4- Malnutrition, 5- Stroke (2017)","GDPPC":"$700 2017 EST.","cer":"531.07 Cooperation Financiere en Afrique Centrale francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"5% (2017)","ii":"56.2 (2008)","cpi":"20 and 159th/176 (2016)","hioef":"49.2 overall (2018)","lr":"36.8%.  (2015)","Religions":"indigenous beliefs 35%, Protestant 25%, Roman Catholic 25%, Muslim 15%. note: animistic beliefs and practices strongly influence the Christian majority.","Languages":"French (official), Sangho, tribal languages","Population":"5,625,118 (July 2017). "},{"id":"Cameroon","Country":"Cameroon","Continent":"Africa","fhs":"22/100 (2018)","gov":"presidential republic","Capital":"Yaounde","pnr":"petroleum, bauxite, iron ore, timber, hydropower","Topography":"diverse, with coastal plain in southwest, dissected plateau in center, mountains in west, plains in north","Climate":"varies with terrain, from tropical along coast to semiarid and hot in north","le":"59 years(2017)","imr":"51 deaths/1,000 live births(2017)","pcod":"1- HIV/AIDS, 2- Influenza and Pneumonia, 3- Stroke, Coronary Heart Disease, Diarrhoeal diseases (2017)","GDPPC":"$3,400 2017 EST.","cer":"531.07 Cooperation Financiere en Afrique Centrale francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"4.6% (2017)","ii":"46.5 (2014)","cpi":"26 and 145th/176 (2016)","hioef":"51.9 overall (2018)","lr":"75% (2015)","Religions":"Roman Catholic 38.4%, Protestant 26.3%, other Christian 4.5%, Muslim 20.9%, animist 5.6%, other 1%, non-believer 3.2% (2005 est.)","Languages":"24 major African language groups, English (official), French (official)","Population":"24,994,885 (July 2017). "},{"id":"Mali","Country":"Mali","Continent":"Africa","fhs":"44/100 (2018)","gov":"semi-presidential republic","Capital":"Bamako","pnr":"gold, phosphates, kaolin, salt, limestone, uranium, gypsum, granite, hydropower. note:�bauxite, iron ore, manganese, tin, and copper deposits are known but not exploited","Topography":"mostly flat to rolling northern plains covered by sand; savanna in south, rugged hills in northeast","Climate":"subtropical to arid; hot and dry (February to June); rainy, humid, and mild (June to November); cool and dry (November to February)","le":"60.3 years(2017)","imr":"69.5 deaths/1,000 live births(2017)","pcod":"1- Stroke, 2- Coronary Heart Disease, 3- Influenza and Pneumonia, 4- Diarrhoeal diseases, 5- Diabetes Mellitus (2017) ","GDPPC":"$2,200 2017 EST.","cer":"529.00 Communaute Financiere Africaine Francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"5% (2017)","ii":"33 (2010)","cpi":"32 and 116th/176 (2016)","hioef":"57.6 overall (2018)","lr":"33.1% (2015)","Religions":"Muslim 94.8%, Christian 2.4%, Animist 2%, none 0.5%, unspecified 0.3% (2009 est.)","Languages":"French (official), Bambara 46.3%, Peul/Foulfoulbe 9.4%,13 national languages in addition to its official language (2009 est.)","Population":"17,885,245 (July 2017)"},{"id":"Mauritania","Country":"Mauritania","Continent":"Africa","fhs":"30/100 (2018)","gov":"presidential republic","Capital":"Nouakchott","pnr":"iron ore, gypsum, copper, phosphate, diamonds, gold, oil, fish","Topography":"mostly barren, flat plains of the Sahara; some central hills","Climate":"desert; constantly hot, dry, dusty","le":"63.4 years(2017)","imr":"51.9 deaths/1,000 live births(2017)","pcod":"1- Tuberculosis, 2- Influenza and Pneumonia, 3- Stroke, 4- Coronary Heart Disease, 5- Malaria (2017)","GDPPC":"$4,500 2017 EST.","cer":"356.00 Ouguiyas to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"3% (2017)","ii":"32.4 (2015)","cpi":"27 and 142nd/176 (2016","hioef":"54.0 overall (2018)","lr":"52.1%. (2015)","Religions":"Muslim (official) 100%","Languages":"Arabic (official and national), Pular, Soninke, Wolof (all national languages), French.","Population":"3,758,571 (July 2017)"},{"id":"Burkina_Faso","Country":"Burkina Faso","Continent":"Africa","fhs":"60/100 (2018)","gov":"presidential republic","Capital":"Ouagadougou","pnr":"manganese, limestone, marble; small deposits of gold, phosphates, pumice, salt","Topography":"mostly flat to dissected, undulating plains; hills in west and southeast","Climate":"tropical; warm, dry winters; hot, wet summers","le":"55.9 years(2017)","imr":"72.2 deaths/1,000 live births(2017)","pcod":"1- Influenza and Pneumonia, 2- Stroke, 3- Coronary Heart Disease, 4- Malaria, 5- Diarrhoeal diseases (2017)","GDPPC":"$1,900 2017 EST.","cer":"529.00 Communaute Financiere Africaine Francs to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"6.5% 92017)","ii":"35.3 (2014)","cpi":"42 and 72nd/176 (2016)","hioef":"60.0 overall (2018)","lr":"36%  (2015)","Religions":"Muslim 61.5%, Roman Catholic 23.3%, traditional/animist 7.8%, Protestant 6.5%, other/no answer 0.2%, none 0.7% (2010 est.)","Languages":"French (official), 90% of the population speak native sudanic languages\r\n","Population":"20,107,509  (July 2017). "},{"id":"Papa_New_Guinea","Country":"Papa New Guinea","Continent":"Asia","fhs":"63/100 (2018)","gov":"parliamentary democracy (National Parliament) under a constitutional monarchy; a Commonwealth realm","Capital":"Port Moresby","pnr":"gold, copper, silver, natural gas, timber, oil, fisheries","Topography":"mostly mountains with coastal lowlands and rolling foothills","Climate":"tropical; northwest monsoon (December to March), southeast monsoon (May to October); slight seasonal temperature variation","le":"67.3 years(2017)","imr":"36.3 deaths/1,000 live births(2017)","pcod":"no data","GDPPC":"$3,800 2017 EST.","cer":"3.22�Kina to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"2.9% (2017)","ii":"43.9 (2009)","cpi":"28 and 136th/176 (2016)","hioef":"55.7 overall (2018)","lr":"64.2%  (2015)","Religions":"Roman Catholic 27%, Protestant 69.4% (Evangelical Lutheran 19.5%, United Church 11.5%, Seventh-Day Adventist 10%, Pentecostal 8.6%, Evangelical Alliance 5.2%, Anglican 3.2%, Baptist 2.5%, other Protestant 8.9%), Baha'i 0.3%, indigenous beliefs and other 3.3% (2000 census)","Languages":"Tok Pisin (official), English (official), Hiri Motu (official), some 839 indigenous languages spoken\r\n","Population":"6,909,701 (July 2017)"},{"id":"China","Country":"China","Continent":"Asia","fhs":"14/100 (2018)","gov":"communist party-led state","Capital":"Beijing","pnr":"coal, iron ore, petroleum, natural gas, mercury, tin, tungsten, antimony, manganese, molybdenum, vanadium, magnetite, aluminum, lead, zinc, rare earth elements, uranium, hydropower potential (world's largest), arable land","Topography":"mostly mountains, high plateaus, deserts in west; plains, deltas, and hills in east","Climate":"extremely diverse; tropical in south to subarctic in north","le":"75.7 years(2017)","imr":"12 deaths/1,000 live births(2017)","pcod":"1- Stroke, 2- Coronary Heart Disease, 3- Lung Disease, 4- Lung Cancers, 5- Liver Cancer (2017)","GDPPC":"$16,600 2017 EST.","cer":"6.32�Yuan to 1 U.S. Dollar (March 2018)","bmi":"$3.17 vs $5.28 US","gdpg":"6.5% (2017)","ii":"42.2 (2012)","cpi":"40 and 79th/176 (2016)","hioef":"57.8 overall (2018)","lr":"96.4% (2015)","Religions":"Buddhist 18.2%, Christian 5.1%, Muslim 1.8%, folk religion 21.9%, Hindu < 0.1%, Jewish < 0.1%, other 0.7% (includes Daoist (Taoist)), unaffiliated 52.2%. note: officially atheist (2010 est.)","Languages":"Standard Chinese or Mandarin (official), Yue (Cantonese), Wu, Minbei, Minnan, Xiang, Gan, Hakka dialects, minority languages ","Population":"1,379,302,771 (July 2017)"},{"id":"Indonesia","Country":"Indonesia","Continent":"Asia","fhs":"61/100 (2018)","gov":"presidential republic","Capital":"Jakarta","pnr":"petroleum, tin, natural gas, nickel, timber, bauxite, copper, fertile soils, coal, gold, silver","Topography":"mostly coastal lowlands; larger islands have interior mountains","Climate":"tropical; hot, humid; more moderate in highlands","le":"73 years(2017)","imr":"22.7 deaths/1,000 live births(2017)","pcod":"1- Stroke, 2- Coronary Heart Disease, 3- Diabetes Mellitus, 4- Influenza and Pnemonia, 5-Tuberculosis (2017)","GDPPC":"$12,400 2017 EST.","cer":"13,753.00�Indonesian Rupiah to 1 U.S. Dollar (March 2018)","bmi":"$2.68 vs $5.28 US","gdpg":"5.3% (2017)","ii":"39.5 (2013)","cpi":"37 and 90th/176 (2016)","hioef":"64.2 overall (2018)","lr":"95.4%  (2016)","Religions":"Muslim 87.2%, Protestant 7%, Roman Catholic 2.9%, Hindu 1.7%, other 0.9% (includes Buddhist and Confucian), unspecified 0.4% (2010 est.)","Languages":"Bahasa Indonesia (official), English, Dutch, local dialects. more than 700 languages are used in Indonesia\r\n","Population":"260,580,739 (July 2017)"},{"id":"Malaysia","Country":"Malaysia","Continent":"Asia","fhs":"45/100 (2018)","gov":"federal parliamentary constitutional monarchy","Capital":"","pnr":"tin, petroleum, timber, copper, iron ore, natural gas, bauxite","Topography":"coastal plains rising to hills and mountains","Climate":"tropical; annual southwest (April to October) and northeast (October to February) monsoons","le":"75.2 years(2017)","imr":"12.5 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Influenza and Pneumonia, 4- Lung Disease, 5- Road Traffic Accidents (2017)","GDPPC":"$28,900 2017 EST.","cer":"3.91 Ringgits to 1 U.S. Dollar (March 2018)","bmi":"$2.28 vs $5.28 US","gdpg":"4.5% (2017)","ii":"46.3 (2009)","cpi":"49 and 55th/176 (2016)","hioef":"74.5 overall (2018)","lr":"94.6% (2015)","Religions":"Muslim (official) 61.3%, Buddhist 19.8%, Christian 9.2%, Hindu 6.3%, Confucianism, Taoism, other traditional Chinese religions 1.3%, other 0.4%, none 0.8%, unspecified 1% (2010 est.)","Languages":"Bahasa Malaysia (official), English, Chinese. Malaysia has 134 living languages - 112 indigenous languages","Population":"31,381,992 (July 2017)"},{"id":"India","Country":"India","Continent":"Asia","fhs":"77/100 (2018)","gov":"federal parliamentary republic","Capital":"New Delhi","pnr":"coal (fourth-largest reserves in the world), iron ore, manganese, mica, bauxite, rare earth elements, titanium ore, chromite, natural gas, diamonds, petroleum, limestone, arable land","Topography":"upland plain (Deccan Plateau) in south, flat to rolling plain along the Ganges, deserts in west, Himalayas in north","Climate":"varies from tropical monsoon in south to temperate in north","le":"68.8 years(2017)","imr":"39.1 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Lung Disease, 3- Stroke, 4- Diarrhoeal diseases, 5- Influenza and Pneumonia (2017)","GDPPC":"$7,200 2017 EST.","cer":"64.98�Indian Rupees to 1 U.S. Dollar (March 2018)","bmi":"$2.82 vs $5.28 US","gdpg":"7.4% (2017)","ii":"35.1 (2011)","cpi":"40 and 79th/176 (2016)","hioef":"54.5 overall (2018)","lr":"71.2% (2015)","Religions":"Hindu 79.8%, Muslim 14.2%, Christian 2.3%, Sikh 1.7%, other and unspecified 2% (2011 est.)","Languages":"Hindi 41%, Bengali 8.1%,other 5.9%. (2001). Hindi 41% and 30 official languages.","Population":"1,281,935,911 (July 2017)"},{"id":"Bangladesh","Country":"Bangladesh","Continent":"Asia","fhs":"45/100 (2018)","gov":"parliamentary republic","Capital":"Dhaka","pnr":"natural gas, arable land, timber, coal","Topography":"mostly flat alluvial plain; hilly in southeast","Climate":"tropical; mild winter (October to March); hot, humid summer (March to June); humid, warm rainy monsoon (June to October)","le":"73.4 years(2017)","imr":"31.7 deaths/1,000 live births(2017)","pcod":"1- Lung Disease, 2- Tuberculosis, 3- Influenza and Pneumonia, 4- Stroke, 5- Coronary Heart Disease (2017)","GDPPC":"$4,200 2017 EST.","cer":"83.18 Taka to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"7% (2017)","ii":"32 (2010)","cpi":"26 and 145th/176 (2016)","hioef":"55.1 overall (2018)","lr":"72.8% (2016)","Religions":"Muslim 89.1%, Hindu 10%, other 0.9% (includes Buddhist, Christian) (2013 est.)","Languages":"Bangla 98.8% (official), other 1.2% (2011 est.)","Population":"157,826,578 (July 2017)"},{"id":"Burma","Country":"Burma","Continent":"Asia","fhs":"31/100 (2018)","gov":"parliamentary republic","Capital":"Rangoon (Yangon); note - Nay Pyi Taw is the administrative capital","pnr":"petroleum, timber, tin, antimony, zinc, copper, tungsten, lead, coal, marble, limestone, precious stones, natural gas, hydropower, arable land","Topography":"central lowlands ringed by steep, rugged highlands","Climate":"tropical monsoon; cloudy, rainy, hot, humid summers (southwest monsoon, June to September); less cloudy, scant rainfall, mild temperatures, lower humidity during winter (northeast monsoon, December to April)","le":"68.2 years(2017)","imr":"35.8 deaths/1,000 live births(2017)","pcod":"No Data","GDPPC":"$6,300 2017 EST.","cer":"1,338.60 Kyats to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"5% (2017)","ii":"no data","cpi":"28 and 136th/176 (2016)","hioef":"53.9 overall (2018)","lr":"75.6% (2016)","Religions":"Buddhist 87.9%, Christian 6.2%, Muslim 4.3%, Animist 0.8%, Hindu 0.5%, other 0.2%, none 0.1%. (2014 est.) note: religion estimate is based on the 2014 national census, including an estimate for the non-enumerated population of Rakhine State, which is assumed to mainly affiliate with the Islamic faith.","Languages":"Burmese (official) minority ethnic groups have their own languages\r\n","Population":"55,123,814  (July 2017)"},{"id":"Nepal","Country":"Nepal","Continent":"Asia","fhs":"55/100 (2018)","gov":"federal parliamentary republic","Capital":"Kathmandu","pnr":"quartz, water, timber, hydropower, scenic beauty, small deposits of lignite, copper, cobalt, iron ore","Topography":"Tarai or flat river plain of the Ganges in south; central hill region with rugged Himalayas in north","Climate":"varies from cool summers and severe winters in north to subtropical summers and mild winters in south","le":"71 years(2017)","imr":"27.9 deaths/1,000 live births(2017)","pcod":"1- Lung Disease, 2- Coronary Heart Disease, 3- Stroke, 4- Influenza and Pneumonia, 5- Diabetes Mellitus (2017)","GDPPC":"$2,700 2017 EST.","cer":"103.74�Nepalese Rupees to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"5% (2017)","ii":"32.8 (2010)","cpi":"29 and 131st/176 (2016)","hioef":"54.1 overall (2018)","lr":"63.9% (2015)","Religions":"Hindu 81.3%, Buddhist 9%, Muslim 4.4%, Kirant 3.1%, Christian 1.4%, other 0.5%, unspecified 0.2% (2011 est.)","Languages":"Nepali (official) 44.6%, Maithali 11.7%, other 10.4%, unspecified 0.2%. (2011). note: 123 languages are spoken as official languages.","Population":"29,384,297 (July 2017)"},{"id":"Philippines","Country":"Philippines","Continent":"Asia","fhs":"62/100 (2018)","gov":"presidential republic","Capital":"Manila","pnr":"timber, petroleum, nickel, cobalt, silver, gold, salt, copper","Topography":"mostly mountains with narrow to extensive coastal lowlands","Climate":"tropical marine; northeast monsoon (November to April); southwest monsoon (May to October)","le":"69.4 years(2017)","imr":"21.4 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Influenza and Pneumonia, 4- Diabetes Mellitus, 5- Tuberculosis (2017)","GDPPC":"$8,200 2017 EST.","cer":"52.12�Philippine Pesos to 1 U.S. Dollar (March 2018)","bmi":"$2.64 vs $5.28 US","gdpg":"6.7% (2017)","ii":"40.1 (2015)","cpi":"35 and 101st/176 (2016)","hioef":"65.0 overall (2018)","lr":"96.3% (2015)","Religions":"Catholic 82.9% (Roman Catholic 80.9%, Aglipayan 2%), Muslim 5%, Evangelical 2.8%, Iglesia ni Kristo 2.3%, other Christian 4.5%, other 1.8%, unspecified 0.6%, none 0.1% (2000 census)","Languages":"Filipino (official) and English (official); eight major dialects.","Population":"104,256,076 (July 2017)"},{"id":"Taiwan","Country":"Taiwan","Continent":"Asia","fhs":"93/100 (2018)","gov":"semi-presidential republic","Capital":"Taipei","pnr":"small deposits of coal, natural gas, limestone, marble, asbestos, arable land","Topography":"eastern two-thirds mostly rugged mountains; flat to gently rolling plains in west","Climate":"tropical; marine; rainy season during southwest monsoon (June to August); persistent and extensive cloudiness all year","le":"80.2 years(2017)","imr":"4.3 deaths/1,000 live births(2017)","pcod":"No Data","GDPPC":"$49,800 2017 EST.","cer":"29.15�New Taiwan Dollars to 1 U.S. Dollar (March 2018)","bmi":"$2.33 vs $5.28 US","gdpg":"1.9% (2017)","ii":"33.8 (2012)","cpi":"61 and 31st/176 (2016)","hioef":"76.6 overall (2018)","lr":"98.5% (2014)","Religions":"Buddhist 35.3%, Taoist 33.2%, Christian 3.9%, Taoist or Confucian folk religionist approximately 10%, none or unspecified 18.2% (2005 est.)","Languages":"Mandarin Chinese (official), Taiwanese (Min Nan), Hakka dialects","Population":"23,508,428 (July 2017)"},{"id":"Japan","Country":"Japan","Continent":"Asia","fhs":"96/100 (2018)","gov":"parliamentary constitutional monarchy","Capital":"Tokyo","pnr":"negligible mineral resources, fish","Topography":"mostly rugged and mountainous","Climate":"varies from tropical in south to cool temperate in north","le":"85.3 years(2017)","imr":"2 deaths/1,000 live births(2017)","pcod":"1- Stroke, 2- Influenza and Pneumonia, 3- Coronary Heart Disease, 4- Lung Cancers, 5- Suicide (2017)","GDPPC":"$42,700 2017 EST.","cer":"106.07 Yen to 1 U.S. Dollar (March 2018)","bmi":"$3.43 vs $5.28 US","gdpg":"2.3% (2017)","ii":"32.1 (2008)","cpi":"72 and 20th/176 (2016)","hioef":"72.3 overall (2018)","lr":"No Data","Religions":"Shintoism 79.2%, Buddhism 66.8%, Christianity 1.5%, other 7.1%. note: total adherents exceeds 100% because many people practice both Shintoism and Buddhism (2012 est.).","Languages":"Japanese","Population":"126,451,398 (July 2017)"},{"id":"South_Korea","Country":"South Korea","Continent":"Asia","fhs":"84/100 (2018)","gov":"presidential republic","Capital":"Seoul; note - Sejong, located some 120 km (75 mi) south of Seoul, is being developed as a new capital","pnr":"coal, tungsten, graphite, molybdenum, lead, hydropower potential","Topography":"mostly hills and mountains; wide coastal plains in west and south","Climate":"temperate, with rainfall heavier in summer than winter; cold winters","le":"82.5 years(2017)","imr":"3 deaths/1,000 live births(2017)","pcod":"1- Stroke, 2- Suicide, 3- Coronary Heart Disease, 4- Lung Cancers, 5- Liver Cancer (2017)","GDPPC":"$39,400 2017 EST.","cer":"1,069.57�South Korean Won to 1 U.S. Dollar (March 2018)","bmi":"$4.12 vs $5.28 US","gdpg":"3% (2017)","ii":"31.3 (2007)","cpi":"53 and 52nd/176 (2016)","hioef":"73.8 overall (2018)","lr":"No Data","Religions":"Protestant 19.7%, Buddhist 15.5%, Catholic 7.9%, none 56.9%. note: many people practice Confucianism, regardless of their religion or not having a religious affiliation (2015 est.)\r\n","Languages":"Korean, English (widely taught in junior high and high school)","Population":"51,181,299 (July 2017)"},{"id":"Bhutan","Country":"Bhutan","Continent":"Asia","fhs":"55/100 (2018)","gov":"constitutional monarchy","Capital":"Thimphu","pnr":"timber, hydropower, gypsum, calcium carbonate","Topography":"mostly mountainous with some fertile valleys and savanna","Climate":"varies; tropical in southern plains; cool winters and hot summers in central valleys; severe winters and cool summers in Himalayas","le":"70.6 years(2017)","imr":"32.1 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Lung Disease, 3- Stroke, 4- Influenza and Pneumonia, 5- Poisonings (2017)","GDPPC":"$8,700 2017 EST.","cer":"65.01 Ngultrum  to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"11.2% (2017)","ii":"38.7 (2012)","cpi":"65 and 27th/176 (2016)","hioef":"61.8 overall (2018)","lr":"64.9%  (2015 est.)","Religions":"Lamaistic Buddhist 75.3%, Indian- and Nepalese-influenced Hinduism 22.1%, other 2.6% (2005 est.)","Languages":"Sharchhopka 28%, Dzongkha (official) 24%, Lhotshamkha 22%, other 26% (includes foreign languages) (2005 est.)","Population":"758,288 (July 2017)"},{"id":"North_Korea","Country":"North Korea","Continent":"Asia","fhs":"3/100 (2018)","gov":"single-party state; official state ideology of \"Juche\" or \"national self-reliance","Capital":"Pyongyang","pnr":"coal, iron ore, limestone, magnesite, graphite, copper, zinc, lead, precious metals, hydropower","Topography":"mostly hills and mountains separated by deep, narrow valleys; wide coastal plains in west, discontinuous in east","Climate":"temperate, with rainfall concentrated in summer; long, bitter winters","le":"70.7 years(2017)","imr":"22.1 deaths/1,000 live births(2017)","pcod":"1- Stroke, 2- Lung Disease, 3- Coronary Heart Disease, 4- Influenza and Pneumonia, 5- Lung Cancers (2017)","GDPPC":"No Data","cer":"899.91 North Korean Won to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"no data","ii":"no data","cpi":"12 and 174th/176 (2016)","hioef":"5.8 overall (2018)","lr":"100% (2015)","Religions":"traditionally Buddhist and Confucianist, some Christian and syncretic Chondogyo (Religion of the Heavenly Way). note: autonomous religious activities now almost nonexistent; government-sponsored religious groups exist to provide illusion of religious freedom.","Languages":"Korean","Population":"25,248,140 (July 2017)"},{"id":"Mongolia","Country":"Mongolia","Continent":"Asia","fhs":"85/100 (2018)","gov":"semi-presidential republic","Capital":"Ulaanbaatar","pnr":"oil, coal, copper, molybdenum, tungsten, phosphates, tin, nickel, zinc, fluorspar, gold, silver, iron","Topography":"vast semidesert and desert plains, grassy steppe, mountains in west and southwest; Gobi Desert in south-central","Climate":"desert; continental (large daily and seasonal temperature ranges)","le":"69.9 years(2017)","imr":"21.1 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Liver Cancer, 4- Liver Disease, 5- Lung Disease (2017) ","GDPPC":"$12,600 2017 EST.","cer":"2,392.35 Togrog/Tugriks to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"2.5% (2017)","ii":"32 (2015)","cpi":"38 and 87th/176 (2016)","hioef":"55.7 overall (2018)","lr":"98.4% (2015)","Religions":"Buddhist 53%, Muslim 3%, Shamanist 2.9%, Christian 2.2%, other 0.4%, none 38.6% (2010 est.)","Languages":"Mongolian 90% (official), Turkic, Russian (1999)","Population":"3,068,243  (July 2017)"},{"id":"Vietnam","Country":"Vietnam","Continent":"Asia","fhs":"20/100 (2018)","gov":"communist state","Capital":"Hanoi (Ha Noi)","pnr":"phosphates, coal, manganese, rare earth elements, bauxite, chromate, offshore oil and gas deposits, timber, hydropower, arable land","Topography":"low, flat delta in south and north; central highlands; hilly, mountainous in far north and northwest","Climate":"tropical in south; monsoonal in north with hot, rainy season (May to September) and warm, dry season (October to March)","le":"73.7 years(2017)","imr":"17.3 deaths/1,000 live births(2017)","pcod":"1- Stroke, 2- Coronary Heart Disease, 3- Lung Disease, 4- Influenza and Pneumonia, 5- Liver Cancer (2017)","GDPPC":"$6,900 2017 EST.","cer":"22,770.00�Dong to 1 U.S. Dollar (March 2018)","bmi":"$2.86 vs $5.28 US","gdpg":"6.3% (2017)","ii":"34.8 (2014)","cpi":"33 and 113th/176 (2016)","hioef":"53.1 overall (2018)","lr":"94.5% 92.8% (2015)","Religions":"Buddhist 7.9%, Catholic 6.6%, Hoa Hao 1.7%, Cao Dai 0.9%, Protestant 0.9%, Muslim 0.1%, none 81.8% (2009)","Languages":"Vietnamese (official), English, some French, Chinese.","Population":"96,160,163 (July 2017)"},{"id":"Laos","Country":"Laos","Continent":"Asia","fhs":"12/100 (2018)","gov":"communist state","Capital":"Vientiane (Viangchan)","pnr":"timber, hydropower, gypsum, tin, gold, gemstones","Topography":"mostly rugged mountains; some plains and plateaus","Climate":"tropical monsoon; rainy season (May to November); dry season (December to April)","le":"64.6 years(2017)","imr":"49.9 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Influenza and Pneumonia, 4- Dengue, 5- Liver Cancer (2017)","GDPPC":"$7,400 2017 EST.","cer":"8,286.27 Kips to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"No Data","ii":"37.9 (2012)","cpi":"30 and 123rd/176 (2016)","hioef":"53.6 overall (2018)","lr":"79.9% (2015)","Religions":"Buddhist 64.7%, Christian 1.7%, none 31.4%, other/not stated 2.1% (2015 est.)","Languages":"Lao (official), French, English, various ethnic languages","Population":"7,126,706 (July 2017)"},{"id":"Thailand","Country":"Thailand","Continent":"Asia","fhs":"31/100 (2018)","gov":"constitutional monarchy; note - interim military-affiliated government since May 2014","Capital":"Bangkok","pnr":"tin, rubber, natural gas, tungsten, tantalum, timber, lead, fish, gypsum, lignite, fluorite, arable land","Topography":"central plain; Khorat Plateau in the east; mountains elsewhere","Climate":"tropical; rainy, warm, cloudy southwest monsoon (mid-May to September); dry, cool northeast monsoon (November to mid-March); southern isthmus always hot and humid","le":"74.9 years(2017)","imr":"9.2 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Influenza and Pneumonia, 4- Road Traffic Accidents, 5- Lung Disease (2017)","GDPPC":"$17,800 2017 EST.","cer":"31.18� Baht to 1 U.S. Dollar (March 2018)","bmi":"$3.72 vs $5.28 US","gdpg":"3.5% (2017)","ii":"37.8 (2013)","cpi":"35 and 101st/176 (2016)","hioef":"67.1 overall (2018)","lr":"92.9% (2015)","Religions":"Buddhist 94.6%, Muslim 4.3%, Christian 1%, other <.1%, none <.1% (2015 est.)","Languages":"Thai (official) 90.7%, Burmese 1.3%, other 8%. note: English is a secondary language of the elite (2010)","Population":"68,414,135 (July 2017)"},{"id":"Cambodia","Country":"Cambodia","Continent":"Asia","fhs":"30/100 (2018)","gov":"parliamentary constitutional monarchy","Capital":"Phnom Penh","pnr":"oil and gas, timber, gemstones, iron ore, manganese, phosphates, hydropower potential, arable land","Topography":"mostly low, flat plains; mountains in southwest and north","Climate":"tropical; rainy, monsoon season (May to November); dry season (December to April); little seasonal temperature variation","le":"64.9 years(2017)","imr":"47.4 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Tuberculosis, 3- Stroke, 4- Influenza and Pneumonia, 5- HIV/AIDS (2017)","GDPPC":"$4,000 2017 EST.","cer":"3,999.00 Riels to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"6.8% (2017)","ii":"30.8 (2012)","cpi":"21 and 156th/ 176 (2016)","hioef":"58.7 overall (2018)","lr":"77.2% (2015)","Religions":"Buddhist (official) 96.9%, Muslim 1.9%, Christian 0.4%, other 0.8% (2008 est.)","Languages":"Khmer (official) 96.3%, other 3.7% (2008)","Population":"16,204,486 (July 2017)"},{"id":"Argentina","Country":"Argentina","Continent":"South America","fhs":"83/100 (2018)","gov":"presidential republic","Capital":"Buenos Aires","pnr":"fertile plains of the pampas, lead, zinc, tin, copper, iron ore, manganese, petroleum, uranium, arable land","Topography":"rich plains of the Pampas in northern half, flat to rolling plateau of Patagonia in south, rugged Andes along western border","Climate":"mostly temperate; arid in southeast; subantarctic in southwest","le":"77.3 years(2017)","imr":"9.8 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Influenza and Pneumonia, 4- Breast Cancer, 5- Lung Cancers","GDPPC":"$20,700 2017 EST.","cer":"20.33 Argentine Pesos to 1 U.S. Dollar (March 2018)","bmi":"$3.96 vs $5.28 US","gdpg":"2.5% (2017)","ii":"42.7 (2014)","cpi":"36 and 95th/176 (2016)","hioef":"52.3 overall (2018)","lr":"98.1% (2015)","Religions":"nominally Roman Catholic 92% (less than 20% practicing), Protestant 2%, Jewish 2%, other 4%","Languages":"Spanish (official), Italian, English, German, French, indigenous languages","Population":"44,293,293 (July 2017)"},{"id":"Brazil","Country":"Brazil","Continent":"South America","fhs":"78/100 (2018)","gov":"federal presidential republic","Capital":"Brasilia","pnr":"bauxite, gold, iron ore, manganese, nickel, phosphates, platinum, tin, rare earth elements, uranium, petroleum, hydropower, timber","Topography":"mostly flat to rolling lowlands in north; some plains, hills, mountains, and narrow coastal belt","Climate":"mostly tropical, but temperate in south","le":"74 years(2017)","imr":"17.5 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Influenza and Pneumonia, 4- Diabetes Mellitus, 5- Hypertension (2017)","GDPPC":"$15,500 2017 EST.","cer":"3.29 Reals to 1 U.S. Dollar (March 2018)","bmi":"$5.11 vs $5.28 US","gdpg":"1.5% (2017)","ii":"51.3 (2015)","cpi":"40 and 79th/176 (2016)","hioef":"51.4 overall (2018)","lr":"92.6% (2015)","Religions":"Roman Catholic 64.6%, other Catholic 0.4%, Protestant 22.2% (includes Adventist 6.5%, Assembly of God 2.0%, Christian Congregation of Brazil 1.2%, Universal Kingdom of God 1.0%, other Protestant 11.5%), other Christian 0.7%, Spiritist 2.2%, other 1.4%, none 8%, unspecified 0.4% (2010 est.)","Languages":"Portuguese (official). Less common languages include Spanish, German, Italian, Japanese, English.","Population":"207,353,391 (July 2017)"},{"id":"Bolivia","Country":"Bolivia","Continent":"South America","fhs":"67/100 (2018)","gov":"presidential republic","Capital":"La Paz (administrative capital); Sucre (constitutional [legislative and judicial] capital)","pnr":"tin, natural gas, petroleum, zinc, tungsten, antimony, silver, iron, lead, gold, timber, hydropower","Topography":"rugged Andes Mountains with a highland plateau (Altiplano), hills, lowland plains of the Amazon Basin","Climate":"varies with altitude; humid and tropical to cold and semiarid","le":"69.5 years(2017)","imr":"35.3 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Influenza and Pneumonia, 4- Diabetes Mellitus, 5- Kidney Disease (2017)","GDPPC":"$7,500 2017 EST.","cer":"6.91�Bolivianos to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"4% (2017)","ii":"45.8 (2015)","cpi":"33 and 113th/176 (2016)","hioef":"44.1 overall (2018)","lr":"92.5%  (2015)","Religions":"Roman Catholic 76.8%, Evangelical and Pentecostal 8.1%, Protestant 7.9%, other 1.7%, none 5.5% (2012 est.)","Languages":"Spanish (official) 60.7%, Quechua (official) 21.2%, Aymara (official) 14.6%, Guarani (official) 0.6% (2001 est.)","Population":"11,138,234 (July 2017)"},{"id":"Uruguay","Country":"Uruguay","Continent":"South America","fhs":"98/100 (2018)","gov":"presidential republic","Capital":"Montevideo","pnr":"arable land, hydropower, minor minerals, fish","Topography":"mostly rolling plains and low hills; fertile coastal lowland","Climate":"warm temperate; freezing temperatures almost unknown","le":"77.4 years(2017)","imr":"8.3 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Prostate Cancer, 4- Lung Cancers, 5- Breast Cancer (2017)","GDPPC":"$22,400 2017 EST.","cer":"28.31�Uruguayan Pesos to 1 U.S. Dollar (March 2018)","bmi":"$4.90 vs $5.28 US","gdpg":"3.1% (2017)","ii":"41.7 (2015)","cpi":"71 and 21st/176 (2016)","hioef":"69.2 overall (2018)","lr":"98.5% (2015)","Religions":"Roman Catholic 47.1%, non-Catholic Christians 11.1%, nondenominational 23.2%, Jewish 0.3%, atheist or agnostic 17.2%, other 1.1% (2006 est.)","Languages":"Spanish (official), Portunol, Brazilero ","Population":"3,360,148 (July 2017)"},{"id":"Paraguay","Country":"Paraguay","Continent":"South America","fhs":"64/100 (2018)","gov":"presidential republic","Capital":"Asuncion","pnr":"hydropower, timber, iron ore, manganese, limestone","Topography":"grassy plains and wooded hills east of Rio Paraguay; Gran Chaco region west of Rio Paraguay mostly low, marshy plain near the river, and dry forest and thorny scrub elsewhere","Climate":"subtropical to temperate; substantial rainfall in the eastern portions, becoming semiarid in the far west","le":"77.4 years(2017)","imr":"18.7 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, Diabetes Mellitus, 4- Influenza and Pneumonia, 5- Road Traffic Accidents (2017)","GDPPC":"$9,800 2017 EST.","cer":"5,516.05 Guarani to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"4% (2017) ","ii":"48 (2015)","cpi":"30 and 123rd/176 (2016)","hioef":"62.1 overall (2018)","lr":"95.1%  (2015)","Religions":"Roman Catholic 89.6%, Protestant 6.2%, other Christian 1.1%, other or unspecified 1.9%, none 1.1% (2002 census)","Languages":"Spanish (official), Guarani (official)","Population":"6,943,739 (July 2017)"},{"id":"Chile","Country":"Chile","Continent":"South America","fhs":"94/100 (2018)","gov":"presidential republic","Capital":"Santiago; note - Valparaiso is the seat of the national legislature","pnr":"copper, timber, iron ore, nitrates, precious metals, molybdenum, hydropower","Topography":"low coastal mountains, fertile central valley, rugged Andes in east","Climate":"temperate; desert in north; Mediterranean in central region; cool and damp in south","le":"78.9 years(2017)","imr":"6.6 deaths/1,000 live births(2017)","pcod":"1- Stroke, 2- Coronary Heart Disease, 3- Prostate Cancer, 4- Alzheimers/Dementia, 5- Influenza and Pneumonia (2017)","GDPPC":"$24,600 2017 EST.","cer":"606.00�Chilean Pesos to 1 U.S. Dollar (March 2018)","bmi":"$4.29 vs $5.28 US","gdpg":"2.5% (2017)","ii":"47.7 (2015)","cpi":"66 and 24th/176 (2016)","hioef":"75.2 overall (2018)","lr":"97.5%  (2015)","Religions":"Roman Catholic 66.7%, Evangelical or Protestant 16.4%, Jehovah's Witness 1%, other 3.4%, none 11.5%, unspecified 1.1% (2012 est.)","Languages":"Spanish 99.5% (official), English 10.2%, indigenous 1%, other 2.3%, (2012 est.)","Population":"17,789,267 (July 2017)"},{"id":"Peru","Country":"Peru","Continent":"South America","fhs":"73/100 (2018)","gov":"presidential republic","Capital":"Lima","pnr":"copper, silver, gold, petroleum, timber, fish, iron ore, coal, phosphate, potash, hydropower, natural gas","Topography":"western coastal plain (costa), high and rugged Andes in center (sierra), eastern lowland jungle of Amazon Basin (selva)","Climate":"varies from tropical in east to dry desert in west; temperate to frigid in Andes","le":"74 years(2017)","imr":"18.4 deaths/1,000 live births(2017)","pcod":"1- Influenza and Pneumonia, 2- Coronary Heart Disease, 3- Stroke, 4- Prostate Cancer, 5- Liver Disease (2017)","GDPPC":"$13,300 2017 EST.","cer":"3.26�Nuevo Sol to 1 U.S. Dollar (March 2018)","bmi":"$3.27 vs $5.28 US","gdpg":"3.8% (2017)","ii":"44.4 (2015)","cpi":"35 and 101st/176 (2016)","hioef":"68.7 overall (2018)","lr":"94.2% (2016)","Religions":"Roman Catholic 81.3%, Evangelical 12.5%, other 3.3%, none 2.9% (2007 est.)","Languages":"Spanish (official) 84.1%, Quechua (official) 13%, Aymara (official) 1.7%, Ashaninka 0.3%, other native languages 0.7%, (2007 est.)","Population":"31,036,656 (July 2017)"},{"id":"French_Guiana","Country":"French Guiana","Continent":"South America","fhs":"90/100 (2018)","gov":"No Data","Capital":"No Data","pnr":"No Data","Topography":"No Data","Climate":"No Data","le":"No Data","imr":"No Data","pcod":"No Data","GDPPC":"No Data","cer":"No Data","bmi":"No Data","gdpg":"no data","ii":"no data","cpi":"69 and 23rd/176 (2016)","hioef":"No Data","lr":"No Data","Religions":"No Data","Languages":"No Data","Population":"No Data"},{"id":"Suriname","Country":"Suriname","Continent":"South America","fhs":"78/100 (2018)","gov":"presidential republic","Capital":"Paramaribo","pnr":"timber, hydropower, fish, kaolin, shrimp, bauxite, gold, and small amounts of nickel, copper, platinum, iron ore","Topography":"mostly rolling hills; narrow coastal plain with swamps","Climate":"tropical; moderated by trade winds","le":"72.5 years(2017)","imr":"24.5 deaths/1,000 live births(2017)","pcod":"1- Stroke, 2- Coronary Heart Disease, 3- Diabetes Mellitus, 4- Suicide, 5- Hypertension (2017)","GDPPC":"$13,900 2017 EST.","cer":"7.47�Surinamese Dollars to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"1.2% (2017)","ii":"57.6 (1999)","cpi":"45 and 64th/176 (2016)","hioef":"48.1 overall (2018)","lr":"95.6% (2015)","Religions":"Protestant 23.6% (includes Evangelical 11.2%, Moravian 11.2%, Reformed .7%, Lutheran .5%), Hindu 22.3%, Roman Catholic 21.6%, Muslim 13.8%, other Christian 3.2%, Winti 1.8%, Jehovah's Witness 1.2%, other 1.7%, none 7.5%, unspecified 3.2% (2012 est.)","Languages":"Dutch (official), English, Sranang Tongo, Caribbean Hindustani, Javanese","Population":"591,919 (July 2017)"},{"id":"Guyana","Country":"Guyana","Continent":"South America","fhs":"74/100 (2018)","gov":"parliamentary republic","Capital":"Georgetown","pnr":"bauxite, gold, diamonds, hardwood timber, shrimp, fish","Topography":"mostly rolling highlands; low coastal plain; savanna in south","Climate":"tropical; hot, humid, moderated by northeast trade winds; two rainy seasons (May to August, November to January)","le":"68.6 years(2017)","imr":"30.4 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Diabetes Mellitus, 4- Prostate Cancer, 5- Hypertension (2017)","GDPPC":"$8,300 2017 EST.","cer":"206.82�Guyanaese Dollar to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"3.6% (2017)","ii":"44.5 (1998)","cpi":"34 and 108th/176 (2016)","hioef":"58.7 overall (2018)","lr":"88.5% (2015)","Religions":"Protestant 34.8% (Pentecostal 22.8%, Seventh Day Adventist 5.4%, Anglican 5.2%, Methodist 1.4%), Hindu 24.8%, Roman Catholic 7.1%, Muslim 6.8%, Jehovah's Witness 1.3%, Rastafarian 0.5%, other Christian 20.8%, other 0.9%, none 3.1% (2012 est.)","Languages":"English (official), Guyanese Creole, Amerindian languages, Indian languages, Chinese (2014 est.)","Population":"737,718 (July 2017)"},{"id":"Venezuela","Country":"Venezuela","Continent":"South America","fhs":"26/100 (2018)","gov":"federal presidential republic","Capital":"Caracas","pnr":"petroleum, natural gas, iron ore, gold, bauxite, other minerals, hydropower, diamonds","Topography":"Andes Mountains and Maracaibo Lowlands in northwest; central plains (llanos); Guiana Highlands in southeast","Climate":"tropical; hot, humid; more moderate in highlands","le":"76 years(2017)","imr":"12.2 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Violence, 4- Diabetes Mellitus, 5- Road Traffic Accidents (2017)","GDPPC":"$12,400 2017 EST.","cer":"36,650.00�Venezuelan Bol�var to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"-6% (2017)","ii":"46.9 (2006)","cpi":"17 and 166th/176 (2016)","hioef":"25.2 overall (2018)","lr":"97.1% (2016)","Religions":"nominally Roman Catholic 96%, Protestant 2%, other 2%","Languages":"Spanish (official), numerous indigenous dialects","Population":"31,304,016 (July 2017)"},{"id":"Columbia","Country":"Columbia","Continent":"South America","fhs":"65/100 (2018)","gov":"presidential republic","Capital":"Bogota","pnr":"petroleum, natural gas, coal, iron ore, nickel, gold, copper, emeralds, hydropower","Topography":"flat coastal lowlands, central highlands, high Andes Mountains, eastern lowland plains (Llanos)","Climate":"tropical along coast and eastern plains; cooler in highlands","le":"75.9 years(2017)","imr":"13.6 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Violence, 3- Stroke, 4- Lung Disease, 5- Influenza and Pneumonia (2017)","GDPPC":"$14,500 2017 EST.","cer":"2,849.50�Colombian Peso to 1 U.S. Dollar (March 2018)","bmi":"$3.83 vs $5.28 US","gdpg":"2.8% (2017)","ii":"51.3 (2015)","cpi":"37 and 90th/176 (2016)","hioef":"68.9 overall (2018)","lr":"94.2% (2015)","Religions":"Roman Catholic 79%, Protestant 14% (includes Pentecostal 6%, mainline Protestant 2%, other 6%), other 2%, unspecified 5% (2014 est.)","Languages":"Spanish (official)","Population":"47,698,524 (July 2017)"},{"id":"Ecuador","Country":"Ecuador","Continent":"South America","fhs":"60/100 (2018)","gov":"presidential republic","Capital":"Quito","pnr":"petroleum, fish, timber, hydropower","Topography":"coastal plain (costa), inter-Andean central highlands (sierra), and flat to rolling eastern jungle (oriente)","Climate":"tropical along coast, becoming cooler inland at higher elevations; tropical in Amazonian jungle lowlands","le":"77 years(2017)","imr":"16.4 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Influenza and Pneumonia, 4- Road Traffic Accidents, 5- Kidney Disease (2017)","GDPPC":"$11,200 2017 EST.","cer":"The US dollar became Ecuador's currency in 2001","bmi":"No Data","gdpg":"0.6% (2017)","ii":"46.5 (2015)","cpi":"31 and 120th/176 (2016)","hioef":"48.5 overall (2018)","lr":"94.4% (2016)","Religions":"Roman Catholic 74%, Evangelical 10.4%, Jehovah's Witness 1.2%, other 6.4% (includes Mormon Buddhist, Jewish, Spiritualist, Muslim, Hindu, indigenous religions, African American religions, Pentecostal), atheist 7.9%, agnostic 0.1%. note: data represent persons at least 16 years of age from five Ecuadoran cities (2012 est.)","Languages":"Spanish (Castilian) 93% (official), Quechua 4.1%, other indigenous 0.7%, foreign 2.2%. (2010)","Population":"16,290,913 (July 2017)"},{"id":"Panama","Country":"Panama","Continent":"South America","fhs":"83/100 (2018)","gov":"presidential republic","Capital":"Panama City","pnr":"copper, mahogany forests, shrimp, hydropower","Topography":"interior mostly steep, rugged mountains with dissected, upland plains; coastal plains with rolling hills","Climate":"tropical maritime; hot, humid, cloudy; prolonged rainy season (May to January), short dry season (January to May)","le":"78.8 years(2017)","imr":"9.9 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Violence, 4- Diabetes Mellitus, 5- Influenza and Pneumonia (2017)","GDPPC":"$24,300 2017 EST.","cer":"1�Panamanian Balboa to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"5.6% (2017)","ii":"51 (2015)","cpi":"38 and 87th/176 (2016)","hioef":"67.0 overall (2018)","lr":"95%  (2015)","Religions":"Roman Catholic 85%, Protestant 15%","Languages":"Spanish (official), indigenous languages, Panamanian English Creole, English, Chinese, Arabic, French Creole.","Population":"3,753,142 (July 2017)"},{"id":"Costa_Rica","Country":"Costa Rica","Continent":"South America","fhs":"91/100 (2018)","gov":"presidential republic","Capital":"San Jose","pnr":"hydropower","Topography":"coastal plains separated by rugged mountains including over 100 volcanic cones, of which several are major active volcanoes","Climate":"tropical and subtropical; dry season (December to April); rainy season (May to November); cooler in highlands","le":"78.7 years(2017)","imr":"8 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Prostate Cancer, 4- Lung Disease, 5- Hypertension (2017)","GDPPC":"$17,200 2017 EST.","cer":"569.26�Col�nes to 1 U.S. Dollar (March 2018)","bmi":"$4.03 vs $5.28 US","gdpg":"3.8% (2017)","ii":"48.2 (2015)","cpi":"58 and 41st/176 (2016)","hioef":"65.6 overall (2018)","lr":"97.8% (2015 est)","Religions":"Roman Catholic 76.3%, Evangelical 13.7%, Jehovah's Witness 1.3%, other Protestant 0.7%, other 4.8%, none 3.2%","Languages":"Spanish (official), English","Population":"4,930,258 (July 2017)"},{"id":"Nicaragua","Country":"Nicaragua","Continent":"South America","fhs":"44/100 (2018)","gov":"presidential republic","Capital":"Managua","pnr":"gold, silver, copper, tungsten, lead, zinc, timber, fish","Topography":"extensive Atlantic coastal plains rising to central interior mountains; narrow Pacific coastal plain interrupted by volcanoes","Climate":"tropical in lowlands, cooler in highlands","le":"73.5 years(2017)","imr":"18.3 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Kidney Disease, 4- Diabetes Mellitus, 5- Liver Disease (2017)","GDPPC":"$5,800 2017 EST.","cer":"31.33 C�rdobas to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"4.3% (2017)","ii":"46.6 (2014)","cpi":"26 and 145th/176 (2016)","hioef":"58.9 overall (2018)","lr":"82.8% (2015)","Religions":"Roman Catholic 51.6%, Evangelical 33.9%, other 1.5%, unspecified 12.9%, none 0.2% (2016 est.)","Languages":"Spanish (official) 95.3%, Miskito 2.2%, Mestizo 2%, other 0.5%. (2005 est.)","Population":"6,025,951 (July 2017)"},{"id":"Honduras","Country":"Honduras","Continent":"South America","fhs":"48/100 (2018)","gov":"presidential republic","Capital":"Tegucigalpa","pnr":"timber, gold, silver, copper, lead, zinc, iron ore, antimony, coal, fish, hydropower","Topography":"mostly mountains in interior, narrow coastal plains","Climate":"subtropical in lowlands, temperate in mountains","le":"71.2 years(2017)","imr":"17.2 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3-Violence, 4- Lung Disease, 5- HIV/AIDS (2017)","GDPPC":"$5,500 2017 EST.","cer":"23.62 Lempiras to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"3.6% (2017)","ii":"50.1 (2015)","cpi":"30 and 123rd/176 (2016)","hioef":"60.6 overall (2018)","lr":"89% (2015)","Religions":"Roman Catholic 46%, Protestant 41%, atheist 1%, other 2%, none 9% (2014 est.)","Languages":"Spanish (official), Amerindian dialects","Population":"9,038,741 (July 2017)"},{"id":"El_Salvador","Country":"El Salvador","Continent":"South America","fhs":"70/100 (2018)","gov":"presidential republic","Capital":"San Salvador","pnr":"hydropower, geothermal power, petroleum, arable land","Topography":"mostly mountains with narrow coastal belt and central plateau","Climate":"tropical; rainy season (May to October); dry season (November to April); tropical on coast; temperate in uplands","le":"74.9 years(2017)","imr":"16.8 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Viloence, 3- Influenza and Pneumonia, 4- Diabetes Mellitus, 5- Stroke (2017)","GDPPC":"$8,900 2017 EST.","cer":"8.75 Col�nes to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"2.1% (2017)","ii":"40.8 (2015)","cpi":"36 and 95th/176 (2016)","hioef":"63.2 overall (2018)","lr":"88% (2015)","Religions":"Roman Catholic 50%, Protestant 36%, other 2%, none 12% (2014 est.)","Languages":"Spanish (official), Nawat ","Population":"6,172,011 (July 2017)"},{"id":"Belize","Country":"Belize","Continent":"South America","fhs":"86/100 (2018)","gov":"parliamentary democracy (National Assembly) under a constitutional monarchy; a Commonwealth realm","Capital":"Belmopan","pnr":"arable land potential, timber, fish, hydropower","Topography":"flat, swampy coastal plain; low mountains in south","Climate":"tropical; very hot and humid; rainy season (May to November); dry season (February to May)","le":"68.9 years(2017)","imr":"18.9 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Diabetes Mellitus, 3- Stroke, 4- Prostate Cancer, 5- Violence","GDPPC":"$8,300 2017 EST.","cer":"2.01�Belize Dollars to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"2.3% (2017)","ii":"53.3 (1999)","cpi":"Not avaliable ","hioef":"57.1 overall (2018)","lr":"No Data","Religions":"Roman Catholic 40.1%, Protestant 31.5% (includes Pentecostal 8.4%, Seventh Day Adventist 5.4%, Anglican 4.7%, Mennonite 3.7%, Baptist 3.6%, Methodist 2.9%, Nazarene 2.8%), Jehovah's Witness 1.7%, other 10.5% (includes Baha'i, Buddhist, Hindu, Mormon, Muslim, Rastafarian, Salvation Army), unspecified 0.6%, none 15.5% (2010 est.)","Languages":"English 62.9% (official), Spanish 56.6%, Creole 44.6%, 6 other languages . (2010 est.).","Population":"360,346 (July 2017)"},{"id":"Guatemala","Country":"Guatemala","Continent":"South America","fhs":"56/100 (2018)","gov":"presidential republic","Capital":"Guatemala City","pnr":"petroleum, nickel, rare woods, fish, chicle, hydropower","Topography":"two east-west trending mountain chains divide the country into three regions: the mountainous highlands, the Pacific coast south of mountains, and the vast northern Peten lowlands","Climate":"tropical; hot, humid in lowlands; cooler in highlands","le":"72.6 years(2017)","imr":"21.3 deaths/1,000 live births(2017)","pcod":"1- Influenza and Pneumonia, 2- Violence, 3- Coronary Heart Disease, 4- Diabetes Mellitus, 5- Stroke (2017)","GDPPC":"$8,200 2017 EST.","cer":"7.42 Quetzales to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"3.4% (2017)","ii":"48.7 (2014)","cpi":"28 and 136th/176 (2016)","hioef":"63.4 overall (2018)","lr":"81.5% (2015)","Religions":"Roman Catholic, Protestant, indigenous Mayan beliefs","Languages":"Spanish (official) 68.9%, Maya languages 30.9%, other 0.3% (2001 est.)","Population":"15,460,732 (July 2017)"},{"id":"Mexico","Country":"Mexico","Continent":"South America","fhs":"62/100 (2018)","gov":"federal presidential republic","Capital":"Mexico City (Ciudad de Mexico)","pnr":"petroleum, silver, copper, gold, lead, zinc, natural gas, timber","Topography":"high, rugged mountains; low coastal plains; high plateaus; desert","Climate":"varies from tropical to desert","le":"76.1 years(2017)","imr":"11.6 deaths/1,000 live births(2017)","pcod":"1- Diabetes Mellitus, 2- Coronary Heart Disease, 3- Stroke, 4- Violence, 5- Lung Disease (2017)","GDPPC":"$19,500 2017 EST.","cer":"18.74�Mexican Pesos to 1 U.S. Dollar (March 2018)","bmi":"$2.57 vs $5.28 US","gdpg":"1.9% (2017)","ii":"48.2 (2014)","cpi":"30 and 123rd/176 (2016)","hioef":"64.8 overall (2018)","lr":"94.5% (2015)","Religions":"Roman Catholic 82.7%, Pentecostal 1.6%, Jehovah's Witness 1.4%, other Evangelical Churches 5%, other 1.9%, none 4.7%, unspecified 2.7% (2010 est.)","Languages":"Spanish only 92.7%, Spanish and indigenous languages 5.7%, indigenous only 0.8%, unspecified 0.8%. (2005).","Population":"124,574,795 (July 2017)"},{"id":"Russia","Country":"Russia","Continent":"Central Europe","fhs":"20/100 (2018)","gov":"semi-presidential federation","Capital":"Moscow","pnr":"wide natural resource base including major deposits of oil, natural gas, coal, and many strategic minerals, reserves of rare earth elements, timber","Topography":"broad plain with low hills west of Urals; vast coniferous forest and tundra in Siberia; uplands and mountains along southern border regions","Climate":"ranges from steppes in the south through humid continental in much of European Russia; subarctic in Siberia to tundra climate in the polar north; winters vary from cool along Black Sea coast to frigid in Siberia; summers vary from warm in the steppes to cool along Arctic coast","le":"71 years(2017)","imr":"6.8 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- HIV/AIDS, 4- Other Injuries, 5- Lung Cancers (2017)","GDPPC":"$27,900 2017 EST.","cer":"57.52�Russian Rubles to 1 U.S. Dollar (March 2018)","bmi":"$2.29 vs $5.28 US","gdpg":"1.6% (2017)","ii":"37.7 (2015)","cpi":"29 and 131st/176 (2016)","hioef":"58.2 overall (2018)","lr":"99.7% (2015)","Religions":"Russian Orthodox 15-20%, Muslim 10-15%, other Christian 2% (2006 est.) note: estimates are of practicing worshipers; Russia has large populations of non-practicing believers and non-believers, a legacy of over seven decades of Soviet rule; Russia officially recognizes Orthodox Christianity, Islam, Judaism, and Buddhism as traditional religions.","Languages":"Russian (official) 85.7%, Tatar 3.2%, Chechen 1%, other 10.1%. (2010 est.)","Population":"142,257,519 (July 2017)"},{"id":"Georgia","Country":"Georgia","Continent":"Central Europe","fhs":"64/100 (2018)","gov":"semi-presidential republic","Capital":"Tbilisi","pnr":"timber, hydropower, manganese deposits, iron ore, copper, minor coal and oil deposits; coastal climate and soils allow for important tea and citrus growth","Topography":"largely mountainous with Great Caucasus Mountains in the north and Lesser Caucasus Mountains in the south; Kolkhet'is Dablobi (Kolkhida Lowland) opens to the Black Sea in the west; Mtkvari River Basin in the east; fertile soils in river valley flood plains and foothills of Kolkhida Lowland","Climate":"warm and pleasant; Mediterranean-like on Black Sea coast","le":"76.4 years(2017)","imr":"15.2 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Lung Disease, 4- Hypertension, 5- Rheumatic Heart Disease (2017)","GDPPC":"$10,600 2017 EST.","cer":"2.44 Laris to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"4.2% (2017)","ii":"38.5 (2015)","cpi":"57 and 44th/176 (2016)","hioef":"76.2 overall (2018)","lr":"99.8% (2015)","Religions":"Orthodox (official) 83.4%, Muslim 10.7%, Armenian Apostolic 2.9%, other 1.2% (includes Catholic, Jehovah's Witness, Yazidi, Protestant, Jewish), none 0.5%, unspecified/no answer 1.2% (2014 est.)","Languages":"Georgian (official) 87.6%, Azeri 6.2%, Armenian 3.9%, Russian 1.2%, other 1%. (2014 est.)","Population":"4,926,330 (July 2017)"},{"id":"Amenia","Country":"Amenia","Continent":"Central Europe","fhs":"44/100 (2018)","gov":"parliamentary democracy","Capital":"Yerevan","pnr":"small deposits of gold, copper, molybdenum, zinc, bauxite","Topography":"Armenian Highland with mountains; little forest land; fast flowing rivers; good soil in Aras River valley","Climate":"highland continental, hot summers, cold winters","le":"74.9 years(2017)","imr":"12.7 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Lung Cancers, 4- Breast Cancer, 5- Lung Diseases (2017)","GDPPC":"$9,100 2017 EST.","cer":"480.41 Drams to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"2.9% (2017)","ii":"32.4 (2015)","cpi":"33 and 113th/176 (2016)","hioef":"68.7 overall (2018)","lr":"99.7%  (2015)","Religions":"Armenian Apostolic 92.6%, Evangelical 1%, other 2.4%, none 1.1%, unspecified 2.9% (2011 est.)","Languages":"Armenian (official) 97.9%, Kurdish 1%, other 1% (2011 est.)","Population":"3,045,191 (July 2017)"},{"id":"Azerbaijan","Country":"Azerbaijan","Continent":"Central Europe","fhs":"12/100 (2018)","gov":"presidential republic","Capital":"Baku (Baki, Baky)","pnr":"petroleum, natural gas, iron ore, nonferrous metals, bauxite","Topography":"large, flat Kur-Araz Ovaligi (Kura-Araks Lowland, much of it below sea level) with Great Caucasus Mountains to the north, Qarabag Yaylasi (Karabakh Upland) to the west; Baku lies on Abseron Yasaqligi (Apsheron Peninsula) that juts into Caspian Sea","Climate":"dry, semiarid steppe","le":"72.8 years(2017)","imr":"23.8 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Liver Disease, 4-Influenza and Pneumonia, 5- Hypertension. (2017)","GDPPC":"$17,400 2017 EST.","cer":"1.70�Azerbaijani Manats to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"1.3% (2017)","ii":"31.8 (2008)","cpi":"30 and 123rd/176 (2016)","hioef":"64.3 overall (2018)","lr":"99.8%  (2016)","Religions":"Muslim 96.9% (predominantly Shia), Christian 3%, other <0.1, unaffiliated <0.1 (2010 est.) note: religious affiliation is still nominal in Azerbaijan; percentages for actual practicing adherents are much lower","Languages":"Azerbaijani (Azeri) (official) 92.5%, Russian 1.4%, Armenian 1.4%, other 4.7% (2009 est.)","Population":"9,961,396 (July 2017)"},{"id":"Hungary","Country":"Hungary","Continent":"Central Europe","fhs":"72/100 (2018)","gov":"parliamentary republic","Capital":"Budapest","pnr":"bauxite, coal, natural gas, fertile soils, arable land","Topography":"mostly flat to rolling plains; hills and low mountains on the Slovakian border","Climate":"temperate; cold, cloudy, humid winters; warm summers","le":"76.1 years(2017)","imr":"4.9 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Lung Cancers, 4- Hypertension, 5- Colon-Rectum Cancers (2017)","GDPPC":"$28,900  2017 EST.","cer":"252.96 Forints to 1 U.S. Dollar (March 2018)","bmi":"$3.43 vs $5.28 US","gdpg":"3.4% (2017)","ii":"30.9 (2014)","cpi":"48 and 57th/176 (2016)","hioef":"66.7 overall (2018)","lr":"99.1%  (2015)","Religions":"Roman Catholic 37.2%, Calvinist 11.6%, Lutheran 2.2%, Greek Catholic 1.8%, other 1.9%, none 18.2%, unspecified 27.2% (2011 est.)","Languages":"Hungarian (official) 99.6%, English 16%, German 11.2% and other languages (2011 est.)","Population":"9,850,845 (July 2017)"},{"id":"Macedonia","Country":"Macedonia","Continent":"Central Europe","fhs":"58/100 (2018)","gov":"parliamentary republic","Capital":"Skopje","pnr":"low-grade iron ore, copper, lead, zinc, chromite, manganese, nickel, tungsten, gold, silver, asbestos, gypsum, timber, arable land","Topography":"mountainous with deep basins and valleys; three large lakes, each divided by a frontier line; country bisected by the Vardar River","Climate":"warm, dry summers and autumns; relatively cold winters with heavy snowfall","le":"76.4 years(2017)","imr":"7.4 deaths/1,000 live births(2017)","pcod":"1- Stroke, 2- Inflammatory/Heart Disease, 3- Coronary Heart Disease, 4- Lung Cancers, 5- Diabetes Mellitus (2017)","GDPPC":"$15,200 2017 EST.","cer":"50.02�Macedonian Denars to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"3.2% (2017)","ii":"35.6 (2015)","cpi":"37 and 90th/176 (2016)","hioef":"71.3 overall (2018)","lr":"97.8% (2015)","Religions":"Macedonian Orthodox 64.8%, Muslim 33.3%, other Christian 0.4%, other and unspecified 1.5% (2002 est.)","Languages":"Macedonian (official) 66.5%, Albanian 25.1%, Turkish 3.5%, Romani 1.9%, Serbian 1.2%, other 1.8% (2002 est.) ","Population":"2,103,721 (July 2017)"},{"id":"Albania","Country":"Albania","Continent":"Central Europe","fhs":"68/100 (2018)","gov":"parliamentary republic","Capital":"Tirana (Tirane)","pnr":"petroleum, natural gas, coal, bauxite, chromite, copper, iron ore, nickel, salt, timber, hydropower, arable land","Topography":"mostly mountains and hills; small plains along coast","Climate":"mild temperate; cool, cloudy, wet winters; hot, clear, dry summers; interior is cooler and wetter","le":"78.5 years(2017)","imr":"11.9 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Influenza and Pneumonia, 4- Lung Cancers, 5- Lung Disease (2017)","GDPPC":"$12,500 2017 EST.","cer":"106.72 Leke to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"3.7% (2017)","ii":"29 (2012)","cpi":"39 and 83rd/ 176 (2016)","hioef":"64.5 overall (2018)","lr":"97.6%  (2015)","Religions":"Muslim 56.7%, Roman Catholic 10%, Orthodox 6.8%, atheist 2.5%, Bektashi (a Sufi order) 2.1%, other 5.7%, unspecified 16.2%. note: all mosques and churches were closed in 1967 and religious observances prohibited; in November 1990, Albania began allowing private religious practice (2011 est.)","Languages":"Albanian 98.8%, Greek 0.5%, other 0.6%, unspecified 0.1% (2011 est.)","Population":"3,047,987 (July 2017)"},{"id":"Montenegro","Country":"Montenegro","Continent":"Central Europe","fhs":"67/100 (2018)","gov":"parliamentary republic","Capital":"Podgorica; note - Cetinje retains the status of \"Old Royal Capital\"","pnr":"bauxite, hydroelectricity","Topography":"highly indented coastline with narrow coastal plain backed by rugged high limestone mountains and plateaus","Climate":"Mediterranean climate, hot dry summers and autumns and relatively cold winters with heavy snowfalls inland","le":"No Data","imr":"No Data","pcod":"No Data","GDPPC":"$17,400 2017 EST.","cer":"0.81�Euros to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"2.8% (2017)","ii":"31.9 (2015)","cpi":"45 and 64th/176 (2016)","hioef":"64.3 overall (2018)","lr":"98.7%  (2015)","Religions":"Orthodox 72.1%, Muslim 19.1%, Catholic 3.4%, atheist 1.2%, other 1.5%, unspecified 2.6% (2011 est.)","Languages":"Serbian 42.9%, Montenegrin (official) 37%, Bosnian 5.3%, Albanian 5.3%, Serbo-Croat 2%, other 3.5%, unspecified 4% (2011 est.)","Population":"642,550 (July 2017)"},{"id":"Croatia","Country":"Croatia","Continent":"Central Europe","fhs":"86/100 (2018)","gov":"parliamentary republic","Capital":"Zagreb","pnr":"oil, some coal, bauxite, low-grade iron ore, calcium, gypsum, natural asphalt, silica, mica, clays, salt, hydropower","Topography":"geographically diverse; flat plains along Hungarian border, low mountains and highlands near Adriatic coastline and islands","Climate":"Mediterranean and continental; continental climate predominant with hot summers and cold winters; mild winters, dry summers along coast","le":"76.1 years(2017)","imr":"9.3 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Lung Cancers, 4- Colon-Rectum Cancers, 5- Breast Cancer (2017)","GDPPC":"$24,100 2017 EST.","cer":"6.05 Kuna to 1 U.S. Dollar (March 2018)","bmi":"$4.84 vs $5.28 US ","gdpg":"2.7% (2017)","ii":"32.2 (2014)","cpi":"49 and 55th/176 (2016)","hioef":"61.0 overall (2018)","lr":"99.3% (2015)","Religions":"Roman Catholic 86.3%, Orthodox 4.4%, Muslim 1.5%, other 1.5%, unspecified 2.5%, not religious or atheist 3.8% (2011)","Languages":"Croatian (official) 95.6%, Serbian 1.2%, other 3%, unspecified 0.2% (2011 est.)","Population":"4,292,095 (July 2017)"},{"id":"Bulgaria","Country":"Bulgaria","Continent":"Central Europe","fhs":"80/100 (2018)","gov":"parliamentary republic","Capital":"Sofia","pnr":"bauxite, copper, lead, zinc, coal, timber, arable land","Topography":"mostly mountains with lowlands in north and southeast","Climate":"temperate; cold, damp winters; hot, dry summers","le":"74.7 years(2017)","imr":"8.4 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Hypertension, 4- Lung Cancers, 5- Lung Disease (2017)","GDPPC":"$21,600 2017 EST.","cer":"1.59 Leva to 1 U.S. Dollar (March 2018)","bmi":"$4.84 vs $5.28 US","gdpg":"3.2% (2017)","ii":"37.4 (2014)","cpi":"41 and 75th/176 (2016)","hioef":"68.3 overall (2018)","lr":"98.4% (2015)","Religions":"Eastern Orthodox 59.4%, Muslim 7.8%, other (including Catholic, Protestant, Armenian Apostolic Orthodox, and Jewish) 1.7%, none 3.7%, unspecified 27.4% (2011 est.)","Languages":"Bulgarian (official) 76.8%, Turkish 8.2%, Romani 3.8%, other 0.7%, unspecified 10.5% (2011 est.)","Population":"7,101,510 (July 2017)"},{"id":"Romania","Country":"Romania","Continent":"Central Europe","fhs":"84/100 (2018)","gov":"semi-presidential republic","Capital":"Bucharest","pnr":"petroleum (reserves declining), timber, natural gas, coal, iron ore, salt, arable land, hydropower","Topography":"central Transylvanian Basin is separated from the Moldavian Plateau on the east by the Eastern Carpathian Mountains and separated from the Walachian Plain on the south by the Transylvanian Alps","Climate":"temperate; cold, cloudy winters with frequent snow and fog; sunny summers with frequent showers and thunderstorms","le":"75.4 years(2017)","imr":"9.4 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Hypertension, 4- Liver Disease, 5- Lung Cancers (2017)","GDPPC":"$24,000 2017 EST.","cer":"3.79�Lei to 1 U.S. Dollar (March 2018)","bmi":"$4.84 vs $5.28 US","gdpg":"4.4% (2017)","ii":"27.5 (2013)","cpi":"48 and 57th/176 (2016)","hioef":"69.4 overall (2018)","lr":"98.8% (2015)","Religions":"Eastern Orthodox (including all sub-denominations) 81.9%, Protestant (various denominations including Reformed and Pentecostal) 6.4%, Roman Catholic 4.3%, other (includes Muslim) 0.9%, none or atheist 0.2%, unspecified 6.3% (2011 est.)","Languages":"Romanian (official) 85.4%, Hungarian 6.3%, Romani 1.2%, other 1%, unspecified 6.1% (2011 est.)","Population":"21,529,967 (July 2017)"},{"id":"Serbia","Country":"Serbia","Continent":"Central Europe","fhs":"74/100 (2018)","gov":"parliamentary republic","Capital":"Belgrade (Beograd)","pnr":"oil, gas, coal, iron ore, copper, zinc, antimony, chromite, gold, silver, magnesium, pyrite, limestone, marble, salt, arable land","Topography":"extremely varied; to the north, rich fertile plains; to the east, limestone ranges and basins; to the southeast, ancient mountains and hills","Climate":"in the north, continental climate (cold winters and hot, humid summers with well-distributed rainfall); in other parts, continental and Mediterranean climate (relatively cold winters with heavy snowfall and hot, dry summers and autumns)","le":"75.7 years(2017)","imr":"5.8 deaths/1,000 live births(2017)","pcod":"","GDPPC":"$15,200 2017 EST.","cer":"96.14 Dinars to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"3.5% (2017)","ii":"29.1 (2013)","cpi":"42 and 72nd/176 (2016)","hioef":"62.5 overall (2018)","lr":"98.8% (2016)","Religions":"Orthodox 84.6%, Catholic 5%, Muslim 3.1%, Protestant 1%, atheist 1.1%, other 0.8% (includes agnostics, other Christians, Eastern religionists, Jewish), undeclared or unknown 4.5% (2011 est.)","Languages":"Serbian (official) 88.1%, Hungarian 3.4%, Bosnian 1.9%, Romani 1.4%, other 3.4%, (2011 est.)","Population":"7,111,024  (July 2017) "},{"id":"Bosnia","Country":"Bosnia","Continent":"Central Europe","fhs":"55/100 (2018)","gov":"parliamentary republic","Capital":"Sarajevo","pnr":"coal, iron ore, bauxite, copper, lead, zinc, chromite, cobalt, manganese, nickel, clay, gypsum, salt, sand, timber, hydropower","Topography":"mountains and valleys","Climate":"hot summers and cold winters; areas of high elevation have short, cool summers and long, severe winters; mild, rainy winters along coast","le":"76.9 years(2017)","imr":"5.5 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Lung Cancers, 4- Lung Disease, 5- Diabetes Mellitus (2017)","GDPPC":"$11,400 2017 EST.","cer":"1.59 konvertibilna markas to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"2.6% (2017)","ii":"33.1 (2007)","cpi":"39 and 83rd/ 176 (2016)","hioef":"61.4 overall (2018)","lr":"98.5%  (2015)","Religions":"Muslim 50.7%, Orthodox 30.7%, Roman Catholic 15.2%, atheist 0.8%, agnostic 0.3%, other 1.2%, undeclared/no answer 1.1% (2013 est.)","Languages":"Bosnian (official) 52.9%, Serbian (official) 30.8%, Croatian (official) 14.6%, other 1.6%, no answer 0.2% (2013 est.)","Population":"3,856,181 (July 2017)"},{"id":"Ukraine","Country":"Ukraine","Continent":"Central Europe","fhs":"62/100 (2018)","gov":"semi-presidential republic","Capital":"Kyiv (Kiev)","pnr":"iron ore, coal, manganese, natural gas, oil, salt, sulfur, graphite, titanium, magnesium, kaolin, nickel, mercury, timber, arable land","Topography":"mostly fertile plains (steppes) and plateaus, with mountains found only in the west (the Carpathians) or in the extreme south of the Crimean Peninsula","Climate":"temperate continental; Mediterranean only on the southern Crimean coast; precipitation disproportionately distributed, highest in west and north, lesser in east and southeast; winters vary from cool along the Black Sea to cold farther inland; warm summers across the greater part of the country, hot in the south","le":"72.1 years(2017)","imr":"7.8 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- HIV/AIDS, 4- Liver Disease, 5- Lung Cancers (2017)","GDPPC":"$8,700  2017 EST.","cer":"26.06 Hryvnia to 1 U.S. Dollar (March 2018)","bmi":"$1.64 vs $5.28 US","gdpg":"3.2% (2017)","ii":"25.5 (2015)","cpi":"29 and 131st/176 (2016)","hioef":"51.9 overall (2018)","lr":"99.8% (2015)","Religions":"Orthodox (includes Ukrainian Autocephalous Orthodox (UAOC), Ukrainian Orthodox - Kyiv Patriarchate (UOC-KP), Ukrainian Orthodox - Moscow Patriarchate (UOC-MP)), Ukrainian Greek Catholic, Roman Catholic, Protestant, Muslim, Jewish. note: Ukraine's population is overwhelmingly Christian; the vast majority - up to two-thirds - identify themselves as Orthodox, but many do not specify a particular branch; the UOC-KP and the UOC-MP each represent less than a quarter of the country's population, the Ukrainian Greek Catholic Church accounts for 8-10%, and the UAOC accounts for 1-2%; Muslim and Jewish adherents each compose less than 1% of the total population (2013 est.)","Languages":"Ukrainian (official) 67.5%, Russian (regional language) 29.6%, ther 2.9% (2001 est.) ","Population":"44,033,874 (July 2017)"},{"id":"Moldova","Country":"Moldova","Continent":"Central Europe","fhs":"61/100 (2018)","gov":"parliamentary republic","Capital":"Chisinau in Romanian (Kishinev in Russian)","pnr":"lignite, phosphorites, gypsum, limestone, arable land","Topography":"rolling steppe, gradual slope south to Black Sea","Climate":"moderate winters, warm summers","le":"71 years(2017)","imr":"12 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Liver Disease, 4- Hypertension, 5- Influenza and Pneumonia (2017)","GDPPC":"$5,700 2017 EST.","cer":"16.50�Moldovan Lei to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"3.7% (2017)","ii":"27 (2015)","cpi":"30 and 123rd/176 (2016)","hioef":"58.4 overall (2018)","lr":"99.4% (2015)","Religions":"Orthodox 90.1%, other Christian 2.6%, other 0.1%, agnostic <.1%, atheist 0.2%, unspecified 6.9% (2014 est.)","Languages":"Moldovan/Romanian 80.2% (official), Russian 9.7%, Gagauz 4.2%, Ukrainian 3.9%, other 2% (2014 est.)  ","Population":"3,474,121 (July 2017)"},{"id":"Belarus","Country":"Belarus","Continent":"Central Europe","fhs":"21/100 (2018)","gov":"presidential republic in name, although in fact a dictatorship","Capital":"Minsk","pnr":"timber, peat deposits, small quantities of oil and natural gas, granite, dolomitic limestone, marl, chalk, sand, gravel, clay","Topography":"generally flat with much marshland","Climate":"cold winters, cool and moist summers; transitional between continental and maritime","le":"73 years(2017)","imr":"3.6 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Other Injuries, 4- Liver Disease, 5- Lung Cancers (2017)","GDPPC":"$18,600 2017 EST.","cer":"1.96�Belarusian rubles to 1 U.S. Dollar (March 2018)","bmi":"No Data","gdpg":"0.7% (2017)","ii":"26.7 (2015)","cpi":"40 and 79th/176 (2016)","hioef":"58.1 overall (2018)","lr":"99.7% (2015)","Religions":"Orthodox 48.3%, Catholic 7.1%, other 3.5%, non-believers 41.1% (2011 est.)","Languages":"Russian (official) 70.2%, Belarusian (official) 23.4%, other 3.1%, unspecified 3.3% (2009 est.)","Population":"9,549,747 (July 2017)"},{"id":"Lithuania","Country":"Lithuania","Continent":"Central Europe","fhs":"91/100 (2018)","gov":"semi-presidential republic","Capital":"Vilnius","pnr":"peat, arable land, amber","Topography":"lowland, many scattered small lakes, fertile soil","Climate":"transitional, between maritime and continental; wet, moderate winters and summers","le":"75 years(2017)","imr":"3.8 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Suicide, 4- Liver Disease, 5- Prostate Cancer (2017)","GDPPC":"$31,900 2017 EST.","cer":"2.81 Litai to 1 U.S. Dollar (March 2018)","bmi":"$4.84 vs $5.28 US","gdpg":"3.5% (2017)","ii":"37.4 (2014)","cpi":"59 and 38th/176 (2016)","hioef":"75.3 overall (2018)","lr":"99.8% (2015)","Religions":"Roman Catholic 77.2%, Russian Orthodox 4.1%, Old Believer 0.8%, Evangelical Lutheran 0.6%, Evangelical Reformist 0.2%, other (including Sunni Muslim, Jewish, Greek Catholic, and Karaite) 0.8%, none 6.1%, unspecified 10.1% (2011 est.)","Languages":"Lithuanian (official) 82%, Russian 8%, Polish 5.6%, other 0.9%, unspecified 3.5% (2011 est.)","Population":"2,823,859 (July 2017)"},{"id":"Latvia","Country":"Latvia","Continent":"Central Europe","fhs":"87/100 (2018)","gov":"parliamentary republic","Capital":"Riga","pnr":"peat, limestone, dolomite, amber, hydropower, timber, arable land","Topography":"low plain","Climate":"maritime; wet, moderate winters","le":"74.7 years(2017)","imr":"5.2 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Hypertension, 4- Prostate Cancer, 5- Lung Cancers (2017)","GDPPC":"$27,300 2017 EST.","cer":"0.57 Lati to 1 U.S. Dollar (March 2018)","bmi":"$4.84 vs $5.28 US","gdpg":"3.9% (2017)","ii":"35.1 (2015)","cpi":"57 and 44th/176 (2016)","hioef":"73.6 overall (2018)","lr":"99.9% (2015)","Religions":"Lutheran 19.6%, Orthodox 15.3%, other Christian 1%, other 0.4%, unspecified 63.7% (2006)","Languages":"Latvian (official) 56.3%, Russian 33.8%, other 0.6%, unspecified 9.4%. (2011)","Population":"1,944,643 (July 2017)"},{"id":"Estonia","Country":"Estonia","Continent":"Central Europe","fhs":"94/100 (2018)","gov":"parliamentary republic","Capital":"Tallinn","pnr":"oil shale, peat, rare earth elements, phosphorite, clay, limestone, sand, dolomite, arable land, sea mud","Topography":"marshy, lowlands; flat in the north, hilly in the south","Climate":"maritime; wet, moderate winters, cool summers","le":"76.9 years(2017)","imr":"3.8 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Hypertension, 3- Stroke, 4- Lung Cancers, 5- Prostate Cancer (2017)","GDPPC":"$31,500 2017 EST.","cer":"0.81�Euros to 1 U.S. Dollar (March 2018)","bmi":"$4.84 vs $5.28 US","gdpg":"3.7% (2017)","ii":"34.6 (2014)","cpi":"70 and 22nd/176 (2016)","hioef":"78.8 overall (2018)","lr":"99.8% (2015)","Religions":"Lutheran 9.9%, Orthodox 16.2%, other Christian (including Methodist, Seventh-Day Adventist, Roman Catholic, Pentecostal) 2.2%, other 0.9%, none 54.1%, unspecified 16.7% (2011 est.)","Languages":"Estonian (official) 68.5%, Russian 29.6%, Ukrainian 0.6%, other 1.2%, unspecified 0.1% (2011 est.)","Population":"1,251,581 (July 2017)"},{"id":"Slovakia","Country":"Slovakia","Continent":"Central Europe","fhs":"89/100 (2018)","gov":"parliamentary republic","Capital":"Bratislava","pnr":"lignite, small amounts of iron ore, copper and manganese ore; salt; arable land","Topography":"rugged mountains in the central and northern part and lowlands in the south","Climate":"temperate; cool summers; cold, cloudy, humid winters","le":"77.3 years(2017)","imr":"5.1 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Influenza and Pneumonia, 4- Lung Cancers, 5- Colon-Rectum Cancers (2017)","GDPPC":"$32,900 2017 EST.","cer":"0.81�Euros to 1 U.S. Dollar (March 2018)","bmi":"$4.84 vs $5.28 US","gdpg":"3.7% (2017)","ii":"26.1 (2014)","cpi":"51 and 54th/176 (2016)","hioef":"65.3 overall (2018)","lr":"No Data","Religions":"Roman Catholic 62%, Protestant 8.2%, Greek Catholic 3.8%, other or unspecified 12.5%, none 13.4% (2011 est.)","Languages":"Slovak (official) 78.6%, Hungarian 9.4%, Roma 2.3%, Ruthenian 1%, other or unspecified 8.8% (2011 est.)","Population":"5,445,829 (July 2017)"},{"id":"Czechia","Country":"Czechia","Continent":"Central Europe","fhs":"93/100 (2018)","gov":"parliamentary republic","Capital":"Prague","pnr":"hard coal, soft coal, kaolin, clay, graphite, timber, arable land","Topography":"Bohemia in the west consists of rolling plains, hills, and plateaus surrounded by low mountains; Moravia in the east consists of very hilly country","Climate":"temperate; cool summers; cold, cloudy, humid winters","le":"78.8 years(2017)","imr":"2.6 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Lung Cancers, 4- Colon-Rectum Cancers, 5- Prostate Cancer (2017)","GDPPC":"$35,200 2017 EST.","cer":"20.65 Koruny to 1 U.S. Dollar (March 2018)","bmi":"$3.81 vs $5.28 US","gdpg":"2.6% (2017)","ii":"25.9 (2014)","cpi":"55 and 47th/176 (2016)","hioef":"74.2 overall (2018)","lr":"99%  (2011)","Religions":"Roman Catholic 10.4%, Protestant (includes Czech Brethren and Hussite) 1.1%, other and unspecified 54%, none 34.5% (2011 est.)","Languages":"Czech (official) 95.4%, Slovak 1.6%, other 3% (2011 census)","Population":"10,674,723 (July 2017)"},{"id":"Poland","Country":"Poland","Continent":"Central Europe","fhs":"85/100 (2018)","gov":"parliamentary republic","Capital":"Warsaw","pnr":"coal, sulfur, copper, natural gas, silver, lead, salt, amber, arable land","Topography":"mostly flat plain; mountains along southern border","Climate":"temperate with cold, cloudy, moderately severe winters with frequent precipitation; mild summers with frequent showers and thundershowers","le":"77.8 years(2017)","imr":"4.4 deaths/1,000 live births(2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Lung Cancers, 4- Lung Disease, 5- Colon-Rectum Cancers (2017)","GDPPC":"$29,300 2017 EST.","cer":"3.43 Zlotych to 1 U.S. Dollar (March 2018)","bmi":"$2.97 vs $5.28 US","gdpg":"3.3% (2017)","ii":"32.1 (2014)","cpi":"62 and 29th/176 (2016)","hioef":"68.5 overall (2018)","lr":"99.8% (2015)","Religions":"Catholic 87.2% (includes Roman Catholic 86.9% and Greek Catholic, Armenian Catholic, and Byzantine-Slavic Catholic .3%), Orthodox 1.3% (almost all are Polish Autocephalous Orthodox), Protestant 0.4% (mainly Augsburg Evangelical and Pentacostal), other 0.4% (includes Jehovah's Witness, Buddhist, Hare Krishna, Gaudiya Vaishnavism, Muslim, Jewish, Mormon), unspecified 10.8% (2012)","Languages":"Polish (official) 98.2%, Silesian 1.4%, other 1.1%, unspecified 1.3%. (2011). ","Population":"38,476,269 (July 2017)"},{"id":"Turkey","Country":"Turkey","Continent":"Middle East","fhs":"32/100 (2018)","gov":"parliamentary republic","Capital":"Ankara","pnr":"coal, iron ore, copper, chromium, antimony, mercury, gold, barite, borate, celestite (strontium), emery, feldspar, limestone, magnesite, marble, perlite, pumice, pyrites (sulfur), clay, arable land, hydropower","Topography":"high central plateau (Anatolia); narrow coastal plain; several mountain ranges","Climate":"temperate; hot, dry summers with mild, wet winters; harsher in interior","le":"75 years (2017)","imr":"17.6 deaths/1,000 live births (2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Lung Cancers, 4- Lung Disease, 5- Prostate Cancer (2017)","GDPPC":"$26,500 2017 EST.","cer":"3.97 Turkish Lira to 1 U.S Dollar (March 2018)","bmi":"$2.83 vs $5.28 US","gdpg":"3.5% (2017)","ii":"41.2 (2014)","cpi":"41 and 75th/176 (2016)","hioef":"65.4 overall (2018)","lr":"95.6% (2015)","Religions":"Muslim 99.8% (mostly Sunni), other 0.2% (mostly Christians and Jews)","Languages":"Turkish (official), Kurdish, other minority languages","Population":"80,845,215 (July 2017)"},{"id":"Syria","Country":"Syria","Continent":"Middle East","fhs":"-1/100 (2018)","gov":"presidential republic; highly authoritarian regime","Capital":"Damascus","pnr":"petroleum, phosphates, chrome and manganese ores, asphalt, iron ore, rock salt, marble, gypsum, hydropower","Topography":"primarily semiarid and desert plateau; narrow coastal plain; mountains in west","Climate":"mostly desert; hot, dry, sunny summers (June to August) and mild, rainy winters (December to February) along coast; cold weather with snow or sleet periodically in Damascus","le":"75.1 years (2017)","imr":"14.8 deaths/1,000 live births (2017)","pcod":"1- War, 2- Coronary Heart Disease, 3- Stroke, 4- Road Traffic Accidents, 5- Breast Cancer (2017)","GDPPC":"$2,900 2015 EST.","cer":"515.227 Syrian Pounds to 1 U.S Dollar (March 2018)","bmi":"No Data","gdpg":"no data","ii":"35.8 (2004)","cpi":"13 and 173rd/176th (2016)","hioef":"No Data","lr":"86.4% (2015)","Religions":"Muslim 87% (official; includes Sunni 74% and Alawi, Ismaili, and Shia 13%), Christian 10% (includes Orthodox, Uniate, and Nestorian), Druze 3%, Jewish (few remaining in Damascus and Aleppo)","Languages":"Arabic (official), Kurdish, Armenian, Aramaic, Circassian, French, English","Population":"18,028,549 (July 2017)"},{"id":"Iraq","Country":"Iraq","Continent":"Middle East","fhs":"31/100 (2018)","gov":"federal parliamentary republic","Capital":"Baghdad","pnr":"petroleum, natural gas, phosphates, sulfur","Topography":"mostly broad plains; reedy marshes along Iranian border in south with large flooded areas; mountains along borders with Iran and Turkey","Climate":"mostly desert; mild to cool winters with dry, hot, cloudless summers; northern mountainous regions along Iranian and Turkish borders experience cold winters with occasionally heavy snows that melt in early spring, sometimes causing extensive flooding in central and southern Iraq","le":"74.9 years (2017)","imr":"37.5 deaths/1,000 live births (2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Road Traffic Accidents, 4- Diabetes Mellitus, 5- War (2017)","GDPPC":"$17,000 2017 EST.","cer":"1176.47 Iraqi Dinar to 1 U.S Dollar (March 2018)","bmi":"No Data","gdpg":"2.9% (2017)","ii":"29.5 (2012)","cpi":"17 and 166th/176 (2016)","hioef":"No Data","lr":"79.7%  (2015)","Religions":"Muslim (official) 95-98% (Shia 64-69%, Sunni 29-34%), Christian 1% (includes Catholic, Orthodox, Protestant, Assyrian Church of the East), other 1-4% (2015). note: while there has been voluntary relocation of many Christian families to northern Iraq, recent reporting indicates that the overall Christian population may have dropped by as much as 50% since the fall of the SADDAM Husayn regime in 2003, with many fleeing to Syria, Jordan, and Lebanon ","Languages":"Arabic (official), Kurdish (official), Turkmen, Syriac.","Population":"39,192,111 (July 2017)"},{"id":"Iran","Country":"Iran","Continent":"Middle East","fhs":"17/100 (2018)","gov":"theocratic republic","Capital":"Tehran","pnr":"petroleum, natural gas, coal, chromium, copper, iron ore, lead, manganese, zinc, sulfur","Topography":"rugged, mountainous rim; high, central basin with deserts, mountains; small, discontinuous plains along both coasts","Climate":"mostly arid or semiarid, subtropical along Caspian coast","le":"74 years (2017)","imr":"15.9 deaths/1,000 live births (2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Road Traffic Accidents, 4- Hypertension, 5- Influenza and Pneumonia (2017)","GDPPC":"$20,000 2017 EST.","cer":"33333.33 Iranian Rial to 1 U.S Dollar (March 2018)","bmi":"No Data","gdpg":"3.8% (2017)","ii":"38.8 (2014)","cpi":"29 and 131st/176 (2016)","hioef":"50.9 overall (2018)","lr":"86.8% (2015)","Religions":"Muslim (official) 99.4% (Shia 90-95%, Sunni 5-10%), other (includes Zoroastrian, Jewish, and Christian) 0.3%, unspecified 0.4% (2011)","Languages":"Persian (official), Azeri Turkic and Turkic dialects and 5 other languages","Population":"82,021,564 (July 2017)"},{"id":"Pakistan","Country":"Pakistan","Continent":"Middle East","fhs":" 43/100 (2018)","gov":"federal parliamentary republic","Capital":"Islamabad","pnr":"arable land, extensive natural gas reserves, limited petroleum, poor quality coal, iron ore, copper, salt, limestone","Topography":"divided into three major geographic areas: the northern highlands, the Indus River plain in the center and east, and the Balochistan Plateau in the south and west","Climate":"mostly hot, dry desert; temperate in northwest; arctic in north","le":"68.1 years (2017)","imr":"52.1 deaths/1,000 live births (2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Influenza and Pneumonia, 4- Lung Disease, 5- Tuberculosis (2017)","GDPPC":"$5,400 2017 EST.","cer":"115.47 Pakistani Rupee to 1 U.S Dollar (March 2018)","bmi":"$3.39 vs $5.28 US","gdpg":"5.6% (2017)","ii":"30.7 (2013)","cpi":"32 and 116th/176 (2016)","hioef":"54.4overall (2018)","lr":"57.9% (2015)","Religions":"Muslim (official) 96.4% (Sunni 85-90%, Shia 10-15%), other (includes Christian and Hindu) 3.6% (2010 est.)","Languages":"Punjabi 48%, Urdu (official) 8%,other languages including English","Population":"204,924,861 (July 2017)"},{"id":"Afghanistan","Country":"Afghanistan","Continent":"Middle East","fhs":"26/100 (2018)","gov":"presidential Islamic republic","Capital":"Kabul","pnr":"natural gas, petroleum, coal, copper, chromite, talc, barites, sulfur, lead, zinc, iron ore, salt, precious and semiprecious stones, arable land","Topography":"mostly rugged mountains; plains in north and southwest","Climate":"arid to semiarid; cold winters and hot summers","le":"51.7 years (2017)","imr":"110.6 deaths/1,000 live births (2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Influenza and Pneumonia, 4- Tuberculosis, 5- War (2017)","GDPPC":"$1,900 2017 EST.","cer":"69.20 Afghan Afghani to 1 U.S Dollar (March 2018)","bmi":"No Data","gdpg":"3% (2017)","ii":"27.8 (2008)","cpi":"15 and 169th/176 (2016)","hioef":"51.3 overall (2018)","lr":"38.2% (2015)","Religions":"Muslim 99.7% (Sunni 84.7 - 89.7%, Shia 10 - 15%), other 0.3% (2009 est.)","Languages":"Afghan Persian or Dari (official) 80%, Pashto (official) 47%, Uzbek 11%, English 5%, and 12 other languages(2017).\r\nnote 2: the Turkic languages Uzbek and Turkmen, as well as Balochi, Pashayi, Nuristani, and Pamiri are the third official languages in areas where the majority speaks them","Population":"34,124,811 (July 2017)"},{"id":"Oman","Country":"Oman","Continent":"Middle East","fhs":"23/100 (2018)","gov":"absolute monarchy","Capital":"Muscat","pnr":"petroleum, copper, asbestos, some marble, limestone, chromium, gypsum, natural gas","Topography":"central desert plain, rugged mountains in north and south","Climate":"dry desert; hot, humid along coast; hot, dry interior; strong southwest summer monsoon (May to September) in far south","le":"75.7 years (2017)","imr":"12.8 deaths/1,000 live births (2017)","pcod":"1- Coronary Heart Disease, 2- Diabetes Mellitus, 3- Stroke, 4- Influenza and Pneumonia, 5- Road Traffic Accidents (2017)","GDPPC":"$45,500 2017 EST.","cer":"0.39 Omani Rial to 1 U.S Dollar (March 2018)","bmi":"No Data","gdpg":"3.7% (2017)","ii":"no data","cpi":"45 and 64th/176 (2016)","hioef":"61.0 overall (2018)","lr":"93% (2015)","Religions":"Muslim 85.9%, Christian 6.5%, Hindu 5.5%, Buddhist 0.8%, Jewish <0.1%, other 1%, unaffiliated 0.2% (2010). note: Omani citizens represent approximately 60% of the population and are overwhelming Muslim (Ibadhi and Sunni sects each constitute about 45% and Shia about 5%); Christians, Hindus, and Buddhists accounting for roughly 5% of Omani citizens.","Languages":"Arabic (official), English, Baluchi, Urdu, Indian dialects","Population":"4,613,241 (July 2017)"},{"id":"United_Arab_Emirates","Country":"United Arab Emirates","Continent":"Middle East","fhs":"17/100 (2018)","gov":"federation of monarchies","Capital":"Abu Dhabi","pnr":"petroleum, natural gas","Topography":"flat, barren coastal plain merging into rolling sand dunes of vast desert; mountains in east","Climate":"desert; cooler in eastern mountains","le":"77.7 years(2017)","imr":"10 deaths/1,000 live births (2017)","pcod":"no data","GDPPC":"$68,200 2017 EST.","cer":"3.67 United Arab Emirates Dirham to 1 U.S Dollar (March 2018)","bmi":"$3.81 vs $5.28 US","gdpg":"3.4% (2017)","ii":"no data","cpi":"66 and 24th/176 (2016)","hioef":"77.6 overall (2018)","lr":"93.8% (2015)","Religions":"Muslim (official) 76%, Christian 9%, other (primarily Hindu and Buddhist, less than 5% of the population consists of Parsi, Baha'i, Druze, Sikh, Ahmadi, Ismaili, Dawoodi Bohra Muslim, and Jewish) 15%(2005). note: represents the total population; about 85% of the population consists of noncitizens (2005 est.)\r\n","Languages":"Arabic (official), Persian, English, Hindi, Urdu","Population":"6,072,475 (July 2017)"},{"id":"Yemen","Country":"Yemen","Continent":"Middle East","fhs":"13/100 (2018)","gov":"in transition","Capital":"Sanaa","pnr":"petroleum, fish, rock salt, marble; small deposits of coal, gold, lead, nickel, and copper; fertile soil in west","Topography":"narrow coastal plain backed by flat-topped hills and rugged mountains; dissected upland desert plains in center slope into the desert interior of the Arabian Peninsula","Climate":"mostly desert; hot and humid along west coast; temperate in western mountains affected by seasonal monsoon; extraordinarily hot, dry, harsh desert in east","le":"65.9 years (2017)","imr":"46 deaths/1,000 live births(2017)","pcod":"1- Influenza and Pneumonia, 2- Coronary Heart Disease, 3- Stroke, 4- Road Traffic Accidents, 5- Diabetes Mellitus (2017)","GDPPC":"$2,300 2017 EST.","cer":"250.00 Yemeni Rial to 1 U.S Dollar (March 2018)","bmi":"No Data","gdpg":"8.5% (2017)","ii":"36.7 (2014)","cpi":"14 and 170th/176 (2016)","hioef":"No Data","lr":"70.1% (2015)","Religions":"Muslim 99.1% (official; virtually all are citizens, an estimated 65% are Sunni and 35% are Shia), other 0.9% (includes Jewish, Baha'i, Hindu, and Christian; many are refugees or temporary foreign residents) (2010 est.)","Languages":"Arabic (official).","Population":"28,036,829 (July 2017)"},{"id":"Eygpt","Country":"Eygpt","Continent":"Middle East","fhs":"23/100 (2018)","gov":"presidential republic","Capital":"Cairo","pnr":"petroleum, natural gas, iron ore, phosphates, manganese, limestone, gypsum, talc, asbestos, lead, rare earth elements, zinc","Topography":"vast desert plateau interrupted by Nile valley and delta","Climate":"desert; hot, dry summers with moderate winters","le":"73 years (2017)","imr":"19 deaths/1,000 live births (2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Liver Disease, 4- Hypertension, 5- Inflammatory/Heart (2017)","GDPPC":"$13,000 2017 EST.","cer":"17.65 Egyptian Pound to 1 U.S Dollar (March 2018)","bmi":"$1.93 vs $5.28 US","gdpg":"4.5% (2017)","ii":"31.8 (2015)","cpi":"34 and 108th/176 (2016)","hioef":"53.4 overall (2018)","lr":"73.8% (2015)","Religions":"Muslim (predominantly Sunni) 90%, Christian (majority Coptic Orthodox, other Christians include Armenian Apostolic, Catholic, Maronite, Orthodox, and Anglican) 10% (2015 est.)","Languages":"Arabic (official), English and French widely understood by educated classes","Population":"97,041,072 (July 2017)"},{"id":"Libya","Country":"Libya","Continent":"Middle East","fhs":"9/100 (2018)","gov":"in transition","Capital":"Tripoli (Tarabulus)","pnr":"petroleum, natural gas, gypsum","Topography":"mostly barren, flat to undulating plains, plateaus, depressions","Climate":"Mediterranean along coast; dry, extreme desert interior","le":"76.7 years (2017)","imr":"10.8 deaths/1,000 live births (2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Road Traffic Accidents, 4- Diabetes Mellitus, 5- Hypertension (2017)","GDPPC":"$9,800 2017 EST.","cer":"1.32 Libyan Dinar to 1 U.S Dollar (March 2018)","bmi":"No Data","gdpg":"31.2% (2017)","ii":"no data","cpi":"14 and 170th/176 (2016)","hioef":"No Data","lr":"91%  (2015)","Religions":"Muslim (official; virtually all Sunni) 96.6%, Christian 2.7%, Buddhist 0.3%, Hindu <0.1, Jewish <0.1, folk religion <0.1, unafilliated 0.2%, other <0.1(2010). note: non-Sunni Muslims include native Ibadhi Muslims (<1% of the population) and foreign Muslims (2010 est.)\r\n","Languages":"Arabic (official), Italian, English, Berber.","Population":"6,653,210 (July 2017)"},{"id":"Algeria","Country":"Algeria","Continent":"Middle East","fhs":"35/100 (2018)","gov":"presidential republic","Capital":"Algiers","pnr":"petroleum, natural gas, iron ore, phosphates, uranium, lead, zinc","Topography":"mostly high plateau and desert; some mountains; narrow, discontinuous coastal plain","Climate":"arid to semiarid; mild, wet winters with hot, dry summers along coast; drier with cold winters and hot summers on high plateau; sirocco is a hot, dust/sand-laden wind especially common in summer","le":"77 years (2017)","imr":"19.6 deaths/1,000 live births (2017)","pcod":"1- Stroke, 2- Coronary Heart Disease, 3- Diabetes Mellitus, 4- Hypertension, 5- Influenza and Pneumonia (2017)","GDPPC":"$15,100 2017 EST.","cer":"113.77 Algerian Dinar to 1 U.S Dollar (March 2018)","bmi":"No Data","gdpg":"0.8% (2017)","ii":"27.6 (2011)","cpi":"34 and 108th/176 (2016)","hioef":"44.7 overall (2018)","lr":"80.2% (2015)","Religions":"Muslim (official; predominantly Sunni) 99%, other (includes Christian and Jewish) <1% (2012 est.)","Languages":"Arabic (official), French (lingua franca), Berber or Tamazight (official); and 4 other dialects","Population":"40,969,443 (July 2017)"},{"id":"Tunisia","Country":"Tunisia","Continent":"Middle East","fhs":"70/100 (2018)","gov":"parliamentary republic","Capital":"Tunis","pnr":"petroleum, phosphates, iron ore, lead, zinc, salt","Topography":"mountains in north; hot, dry central plain; semiarid south merges into the Sahara","Climate":"temperate in north with mild, rainy winters and hot, dry summers; desert in south","le":"75.7 years (2017)","imr":"12.1 deaths/1,000 live births (2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Diabetes Mellitus, 4- Influenza and Pneumonia, 5- Hypertension (2017)","GDPPC":"$12,000 2017 EST.","cer":"2.37 Tunisian Dinar to 1 U.S Dollar (March 2018)","bmi":"No Data","gdpg":"3% (2017)","ii":"35.8 (2010)","cpi":"41 and 75th/176 (2016)","hioef":"58.9 overall (2018)","lr":"81.8% (2015)","Religions":"Muslim (official; Sunni) 99.1%, other (includes Christian, Jewish, Shia Muslim, and Baha'i) 1%","Languages":"Arabic (official), French (commerce), Berber (Tamazight).","Population":"11,403,800 (July 2017)"},{"id":"Moroco","Country":"Moroco","Continent":"Middle East","fhs":"39/100 (2018)","gov":"parliamentary constitutional monarchy","Capital":"Rabat","pnr":"phosphates, iron ore, manganese, lead, zinc, fish, salt","Topography":"mountainous northern coast (Rif Mountains) and interior (Atlas Mountains) bordered by large plateaus with intermontane valleys, and fertile coastal plains","Climate":"Mediterranean, becoming more extreme in the interior","le":"77.1 years (2017)","imr":"21.9 deaths/1,000 live births (2017)","pcod":"1- Stroke, 2- Diabetes Mellitus, 3- Coronary Heart Disease, 4- Influenza and Pneumonia, 5- Hypertension (2017)","GDPPC":"$8,600 2017 EST.","cer":"9.12 Moroccan Dirham to 1 U.S Dollar (March 2018)","bmi":"No Data","gdpg":"3% (2017)","ii":"40.7 (2007)","cpi":"37 and 90th/176 (2016)","hioef":"61.9 overall (2018)","lr":"68.5% (2015)","Religions":"Muslim 99% (official; virtually all Sunni, <0.1% Shia), other 1% (includes Christian, Jewish, and Baha'i); note - Jewish about 6,000 (2010 est.)","Languages":"Arabic (official), Berber languages, Tamazight (official), Tachelhit, Tarifit), French.","Population":"33,986,655 (July 2017)"},{"id":"Suadi_Arabia","Country":"Suadi Arabia","Continent":"Middle East","fhs":"7/100 (2018)","gov":"absolute monarchy","Capital":"Riyadh","pnr":"petroleum, natural gas, iron ore, gold, copper","Topography":"mostly sandy desert","Climate":"harsh, dry desert with great temperature extremes","le":"75.5 years (2017)","imr":"13.2 deaths/1,000 live births (2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Influenza and Pneumonia, 4- Diabetes Mellitus, 5- Kidney Disease (2017)","GDPPC":"$55,300 2017 EST.","cer":"3.75 Saudi Riyal to 1 U.S Dollar (March 2018)","bmi":"$3.20 vs $5.28 US","gdpg":"1.1% (2017)","ii":"45.9 (2013)","cpi":"46 and 62nd/176 (2016)","hioef":"59.6 overall (2018)","lr":"94.7% (2015)","Religions":"Muslim (official; citizens are 85-90% Sunni and 10-15% Shia), other (includes Eastern Orthodox, Protestant, Roman Catholic, Jewish, Hindu, Buddhist, and Sikh) (2012 est.) note: despite having a large expatriate community of various faiths (more than 30% of the population), most forms of public religious expression inconsistent with the government-sanctioned interpretation of Sunni Islam are restricted; non-Muslims are not allowed to have Saudi citizenship and non-Muslim places of worship are not permitted (2013)","Languages":"Arabic (official)","Population":"28,571,770 (July 2017)"},{"id":"Kuwait","Country":"Kuwait","Continent":"Middle East","fhs":"36/100 (2018)","gov":"constitutional monarchy","Capital":"Kuwait City","pnr":"petroleum, fish, shrimp, natural gas","Topography":"flat to slightly undulating desert plain","Climate":"dry desert; intensely hot summers; short, cool winters","le":"78.2 years (2017)","imr":"7 deaths/1,000 live births (2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Influenza and Pneumonia, 4- Diabetes Mellitus, 5- Breast Cancer (2017)","GDPPC":"$69,700 2017 EST.","cer":"0.30 Kuwaiti Dinar to 1 U.S Dollar (March 2018)","bmi":"No Data","gdpg":"4.1% (2017)","ii":"no data","cpi":"41 and 75th/176 (2016)","hioef":"62.2 overall (2018)","lr":"95.7% (2016)","Religions":"Muslim (official) 76.7%, Christian 17.3%, other and unspecified 5.9%. note: represents the total population; about 69% of the population consists of immigrants (2013 est.)\r\n","Languages":"Arabic (official), English widely spoken","Population":"2,875,422 (July 2017)"},{"id":"Qatar","Country":"Qatar","Continent":"Middle East","fhs":"24/100 (2018)","gov":"absolute monarchy","Capital":"Doha","pnr":"petroleum, natural gas, fish","Topography":"mostly flat and barren desert","Climate":"arid; mild, pleasant winters; very hot, humid summers","le":"78.9 years (2017)","imr":"6.2 deaths/1,000 live births (2017)","pcod":"1- Coronary Heart Disease, 2- Diabetes Mellitus, 3- Stroke, 4- Road Traffic Accidents, 5- Lung Cancers (2017)","GDPPC":"$124,900 2017 EST","cer":"3.64 Qatari Rial to 1 U.S Dollar (March 2018)","bmi":"No Data","gdpg":"3.1% (2017)","ii":"41.1 (2007)","cpi":"61 and 31st/176 (2016)","hioef":"72.6 overall (2018)","lr":"97.3% (2015)","Religions":"Muslim 67.7%, Christian 13.8%, Hindu 13.8%, Buddhist 3.1%, folk religion <.1%, Jewish <.1%, other 0.7%, unaffiliated 0.9% (2010 est.)","Languages":"Arabic (official), English.","Population":"2,314,307 (July 2017)"},{"id":"Jordan","Country":"Jordan","Continent":"Middle East","fhs":"37/100 (2018)","gov":"parliamentary constitutional monarchy","Capital":"Amman","pnr":"phosphates, potash, shale oil","Topography":"mostly desert plateau in east, highland area in west; Great Rift Valley separates eastern and western banks of the Jordan River","Climate":"mostly arid desert; rainy season in west (November to April)","le":"74.8 years (2017)","imr":"14.2 deaths/1,000 live births (2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Diabetes Mellitus, 4- Hypertension, 5- Kidney Disease (2017)","GDPPC":"$12,500 2017 EST.","cer":"0.71 Jordanian Dinar to 1 U.S Dollar (March 2018)","bmi":"No Data","gdpg":"2.5% (2017)","ii":"35.4 (2010)","cpi":"48 and 57th/176 (2016)","hioef":"64.9 overall (2018)","lr":"95.4% (2015)","Religions":"Muslim 97.2% (official; predominantly Sunni), Christian 2.2% (majority Greek Orthodox, but some Greek and Roman Catholics, Syrian Orthodox, Coptic Orthodox, Armenian Orthodox, and Protestant denominations), Buddhist 0.4%, Hindu 0.1%, Jewish <0.1, folk religionist <0.1, unaffiliated <0.1, other <0.1 (2010 est.)","Languages":"Arabic (official), English.","Population":"10,248,069 (July 2017)"},{"id":"Lebanon","Country":"Lebanon","Continent":"Middle East","fhs":"43/100 (2018)","gov":"parliamentary republic","Capital":"Beirut","pnr":"limestone, iron ore, salt, water-surplus state in a water-deficit region, arable land","Topography":"narrow coastal plain; El Beqaa (Bekaa Valley) separates Lebanon and Anti-Lebanon Mountains","Climate":"Mediterranean; mild to cool, wet winters with hot, dry summers; the Lebanon Mountains experience heavy winter snows","le":"77.8 years (2017)","imr":"7.4 deaths/1,000 live births (2017)","pcod":"1- Coronary Heart Disease, 2- Stroke, 3- Breast Cancer, 4- Road Traffic Accidents, 5- Prostate Cancer (2017)","GDPPC":"$19,500 2017 EST.","cer":"1515.15 Lebanese Pounds to 1 U.S Dollar (March 2018)","bmi":"No Data","gdpg":"2% (2017)","ii":"no data","cpi":"28 and 136th/176 (2016)","hioef":"53.2 overall (2018)","lr":"93.9% (2015)","Religions":"Muslim 54% (27% Sunni, 27% Shia), Christian 40.5% (includes 21% Maronite Catholic, 8% Greek Orthodox, 5% Greek Catholic, 6.5% other Christian), Druze 5.6%, very small numbers of Jews, Baha'is, Buddhists, Hindus, and Mormons. note: 18 religious sects recognized (2012 est.)\r\n","Languages":"Arabic (official), French, English, Armenian","Population":"6,229,794 (July 2017)"},{"id":"Israel","Country":"Israel","Continent":"Middle East","fhs":"79/100 (2018)","gov":"parliamentary democracy","Capital":"name:�Jerusalem; note - the US recognized Jerusalem as Israel�s capital in December 2017 without taking a position on the specific boundaries of Israeli sovereignty","pnr":"timber, potash, copper ore, natural gas, phosphate rock, magnesium bromide, clays, sand","Topography":"Negev desert in the south; low coastal plain; central mountains; Jordan Rift Valley","Climate":"temperate; hot and dry in southern and eastern desert areas","le":"82.5 years (2017)","imr":"3.4 deaths/1,000 live births (2017)","pcod":"1- Coronary Heart Disease, 2- Diabetes Mellitus, 3- Stroke, 4- Breast Cancer, 5- Lung Cancers (2017)","GDPPC":"$36,200 2017 EST.","cer":"3.50 Israeli New Shekel to 1 U.S Dollar (March 2018)","bmi":"$4.80 vs $5.28 US","gdpg":"3.4% (2017)","ii":"42.8 (2010)","cpi":"64 and 28th/176 (2016)","hioef":"72.2 overall (2018)","lr":"97.8% (2011)","Religions":"Jewish 74.7%, Muslim 17.7%, Christian 2%, Druze 1.6%, other 4% (2016 est.)","Languages":"Hebrew (official), Arabic, English.","Population":"8,299,706 (July 2017)"}];res.columns = ["id","Country","Continent","fhs","gov","Capital","pnr","Topography","Climate","le","imr","pcod","GDPPC","cer","bmi","gdpg","ii","cpi","hioef","lr","Religions","Languages","Population"];module.exports = res;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"country_header\">\r\n  <h2>"
    + alias4(((helper = (helper = helpers.Country || (depth0 != null ? depth0.Country : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Country","hash":{},"data":data}) : helper)))
    + "</h2>\r\n</div>\r\n<div class=\"general\">\r\n  <img src=\"Icons6.svg\" />\r\n  <div>\r\n    <h3>General</h3>\r\n    <ul>\r\n      <li>\r\n        <strong>Literacy Rate:</strong> "
    + alias4(((helper = (helper = helpers.lr || (depth0 != null ? depth0.lr : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lr","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li>\r\n        <strong>Religions:</strong> "
    + alias4(((helper = (helper = helpers.Religions || (depth0 != null ? depth0.Religions : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Religions","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li>\r\n        <strong>Languages:</strong> "
    + alias4(((helper = (helper = helpers.Languages || (depth0 != null ? depth0.Languages : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Languages","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li>\r\n        <strong>Population:</strong> "
    + alias4(((helper = (helper = helpers.Population || (depth0 != null ? depth0.Population : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Population","hash":{},"data":data}) : helper)))
    + "</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<div class=\"geography\">\r\n  <img src=\"Icons3.svg\" />\r\n  <div>\r\n    <h3>Geography</h3>\r\n    <ul>\r\n      <li>\r\n        <strong>Capital:</strong> "
    + alias4(((helper = (helper = helpers.Capital || (depth0 != null ? depth0.Capital : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Capital","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li>\r\n        <strong>Primary Natural Resources:</strong> "
    + alias4(((helper = (helper = helpers.pnr || (depth0 != null ? depth0.pnr : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pnr","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li>\r\n        <strong>Topography:</strong> "
    + alias4(((helper = (helper = helpers.Topography || (depth0 != null ? depth0.Topography : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Topography","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li>\r\n        <strong>Climate:</strong> "
    + alias4(((helper = (helper = helpers.Climate || (depth0 != null ? depth0.Climate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Climate","hash":{},"data":data}) : helper)))
    + "</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"health\">\r\n  <img src=\"Icons2.svg\" />\r\n  <div>\r\n    <h3>Health</h3>\r\n\r\n    <ul>\r\n      <li>\r\n        <strong>Life Expectancy:</strong> "
    + alias4(((helper = (helper = helpers.le || (depth0 != null ? depth0.le : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"le","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li>\r\n        <strong>Infant Mortality Rate:</strong> "
    + alias4(((helper = (helper = helpers.imr || (depth0 != null ? depth0.imr : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imr","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li>\r\n        <strong>Primary Causes of Death:</strong> "
    + alias4(((helper = (helper = helpers.pcod || (depth0 != null ? depth0.pcod : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pcod","hash":{},"data":data}) : helper)))
    + "</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"economic\">\r\n  <img src=\"Icons4.svg\" />\r\n  <div>\r\n    <h3>Economic</h3>\r\n    <ul>\r\n      <li>\r\n        <strong>GDP Per Capita:</strong> "
    + alias4(((helper = (helper = helpers.GDPPC || (depth0 != null ? depth0.GDPPC : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"GDPPC","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li>\r\n        <strong>Currency-Exchange Rate:</strong> "
    + alias4(((helper = (helper = helpers.cer || (depth0 != null ? depth0.cer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cer","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li>\r\n        <strong>Big Mac Index:</strong> "
    + alias4(((helper = (helper = helpers.bmi || (depth0 != null ? depth0.bmi : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bmi","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li>\r\n        <strong>GDP Growth:</strong> "
    + alias4(((helper = (helper = helpers.gdpg || (depth0 != null ? depth0.gdpg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gdpg","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li>\r\n        <strong>Income Inequality:</strong> "
    + alias4(((helper = (helper = helpers.ii || (depth0 != null ? depth0.ii : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ii","hash":{},"data":data}) : helper)))
    + "</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<div class=\"political\">\r\n\r\n  <img src=\"Icon1.svg\" />\r\n  <div>\r\n    <h3>Political</h3>\r\n    <ul>\r\n      <li>\r\n        <strong>Freedomhouse Score:</strong> "
    + alias4(((helper = (helper = helpers.fhs || (depth0 != null ? depth0.fhs : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fhs","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li>\r\n        <strong>Type of Government:</strong> "
    + alias4(((helper = (helper = helpers.gov || (depth0 != null ? depth0.gov : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gov","hash":{},"data":data}) : helper)))
    + "</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<div class=\"business\">\r\n  <img src=\"Icons5.svg\" />\r\n  <div>\r\n    <h3>Business</h3>\r\n    <ul>\r\n      <li>\r\n        <strong>Corruption Perceptions Index:</strong> "
    + alias4(((helper = (helper = helpers.cpi || (depth0 != null ? depth0.cpi : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cpi","hash":{},"data":data}) : helper)))
    + "</li>\r\n      <li>\r\n        <strong>Heritage Index of Economic Freedom:</strong> "
    + alias4(((helper = (helper = helpers.hioef || (depth0 != null ? depth0.hioef : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hioef","hash":{},"data":data}) : helper)))
    + "</li>\r\n    </ul>\r\n  </div>\r\n</div>";
},"useData":true});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = __webpack_require__(4)['default'];


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = __webpack_require__(5);

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = __webpack_require__(19);

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = __webpack_require__(7);

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = __webpack_require__(6);

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = __webpack_require__(20);

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = __webpack_require__(21);

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(6);

var _exception = __webpack_require__(7);

var _exception2 = _interopRequireDefault(_exception);

var _helpers = __webpack_require__(8);

var _decorators = __webpack_require__(16);

var _logger = __webpack_require__(18);

var _logger2 = _interopRequireDefault(_logger);

var VERSION = '4.0.11';
exports.VERSION = VERSION;
var COMPILER_REVISION = 7;

exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQTRDLFNBQVM7O3lCQUMvQixhQUFhOzs7O3VCQUNFLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNuQyxVQUFVOzs7O0FBRXRCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQzs7QUFDekIsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7OztBQUU1QixJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxVQUFVO0NBQ2QsQ0FBQzs7O0FBRUYsSUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUM7O0FBRTlCLFNBQVMscUJBQXFCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDbkUsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMvQixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7O0FBRW5DLGtDQUF1QixJQUFJLENBQUMsQ0FBQztBQUM3Qix3Q0FBMEIsSUFBSSxDQUFDLENBQUM7Q0FDakM7O0FBRUQscUJBQXFCLENBQUMsU0FBUyxHQUFHO0FBQ2hDLGFBQVcsRUFBRSxxQkFBcUI7O0FBRWxDLFFBQU0scUJBQVE7QUFDZCxLQUFHLEVBQUUsb0JBQU8sR0FBRzs7QUFFZixnQkFBYyxFQUFFLHdCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDakMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQUUsY0FBTSwyQkFBYyx5Q0FBeUMsQ0FBQyxDQUFDO09BQUU7QUFDM0Usb0JBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1QixNQUFNO0FBQ0wsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDekI7R0FDRjtBQUNELGtCQUFnQixFQUFFLDBCQUFTLElBQUksRUFBRTtBQUMvQixXQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDM0I7O0FBRUQsaUJBQWUsRUFBRSx5QkFBUyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3ZDLFFBQUksZ0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN0QyxvQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdCLE1BQU07QUFDTCxVQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtBQUNsQyxjQUFNLHlFQUEwRCxJQUFJLG9CQUFpQixDQUFDO09BQ3ZGO0FBQ0QsVUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7S0FDL0I7R0FDRjtBQUNELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRTtBQUNoQyxXQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDNUI7O0FBRUQsbUJBQWlCLEVBQUUsMkJBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNwQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFNLDJCQUFjLDRDQUE0QyxDQUFDLENBQUM7T0FBRTtBQUM5RSxvQkFBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQy9CLE1BQU07QUFDTCxVQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUM1QjtHQUNGO0FBQ0QscUJBQW1CLEVBQUUsNkJBQVMsSUFBSSxFQUFFO0FBQ2xDLFdBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM5QjtDQUNGLENBQUM7O0FBRUssSUFBSSxHQUFHLEdBQUcsb0JBQU8sR0FBRyxDQUFDOzs7UUFFcEIsV0FBVztRQUFFLE1BQU0iLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRnJhbWUsIGV4dGVuZCwgdG9TdHJpbmd9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdEhlbHBlcnN9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnN9IGZyb20gJy4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4wLjExJztcbmV4cG9ydCBjb25zdCBDT01QSUxFUl9SRVZJU0lPTiA9IDc7XG5cbmV4cG9ydCBjb25zdCBSRVZJU0lPTl9DSEFOR0VTID0ge1xuICAxOiAnPD0gMS4wLnJjLjInLCAvLyAxLjAucmMuMiBpcyBhY3R1YWxseSByZXYyIGJ1dCBkb2Vzbid0IHJlcG9ydCBpdFxuICAyOiAnPT0gMS4wLjAtcmMuMycsXG4gIDM6ICc9PSAxLjAuMC1yYy40JyxcbiAgNDogJz09IDEueC54JyxcbiAgNTogJz09IDIuMC4wLWFscGhhLngnLFxuICA2OiAnPj0gMi4wLjAtYmV0YS4xJyxcbiAgNzogJz49IDQuMC4wJ1xufTtcblxuY29uc3Qgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5leHBvcnQgZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG4gIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG4gIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcbiAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuICByZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuICByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xufVxuXG5IYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG4gIGxvZ2dlcjogbG9nZ2VyLFxuICBsb2c6IGxvZ2dlci5sb2csXG5cbiAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikgeyB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTsgfVxuICAgICAgZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckhlbHBlcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmhlbHBlcnNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lLCBwYXJ0aWFsKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGV4dGVuZCh0aGlzLnBhcnRpYWxzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwYXJ0aWFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKGBBdHRlbXB0aW5nIHRvIHJlZ2lzdGVyIGEgcGFydGlhbCBjYWxsZWQgXCIke25hbWV9XCIgYXMgdW5kZWZpbmVkYCk7XG4gICAgICB9XG4gICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikgeyB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGRlY29yYXRvcnMnKTsgfVxuICAgICAgZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG4gIH1cbn07XG5cbmV4cG9ydCBsZXQgbG9nID0gbG9nZ2VyLmxvZztcblxuZXhwb3J0IHtjcmVhdGVGcmFtZSwgbG9nZ2VyfTtcbiJdfQ==


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRztBQUNiLEtBQUcsRUFBRSxPQUFPO0FBQ1osS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsTUFBTTtBQUNYLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQzs7QUFFRixJQUFNLFFBQVEsR0FBRyxZQUFZO0lBQ3ZCLFFBQVEsR0FBRyxXQUFXLENBQUM7O0FBRTdCLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixTQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLG9CQUFtQjtBQUMzQyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxTQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QixVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5QjtLQUNGO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBS2hELElBQUksVUFBVSxHQUFHLG9CQUFTLEtBQUssRUFBRTtBQUMvQixTQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUNwQyxDQUFDOzs7QUFHRixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNuQixVQUlNLFVBQVUsR0FKaEIsVUFBVSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssbUJBQW1CLENBQUM7R0FDcEYsQ0FBQztDQUNIO1FBQ08sVUFBVSxHQUFWLFVBQVU7Ozs7O0FBSVgsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxVQUFTLEtBQUssRUFBRTtBQUN0RCxTQUFPLEFBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsR0FBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixHQUFHLEtBQUssQ0FBQztDQUNqRyxDQUFDOzs7OztBQUdLLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxRQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsYUFBTyxDQUFDLENBQUM7S0FDVjtHQUNGO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQUdNLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLE1BQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFOztBQUU5QixRQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzNCLGFBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3pCLGFBQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGFBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7QUFLRCxVQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztHQUN0Qjs7QUFFRCxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUFFLFdBQU8sTUFBTSxDQUFDO0dBQUU7QUFDOUMsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3Qzs7QUFFTSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsTUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQyxXQUFPLElBQUksQ0FBQztHQUNiLE1BQU07QUFDTCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gICAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKG9iai8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbmV4cG9ydCB7aXNGdW5jdGlvbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcbn07XG5cbi8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkgeyByZXR1cm4gc3RyaW5nOyB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuICBsZXQgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG4gIHBhcmFtcy5wYXRoID0gaWRzO1xuICByZXR1cm4gcGFyYW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG4gIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xufVxuIl19


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      column = undefined;
  if (loc) {
    line = loc.start.line;
    column = loc.start.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', {
          value: column,
          enumerable: true
        });
      } else {
        this.column = column;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsSUFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFbkcsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDdEIsSUFBSSxZQUFBO01BQ0osTUFBTSxZQUFBLENBQUM7QUFDWCxNQUFJLEdBQUcsRUFBRTtBQUNQLFFBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN0QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRTFCLFdBQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7R0FDeEM7O0FBRUQsTUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs7O0FBRzFELE9BQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ2hELFFBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7R0FDOUM7OztBQUdELE1BQUksS0FBSyxDQUFDLGlCQUFpQixFQUFFO0FBQzNCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDMUM7O0FBRUQsTUFBSTtBQUNGLFFBQUksR0FBRyxFQUFFO0FBQ1AsVUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7QUFJdkIsVUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO0FBQ3pCLGNBQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUNwQyxlQUFLLEVBQUUsTUFBTTtBQUNiLG9CQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7T0FDSixNQUFNO0FBQ0wsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7T0FDdEI7S0FDRjtHQUNGLENBQUMsT0FBTyxHQUFHLEVBQUU7O0dBRWI7Q0FDRjs7QUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7O3FCQUVuQixTQUFTIiwiZmlsZSI6ImV4Y2VwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZXJyb3JQcm9wcyA9IFsnZGVzY3JpcHRpb24nLCAnZmlsZU5hbWUnLCAnbGluZU51bWJlcicsICdtZXNzYWdlJywgJ25hbWUnLCAnbnVtYmVyJywgJ3N0YWNrJ107XG5cbmZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG4gIGxldCBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuICAgICAgbGluZSxcbiAgICAgIGNvbHVtbjtcbiAgaWYgKGxvYykge1xuICAgIGxpbmUgPSBsb2Muc3RhcnQubGluZTtcbiAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBjb2x1bW47XG4gIH1cblxuICBsZXQgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuICAgIHRoaXNbZXJyb3JQcm9wc1tpZHhdXSA9IHRtcFtlcnJvclByb3BzW2lkeF1dO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXhjZXB0aW9uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGxvYykge1xuICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcblxuICAgICAgLy8gV29yayBhcm91bmQgaXNzdWUgdW5kZXIgc2FmYXJpIHdoZXJlIHdlIGNhbid0IGRpcmVjdGx5IHNldCB0aGUgY29sdW1uIHZhbHVlXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbHVtbicsIHtcbiAgICAgICAgICB2YWx1ZTogY29sdW1uLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKG5vcCkge1xuICAgIC8qIElnbm9yZSBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IHBhcnRpY3VsYXIgKi9cbiAgfVxufVxuXG5FeGNlcHRpb24ucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEV4Y2VwdGlvbjtcbiJdfQ==


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = __webpack_require__(9);

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = __webpack_require__(10);

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = __webpack_require__(11);

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = __webpack_require__(12);

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = __webpack_require__(13);

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = __webpack_require__(14);

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = __webpack_require__(15);

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7eUNBQXVDLGdDQUFnQzs7OzsyQkFDOUMsZ0JBQWdCOzs7O29DQUNQLDBCQUEwQjs7Ozt5QkFDckMsY0FBYzs7OzswQkFDYixlQUFlOzs7OzZCQUNaLGtCQUFrQjs7OzsyQkFDcEIsZ0JBQWdCOzs7O0FBRWxDLFNBQVMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO0FBQy9DLHlDQUEyQixRQUFRLENBQUMsQ0FBQztBQUNyQywyQkFBYSxRQUFRLENBQUMsQ0FBQztBQUN2QixvQ0FBc0IsUUFBUSxDQUFDLENBQUM7QUFDaEMseUJBQVcsUUFBUSxDQUFDLENBQUM7QUFDckIsMEJBQVksUUFBUSxDQUFDLENBQUM7QUFDdEIsNkJBQWUsUUFBUSxDQUFDLENBQUM7QUFDekIsMkJBQWEsUUFBUSxDQUFDLENBQUM7Q0FDeEIiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdpc3RlckJsb2NrSGVscGVyTWlzc2luZyBmcm9tICcuL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcnO1xuaW1wb3J0IHJlZ2lzdGVyRWFjaCBmcm9tICcuL2hlbHBlcnMvZWFjaCc7XG5pbXBvcnQgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJJZiBmcm9tICcuL2hlbHBlcnMvaWYnO1xuaW1wb3J0IHJlZ2lzdGVyTG9nIGZyb20gJy4vaGVscGVycy9sb2cnO1xuaW1wb3J0IHJlZ2lzdGVyTG9va3VwIGZyb20gJy4vaGVscGVycy9sb29rdXAnO1xuaW1wb3J0IHJlZ2lzdGVyV2l0aCBmcm9tICcuL2hlbHBlcnMvd2l0aCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG4gIHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJFYWNoKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJJZihpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyTG9nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb29rdXAoaW5zdGFuY2UpO1xuICByZWdpc3RlcldpdGgoaW5zdGFuY2UpO1xufVxuIl19


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(6);

exports['default'] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBc0QsVUFBVTs7cUJBRWpELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQ3pCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdFLGVBQU8sR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztPQUN4Qjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGNyZWF0ZUZyYW1lLCBpc0FycmF5fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgbGV0IGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgb3B0aW9ucyA9IHtkYXRhOiBkYXRhfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(6);

var _exception = __webpack_require__(7);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else {
        var priorKey = undefined;

        for (var key in context) {
          if (context.hasOwnProperty(key)) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          }
        }
        if (priorKey !== undefined) {
          execIteration(priorKey, i - 1, true);
        }
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQUErRSxVQUFVOzt5QkFDbkUsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixZQUFNLDJCQUFjLDZCQUE2QixDQUFDLENBQUM7S0FDcEQ7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUU7UUFDZixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87UUFDekIsQ0FBQyxHQUFHLENBQUM7UUFDTCxHQUFHLEdBQUcsRUFBRTtRQUNSLElBQUksWUFBQTtRQUNKLFdBQVcsWUFBQSxDQUFDOztBQUVoQixRQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixpQkFBVyxHQUFHLHlCQUFrQixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ2pGOztBQUVELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsVUFBSSxHQUFHLG1CQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7QUFFRCxhQUFTLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtBQUN6QyxVQUFJLElBQUksRUFBRTtBQUNSLFlBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztBQUN6QixZQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O0FBRW5CLFlBQUksV0FBVyxFQUFFO0FBQ2YsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO09BQ0Y7O0FBRUQsU0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzdCLFlBQUksRUFBRSxJQUFJO0FBQ1YsbUJBQVcsRUFBRSxtQkFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDL0UsQ0FBQyxDQUFDO0tBQ0o7O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNO0FBQ0wsWUFBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixhQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRTtBQUN2QixjQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Ozs7QUFJL0IsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0w7U0FDRjtBQUNELFlBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQix1QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGJsb2NrUGFyYW1zLCBjcmVhdGVGcmFtZSwgaXNBcnJheSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICAgIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXQgPSAnJyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgY29udGV4dFBhdGg7XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICBjb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWNJdGVyYXRpb24oZmllbGQsIGluZGV4LCBsYXN0KSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkYXRhLmtleSA9IGZpZWxkO1xuICAgICAgICBkYXRhLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGRhdGEuZmlyc3QgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgZGF0YS5sYXN0ID0gISFsYXN0O1xuXG4gICAgICAgIGlmIChjb250ZXh0UGF0aCkge1xuICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGZpZWxkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbZmllbGRdLCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dFtmaWVsZF0sIGZpZWxkXSwgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgICBmb3IgKGxldCBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJpb3JLZXk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbnRleHQpIHtcbiAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcbiAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmlvcktleSA9IGtleTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = __webpack_require__(7);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFBYyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDdkY7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(6);

exports['default'] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBa0MsVUFBVTs7cUJBRTdCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLGtCQUFXLFdBQVcsQ0FBQyxFQUFFO0FBQUUsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQUU7Ozs7O0FBS3RFLFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFdBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztHQUN2SCxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJpZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNFbXB0eSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkgeyBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7IH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCkgfHwgaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwge2ZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaH0pO1xuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2xCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVMsSUFBSSxDQUFDLENBQUM7R0FDeEIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIGxldCBsZXZlbCA9IDE7XG4gICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG4gICAgfVxuICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuICAgIGluc3RhbmNlLmxvZyguLi4gYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('lookup', function (obj, field) {
    return obj && obj[field];
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JELFdBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUMxQixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJsb29rdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24ob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(6);

exports['default'] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUErRSxVQUFVOztxQkFFMUUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLENBQUMsZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNyQixVQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFVBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQy9CLFlBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2hGOztBQUVELGFBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTtBQUNqQixZQUFJLEVBQUUsSUFBSTtBQUNWLG1CQUFXLEVBQUUsbUJBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDaEUsQ0FBQyxDQUFDO0tBQ0osTUFBTTtBQUNMLGFBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QjtHQUNGLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6IndpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcGVuZENvbnRleHRQYXRoLCBibG9ja1BhcmFtcywgY3JlYXRlRnJhbWUsIGlzRW1wdHksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHsgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTsgfVxuXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = __webpack_require__(17);

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG5cbiJdfQ==


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(6);

exports['default'] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXFCLFVBQVU7O3FCQUVoQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIGxldCByZXQgPSBmbjtcbiAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG4gICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuICAgICAgcmV0ID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cbiAgICAgICAgbGV0IG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBleHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG4gICAgICAgIGxldCByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG4iXX0=


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(6);

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      if (!console[method]) {
        // eslint-disable-line no-console
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports['default'] = logger;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUFzQixTQUFTOztBQUUvQixJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDL0UsVUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxVQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztBQUNwQixjQUFNLEdBQUcsS0FBSyxDQUFDO09BQ2hCOzt3Q0FQbUIsT0FBTztBQUFQLGVBQU87OztBQVEzQixhQUFPLENBQUMsTUFBTSxPQUFDLENBQWYsT0FBTyxFQUFZLE9BQU8sQ0FBQyxDQUFDO0tBQzdCO0dBQ0Y7Q0FDRixDQUFDOztxQkFFYSxNQUFNIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5kZXhPZn0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7ICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuICAgICAgY29uc29sZVttZXRob2RdKC4uLm1lc3NhZ2UpOyAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiJdfQ==


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Build out our basic SafeString type


exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = __webpack_require__(6);

var Utils = _interopRequireWildcard(_utils);

var _exception = __webpack_require__(7);

var _exception2 = _interopRequireDefault(_exception);

var _base = __webpack_require__(5);

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
    }
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }

    partial = env.VM.resolvePartial.call(this, partial, context, options);
    var result = env.VM.invokePartial.call(this, partial, context, options);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, options);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name) {
      if (!(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
      }
      return obj[name];
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    merge: function merge(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },
    // An empty object to use as replacement for null-contexts
    nullContext: Object.seal({}),

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }
    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }
  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = container.merge(options.decorators, env.decorators);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  // Use the current closure context to save the partial-block if this partial
  var currentPartialBlock = options.data && options.data['partial-block'];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    (function () {
      options.data = _base.createFrame(options.data);
      // Wrapper function to get access to currentPartialBlock from the closure
      var fn = options.fn;
      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // Restore the partial-block from the closure for the execution of the block
        // i.e. the part inside the block of the partial call.
        options.data = _base.createFrame(options.data);
        options.data['partial-block'] = currentPartialBlock;
        return fn(context, options);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBQzhCLFFBQVE7O0FBRWxFLFNBQVMsYUFBYSxDQUFDLFlBQVksRUFBRTtBQUMxQyxNQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUN2RCxlQUFlLDBCQUFvQixDQUFDOztBQUUxQyxNQUFJLGdCQUFnQixLQUFLLGVBQWUsRUFBRTtBQUN4QyxRQUFJLGdCQUFnQixHQUFHLGVBQWUsRUFBRTtBQUN0QyxVQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1VBQ25ELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVELFlBQU0sMkJBQWMseUZBQXlGLEdBQ3ZHLHFEQUFxRCxHQUFHLGVBQWUsR0FBRyxtREFBbUQsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNoSyxNQUFNOztBQUVMLFlBQU0sMkJBQWMsd0ZBQXdGLEdBQ3RHLGlEQUFpRCxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNuRjtHQUNGO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztHQUN4RTs7QUFFRCxjQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDOzs7O0FBSWxELEtBQUcs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QUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUYsU0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDM0I7QUFDRCxTQUFPLElBQUksQ0FBQztDQUNiIiwiZmlsZSI6InJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24nO1xuaW1wb3J0IHsgQ09NUElMRVJfUkVWSVNJT04sIFJFVklTSU9OX0NIQU5HRVMsIGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmV2aXNpb24oY29tcGlsZXJJbmZvKSB7XG4gIGNvbnN0IGNvbXBpbGVyUmV2aXNpb24gPSBjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdIHx8IDEsXG4gICAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcbiAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuICAgICAgY29uc3QgcnVudGltZVZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuICAgICAgICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICtcbiAgICAgICAgICAgICdQbGVhc2UgdXBkYXRlIHlvdXIgcHJlY29tcGlsZXIgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgcnVudGltZVZlcnNpb25zICsgJykgb3IgZG93bmdyYWRlIHlvdXIgcnVudGltZSB0byBhbiBvbGRlciB2ZXJzaW9uICgnICsgY29tcGlsZXJWZXJzaW9ucyArICcpLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgY29tcGlsZXJJbmZvWzFdICsgJykuJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVudikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ05vIGVudmlyb25tZW50IHBhc3NlZCB0byB0ZW1wbGF0ZScpO1xuICB9XG4gIGlmICghdGVtcGxhdGVTcGVjIHx8ICF0ZW1wbGF0ZVNwZWMubWFpbikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1Vua25vd24gdGVtcGxhdGUgb2JqZWN0OiAnICsgdHlwZW9mIHRlbXBsYXRlU3BlYyk7XG4gIH1cblxuICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG4gICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgb3B0aW9ucy5pZHNbMF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnRpYWwgPSBlbnYuVk0ucmVzb2x2ZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcbiAgICBsZXQgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xuICAgICAgb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdID0gZW52LmNvbXBpbGUocGFydGlhbCwgdGVtcGxhdGVTcGVjLmNvbXBpbGVyT3B0aW9ucywgZW52KTtcbiAgICAgIHJlc3VsdCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXShjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcbiAgICAgICAgbGV0IGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSnVzdCBhZGQgd2F0ZXJcbiAgbGV0IGNvbnRhaW5lciA9IHtcbiAgICBzdHJpY3Q6IGZ1bmN0aW9uKG9iaiwgbmFtZSkge1xuICAgICAgaWYgKCEobmFtZSBpbiBvYmopKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1wiJyArIG5hbWUgKyAnXCIgbm90IGRlZmluZWQgaW4gJyArIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqW25hbWVdO1xuICAgIH0sXG4gICAgbG9va3VwOiBmdW5jdGlvbihkZXB0aHMsIG5hbWUpIHtcbiAgICAgIGNvbnN0IGxlbiA9IGRlcHRocy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChkZXB0aHNbaV0gJiYgZGVwdGhzW2ldW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZGVwdGhzW2ldW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsYW1iZGE6IGZ1bmN0aW9uKGN1cnJlbnQsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnQuY2FsbChjb250ZXh0KSA6IGN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGVzY2FwZUV4cHJlc3Npb246IFV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXG4gICAgaW52b2tlUGFydGlhbDogaW52b2tlUGFydGlhbFdyYXBwZXIsXG5cbiAgICBmbjogZnVuY3Rpb24oaSkge1xuICAgICAgbGV0IHJldCA9IHRlbXBsYXRlU3BlY1tpXTtcbiAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuXG4gICAgcHJvZ3JhbXM6IFtdLFxuICAgIHByb2dyYW06IGZ1bmN0aW9uKGksIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICAgIGxldCBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0sXG4gICAgICAgICAgZm4gPSB0aGlzLmZuKGkpO1xuICAgICAgaWYgKGRhdGEgfHwgZGVwdGhzIHx8IGJsb2NrUGFyYW1zIHx8IGRlY2xhcmVkQmxvY2tQYXJhbXMpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uKHZhbHVlLCBkZXB0aCkge1xuICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgbWVyZ2U6IGZ1bmN0aW9uKHBhcmFtLCBjb21tb24pIHtcbiAgICAgIGxldCBvYmogPSBwYXJhbSB8fCBjb21tb247XG5cbiAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgKHBhcmFtICE9PSBjb21tb24pKSB7XG4gICAgICAgIG9iaiA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG4gICAgbnVsbENvbnRleHQ6IE9iamVjdC5zZWFsKHt9KSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgZnVuY3Rpb24gcmV0KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgcmV0Ll9zZXR1cChvcHRpb25zKTtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuICAgICAgZGF0YSA9IGluaXREYXRhKGNvbnRleHQsIGRhdGEpO1xuICAgIH1cbiAgICBsZXQgZGVwdGhzLFxuICAgICAgICBibG9ja1BhcmFtcyA9IHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyA/IFtdIDogdW5kZWZpbmVkO1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzKSB7XG4gICAgICBpZiAob3B0aW9ucy5kZXB0aHMpIHtcbiAgICAgICAgZGVwdGhzID0gY29udGV4dCAhPSBvcHRpb25zLmRlcHRoc1swXSA/IFtjb250ZXh0XS5jb25jYXQob3B0aW9ucy5kZXB0aHMpIDogb3B0aW9ucy5kZXB0aHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXB0aHMgPSBbY29udGV4dF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFpbihjb250ZXh0LyosIG9wdGlvbnMqLykge1xuICAgICAgcmV0dXJuICcnICsgdGVtcGxhdGVTcGVjLm1haW4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICB9XG4gICAgbWFpbiA9IGV4ZWN1dGVEZWNvcmF0b3JzKHRlbXBsYXRlU3BlYy5tYWluLCBtYWluLCBjb250YWluZXIsIG9wdGlvbnMuZGVwdGhzIHx8IFtdLCBkYXRhLCBibG9ja1BhcmFtcyk7XG4gICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0LmlzVG9wID0gdHJ1ZTtcblxuICByZXQuX3NldHVwID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmhlbHBlcnMsIGVudi5oZWxwZXJzKTtcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLnBhcnRpYWxzLCBlbnYucGFydGlhbHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsIHx8IHRlbXBsYXRlU3BlYy51c2VEZWNvcmF0b3JzKSB7XG4gICAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuZGVjb3JhdG9ycywgZW52LmRlY29yYXRvcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcbiAgICB9XG4gIH07XG5cbiAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zICYmICFibG9ja1BhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocyAmJiAhZGVwdGhzKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdtdXN0IHBhc3MgcGFyZW50IGRlcHRocycpO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gIH07XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gIGZ1bmN0aW9uIHByb2coY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG4gICAgaWYgKGRlcHRocyAmJiBjb250ZXh0ICE9IGRlcHRoc1swXSAmJiAhKGNvbnRleHQgPT09IGNvbnRhaW5lci5udWxsQ29udGV4dCAmJiBkZXB0aHNbMF0gPT09IG51bGwpKSB7XG4gICAgICBjdXJyZW50RGVwdGhzID0gW2NvbnRleHRdLmNvbmNhdChkZXB0aHMpO1xuICAgIH1cblxuICAgIHJldHVybiBmbihjb250YWluZXIsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsXG4gICAgICAgIG9wdGlvbnMuZGF0YSB8fCBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtcyAmJiBbb3B0aW9ucy5ibG9ja1BhcmFtc10uY29uY2F0KGJsb2NrUGFyYW1zKSxcbiAgICAgICAgY3VycmVudERlcHRocyk7XG4gIH1cblxuICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cbiAgcHJvZy5wcm9ncmFtID0gaTtcbiAgcHJvZy5kZXB0aCA9IGRlcHRocyA/IGRlcHRocy5sZW5ndGggOiAwO1xuICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcbiAgY29uc3QgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuICB9XG5cbiAgbGV0IHBhcnRpYWxCbG9jaztcbiAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG4gICAgcGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBmdW5jdGlvbiBwYXJ0aWFsQmxvY2tXcmFwcGVyKGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuXG4gICAgICAvLyBSZXN0b3JlIHRoZSBwYXJ0aWFsLWJsb2NrIGZyb20gdGhlIGNsb3N1cmUgZm9yIHRoZSBleGVjdXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICAvLyBpLmUuIHRoZSBwYXJ0IGluc2lkZSB0aGUgYmxvY2sgb2YgdGhlIHBhcnRpYWwgY2FsbC5cbiAgICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGN1cnJlbnRQYXJ0aWFsQmxvY2s7XG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBpZiAoZm4ucGFydGlhbHMpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIGZuLnBhcnRpYWxzKTtcbiAgICB9XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkICYmIHBhcnRpYWxCbG9jaykge1xuICAgIHBhcnRpYWwgPSBwYXJ0aWFsQmxvY2s7XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGZvdW5kJyk7XG4gIH0gZWxzZSBpZiAocGFydGlhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHBhcnRpYWwoY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7IHJldHVybiAnJzsgfVxuXG5mdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG4gIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xuICAgIGRhdGEgPSBkYXRhID8gY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcbiAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKSB7XG4gIGlmIChmbi5kZWNvcmF0b3IpIHtcbiAgICBsZXQgcHJvcHMgPSB7fTtcbiAgICBwcm9nID0gZm4uZGVjb3JhdG9yKHByb2csIHByb3BzLCBjb250YWluZXIsIGRlcHRocyAmJiBkZXB0aHNbMF0sIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIFV0aWxzLmV4dGVuZChwcm9nLCBwcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHByb2c7XG59XG4iXX0=


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* global window */


exports.__esModule = true;

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUNlLFVBQVMsVUFBVSxFQUFFOztBQUVsQyxNQUFJLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU07TUFDdEQsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O0FBRWxDLFlBQVUsQ0FBQyxVQUFVLEdBQUcsWUFBVztBQUNqQyxRQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO0FBQ2xDLFVBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0tBQy9CO0FBQ0QsV0FBTyxVQUFVLENBQUM7R0FDbkIsQ0FBQztDQUNIIiwiZmlsZSI6Im5vLWNvbmZsaWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHdpbmRvdyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBsZXQgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);