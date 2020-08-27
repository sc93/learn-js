var sayings = new Map();
sayings.set('dog','wal!');
sayings.set('cat','nya~');
sayings.set('cow','woo~');
console.log('snake saying   : ',sayings.get('snake'));
console.log('sayings length : ',sayings.size);
console.log('cat saying     : ',sayings.get('cat'));
console.log('fox has ?      : ',sayings.has('fox'));
console.log('dog delete     : ',sayings.delete('dog'));
console.log('bird delete     : ',sayings.delete('bird'));
for(var [key, value] of sayings) {
    console.log('kind : ', key,' saying : ',value);
}

for(var say of sayings) {
    console.log(say);           // 배열의 형태로 반환 [key, value]
}

var mySet = new Set();
mySet.add(1);
mySet.add('hello');
mySet.add('world');
mySet.add(2);
mySet.add(1);
console.log(mySet.size);
for(var item of mySet) console.log(item);
var arrSet = new Set([1,2,3,4,1,2,6,5,1].sort());
console.log(arrSet.size);
for(var item of arrSet) console.log(item);
var setArr = Array.from(arrSet);
console.log(setArr);

