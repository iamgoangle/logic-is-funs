let setA = [1, 2]
let setB = ['A', 'B'];

// 1A 1B
// 2A 2B

let report = [];
function combination(a, b) {
    const len = a.length;

    for (let i=0; i<len; i++) {
        let result = a[i];
        let nextStr = b[len-1-i];

        report.push(result + b[i]);
        report.push(result + nextStr);
    }

    return report;
}

console.log(combination(setA, setB));
