let numbers = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];

function search(a, f) {
    const len = a.length;
    let front = 0;
    let back = len - 1;
    
    while (front <= back) {
        if (a[front] === f || a[back] === f) {
            console.log(`found a front = ${front} and back = ${back}`);
            return true
        }

        front++;
        back--;
    }

    return false;
}

console.log(search(numbers, 130));
