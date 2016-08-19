function expo (n, p) {
    if (p < 1) {
        return 1;
    }
    console.log("p = " + p);
    console.log("n = " + n);
    console.log(expo(n, p-1));
    return (n * (expo(n, p-1)));
}

console.log(expo(2, 5));

// 2 * ( expo(2, 4) )
// 2 * ( 2 * ( expo(2, 3) ) 
// 2 * ( 2 * ( 2 * ( expo(2, 2) ) ) )
// 2 * ( 2 * ( 2 * ( 2 * (expo(2, 1)) ) ) )
// 2 * ( 2 * ( 2 * (2 * (2 * 1) ) ) )
// 32
