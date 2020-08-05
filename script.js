
// Pin generate number between 1000 and 9000
document.getElementById('random-generator')
.addEventListener("click", function(){
    var fourDigitNumber = Math.floor(1000+ Math.random() * 9000);

document.getElementById('displayNumber').value = fourDigitNumber;

});

// notify section

const submitBtn = document.getElementById("submit");
submit.addEventListener("click", function(){ 
    const generatePin = document.getElementById("pin-matched").value; 
    const inputPin = document.getElementById("worng-pin").value;
    if (generatePin == inputPin) { 
      const inputPin = getElementById("pin-matched");
            inputPin.style.display = "block";
}   else { 
    const wrongPin = getElementById("worng-pin");
            wrongPin.style.display = "block";
} 
});