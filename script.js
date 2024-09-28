let randomNumber = Math.floor(Math.random() * 15) + 1;
let attempt = 0;
function checkGuess(){
   let userGuess = +document.getElementById("number").value;
   let message = document.getElementById("message");
   attempt++;
if (isNaN(userGuess)) {
    message.textContent = `Please enter a valid number.`;
    message.style.color = "Red";
    return;
}

if (userGuess === randomNumber){
    message.textContent = `Congratulations! You guess the number ${userGuess} is correctly in ${attempt}`;
    message.style.color = "Green";
}
else if(userGuess > randomNumber){
    message.textContent = `Too High! Try Again.`
    message.style.color = "Blue"
    }
    else if(userGuess < randomNumber){
    message.textContent = `Too Low! Try Again.`
    message.style.color = "Red"
    }
    document.getElementById("attempt").textContent = `Attempt: ${attempt}`;
}


function tryAgain(){
    attempt = 0;
    document.getElementById("number").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempt").textContent = "Attempt : 0";
}