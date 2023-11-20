esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) in console.log()
BONUS
1 - Mostrare il risultato a video in html;
2 - Stilizzare con i css la pagina


<!--  -->
SOTTOPROBLEMI:
- Permettiamo all'utente l'inserimento della sua età;
- Permettiamo all'utente l'inserimento della distanza da percorrere in chilometri;
- Calcoliamo il prezzo del biglietto, tenendo conto che il prezzo per km percorso è di 0.21€/km; 
- Applico lo sconto in base all'età: se l'età del passeggero è minore di 18, sconto del 20%; se l'età del passeggero è over 65, sconto del 40%;
- Formatto con la funzione to Fixed il prezzo totale del biglietto con massimo 2 decimali;
- Stampo il prezzo finale in console;