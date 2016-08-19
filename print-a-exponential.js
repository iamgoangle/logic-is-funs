function powerN (n) {
    var _temp = [];

    if (n <= 0) {
        return 0;
    }

    for (var i = 0; i < n; i++) {
        _temp.push("A");
    }

    return _temp;
}

function powerNN (n) {
    var _temp = [];

    if (n <= 0){
        return 0;
    }

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            _temp.push("A");
        }

        if (i != (n-1)) {
            _temp.push(" ");
        }
    }

    return _temp;
}


console.log(powerN(10));
console.log(powerNN(2));
