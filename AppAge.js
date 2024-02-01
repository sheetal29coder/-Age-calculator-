let calculateYourAge = document.getElementById("result");
console.log(calculateYourAge);

const calculateAge = () => {
  const birthdateInput = document.getElementById("inputBox");

  const birthdate = new Date(birthdateInput.value);

  const today = new Date();

  if (isNaN(birthdate)) {
    calculateYourAge.innerText = "Please enter a valid birth Date";
    return;
  }

  let ageYears = today.getFullYear() - birthdate.getFullYear();
  let ageMonths = today.getMonth() - birthdate.getMonth();
  let ageDays = today.getDate() - birthdate.getDate();

  if (ageDays < 0) {
    ageDays--;
    ageDays += daysInMonth(today.getMonth(), today.getFullYear());
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  calculateYourAge.innerText = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
};

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

const button = document.getElementById("inputButton");

button.addEventListener("click", () => {
  calculateAge();
});
