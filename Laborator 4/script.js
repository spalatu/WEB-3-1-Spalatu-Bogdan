let legume = ["Morcov", "Ceapă", "Cartof", "Roșie", "Varză"];

console.log("Lista:", legume);
console.log("Prima legumă:", legume[0]);
console.log("Ultima legumă:", legume[legume.length - 1]);
console.log("Câte legume sunt:", legume.length);

let localitati = ["Ungheni", "Edineț", "Comrat"];

localitati.push("Strășeni");
localitati.unshift("Florești");
localitati.pop();
localitati.shift();

console.log("Lista finală de localități:", localitati);

let cumparaturi = ["Zahăr", "Făină", "Unt"];

function arataCumparaturi() {
  let containerLista = document.getElementById("listaCumparaturi");

  if (cumparaturi.length === 0) {
    containerLista.innerHTML = "Lista este goală!";
  } else {
    containerLista.innerHTML = cumparaturi.join(", ");
  }
}

function adaugaLaFinal() {
  let articol = document.getElementById("articol").value;
  if (articol !== "") {
    cumparaturi.push(articol);
    document.getElementById("articol").value = "";
    arataCumparaturi();
  }
}

function adaugaLaStart() {
  let articol = document.getElementById("articol").value;
  if (articol !== "") {
    cumparaturi.unshift(articol);
    document.getElementById("articol").value = "";
    arataCumparaturi();
  }
}

function eliminaPrimul() {
  cumparaturi.shift();
  arataCumparaturi();
}

function eliminaUltimul() {
  cumparaturi.pop();
  arataCumparaturi();
}

let grupa = [
  { numeComplet: "Lungu Victor", anii: 16, mediaFinala: 7 },
  { numeComplet: "Ababii Elena", anii: 19, mediaFinala: 9 },
  { numeComplet: "Guzun Andrei", anii: 17, mediaFinala: 6 }
];

function arataGrupa() {
  let tabel = document.getElementById("tabelGrupa");
  tabel.innerHTML = "";

  grupa.forEach(function (student, pozitie) {
    tabel.innerHTML +=
      "<p>" + (pozitie + 1) + ". " + student.numeComplet + "<br>" +
      "Ani: " + student.anii + "<br>" +
      "Media: " + student.mediaFinala + "</p>";
  });

  document.getElementById("totalStudenti").innerHTML =
    "Număr de studenți: " + grupa.length;
}

function adaugaStudent() {
  let numeNou = document.getElementById("inputNume").value;
  let anNou = document.getElementById("inputAn").value;
  let mediaNoua = document.getElementById("inputMedia").value;

  if (numeNou.trim() === "" || anNou.trim() === "" || mediaNoua.trim() === "") {
    alert("Nu ați introdus toate datele, studentul nu poate fi adăugat.");
    return;
  }

  let studentNou = {
    numeComplet: numeNou,
    anii: Number(anNou),
    mediaFinala: Number(mediaNoua),
  };

  grupa.push(studentNou);

  document.getElementById("inputNume").value = "";
  document.getElementById("inputAn").value = "";
  document.getElementById("inputMedia").value = "";

  arataGrupa();
}

function excludeStudent() {
  let numeDeExclus = document.getElementById("inputExclude").value;

  let student = grupa.find(function (s) {
    return s.numeComplet === numeDeExclus;
  });

  if (student !== undefined) {
    let pozitie = grupa.indexOf(student);
    grupa.splice(pozitie, 1);
  }

  document.getElementById("inputExclude").value = "";
  arataGrupa();
}

function gasesteStudent() {
  let numeCautat = document.getElementById("inputCauta").value;
  let rezultat = document.getElementById("rezultatGasit");

  let student = grupa.find(function (s) {
    return s.numeComplet === numeCautat;
  });

  if (student !== undefined) {
    rezultat.innerHTML =
      "Student găsit!<br>" +
      "Nume: " + student.numeComplet + "<br>" +
      "Ani: " + student.anii + "<br>" +
      "Media: " + student.mediaFinala;
  } else {
    rezultat.innerHTML = "Studentul nu a fost găsit!";
  }
}

arataCumparaturi();
arataGrupa();