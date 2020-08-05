
// Pin generate number between 1000 and 9000
document.getElementById('random-generator')
.addEventListener("click", function(){
    var fourDigitNumber = Math.floor(1000+ Math.random() * 9000);

document.getElementById('displayNumber').value = fourDigitNumber;
displayNumber();
});

// notify section
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click" , function(){ 
    const generatePin = document.getElementById("displayNumber").value; 
    const inputPin = document.getElementById("screenInput").value;

    if (displayNumber == screenInput) { 
        document.getElementById("pin-matched").style.display = "block"; 
        return pinMatched;
}   else { 
    document.getElementById("worng-pin").style.display = "block";
        return wrongPin; 
} 
});
