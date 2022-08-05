// Write your solution below:


function tshirtSorter(input_string) {
    array = input_string.split('')
    let s_array = []
    let m_array = []
    let l_array = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "s") {
            s_array.push("s")
        } else if (array[i] === "m") {
            m_array.push("m")
        } else {
            l_array.push("l")
        }
    }
    return [...s_array, ...m_array, ...l_array].join('')
}

console.log(tshirtSorter("lms"))
console.log(tshirtSorter('slsmmsllsmsmlmsls'))
