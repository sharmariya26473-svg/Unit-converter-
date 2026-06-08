function convert() {
  let value = parseFloat(
    document.getElementById(
      "inputValue").value);
  
  let type = document.getElementById(
    "conversionType").value;
  
  let result = document.getElementById(
    "result");

  if (!value) {
    result.textContent = 
      "Please enter a number!";
    result.style.color = "red";
    return;
  }

  let answer;
  let unit;

  if (type === "kmToMiles") {
    answer = value * 0.621371;
    unit = "Miles";
  } 
  else if (type === "milesToKm") {
    answer = value * 1.60934;
    unit = "KM";
  } 
  else if (type === "kgToPounds") {
    answer = value * 2.20462;
    unit = "Pounds";
  } 
  else if (type === "poundsToKg") {
    answer = value / 2.20462;
    unit = "KG";
  } 
  else if (type === "celsiusToF") {
    answer = (value * 9/5) + 32;
    unit = "°F";
  } 
  else if (type === "fToCelsius") {
    answer = (value - 32) * 5/9;
    unit = "°C";
  } 
  else if (type === "kmToMeters") {
    answer = value * 1000;
    unit = "Meters";
  } 
  else if (type === "metersToKm") {
    answer = value / 1000;
    unit = "KM";
  } 
  else if (type === "literToGallon") {
    answer = value * 0.264172;
    unit = "Gallons";
  } 
  else if (type === "gallonToLiter") {
    answer = value * 3.78541;
    unit = "Liters";
  }

  result.style.color = "#333";
  result.textContent = 
    value + " = " + 
    answer.toFixed(2) + " " + unit;
}
