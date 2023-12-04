const {cars} = require('../db/cars_list');

// function to generate random plate number
function generateRandomPlateNumber(){
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    
    //  generating letters
    let letter1 = letters[Math.floor(Math.random()*letters.length)];
    let letter2 = letters[Math.floor(Math.random()*letters.length)];
    let letter3 = letters[Math.floor(Math.random()*letters.length)];
    let letter4 = letters[Math.floor(Math.random()*letters.length)];

    // generating numbers
    let number1 = numbers[Math.floor(Math.random()*numbers.length)];
    let number2 = numbers[Math.floor(Math.random()*numbers.length)];
    let number3 = numbers[Math.floor(Math.random()*numbers.length)];

    let plateNumber = `${letter1}${letter2}${letter3}${number1}${number2}${number3}${letter4}`;
    let plateNumber1 = `RA${letter3}${number1}${number2}${number3}${letter4}`;

    return plateNumber1;
}

// function to add a new car to the cars list
const addNewCar = (car) => {
   car.plateNumber = generateRandomPlateNumber();
   cars.push(car);
   console.log("Added new car!!!!");
   console.log(cars);
}

// Function to update credentials of a car
const updateCar = (plateNumber, key, value) => {
    let carExists = cars.find(el => el.plateNumber === plateNumber);
    
    if (!carExists) {
        console.log('Iyo modoka ntayihari pe\n');
    }
    else{
      carExists[key] = value;
      console.log('Iyo modoka irahari twanayinduriye ibyo mwadusabye guhindura:\n', carExists)
    }
}

// updating many properties of the car
const updateMany = (plateNumber, obj) => {
    let carExists = cars.find(el => el.plateNumber === plateNumber);
     if(!carExists) {
        console.log('Iyo modoka ntayihari \n');
     }
     else{
        
        for(const key in obj) {
        carExists[key] = obj[key]; 
        }
       console.log("Car updated \n", carExists);
     }
}

// finding many 
const searchMany = (obj) => {
  const itemsTMTD=cars.filter(ele=>ele[prop]==value);
  console.log(itemsTMTD);

}
 

module.exports = {
    addNewCar,
    updateCar,
    updateMany,
}