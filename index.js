module.exports = function(a, n, cf, lo) {
  if (a.length < n) {
    return a;
  }
  var currentArray = a.slice(0, n);;
  var currentValue = currentArray.reduce(cf, 0);
  for (let i=0; i<=a.length-n; i++) {
    let tmp = a.slice(i, i+n);
    let value = tmp.reduce(cf, 0);
    if (lo && value < currentValue) {
      currentArray = tmp;
      currentValue = value;
    }
    else if (value > currentValue) {
      currentArray = tmp;
      currentValue = value;
    }
  }
  return currentArray;
};
