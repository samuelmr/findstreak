# Find Streak

In an array, find the N consecutive items whose combined value is highest. Or lowest.

## Installation
    npm install findstreak

## Syntax
_array_ findStreak(_array_ source, _int_ length, _function_ reducer[, _boolean_ lowest])

* `source`: array to look streaks from
* `length`: number of elements included in the streak
* `reducer`: function used to reduce values in the `source` array to an integer, uses [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Parameters) syntax
* `lowest`: look for lowest values instead of highest

## Examples:

Simply get streak of three highest numbers:
```js
const findStreak = require('findstreak');
let arr = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0];
let n = 3;
let rf = (a, b) => a + b;
let newArr = findStreak(arr, n, rf); // [4, 5, 4]
```
Get streaks of highest and lowest item values:
```js
const findStreak = require('findstreak');
let arr = [
  {time: '00:00', value: 7},
  {time: '01:00', value: 3},
  {time: '02:00', value: 1},
  {time: '03:00', value: 9},
  {time: '04:00', value: 5},
  {time: '05:00', value: 4},
  {time: '06:00', value: 2},
  {time: '07:00', value: 3}
];
let rf = (a, b) => a + b.value;

let highestTree = findStreak(arr, 3, rf);
console.log(JSON.stringify(highestTree));
// [{"time":"03:00","value":9},{"time":"04:00","value":5},{"time":"05:00","value":4}]

let highestFour = findStreak(arr, 4, rf);
console.log(JSON.stringify(highestFour));
// [{"time":"00:00","value":7},{"time":"01:00","value":3},{"time":"02:00","value":1},{"time":"03:00","value":9}]

let lowestTwo = findStreak(arr, 2, rf, true);
console.log(JSON.stringify(lowestTwo));
// [{"time":"01:00","value":3},{"time":"02:00","value":1}]

let lowestThree = findStreak(arr, 3, rf, true);
console.log(JSON.stringify(lowestThree));
// [{"time":"05:00","value":4},{"time":"06:00","value":2,{"time":"07:00","value":3}]
```
