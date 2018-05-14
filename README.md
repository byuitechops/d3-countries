# d3-countries

Commissioned by: Sheleen Ockler.

## Important files

* countries.csv - Contains the country data for the tool. Has all countries arranged by continent and with other headers used on the map.
* africa, asia, central_europe, middle_east, south_america.html - The individual maps based on continent
* script.js and style.css - These are the updated script and style files. Old ones preserved to make changes as desired.

## What does it do?

**getCountries()**: Using the continent selector, parses "countries.csv" for countries in that continent and fills the "countries" object on the script.

**addListeners()**: Iterates through the "countries" object and creates click/touch events that toggle the popup window.

**cancel_cancel()**: Prevents the "touch" and "click" events from overlapping and firing twice.

**createpopup(code)**: Takes a country id (code) as an input. This is triggered by the click events created in "addListeners()". The popup element is selected and filled with a handlebars template of data from the specified country id (code).

**hide_popup()**: Hides the popup window.

## Making Changes

The project isn't very complicated anymore. Anyone can take over and understand it pretty well.
