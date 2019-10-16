function changeVocals (str) {
    //code di sini
    // Ganti semua huruf vokal menggunakan function changeVocals 
    // dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu 
    // (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
    
  
    var vocalLower = 'aiueo'
    var changeVocalL = 'bjvfp'
  
    // if(str[i] === vocalLower[j]) result += changeVocal[j]
    var result = ''

    for(let i = 0; i < str.length; i++){
        var status = false
        for(let j =0; j < vocalLower.length; j++){
            if(str[i] === vocalLower[j] || str[i] === vocalLower[j].toUpperCase()){
                if(str[i] === str[i].toUpperCase()){
                    result += changeVocalL[j].toUpperCase()
                    status = true
                } else {
                    result += changeVocalL[j]
                    status = true
                }
            }
        }
        if( status === false) {
            result += str[i]
        }
    }
    return result
}


function reverseWord (str) {
    //code di sini
    var result = []
    for(let i = str.length - 1; i >= 0; i--){
        result.push(str[i])
    }
    return result
}

function setLowerUpperCase (str) {
    //code di sini
    var result = []
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            result.push(str[i].toLowerCase())
        } else if(str[i] === str[i].toLowerCase()) {
            result.push(str[i].toUpperCase())
        }
        
    }
    return result
}

function removeSpaces (str) {
    //code di sini
    var result = ""
    for(let i = 0; i < str.length; i++){
        if(str[i] !== " "){
            result += str[i]
        }
    }
    return result
}

function passwordGenerator (name) {
    //code di sini
    if(name.length <= 5){
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    }

    var gantiVokal = changeVocals(name)
    var balikkan = reverseWord(gantiVokal)
    var gantiBesarKecilHuruf =setLowerUpperCase(balikkan)
    var hilangkanSpace = removeSpaces(gantiBesarKecilHuruf)
    
    return hilangkanSpace

    // return gantiBesarKecilHuruf
}
  
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'