for(let i=0; i<=100; i++){
    let prime = true;
    for(let j=2; j<i; j++){
        if(i%j === 0){
            prime = false;
        }
    }

    if(!prime){
        console.log(i);
    }
}
