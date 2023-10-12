/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let ob = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  if (s.length <= 15) {
    if (s.length === 1) {
      return ob[s];
    }
    let num = 0;
    let prev = "";
    let sarr = s.split("");
    sarr.map((element) => {
      if (ob[prev] < ob[element]) {
        num = num + ob[element] - 2 * ob[prev];
      } else {
        num += ob[element];
      }
      prev = element;
    });
    console.log(num);
    return num;
  }
};

romanToInt("MCMXCIV");
