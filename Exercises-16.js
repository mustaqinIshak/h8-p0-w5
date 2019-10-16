function totalDigitRekursif(angka) {
    var result = angka.toString()
    if(result.length === 1){
        return parseInt(result[0])
    } else {
        return parseInt(result[0]) + totalDigitRekursif(result.slice(1))
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5