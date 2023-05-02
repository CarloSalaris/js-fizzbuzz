

// CONSEGNA

//Scrivi un programma che stampi in console i numeri da 1 a 100
    //Per i multipli di 3 stampa “Fizz” al posto del numero
    //Per i multipli di 5 stampa “Buzz” al posto del numero
    //Per i numeri che sono sia multipli di 3 che di 5 stampa “FizzBuzz”
        //multipli di 3 e 5 sono multipli di 15

        // "N Multiplo di x:" = N % x === 0

// FOR LOOP (per ogni numero compreso tra 1 e 100)

    for (let i = 1; i <= 100; i++) {
        
        if (i % 15 === 0) { //CONTEMPORANEAMENTE multiplo 3 e 5 -->“FizzBuzz”
            console.log("FizzBuzz");
        }else if (i % 3 === 0) { //multiplo di 3 --> “Fizz”
            console.log("Fizz");            
        } else if (i % 5 === 0) { //multiplo di 5 --> “Buzz”
            console.log("Buzz");
        } else { //stampa il NUMERO
            console.log(i);
        }

    }
    