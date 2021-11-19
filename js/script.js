/**
 * Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
 * Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 * il prezzo del biglietto è definito in base ai km (0.21 € al km)
 * va applicato uno sconto del 20% per i minorenni
 * va applicato uno sconto del 40% per gli over 65.
 */

const prezzoKm = 0.21;
let prezzoBiglietto;

//età dell'utente
let etaUtente = parseInt(prompt('Inserisci età: '));
//console.log("Etò: " + etaUtente);

//inserisci numero di km 
let numeroKm = parseInt(prompt('Inserisci numero chilometri : '));
//console.log("Numero km: " + numeroKm);

//calcolo prezzo biglietto
if ((etaUtente > 17) && (etaUtente < 65)) {
    prezzoBiglietto = numeroKm * prezzoKm;
    //console.log("Prezzo biglietto: " + prezzoBiglietto.toFixed(2) + "€");
} else if (etaUtente < 18) {
    prezzoBiglietto = (numeroKm * prezzoKm) - (((numeroKm * prezzoKm) / 100) * 20);
    //console.log("Prezzo biglietto: " + prezzoBiglietto.toFixed(2) + "€");
} else {
    prezzoBiglietto = (numeroKm * prezzoKm) - (((numeroKm * prezzoKm) / 100) * 40);
    //console.log("Prezzo biglietto: " + prezzoBiglietto.toFixed(2) + "€");
}

//risultato in html
document.getElementById('costo_biglietto').innerHTML="Prezzo biglietto: " + prezzoBiglietto.toFixed(2) + "€";