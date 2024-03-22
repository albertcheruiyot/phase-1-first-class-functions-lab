// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
  
const firstTwoDrivers = returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
console.log(firstTwoDrivers);

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };

const lastTwoDrivers = returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
console.log(lastTwoDrivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    };
  }
 
const fareMultiplier = createFareMultiplier(4);
console.log(fareMultiplier(10));
  
const fareDoubler = createFareMultiplier(2);


console.log(fareDoubler(10)); 

const fareTripler = createFareMultiplier(3);

console.log(fareTripler(10)); 
  
function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }
  