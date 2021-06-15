//Callback関数


const fruits = ['みかん','りんご']
fruits.foreach(function(input){
  console.log(input);
});

//アロー関数
const getITEM = () => {console.log('アロー関数')};

getITEM();


fruits.forEach(input => console.log(input));


//filter find map 
const scores = [10,20,30,40];

// const newScore = scores.filter((value) => {return value >= 30;
// });
const newScore = scores.filter((value) => value >= 30);

console.log(newScore)

//array find 
const members = ['本田','香川','長友']

const member = members.find((value) => value === '長友');
console.log(member);

//Array.map　配列を元に新しい配列を作る

const userList = [10,20,30,40];

const userIdList = userList.map((value) => `user_${value}`);
console.log(userIdList);
console.table(userIdList); //tableで表示させる

//
