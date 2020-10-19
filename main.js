// Creare un array contenente dei cognomi in ordine casuale.
// Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
// Stampare la lista dei cognomi in ordine alfabetico e comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato).

// ***Creare un array contenente dei cognomi in ordine casuale.
var surnames = ['Rossi', 'Ferrari', 'Rizzo', 'Bianco', 'Longo', 'Galli', 'Conti'];
console.log(surnames);

// ***Chiedere all'utente il suo cognome
var userSurname = prompt('Inserisci il tuo cognome');
// console.log(userSurname);

// ***Fare in modo che il cognome venga sempre restituito con l'iniziale maiuscola
var uppercase = userSurname[0].toUpperCase();
// console.log(uppercase);
var lowercase = userSurname.substring(1);
// console.log(lowercase);
var correctSurname = uppercase + lowercase;
// console.log(correctSurname);

// ***Inserire il cognome dell'utente nella lista dei cognomi
surnames.push(correctSurname);
console.log(surnames);

// ***Stampare la lista dei cognomi in ordine alfabetico
surnames.sort();
console.log(surnames);

// ***Stampare la posizione in cui si trova il cognome dell'utente (dopo averlo riordinato).
var position = surnames.indexOf(correctSurname);
console.log(position);
