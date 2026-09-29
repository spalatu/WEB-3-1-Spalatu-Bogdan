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
    displayScore: function() {
        document.getElementById("scorCalculator").textContent = this.computer;
        document.getElementById("scorEgalitati").textContent = this.draws;
        document.getElementById("scorJucator").textContent = this.player;
    }
};

// 1. Funcția care compară alegerile și stabilește câștigătorul rundei
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

// 2. Funcția principală care gestionează o rundă
function joacaRunda(alegereJucator) {
    // Calculatorul alege un număr aleatoriu între 0 și 2
    const numarAleator = Math.floor(Math.random() * 3);
    const alegereCalculator = variante[numarAleator];

    // Aflăm rezultatul rundei
    const rezultat = stabilesteCastigator(alegereJucator, alegereCalculator);

    // Afișăm pe ecran alegerile (imagini și texte)
    document.getElementById("textJucator").textContent = alegereJucator;
    document.getElementById("imgJucator").src = imagini[alegereJucator];
    document.getElementById("imgJucator").style.display = "inline";

    document.getElementById("textCalculator").textContent = alegereCalculator;
    document.getElementById("imgCalculator").src = imagini[alegereCalculator];
    document.getElementById("imgCalculator").style.display = "inline";

    // Afișăm textul cu rezultatul
    document.getElementById("rezultat").textContent = rezultat;

    // Actualizăm scorul (folosind metoda obiectului)
    gameScore.displayScore();

    // Verificăm dacă cineva a câștigat 5 runde
    if (gameScore.player === 5) {
        document.getElementById("modalText").textContent = "Ai ajuns la 5 puncte! Ai câștigat jocul!";
        document.getElementById("modal").style.display = "flex";
    } else if (gameScore.computer === 5) {
        document.getElementById("modalText").textContent = "Calculatorul a ajuns la 5 puncte. Ai pierdut.";
        document.getElementById("modal").style.display = "flex";
    }
}

// 3. Conectăm butoanele la funcția principală
document.getElementById("btnPiatra").addEventListener("click", function () {
    joacaRunda("piatra");
});

document.getElementById("btnHartia").addEventListener("click", function () {
    joacaRunda("hartia");
});

document.getElementById("btnFoarfeca").addEventListener("click", function () {
    joacaRunda("foarfeca");
});

// 4. Resetarea jocului când se apasă OK în fereastra modală
document.getElementById("btnModal").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
    
    gameScore.player = 0;
    gameScore.computer = 0;
    gameScore.draws = 0;
    gameScore.displayScore();
    
    // Ascundem imaginile pentru noul joc
    document.getElementById("imgJucator").style.display = "none";
    document.getElementById("imgCalculator").style.display = "none";
    document.getElementById("textJucator").textContent = "-";
    document.getElementById("textCalculator").textContent = "-";
    document.getElementById("rezultat").textContent = "Alege";
});