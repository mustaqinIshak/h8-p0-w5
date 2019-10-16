function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var result = angka.toString()
    if(result.length === 1){
        return Number(result[0])
    } else {
        var hasil = 1
        for(let i = 0; i < result.length; i++){
            hasil *= result[i]
        }

        return kaliTerusRekursif(hasil)
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6