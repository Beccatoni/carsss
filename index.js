const {addNewCar, updateCar, updateMany} = require('./controller/car_activities');

// example car
let newCar = {
    plateNumber: '',
    make: 'Benz',
    model: 'Compressor',
    color:'black',
    owner:'Angel Mugorewitejimberedi',
    year: 2020
}

addNewCar(newCar);

updateCar('DEF456Z', 'color', 'pink');

// example of car properties to change
let newCarProperties = {
    make: 'BMW',
    model: 'M3',
    color:'red',
    year: 2021
}
updateMany('ABC123E', newCarProperties);