// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]
function duplicatesEachElement(array) {
    var arr1 = [];
    for (let i = 0; i < array.length; i++) {
        arr1.push(array[i],array[i]);
    }
    return "1.Zad " + arr1;
}
console.log(duplicatesEachElement([2, 4, 7, 11, -2, 1]));

// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]
function removeAllDuplicates(array) {
arr1 = [];
array.sort(function(a, b){return a-b});
for (let i = 0; i < array.length; i++) {
    if(!arr1.includes(array[i])){
        arr1.push(array[i]);
    }
}
return "2.Zad " + arr1;
}
console.log(removeAllDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

// 3.
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
function checksOddNumberOfElement(array) {
    var result = false;
        if (!((array.length-1)%2)) {
            result = true;
        }
return "3a.Zad: " + result;
}
console.log(checksOddNumberOfElement([1, 2, 9, 2, 1]));
// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4
function countsTheNumberElementsLessThanMiddle(array) {
    var counter = 0;
    var middle = array[(array.length-1)/2];
        if((array.length-1)%2){
            return "Error";
        }
        for (let i = 0; i < array.length; i++) {
            if (array[i] < middle) {
                counter++;
            }
        }
return "3b.Zad: " + counter;
}
console.log(countsTheNumberElementsLessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }
function smallestElementGivenArray(array){
const min = Math.min(...array)
array.reverse();
const indexRev = array.indexOf(min);
var index = array.length-1-indexRev;

var result = {};
result.minValue = min;
result.minLastIndex = index;
return result
}
console.log(smallestElementGivenArray([1, 4, -2, 11, 8, 1, -2, 3]));
// 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

function elementsLessThanGivenElement(array,element) {
var arr1 = [];

for (let i = 0; i < array.length; i++) {
    if(array[i] < element){
        arr1.push(array[i])
    }
}
return arr1;
}
console.log("5a.Zad: " + elementsLessThanGivenElement([2, 3, 8, -2, 11, 4], 6));

// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]
function startWithThePro(array) {
var arr1 = [];

for (let i = 0; i < array.length; i++) {
    var arr2 = array[i].toUpperCase();
        if (arr2[0]+arr2[1]+arr2[2] == "PRO") {
                arr1.push(array[i]);
}
}
return "5b.Zad: " + arr1;
}
console.log(startWithThePro(["JavaScript", 'Programming', 'fun', 'product']));

// c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.

function filtersElements(array,element) {
    return elementsLessThanGivenElement(array,element);
}
console.log("5c.Zad: " + filtersElements([2, 3, 8, -2, 11, 4], 6));
// 6.
// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [
// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]
var shoppingList = [
{name: 'cheese', price: 450},
{name: 'milk', price: 750},
{name:'oranges', price: 150},
{name:'apples', price: 630}
]

// b. Write a function that calculates the total price of your shopping list.
function totalPrice(shoppingList) {
    var prices = shoppingList.map(product => product.price);
    var sum = 0;
        prices.forEach(x => {
            sum += x;
        });
return sum;
}
console.log("6b.Zad: " + totalPrice(shoppingList));

// c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.
function averageProductPrice(shoppingList) {
    var prices = shoppingList.map(product => product.price);
    var sum = 0;
    var average = 0;
    var averageThreeDec = 0;

    prices.forEach(x => {
        sum += x;
    });
    average = sum/(prices.length);
    averageThreeDec = average.toFixed(3);
return averageThreeDec;
}
console.log( "6c.Zad: " + averageProductPrice(shoppingList));

// d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.
function mostExpensiveProduct(shoppingList) {
    let sorted = shoppingList.sort((a, b) => b.price - a.price)
    let mostExpensive = sorted[0].name;
return mostExpensive;
}
console.log("6d.Zad: " + mostExpensiveProduct(shoppingList));
// 7.
// a. Write a function that checks if a given string is written in all capitals.
var stringIN = function checksIsAllCapitals(string) {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var counter = 0;
    var result = false;

    for (let i = 0; i < string.length; i++) {
    if(alphabet.includes(string[i])){
        counter++;
    }; 
}
if(counter == string.length){
    result = true;
}
return result;
}
// console.log(stringIN("BIT"));

// b. Write a function that checks if a given string contains any digits.
var passwordIN = function checksIsAnyDigits(string) {
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    var counter = 0;
    var result = false;
    for (let i = 0; i < string.length; i++) {
    if(!isNaN(string[i])){
        counter++;
    }; 
}
if(counter > 0){
    result = true;
}
return result;
}
// console.log(passwordIN("Simic1"));

// c. Write a function that checks if a given string is a valid hexadecimal color.
var colorIN = function isValidHexadecimalColor(string) {
    const numbHex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    var counter = 0;
    var result = false;
    for (let i = 1; i < string.length; i++) {
        if(numbHex.includes(string[i])){
            counter++;
        }
    }
    if(counter == 6){
        result = true;
    }
    if(string.length != 7){
        result = false;
    }
    if(string[0] != "#"){
        result = false;
    }
return result;
}
// console.log(colorIN('800bffa'));

// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.
var yearIN = function numberBelongsInterval(number) {
    var result = false;
    if(number>1900 && number<2018){
        result = true;
    }
    return result;
}
// console.log(yearIN(1901));

// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).
function validator(string, password, color, year) {
    let obj = {};
    obj.stringValidator = string;
    obj.passwordValidator = password;
    obj.colorValidator = color;
    obj.yearValidator = year;
    return obj
}
console.log(validator(stringIN("BIT"), passwordIN("Simic1"), colorIN('#00bffi'), yearIN(1901)));

// 8. Write a function that calculates a number of days to your birthday.
// Input: 25 February
// Output: 5 days
function numberDaysToBirthday(month, day) {
    var tday = new Date();
    var y = tday.getFullYear();
    var next = new Date(y, month-1, day);
    tday.setHours(0, 0, 0, 0);
    if(tday > next) {next.setFullYear(y+1)};
    return Math.round((next-tday)/8.64e7);
}
var d = numberDaysToBirthday(12, 14);
if(d === 0) console.log('Happy Birthday!');
else console.log(("8.Zad: " + d + ' day' + (d>1? 's': '') + ' until your birthday'));

// 9. Write a function that for a given departure and arrival time calculates the time the trip
// takes.
// Input: 08:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds
function timeTheTrip(start, finish) {
    var startSec = (parseFloat(start[0]+start[1]))*3600+(parseFloat(start[3]+start[4]))*60+parseFloat(start[6]+start[7]);
    var finishSec = (parseFloat(finish[0]+finish[1]))*3600+(parseFloat(finish[3]+finish[4]))*60+parseFloat(finish[6]+finish[7]);
    var sumResultInSec = Math.abs(finishSec-startSec);
    var resultOurs = Math.floor(sumResultInSec/3600);
    var rtesultMin = Math.floor((sumResultInSec%3600)/60);
    var resultSec = Math.floor((sumResultInSec%3600)%60);
var result = resultOurs.toString() + ':' + rtesultMin.toString() + ":" + resultSec.toString();
return result;
}
console.log("9.Zad: " + timeTheTrip("08:22:13", "11:43:22"));

// 10.
// a. Write a constructor function that creates points in space. Each point in space has
// its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.

function PointsInSpace (x, y, z) {
     this.coordX = x,
     this.coordY = y,
     this.coordZ  = z
 };
 const point1 = new PointsInSpace(7, 3, 2);
 const point2 = new PointsInSpace(1, 14, 1);
 
console.log(point1);

// b. Write a function that calculates the distance between two points in the space.
var distance = function (point1, point2) {
return Math.sqrt((Math.pow(point2.coordX,2)-Math.pow(point1.coordX,2))+(Math.pow(point2.coordY,2)-Math.pow(point1.coordY,2))+(Math.pow(point2.coordZ,2)-Math.pow(point1.coordZ,2)))
}
console.log( "10b.Zad: " + distance(point1, point2));

// 11.
// a. Write a function that generates a random integer value between 5 and 20.
function randomBetween(min,max){
    var res = parseInt(((max - min) * Math.random()) + min);
    return res;
}
console.log( "11a.Zad: " + randomBetween(5,20));
// b. Write a function that generates a random integer value between 50 and 100.
function randomBetween2(min,max){
    var res = parseInt(((max - min) * Math.random()) + min);
    return res;
}
console.log("11b.Zad: " + randomBetween2(50,100));
// c. Write a function which expects a number and a callback generator function and
// returns an array of numbers produced by the generator function.
function callbackGenerator(x) {
    var res = 5 + x;
 return res;  
}
function mainFunc(number,callbackGenerator) {
    var arr = [];
    for (let i = 0; i < 7; i++) {
        arr[i] = i*callbackGenerator(number);
    };
return arr; 
}
console.log( "11c.Zad: " + mainFunc(40,callbackGenerator));

// 12. Write a function that shuffles the elements of a given array.
// Input: [3, 6, 11, 2, 9, 1]
// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)
function shufflesElements(mainFunc) {
    var arr = mainFunc(40,callbackGenerator);
    arr.sort(() => Math.random() - 0.5);
      return  arr;
    }
console.log("12.Zad: " + shufflesElements(mainFunc));