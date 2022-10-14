const ftoc = (temp) => {
  let cTemp = (temp - 32) * (5 / 9)
  let cRounded = Math.round(cTemp * 10) / 10;
  
  return cRounded;
};

const ctof = (temp) => {
  let fTemp = (temp * 1.80) + 32;
  let fRounded = Math.round(fTemp * 10) / 10;

  return fRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
