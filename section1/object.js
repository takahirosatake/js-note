//const test = new Object();

const test = {
  test1: 10,
  test2: 20,
  test3: 30
}

console.log(Object.values(test));

for( value of Object.values(test)){
  console.log(value);
}

//ユーザ定義関数

// const postalCode = '123-4567';

// function checkPostalCode(string){
//   const replaced = string.replace('-','');

//   const length = replaced.length;

//   if(length === 7) {
//     return true;
//   } 
//   return false; 
// }

// console.log(checkPostalCode(postalCode));

//上のobjectにメソッドを組み込む
const postal = {
  postalCode:'123-4567',

  checkPostalCode(){
    const replaced = this.postalCode.replace('-','').length;
  // const length = replaced.length;

  if(replaced === 7) {
    return true;
  } 
  return false; 
  }
};

console.log(postal.checkPostalCode());



