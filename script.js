function roll() {
    let randomNum1 = Math.floor((Math.random() * 6) + 1);
    let randomDice1 = "images/dice" + randomNum1 + ".png";
    console.log(randomDice1);
    document.getElementById("img1").setAttribute("src", randomDice1);

    let randomNum2 = Math.floor((Math.random() * 6) + 1);
    let randomDice2 = "images/dice" + randomNum2 + ".png";
    console.log(randomDice2);
    document.getElementById("img2").setAttribute("src", randomDice2);

    if (randomNum1 > randomNum2) {
        document.querySelectorAll("h1")[1].textContent = "Player 1 wins 🏆";
    } 
    else if (randomNum1 < randomNum2) {
        document.querySelectorAll("h1")[1].textContent = "Player 2 wins 🏆";
    } else {
        document.querySelectorAll("h1")[1].textContent = "🏆Draw🏆";
    }
}
