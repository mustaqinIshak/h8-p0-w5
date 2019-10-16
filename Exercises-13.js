function sorting(arrNumber) {
    // code di sini
    if(arrNumber.length === 0){
        return arrNumber
    }
    var nilai = 0
    var object = {}
    for(let i = 0; i < arrNumber.length; i++){
        if(arrNumber[i] > nilai){
            nilai = arrNumber[i]
        }
    }
    object['array'] = arrNumber
    object['nilaiTerbesar'] = nilai
    return object
}

function getTotal(arrNumber) {
    // code di sini
    if(arrNumber.length === 0){
        return []
    }
    var result = 0
    for(let i = 0; i < arrNumber['array'].length; i++){
        if(arrNumber['array'][i] === arrNumber['nilaiTerbesar']){
            result += 1
        }
    }
    
    return "angka paling besar adalah " + arrNumber['nilaiTerbesar'] + " dan jumlah kemunculan sebanyak "+ result +" kali"
}
  
function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}
  
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''