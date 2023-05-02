
/***************************
    CONSEGNA
****************************/

//Scrivi un programma che stampi in console i numeri da 1 a 100
    //Per i multipli di 3 stampa “Fizz” al posto del numero
    //Per i multipli di 5 stampa “Buzz” al posto del numero
    //Per i numeri che sono sia multipli di 3 che di 5 stampa “FizzBuzz”
        //multipli di 3 e 5 sono multipli di 15

        // "N Multiplo di x:" = N % x === 0

/* ************************************************** */       

//Selezione elemento genitore
const container = document.getElementById("container");

// Scrivere tutti i numeri compresi tra 1 e 100 (FOR LOOP) 
for (let i = 1; i <= 100; i++) {

    //creare elemento in HTML con ".append"
    const outputResult = document.createElement('div');
    outputResult.classList.add("result")
    
    let x = i; 

    //Condizioni per cui esca una stringa piuttosto che un numero    
    if (i % 15 === 0) { //CONTEMPORANEAMENTE multiplo 3 e 5 -->“FizzBuzz”
        x = "FizzBuzz";
        outputResult.classList.add("fizz_buzz")
        console.log("FizzBuzz");
    } else if (i % 3 === 0) { //multiplo di 3 --> “Fizz”
        x = "Fizz";
        outputResult.classList.add("fizz")
        console.log("Fizz");            
    } else if (i % 5 === 0) { //multiplo di 5 --> “Buzz”
        x = "Buzz";
        outputResult.classList.add("buzz")
        console.log("Buzz");
    } else { //stampa il NUMERO
        console.log(i);
    }

    outputResult.append(x)
    container.append(outputResult);

}
