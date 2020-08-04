
// Pin generate number between 1000 and 9000
document.getElementById('random-generator')
.addEventListener("click", function(){
    var fourDigitNumber = Math.floor(1000+ Math.random() * 9000);

document.getElementById('displayNumber').value = fourDigitNumber;
    myLoadFunction();
});

// notify section
document.getElementById("submit-button").addEventListener("click" , function(){ let fourDigitsNum = document.getElementById("displayNumber"); let showCalDisplay = document.getElementById("showNumber"); if (fourDigitsNum.value == showCalDisplay.value){ document.getElementById("pin-matched").style.display = 'block'; 
}
 else 
{ document.getElementById("worng-pin").style.display = 'block'; } 
})
