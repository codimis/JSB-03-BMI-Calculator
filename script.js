function calculatorBMI(){

const height = Number(document.getElementById("height-input").value);
const weight = Number(document.getElementById("weight-input").value);
const convert = height / 100;

const bmi = (weight / (convert*convert)).toFixed(2);
console.log(bmi);

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
