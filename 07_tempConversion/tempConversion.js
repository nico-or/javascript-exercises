const ftoc = function(tempF) {
  let tempC = (tempF - 32) * 5 / 9

  /* The test suite raises and error if the function
  returns 0.0 instead of 0.
  This checks if the result has decimal values*/
  return tempC % 1 == 0? tempC : Number(tempC.toFixed(1))
};

const ctof = function(tempC) {
  let tempF = tempC * 9 / 5 + 32
  return tempF % 1 == 0 ? tempF : Number(tempF.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
