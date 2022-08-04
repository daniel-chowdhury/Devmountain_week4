// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function balancedParens (string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "(" || string[i] === ")") {
            if (string[i] === ")") {
                return false
            } else {
                break
            }
        }
    }

    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "(") {
            count += 1
        } else if (string[i] === ")") {
            count -= 1
        }
    }
    return count === 0
}

console.log(balancedParens(sample1))
console.log(balancedParens(sample2))
console.log(balancedParens(sample3))
console.log(balancedParens(sample4))