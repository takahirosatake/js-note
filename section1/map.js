//Mapオブジェクト
const map = new Map();

map.set('id', 3);
map.set('name', '本田');


console.log(map);

console.log(map.get('name'));

const valueList = map.values()

for( (index, value) of valueList.entries()){
  console.log(`${index} : ${value}`);
}




