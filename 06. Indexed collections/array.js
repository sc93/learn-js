// 배열 선언과 동시에 초기화
var arr1 = new Array('1','2','3','4');
var arr2 = Array('1','2','3','4');
var arr3 = ['1','2','3','4'];
console.log(arr1);
console.log(arr2);
console.log(arr3);
// 빈 배열 생성
var arr4 = new Array(4);
var arr5 = Array(4);
var arr6 = [];
arr6.length = 4;
console.log(arr4);
console.log(arr5);
console.log(arr6);
// 유사배열 생성
var obj1 = {};
console.log(obj1);
obj1.prop = ['1','2','3','4'];
var obj2 = { prop : ['1','2','3','4']};
console.log(obj1);
console.log(obj2);
// 배열 길이 변경할 때 
var arr7 = ['1','2','3','4'];
arr7.length = 3;
console.log(arr7);
arr7.length = 4;
console.log(arr7);  // 길이를 줄였다가 다시 복구하면 늘어난 인덱스의 값은 empty
// 반복문 
var arr8 = ['1','2',,'4'];
arr8.forEach(item => console.log(item));
if(arr8[2] === undefined) {
    console.log('arr8[2] is undefined')
}
arr8.forEach(item => console.log(item));
arr8[2] = undefined;
arr8.forEach(item => console.log(item));
// Array 관련 메소드
var arr9 = [1,2,3];
var arr10 = ['a','b','c'];
console.log(arr9.concat(arr10));
console.log(arr9.join('-'));
console.log('push()     return length : '+arr9.push(4) + ' / arr : ' + arr9.join('-'));                                 // arr의 값이 바뀜
console.log('pop()      return last   : '+arr9.pop() + ' / arr : ' + arr9.join('-'));                                   // arr의 값이 바뀜
console.log('shift()    return first  : '+arr9.shift() + ' / arr : ' + arr9.join('-'));                                 // arr의 값이 바뀜
console.log('unshift()  return length : '+arr9.unshift(arr10) + ' / arr : ' + arr9.join('-'));                          // arr의 값이 바뀜
console.log('unshift()  return length : '+arr9.unshift(arr10[0],arr10[1],arr10[2]) + ' / arr : ' + arr9.join('-'));     // arr의 값이 바뀜
console.log('slice()    return Array  : '+arr9.slice(0,3).join('-') + ' / arr : ' + arr9.join('-'));                    // arr의 값이 안바뀜                              // ['a', 'b', 'c']
console.log('splice()   return Array  : '+arr9.splice(2,2,1,2,3) + ' / arr : ' + arr9.join('-'));                       // arr의 값이 바뀜
console.log('reverse()  return Array  : '+arr9.reverse().join('-') + ' / arr : ' + arr9.join('-'))                      // arr의 값이 바뀜
console.log('sort()     return Array  : '+arr9.sort() + ' / arr : ' + arr9.join('-'));                                  // arr의 값이 바뀜
console.log('indexOf()  return Array  : '+arr9.indexOf('a') + ' / arr : ' + arr9.join('-'));                            // arr의 값이 안바뀜
console.log('lastIndexOf()  return Array  : '+arr9.lastIndexOf('a') + ' / arr : ' + arr9.join('-'));                    // arr의 값이 안바뀜
arr9.forEach(item => console.log(item));                                                                                // arr의 값이 안바뀜
console.log(arr9.map(item=> item*item));                                                                                // arr의 값이 안바뀜
console.log(arr9.filter(item=> !(item % 2)));                                                                           // arr의 값이 안바뀜
console.log(arr9.every(item => typeof item == 'number'));                                                               // arr의 값이 안바뀜
console.log(arr9.some(item => typeof item == 'number'));                                                                // arr의 값이 안바뀜
console.log(arr10.reduce((first, second) => first+second));                                                             // arr의 값이 안바뀜
console.log(arr10.reduceRight((first, second) => first+second));                                                        // arr의 값이 안바뀜
var doc = document.querySelectorAll('*');
console.log(doc);
Array.prototype.forEach.call(doc,function(node){
    console.log(node)
});

doc.forEach(node => console.log(node));