let strList = ['A','L', 'G', 'O', 'R', 'I', 'T', 'H', 'M']; // 9

function reverseDesc(a) {
    const len = a.length;
    const pivot = Math.floor(len) / 2;

    for (let i = 0; i < pivot; i++) {
        let temp = a[i];
        a[i] = a[len-1-i];
        a[len-1-i] = temp;
    }

    return a;
}

let strDesc = reverseDesc(strList);
console.log(strDesc)

function reverseAsc(a) {
    const len = a.length;
    const pivot = Math.floor(len/2);

    for (var i = 0; i < pivot; i++) {
        let temp = a[i];
        a[i] = a[len-1-i];
        a[len-1-i] = temp;
    }

    return a;
}

console.log(reverseAsc(strDesc));
