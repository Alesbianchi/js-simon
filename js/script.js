// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// BONUS:
// Inseriamo la validazione: se l’utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.


// richiamo gli input e i bottoni
const numberList = document.querySelector('btn-primary');

// Selezione del form per le risposte
const inputUser = document.querySelectorAll('.form-control');
const answersForm = document.querySelector(' #answers-form');
console.log(inputUser);
console.log(answersForm);
console.log(numberList);


// richiamo gli output in cui dovrà apparire il testo
const output = document.getElementById('numbers-list');

// il pc genera 5 numeri casuali da 1 a 100 non doppi
function generateRandomNumbers(count, min, max) {
    const numbers = [];
    
    while (numbers.length < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        
        // Aggiungi il numero solo se non è già presente nell'array
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    
    return numbers;
}

// gestione evento di start cronometro
// settiamo i secondi partenza
let seconds = 6;
const countDown = setInterval(function() {
    // decrementiamo i secondi
    seconds--;

    // visualizzare i secondi rimanenti nel coutdown
    document.getElementById('countdown').textContent = seconds;

    // se i secondi sono uguali a 0
    if (seconds === 5) { 
        const randomNumbers = generateRandomNumbers(5, 1, 100);
        
        // Aggiungo i numeri casuali all'output
        randomNumbers.forEach(number => {
            const listItem = document.createElement('li');
            listItem.textContent = number;
            output.appendChild(listItem);
        });
    }

    // Se i secondi sono uguali a 0
    if (seconds === 0) {
        // Fermiamo il cronometro
        clearInterval(countDown);
        
        // Nascondiamo i numeri
        output.innerHTML = '';
        
        // Mostriamo il form per le risposte
        answersForm.classList.remove('d-none');
    }
}, 1000);





// l'utente dovrà inserire i numeri che ha visto precedentemente

// gestione bottone di verifica dei numeri
// se coretti segnala in verde il numero corretto
// se altrimenti scrive alcuni numeri sbagliati segnala numero sbagliato
// altrimenti segnala in rosso il numero sbagliato






