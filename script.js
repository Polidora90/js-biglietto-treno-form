/* 
Creiamo un finto biglietto del treno con:
Nome passeggero
Codice treno (numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato
Categoria selezionata dall'utente
Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.
*/

var myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    //recupero l'elemento a cui ho associato l'evento submit
    var form = event.currentTarget; //ovvero tutto il mio form

    //recuper la lista di elementi presenti nel form ed il loro valore
    var formElements = form.elements;
    //posso chiamare gli elementi con le [] sfruttando "l'array" creato da form.elements
    //oppure posso chiamare gli elementi per nome es: formElements.distanza
    var nome = formElements.name.value;
    var distanza = formElements.distanza.value;
    var age = formElements.age.value;

    var nomeViaggiatoreElement = document.getElementById("nomeViaggiatore");
    var offertaElement = document.getElementById("offerta")
    var numeroCarrozzaElement = document.getElementById("numeroCarrozza");
    var codiceTrenoElement = document.getElementById("codiceTreno");
    var prezzoBigliettoElement = document.getElementById("prezzoBiglietto")

    //inserisco il valore di name nel tag html (nomeViaggiatoreElement)
    nomeViaggiatoreElement.innerHTML = nome;
    offertaElement.innerHTML = age;
    numeroCarrozzaElement.innerHTML = generaNumeroCarrozza();
    codiceTrenoElement.innerHTML = generaCodiceTreno(90000, 100000);

    clearForm(document.getElementById("resetForm"));

    console.log(nome + distanza + age);

    var prezzoBiglietto = distanza * 0.21;

    if (age == "20%") {
        prezzoBiglietto = prezzoBiglietto * 0.8;
    }
    
    if (age == "40%") {
        prezzoBiglietto = prezzoBiglietto * 0.6;
    }
    
    var prezzoFinaleBiglietto = prezzoBiglietto.toFixed(2);

    prezzoBigliettoElement.innerHTML = prezzoFinaleBiglietto + " €"

    function generaNumeroCarrozza() {
        return Math.floor(Math.random() * 12) + 1;
    }

    function generaCodiceTreno(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function clearForm() {
        document.getElementById("myForm").reset();
    }
})


