function encode(string) {
    string = reverse(string)
    string = shift(string)
    return string
}

let alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let special = ["!", "@", "#", "$", "%", "^", "&", "*" ]

function reverse(string) {
    string = string.toLowerCase()
    let stringArr = []
    for (let i = string.length-1; i >= 0; i--) {
        stringArr.push(string[i])
    }
    return stringArr.join('')
}

function shift(string) {
    let stringArr = []
for (let i = 0; i < string.length; i++) {
if (string[i] !== " " && !special.includes(string[i])) {
   for (let j = 0; j < alph.length; j++) {
    if (string[i] === alph[j]) {
        stringArr.push(alph[(j + 2)%alph.length])
        console.log(stringArr)
        break
    }
   }
} else if (special.includes(string[i])) {
    stringArr.push(string[i])
} else {
    stringArr.push("8")
}
}
return stringArr.join('')
}


console.log(encode("I love cryptography!"))