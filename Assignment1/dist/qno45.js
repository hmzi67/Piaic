"use strict";
function createCar(manufacture, model, ...options) {
    const car_dict = {
        manufacture,
        model,
    };
    options.forEach(([key, value]) => {
        car_dict[key] = value;
    });
    return car_dict;
}
const carInfo = createCar("Toyota", "GLI", ['color', 'black'], ['optional feature', 'Automatic']);
console.log("Car Info");
console.log(carInfo);
