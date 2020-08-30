
const split = (str, delim) => {
  return str.split(delim);
}

const pairs = (str) => {

  let arrTemp = str.split('');
  let arrNew = [];

  for(let i = 0; i < arrTemp.length; i++){
    if(i % 2 == 0){
        let pair = arrTemp[i] + arrTemp[i+1];
        arrNew.push(pair);
    }
  }
  return arrNew;  
}

const reverse = (str) => {
  let temp = str.split('');
  temp = temp.reverse();
  let final = temp.join('');
  return final;
}

module.exports = {
  split,
  pairs,
  reverse
}