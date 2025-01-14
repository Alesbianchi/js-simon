// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// BONUS:
// Inseriamo la validazione: se l’utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.


// richiamo gli input e i bottoni
const numberList = document.querySelector('.btn-primary');

// Selezione del form per le risposte
const inputUser = document.querySelectorAll('.form-control');
const answersForm = document.querySelector(' #answers-form');
console.log(inputUser);
console.log(answersForm);
console.log(numberList);


// richiamo gli output in cui dovrà apparire il testo
const output = document.getElementById('numbers-list');
const message = document.getElementById('message'); 

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

// Variabile per memorizzare i numeri generati
let generatedNumbers = [];

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
        // Memorizza i numeri generati
        generatedNumbers = generateRandomNumbers(5, 1, 100); 
        
        // Aggiungo i numeri casuali all'output
        output.innerHTML = ''; 
        generatedNumbers.forEach(number => {
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



// gestione bottone di verifica dei numeri
function checkAnswers() {
    let correctCount = 0;
    let incorrectNumbers = [];

    // Otteniamo i numeri inseriti dall'utente
    const userNumbers = Array.from(inputUser)
        .map(input => parseInt(input.value, 10))  
        .filter(num => !isNaN(num)); 

    // Verifica se i numeri inseriti sono tra quelli generati
    userNumbers.forEach((number) => {
        if (generatedNumbers.includes(number)) {
            correctCount++;
        } else {
            incorrectNumbers.push(number);
        }
    });

    // Mostriamo il messaggio di risposta
    if (correctCount === 5) {
        message.textContent = `Complimenti! Hai indovinato tutti i numeri!`;
        message.style.color = 'green';  
    } else {
        message.textContent = `Hai indovinato ${correctCount} su 5. Numeri errati: ${incorrectNumbers.join(', ')}`;
        message.style.color = 'red';  
    }
}

// Aggiungiamo l'evento per il bottone di verifica
numberList.addEventListener('click', function(event) {
    event.preventDefault();  
    checkAnswers();  
});






