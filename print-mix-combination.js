let listA = [1, 2, 3];
let listB = ['a', 'b', 'c'];
let listC = ['x', 'y'];

// output: 1ax 1ay 1bx 1by  2ax ....

function combination(listA, listB, listC) {
    let lenA = listA.length;
    let lenB = listB.length;
    let lenC = listC.length;

    for(let i=0; i<lenA; i++) {
        let print;
        for(let j=0; j<lenB; j++) {
            for(let k=0; k<lenC; k++) {
                print = `${listA[i]} ${listB[j]} ${listC[k]}`;
                console.log(print);
            }
        }
    }
}

combination(listA, listB, listC);
