// Write your solution below:
function remove_duplicate(input_string) {
    let input_array = input_string.split('')
    let output_array = []
    output_array[0] = input_array[0]
    for (let i = 1; i < input_array.length; i++) {
        let match = false
        for (let j = 0; j < i; j++) {
            if (input_array[i] === input_array[j]) {
                match = true
                break
            }
        }
        if (match === false) {
            output_array.push(input_array[i])
        }
    }
    return output_array.join('')
}

console.log(remove_duplicate('helloworld'))
console.log(remove_duplicate('iwanttoclimbamountain'))


function remove_duplicate_alt(input_string) {
    let output_string = ""
    for (let i = 0; i < input_string.length; i++) {
        if (!output_string.includes(input_string[i])) {
            output_string += input_string[i]
        }
    }
    return output_string
}

console.log(remove_duplicate_alt('helloworld'))
console.log(remove_duplicate_alt('iwanttoclimbamountain'))
