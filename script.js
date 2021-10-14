const height = document.querySelector("#height-input");
const weight = document.querySelector("#weight-input");
const calculate = document.querySelector("#calculate-button");
const yourBMI = document.querySelector("#result-text");
calculate.addEventListener("click", () => {
    if (height.value != "" && weight.value != ""){
        let bmiValue = weight.value / (height.value * height.value) * 10000;
        yourBMI.innerHTML = `Your BMI is : <span> ${bmiValue.toFixed(2)} </span>` 
    }
    else {
        yourBMI.innerHTML = 'Please enter correct value'
    }
})