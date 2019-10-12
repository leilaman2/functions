console.log(6 === 4 + 2)
console.log(6 === add(2, 4))

// const add = function( a,b){
//     return (a+b);
// }

add = (a, b) => {
    return (a + b);
}


function sub(a, b) {
    return (a - b);
}
console.log(sub(4, 2))

function multi(a, b) {
    return (a * b)
}
console.log(multi(4, 2))

function div(a, b) {
    return (a / b)
}
console.log(div(8, 2))

function pow(a, b) {

    return (a ** b)
}
console.log(pow(8, 2))

function assert(expected, actual, message) {
    if (expected === actual) {
        return true
    }
    else {
        return message
    }

}

console.log(assert(6, add(4, 2), "add happy path"))
console.log(assert(6, add(4, 4), "add unhappy path"))










