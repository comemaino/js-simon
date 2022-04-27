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
const countContainer = document.getElementById("countdown");
console.log(countContainer);
let count = parseInt(countContainer.textContent);

const timer = setInterval(function () {
  count--;
  // console.log(count);
  countContainer.innerHTML = count;
  if (count === 0) {
    clearInterval(timer);
    countContainer.innerHTML = "Tempo scaduto";
    rndNumbers.classList.add("hidden");
  } else {
    countContainer.innerHTML = count;
  }
}, 1000);
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
setTimeout(numberPrompts, count * 1000 + 100);

//chiedere all'utente 5 numeri attraverso altrettanti prompt
function numberPrompts() {
  let userNumbers = [];
  if (userNumbers.length < 5) {
    const userNumber = parseInt(prompt("dimmi un numero che ricordi"));
    userNumbers.push(userNumber);
  }
  console.log(userNumbers);
} else {
  checkResult(rndNumbers, userNumbers)
}

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
function checkResult() {
  //prelevare userNumbers e rndNumbers
  //creare array con match
  //stampare quanti e quali numeri matchano
}