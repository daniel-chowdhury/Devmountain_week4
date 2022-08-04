// Write your code below this line

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function decoder(input_string) {
    let input_array = input_string.split('')
    let shift = splitter(input_array)
    let array_to_decode = splitter2(input_array)
    let decoded_array = array_to_decode.map((value) => {
        for (let i = 0; i < alphabet.length; i++) {
            if (alphabet[i] === value) {
           return alphabet[(i + shift) % alphabet.length]
          }
        }
    })
    return decoded_array.join('')
}

function splitter(array_to_split) {
    let num = 0;
    for (let i = 0; i < array_to_split.length; i++) {
        if (isNaN(array_to_split[i])) {
            return Number(array_to_split.slice(0, i).join(''))
        }
    }
}

function splitter2(array_to_split) {
    let num = 0;
    for (let i = 0; i < array_to_split.length; i++) {
        if (isNaN(array_to_split[i])) {
            return array_to_split.slice(i, array_to_split.length)
        }
    }
}

console.log(decoder("2316fcjjm"))
