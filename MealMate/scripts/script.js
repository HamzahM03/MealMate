document.addEventListener('DOMContentLoaded', function() {

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
  const userData = {

    gender: getSelectedGender(),
    age: parseInt(document.getElementById('age').value), 
    heightInFeet: parseFloat(document.getElementById('height-feet').value), 
    heightInInches: parseFloat(document.getElementById('height-inches').value), 
    weight: parseFloat(document.getElementById('weight').value) 
  };



  const BMR = calculateDailyCalories(userData);
  console.log(BMR);

  localStorage.setItem('BMR',BMR.toFixed(2));

const activityLevelSelect = document.getElementById('activity-level');
const selectedValue = activityLevelSelect.value;
const activityRate = TDEE(BMR,selectedValue);
const maintainWeight = activityRate;

localStorage.setItem('maintain',maintainWeight.toFixed(2));


});





function getSelectedGender() {
  const maleGenderRadioButton = document.getElementById('male-gender');
  const femaleGenderRadioButton = document.getElementById('female-gender');

  if (maleGenderRadioButton.checked) {
    return 'Male';
  } else if (femaleGenderRadioButton.checked) {
    return 'Female';
  } else {
    return 'Unknown';
  }
}
});



function calculateDailyCalories(userData) {
  let heightInches = (userData.heightInFeet * 12) + userData.heightInInches;
 
  if (userData.gender === 'Male') {
    return 66.47 + (6.24 * userData.weight) + (12.7 * heightInches) - (6.755 * userData.age);
  }
  else if (userData.gender === 'Female') {
    return 655.1 + (4.35 * userData.weight) + (4.7 * heightInches) - (4.7 * userData.age);
  }
  
}


function TDEE(BMR,selectedValue){
  switch(selectedValue){
    case 'sedentary':
      return BMR * 1.2;
      break;
    case 'light':
      return BMR * 1.375;
      break;
    case 'moderate':
      return BMR * 1.55;
      break;
    case 'active':
      return BMR * 1.725;
      break;
    case 'very-active':
      return BMR * 1.9;
  }
  }