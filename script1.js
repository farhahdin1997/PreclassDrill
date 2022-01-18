function highNumber(){
    var arr = [1,4,7];
    var max = arr.reduce(function(a, b) {
        return Math.max(a, b);
    }, 0);
} 

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

console.log( getMaxOfArray([1,4,7]));
console.log( getMaxOfArray([8,5]));
console.log( getMaxOfArray([1,5,2,3,4]));