const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];
let report = [];

for (let value of apiData) {
    
    // Conversions
    let num = Number(value);
    let bool = Boolean(value);
    let str = String(value);

    // Check if number is valid
    if (!isNaN(num) && value !== " " && value !== "" && value !== null) {
        validNumbers.push(num);
    } else {
        invalidNumbers.push(value);
    }

    // Save full report
    report.push({
        original: value,
        number: num,
        boolean: bool,
        string: str,
        isValidNumber: (!isNaN(num) && value !== " " && value !== "" && value !== null)
    });
}

// PRINT REPORT
console.log("---- Detailed Report ----");
for (let item of report) {
    console.log(`
Original: ${item.original}
Number: ${item.number}
Boolean: ${item.boolean}
String: "${item.string}"
Valid Number? → ${item.isValidNumber}
---------------------------`);
}

console.log("Valid Numbers:", validNumbers);
console.log("Invalid Numbers:", invalidNumbers);
