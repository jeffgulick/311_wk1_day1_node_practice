const isEven = (num) => {
  if(num % 1 == 0){
    return true;
  }
}

const sum = (arr) => {
  return arr.reduce((total, num) => total += num)
}

const comboSum = (arr, sum) => {
  
  for(let i = 0; i <arr.length; i++){
    for (let j = i+1; j <arr.length; j++){
      let tempSum = arr[i] + arr[j];
    
      if(tempSum == sum){
        return true;
      }
    }
  }
  return false;

}

module.exports = {
  isEven,
  sum,
  comboSum
}