function calculatorBMI(){

const height = Number(document.getElementById("height-input").value);
const weight = Number(document.getElementById("weight-input").value);
const result = Number(document.getElementById("result-text").value);

const bmi = (weight / (height * height)*10000).toFixed(2);

document.getElementById("calculate-button").addEventListener("click", calculatorBMI);

if(0<=bmi && bmi<18.5){
    alert('Underweight');
     }else if(18.5<=bmi && bmi<=24.9){
    alert('Healthy');
     }else if(25<=bmi && bmi<=29.9){
    alert('Overweight');
     }else if(30<=bmi && bmi<=34.9){
    alert('Obese');
     }else if(35<=bmi){
    alert('Extremely obese');
     }else
    alert('Please enter the valid value');
}
