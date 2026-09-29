const variante = ["piatra", "hartia", "foarfeca"];

const imagini = {
    piatra: "img/rock.png",
    hartia: "img/paper.png",
    foarfeca: "img/scissors.png"
};

const gameScore = {
    player: 0,
    computer: 0,
    draws: 0,
    displayScore: function () {
        document.getElementById("scorCalculator").textContent = this.computer;
        document.getElementById("scorEgalitati").textContent = this.draws;
        document.getElementById("scorJucator").textContent = this.player;
    }
};

function stabilesteCastigator(alegereJucator, alegereCalculator) {
    if (alegereJucator === alegereCalculator) {
        gameScore.draws++;
        return "Egalitate!";
    } else if (
        (alegereJucator === "piatra" && alegereCalculator === "foarfeca") ||
        (alegereJucator === "foarfeca" && alegereCalculator === "hartia") ||
        (alegereJucator === "hartia" && alegereCalculator === "piatra")
    ) {
        gameScore.player++;
        return "Ai câștigat!";
    } else {
        gameScore.computer++;
        return "Calculatorul a câștigat!";
    }
}

function joacaRunda(alegereJucator) {
    const numarAleator = Math.floor(Math.random() * 3);
    const alegereCalculator = variante[numarAleator];

    const rezultat = stabilesteCastigator(alegereJucator, alegereCalculator);

    document.getElementById("textJucator").textContent = alegereJucator;
    document.getElementById("imgJucator").src = imagini[alegereJucator];
    document.getElementById("imgJucator").style.display = "inline";

    document.getElementById("textCalculator").textContent = alegereCalculator;
    document.getElementById("imgCalculator").src = imagini[alegereCalculator];
    document.getElementById("imgCalculator").style.display = "inline";

    document.getElementById("rezultat").textContent = rezultat;

    gameScore.displayScore();

    if (gameScore.player === 5) {
        document.getElementById("modalText").textContent = "Ai ajuns la 5 puncte! Ai câștigat jocul!";
        document.getElementById("modal").style.display = "flex";
    } else if (gameScore.computer === 5) {
        document.getElementById("modalText").textContent = "Calculatorul a ajuns la 5 puncte. Ai pierdut.";
        document.getElementById("modal").style.display = "flex";
    }
}

document.getElementById("btnPiatra").addEventListener("click", function () {
    joacaRunda("piatra");
});

document.getElementById("btnHartia").addEventListener("click", function () {
    joacaRunda("hartia");
});

document.getElementById("btnFoarfeca").addEventListener("click", function () {
    joacaRunda("foarfeca");
});

document.getElementById("btnModal").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";

    gameScore.player = 0;
    gameScore.computer = 0;
    gameScore.draws = 0;
    gameScore.displayScore();

    document.getElementById("imgJucator").style.display = "none";
    document.getElementById("imgCalculator").style.display = "none";
    document.getElementById("textJucator").textContent = "-";
    document.getElementById("textCalculator").textContent = "-";
    document.getElementById("rezultat").textContent = "Alege";
});