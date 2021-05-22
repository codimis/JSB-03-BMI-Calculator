/* Definitions */

const calculateButton = document.querySelector("#calculate-button");
const resultText = document.querySelector("#result-text");

/*

Below 18.5	Underweight
18.5 – 24.9	Normal or Healthy Weight
25.0 – 29.9	Overweight
30.0 – 39.9	Obese
40.0 and above Morbidly Obeses

*/

/* Function Expressions */

const changeDesign = function(color){
  document.body.style.backgroundColor = color;
  document.body.style.transition = "all 2s";
}

const calculateBMI = function (heightValue, weightValue) {
  const doubleHeight = heightValue / 100;
  const squareHeight = doubleHeight * doubleHeight;
  const weight = weightValue;
  const result = weight / squareHeight;
  return result;
};

let youAre;

const valueIs = function (BMIValue) {  
  if (BMIValue < 18.5) {
    youAre = "extremly weak"
    changeDesign("#E99A9A");
  } else if (24.9 > BMIValue && BMIValue> 18) {
    youAre = "normal"
    changeDesign("#DFFFAE");
  } else if (29.9 > BMIValue && BMIValue > 25) {
    youAre = "overweight";
    changeDesign("#FEC995");
  } else if (39.9 > BMIValue && BMIValue > 30) {
    youAre = "obese";
    changeDesign("#FBA476");
  } else if (BMIValue > 40) {
    youAre = "morbidly obese";
    changeDesign("#DB6752");
  } else {
    youAre = "entered an invalid value"
  }
  return youAre;
}

/* Click Events */

calculateButton.addEventListener("click", function () {
    const height = Number(document.querySelector("#height-input").value);
    const weight = Number(document.querySelector("#weight-input").value);
    const value = valueIs(calculateBMI(height,weight));  
    resultText.textContent = `You are ${youAre}!`; 
});