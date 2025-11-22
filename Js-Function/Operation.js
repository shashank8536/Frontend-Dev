function applyOperation(numbers, operation) {
    let result = [];
    for (let num of numbers) {
    }
    return result;
}

// Step 2: Callback functions
function double(num) {
    return num * 2;
}

function square(num) {
    return num * 2;
}

let arr = [1, 2, 3, 4];

console.log("Doubled:", applyOperation(arr, double));
console.log("Squared:", applyOperation(arr, square));
