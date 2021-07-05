// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

var numbers = [];

for (var i = 1; i <= 100; i++) {     // Conteggio da 1 a 100
    if (i % 3 == 0 && i % 5 == 0) {  // I numeri divisibili per 3 e 5 vengono sostituiti da 'FizzBuzz'
        numbers.push('FizzBuzz');
    } else if (i % 3 == 0) {         // I numeri divisibili per 3 vengono sostituiti da 'Fizz'
        numbers.push('Fizz');
    } else if (i % 5 == 0) {         // I numeri divisibili per 5 vengono sostituiti da 'Buzz'
        numbers.push('Buzz');
    } else {
        numbers.push(i);             // I numeri restanti verranno mostrati per come sono
    }

}
console.table(numbers);

