document.addEventListener('DOMContentLoaded', function() {
  const BMR = localStorage.getItem('BMR');
  const maintainWeight = localStorage.getItem('maintain');
  const mildLoseWeight = (maintainWeight - 250).toFixed(2);
  const LoseWeight = (maintainWeight- 500).toFixed(2);
  const ExtremlyLoseWeight = (maintainWeight - 1000).toFixed(2);
  const mildWeightGain = (Number(maintainWeight) + 250).toFixed(2);
  const weightGain = (Number(maintainWeight)+500).toFixed(2);
  const extremeWeightGain= (Number(maintainWeight) + 1000).toFixed(2);
  
  document.getElementById('test').textContent = 'BMR: ' + BMR;
  document.getElementById('maintain-weight').textContent = 'Maintain Weight: ' + maintainWeight + ' Calories';
  document.getElementById('mild-lose-weight').textContent = 'Mild Weight Loss: ' + mildLoseWeight + ' Calories';
  document.getElementById('lose-weight').textContent = 'Weight Loss(1lb/week): ' + LoseWeight + ' Calories';
  document.getElementById('ExtremelyLoseWeight').textContent
   = 'Extreme Weight Loss(2lb/week): ' + ExtremlyLoseWeight + ' Calories';

   if(ExtremlyLoseWeight<1500 || LoseWeight<1500){
    document.getElementById('doctor').textContent = "Please consult with a doctor when losing 1 lb or more per week since it requires that you consume less than the minimum recommendation of 1,500 calories a day.";
   }

  const toggleLink = document.getElementById('toggle-link');
  const mildWeightGainInfo = document.getElementById("mildWeightGainInfo");
  const weightGainInfo = document.getElementById("weightGainInfo");
  const extremeWeightGainInfo = document.getElementById('extremeWeightGainInfo');

  toggleLink.addEventListener("click",function (){
    
    if(toggleLink.textContent === "Show info for weight gain"){
      toggleLink.textContent = "Hide weight gain";
      mildWeightGainInfo.textContent = 'Mild Weight Gain(0.5lb/week): ' + mildWeightGain + ' Calories';
      weightGainInfo.textContent = 'Weight Gain(1lb/week): ' + weightGain + ' Calories';
      extremeWeightGainInfo.textContent = 'Extreme Weight Gain:(2lb/week): ' + extremeWeightGain + ' Calories';
      mildWeightGainInfo.classList.remove("hidden");
      weightGainInfo.classList.remove("hidden");
      extremeWeightGainInfo.classList.remove('hidden');
    }
    else{
      toggleLink.textContent = "Show info for weight gain";
      mildWeightGainInfo.classList.add("hidden"); 
      weightGainInfo.classList.add("hidden");
      extremeWeightGainInfo.classList.add("hidden");

    }
  })

})

