const assert = require('assert');
const findStreak = require('findstreak');

describe('Find Streak', function() {
  describe('findStreak()', function() {
    it('should return find highest numbers', function() {
      let arr = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0];
      let n = 3;
      let rf = (a, b) => a + b;
      let newArr = findStreak(arr, n, rf); // [4, 5, 4]
      assert.deepEqual([4, 5, 4], newArr);
    });
    it('should return find highest item values', function() {
      let arr = [
        {time: '00:00', value: 7},
        {time: '01:00', value: 3},
        {time: '02:00', value: 1},
        {time: '03:00', value: 9},
        {time: '04:00', value: 5},
        {time: '05:00', value: 4},
        {time: '06:00', value: -2},
        {time: '07:00', value: -3}
      ];
      let rf = (a, b) => a + b.value;
      let highestTree = findStreak(arr, 3, rf);
      assert.deepEqual(highestTree, [{"time":"03:00","value":9},{"time":"04:00","value":5},{"time":"05:00","value":4}]);
      let highestFour = findStreak(arr, 4, rf);
      assert.deepEqual(highestFour, [{"time":"00:00","value":7},{"time":"01:00","value":3},{"time":"02:00","value":1},{"time":"03:00","value":9}]);
    });
    it('should return find lowest item values', function() {
      let arr = [
        {time: '00:00', value: 0},
        {time: '01:00', value: 3},
        {time: '02:00', value: 1},
        {time: '03:00', value: 9},
        {time: '04:00', value: 5},
        {time: '05:00', value: 12},
        {time: '06:00', value: -2},
        {time: '07:00', value: -3}
      ];
      let rf = (a, b) => a + b.value;
      let lowestTwo = findStreak(arr, 2, rf, true);
      assert.deepEqual(lowestTwo, [{"time":"06:00","value":-2},{"time":"07:00","value":-3}]);
      let lowestThree = findStreak(arr, 3, rf, true);
      assert.deepEqual(lowestThree, [{"time":"00:00","value":0},{"time":"01:00","value":3},{"time":"02:00","value":1}]);
    });
  });
});
