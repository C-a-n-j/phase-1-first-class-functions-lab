// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//fuction sliced first two 


function returnFirstTwoDrivers (){
    let twoDrivers = drivers.slice(0, 2)
    return twoDrivers;
}
//last two


function returnLastTwoDrivers (){
    let lastDrivers = drivers.slice(-2);
    return lastDrivers;
}
// combining arryas


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(){
        return num*num
    }
}
//fare

const fareDoubler = num2=>num2*2

const fareTripler = num3=>num3*3

function selectDifferentDrivers(drivers, func){
   let selecteddrivers = [...drivers ,...func]

   return func(selecteddrivers)
}

