function isPrime(num){
    if (num % 2 === 0) return false;

    for (let j = 3; j <= Math.sqrt(num); j += 2) {
         if (num % j === 0) 
            return false; 
    }
    return true;
}

function primeNumbers(){
    for (let j = 50; j <= 150; j++){
        if (isPrime(j))
        document.write(j + " es un número primo.<br>");
    }
}

window.onload = primeNumbers;
