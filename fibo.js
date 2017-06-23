function fibo(num) {
	while (num > 0) {
  	if (num === 1) {
      return 1;
    }
    
    return fibo(num - 2) + fibo(num - 1);
  }
  
  return 0;
}

alert(fibo(5));
