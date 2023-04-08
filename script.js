const calculateButton = document.getElementById("calculate");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultDiv = document.getElementById("result");

function calculateBMI() {
	const weight = parseFloat(weightInput.value);
	const height = parseFloat(heightInput.value) / 100;
	const bmi = weight / (height ** 2);
	const bmiStatus = getBMIStatus(bmi);
	resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(1)}. You are ${bmiStatus}.`;
}

function getBMIStatus(bmi) {
	if (bmi < 18.5) {
		return "underweight";
	} else if (bmi < 25) {
		return "normal weight";
	} else if (bmi < 30) {
		return "overweight";
	} else {
		return "obese";
	}
}

calculateButton.addEventListener("click", calculateBMI);