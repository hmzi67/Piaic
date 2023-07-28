"use strict";
function describe_cities(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}`);
}
describe_cities('Lahore');
describe_cities('Los Angeles', 'United State');
describe_cities('Karachi');
