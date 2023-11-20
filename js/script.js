// chiediamo all'utente di inserire l'età e la distanza da percorrere in chilometri
let eta = prompt("Inserisci l'età del passeggero:");
let distanza = prompt("Inserisci la distanza in chilometri che vuoi percorrere:");

// calcolo il prezzo del biglietto
let prezzo_per_km = 0.21;
let prezzo_totale = prezzo_per_km * distanza;

// applico gli sconti in base all'età del passeggero
if (eta < 18) {
    // sconto del 20% per i minorenni
    prezzo_totale *= 0.8;
    // sconto del 40% per gli over 65
} else if (eta >= 65) {
    prezzo_totale *= 0.6;
}

// formatto il prezzo con max due decimali 
prezzo_totale = prezzo_totale.toFixed(2);

// stampo il prezzo finale con eventuale sconto in console
console.log("Il prezzo del biglietto è di €" +  prezzo_totale)