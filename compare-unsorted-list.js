let numbers = [0, 4, 5, 0, 3, 1];

function cmpUnsort(a, fix) {
    let len = a.length;
    let sumA = 0;
    let sumB = 0;

    for(let i=0; i<len; i=i+fix) {
        let count = 0;
        sumB = 0;

        for(let j=i; count<fix; j++) {
            sumB += a[j];
            count++;
        }

        if(sumA === 0 && sumB > 0) {
            sumA = sumB;
        }

        if(sumA !== 0 && sumB !== 0 && sumA !== sumB) {
            return false;
        }
    }

    return true;
}

/**
 * [1, 4, 5, 0, 3, 2] = true
 * [1, 2, 5, 0, 3, 2] = false
 */
console.log(cmpUnsort(numbers, 2));
