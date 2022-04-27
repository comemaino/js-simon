// Visualizzare in pagina 5 numeri casuali.Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

//generare 5 numeri casuali
const rndArray = [];

while (rndArray.length < 5) {
  let rndNumber = Math.floor(Math.random() * 100) + 1;
  rndArray.push(rndNumber);
}
console.log(rndArray);

//stamparli in html
//chiamare l'elemento html
const rndNumbers = document.getElementById("rnd-numbers");
//popolarlo coi numeri generati
rndNumbers.innerHTML = `${rndArray}`;
//nascondere i numeri dopo 30 secondi

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//chiedere all'utente 5 numeri attraverso altrettanti prompt

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
