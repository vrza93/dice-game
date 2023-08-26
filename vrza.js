const randomNumber1 = Math.ceil(Math.random() * 6);
const randomNumber2 = Math.ceil(Math.random() * 6);

document.querySelector(".img1").setAttribute("src", "/Dice Game/images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "/Dice Game/images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent="Player 1 WON !";
} else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent="Player 2 WON !"
} else {
    document.querySelector("h1").textContent="DRAW !"
}