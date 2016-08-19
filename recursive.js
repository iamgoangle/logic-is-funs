var factorial_t1 = function operation (n) {
    if (n <= 1) {
        return 1;
    }
    console.log(n);
    return n *= (operation(n - 1));
}

console.log(factorial_t1(5));

var factorial_t2 = function (n) {
    if (n <= 0) { return 1; }
    return n * factorial_t2( n-1 );
}

console.log(factorial_t2(5));
