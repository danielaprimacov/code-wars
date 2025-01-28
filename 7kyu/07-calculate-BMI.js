function bmi(weight, height) {
  let bmiConst = weight / height**2; 
  return bmiConst <= 18.5 ? "Underweight" : 
         (bmiConst <= 25.0) ? "Normal" : 
         (bmiConst <= 30.0) ? "Overweight" : "Obese";
}