// prendo bottone 
const bottoneInput = document.getElementById("submit-btn")
const outputDiv = document.getElementById("output")

// se viene cliccato allora parte la funzione
bottoneInput.addEventListener("click", function bottone() {
    // rendo le variabili piu capibili
    const kmInput = document.getElementById("km").value;
    const anniInput = document.getElementById("anni").value;
    // trasformo in numeri
    const km = parseInt(kmInput);
    const anni = parseInt(anniInput);
    let prezzoBiglietto = 0.21 * km;

    if (isNaN(anni) === true || isNaN(km) === true) {
        outputDiv.innerHTML = `
        <div class="row justify-content-center mt-4">inserisci dei valori validi!!</div>
        `
    }
    else

    // calcolo prezzo e sconti e poi ritorno in schermo la value 
    if (anni < 18) {

        let sconto = (prezzoBiglietto / 100) * 20
        prezzoBiglietto = prezzoBiglietto - sconto;
        console.log(prezzoBiglietto.toFixed(2));

        outputDiv.innerHTML = `
         <div class="row justify-content-center mt-4">Prezzo ${prezzoBiglietto.toFixed(2)}€</div>
        `

    }
    else if (anni >= 65) {

        let sconto = (prezzoBiglietto / 100) * 40;
        prezzoBiglietto = prezzoBiglietto - sconto;

        outputDiv.innerHTML = `
         <div class="row justify-content-center mt-4">Prezzo ${prezzoBiglietto.toFixed(2)}€</div>
        `

    }
    else {
        outputDiv.innerHTML = `
         <div class="row justify-content-center mt-4">Prezzo ${prezzoBiglietto.toFixed(2)}€</div>
        `
    }


})


