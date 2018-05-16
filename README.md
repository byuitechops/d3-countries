# d3-countries

Commissioned by: Sheleen Ockler.

Currently used in this course: [Introduction to International Studies](https://byui.instructure.com/courses/4383)

## Files

### dist
  - africa, asia, central_europe, middle_east, south_america.html - The individual maps based on continent
  - style.css - our style sheet
  - Icon1.svg, Icon2.svg, Icon3.svg, Icon4.svg, Icon5.svg, Icon6.svg - the icons
  - bundle.js - all of the src files bundled into one

### src
  - script.js - the main script
  - countries.csv - Contains the country data for the tool. Has all countries arranged by continent and with other headers used on the map.
  - template.hbs - the handlebars file for creating the popup

use `npm run build` to compile the src files into `bundle.js`

## What does it do?

**getCountries()**: Using the continent selector, parses "countries.csv" for countries in that continent and fills the "countries" object on the script.

**addListeners()**: Iterates through the "countries" object and creates click/touch events that toggle the popup window.

**cancel_cancel()**: Prevents the "touch" and "click" events from overlapping and firing twice.

**createpopup(code)**: Takes a country id (code) as an input. This is triggered by the click events created in "addListeners()". The popup element is selected and filled with a handlebars template of data from the specified country id (code).

**hide_popup()**: Hides the popup window.

## Making Changes

The project isn't very complicated anymore. Anyone can take over and understand it pretty well.
