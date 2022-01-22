function fits(x, y) {
    if (Number.isInteger(y / x)) {
      return true;
    }
    return  false;
  }
  
  console.log(fits(5, 10));
  // expected output: "Fits!"
  
  console.log(fits(5, 11));
  // expected output: "Does NOT fit!"