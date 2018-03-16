let number = [1, 2, 3];

/*
1 2 3
1 2 4
1 2 5
1 3 4
1 3 5
1 4 5
2 3 4
2 3 5
2 4 5
3 4 5
*/

function combination(n, fix) {
    let len = n.length;
    
    for(let i=0; i<len; i++) {
        let print = '';
        for(let j=i+1; j<len; j++) {
            for(let k=j+1; k<len; k++) {
                print = `${n[i]} ${n[j]} ${n[k]}`;
                console.log(print);
            }
        }
    }
}

combination(number, 3);

