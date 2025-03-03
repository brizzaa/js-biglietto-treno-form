// prendo bottone 
const bottoneInput = document.getElementById("submit-btn")
const outputDiv = document.getElementById("output")

// se viene cliccato allora parte la funzione
bottoneInput.addEventListener("click",function bottone(){
    // rendo le variabili piu capibili
    const kmInput = document.getElementById("km").value;
    const anniInput = document.getElementById("anni").value;
    // trasformo in numeri
    let km = parseInt(kmInput);
    let anni = parseInt(anniInput);
    // calcolo prezzo e sconti e poi ritorno in schermo la value 
    let prezzoBiglietto = 0.21 * km;
    if (anni < 18){
        let sconto = (prezzoBiglietto / 100) * 20
        prezzoBiglietto = prezzoBiglietto - sconto;
        console.log(prezzoBiglietto.toFixed(2));
        outputDiv.innerHTML = `
         <div class="row justify-content-center mt-4">Prezzo ${prezzoBiglietto.toFixed(2)}€</div>
        `
        
    }
    else if (anni >= 65){
        let sconto = (prezzoBiglietto / 100) * 40;
        prezzoBiglietto = prezzoBiglietto - sconto;
        console.log(prezzoBiglietto.toFixed(2));
        
    }
    else{
        
        console.log(prezzoBiglietto.toFixed(2))
    }
})