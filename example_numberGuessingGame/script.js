let btn = document.getElementById('btn');
let output = document.getElementById('outputText');

let number = [Math.floor(Math.random() * 10)];

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;

    input == number ? output.innerHTML = `You guessed correctly! The number was ${ number }` : input < number ? output.innerHTML = `Too low. Try again.` : output.innerHTML = 'Too high. Try again.'

});