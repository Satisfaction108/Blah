document.addEventListener("DOMContentLoaded", function () {
    const circle = document.getElementById("circle");
    const scoreDisplay = document.getElementById("score");
    let score = 0;

    function moveCircle() {
        const gameArea = document.getElementById("game-area");
        const maxX = gameArea.clientWidth - circle.clientWidth;
        const maxY = gameArea.clientHeight - circle.clientHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        circle.style.left = randomX + "px";
        circle.style.top = randomY + "px";
    }

    circle.addEventListener("click", function () {
        score++;
        scoreDisplay.textContent = score;
        moveCircle();
    });

    // Move the circle every second
    setInterval(moveCircle, 1000);
});
