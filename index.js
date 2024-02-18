//Initialiser les couleurs Red, Green, et Blue
let redRandom = 127;
let greenRandom = 127;
let blueRandom = 127;

let vitesseCourante;

// Appeler la fonction changerVitesse lorsque le input type range de la vitesse est changer pour changer
//les couleur de l'arriere-plan aléatoirement a une vitesse donnée
//Chercher la valeur du input type range pour l’utiliser lors du setInterval
document
  .getElementById("range-vitesse")
  .addEventListener("change", function () {
    changerVitesse(this.value);
    document.getElementById("temps").innerHTML = this.value;
  });

document.getElementById("temps").innerHTML =
  document.getElementById("range-vitesse").value;

//Appel de fonction pour changer la couleur de fond, le label associé à sa couleur et chaque valeur RGB dans le titre.
changerBackgroundEtTitreEtLabel();

const btn = document.querySelector(".btn-hasard");
//const titre = document.querySelector(".titre");

const btnEffet = document.querySelector(".btn-effet");

let estClique = false;
let compte = 0;
let intervalID;

btnEffet.addEventListener("click", function () {
  if (!estClique) {
    estClique = true;

    //Changer la vitesse selon la valeur du input type range.
    changerVitesse(document.getElementById("range-vitesse").value);
  } else {
    clearInterval(intervalID);

    estClique = false;
    btnEffet.innerHTML = "Effet psychédélique";
    btnEffet.style.background = "dodgerblue";
    btnEffet.addEventListener("mouseover", function () {
      btnEffet.style.background = "rgb(20, 96, 171)";
    });
    btnEffet.addEventListener("mouseout", function () {
      btnEffet.style.background = "dodgerblue";
    });
    btnEffet.addEventListener("mousedown", function () {
      btnEffet.style.background = "rgb(23, 109, 195)";
    });
  }
});

btn.addEventListener("click", function () {
  redRandom = getRandomNumber();
  greenRandom = getRandomNumber();
  blueRandom = getRandomNumber();

  document.getElementById("range-red").value = redRandom;
  document.getElementById("range-green").value = greenRandom;
  document.getElementById("range-blue").value = blueRandom;

  changerBackgroundEtTitreEtLabel();
});

function changerRed(valeurRed) {
  redRandom = valeurRed;

  changerBackgroundEtTitreEtLabel();
}

function changerGreen(valeurGreen) {
  greenRandom = valeurGreen;

  changerBackgroundEtTitreEtLabel();
}

function changerBlue(valeurBlue) {
  blueRandom = valeurBlue;

  changerBackgroundEtTitreEtLabel();
}

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}

function changerBackgroundEtTitreEtLabel() {
  document.body.style.background = `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`;
  document.querySelector(".titre").innerHTML = `rgb(
    ${redRandom},
    ${greenRandom},
    ${blueRandom}
  )`;

  document.querySelector(
    ".red-label"
  ).style.background = `rgb(${redRandom}, ${0}, ${0})`;
  document.querySelector(
    ".green-label"
  ).style.background = `rgb(${0}, ${greenRandom}, ${0})`;
  document.querySelector(
    ".blue-label"
  ).style.background = `rgb(${0}, ${0}, ${blueRandom})`;
}

// Fonction changerVitesse()
function changerVitesse(valeur) {
  if (estClique) {
    if (intervalID) clearInterval(intervalID);
    intervalID = setInterval(function () {
      redRandom = getRandomNumber();
      greenRandom = getRandomNumber();
      blueRandom = getRandomNumber();

      document.getElementById("range-red").value = redRandom;
      document.getElementById("range-green").value = greenRandom;
      document.getElementById("range-blue").value = blueRandom;

      changerBackgroundEtTitreEtLabel();

      btnEffet.innerHTML = "Arrêter effet";
      btnEffet.style.background = "rgb(179, 59, 38)";
      btnEffet.addEventListener("mouseover", function () {
        btnEffet.style.background = "rgb(211, 70, 45)";
      });
      btnEffet.addEventListener("mouseout", function () {
        btnEffet.style.background = "rgb(179, 59, 38)";
      });
      btnEffet.addEventListener("mousedown", function () {
        btnEffet.style.background = "rgb(207, 69, 45)";
      });
    }, valeur);
  }
}

//localStorage
window.addEventListener("load", fonction_pour_load);
window.addEventListener("unload", fonction_pour_unload);

function fonction_pour_load() {
  if (localStorage.getItem("couleurKey")) {
    document.querySelector(".titre").innerHTML =
      localStorage.getItem("couleurKey");
    document.body.style.background = localStorage.getItem("couleurKey");
  }

  if (localStorage.getItem("redKey")) {
    document.getElementById("range-red").value = Number(
      localStorage.getItem("redKey")
    );
  }

  if (localStorage.getItem("greenKey")) {
    document.getElementById("range-green").value = Number(
      localStorage.getItem("greenKey")
    );
  }

  if (localStorage.getItem("blueKey")) {
    document.getElementById("range-blue").value = Number(
      localStorage.getItem("blueKey")
    );
  }

  if (localStorage.getItem("vitesseKey")) {
    document.getElementById("range-vitesse").value = Number(
      localStorage.getItem("vitesseKey")
    );
    document.getElementById("temps").innerHTML = Number(
      localStorage.getItem("vitesseKey")
    );
  }
}

function fonction_pour_unload() {
  localStorage.setItem(
    "couleurKey",
    `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`
  );

  localStorage.setItem("redKey", redRandom);
  localStorage.setItem("greenKey", greenRandom);
  localStorage.setItem("blueKey", blueRandom);
  localStorage.setItem(
    "vitesseKey",
    document.getElementById("range-vitesse").value
  );
}
