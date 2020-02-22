//----------------------------basic--------------------------------
var a;
console.log('a : ',a);  // undefined

console.log('b : ',b);  // undefined
var b;

// console.log('c : ',c);   // ReferenceError

let d;
console.log('d : ',d);  // undefined
    
// console.log('e : ',e);   // ReferenceError
let e;


//----------------------------undefiend--------------------------------
var input;
if(input === undefined) {
    console.log('input === undefined  true');
} else {
    console.log('input === undefined  false');  // print
}

if(input) {
    console.log('input  true');
} else {
    console.log('input  false');    // print
}

var a;
console.log(a+2);       // NaN
console.log(a+" is ?")  // undefined is ?
var a = null;           // null 은 숫자연산시 0으로 계싼
console.log(a+2);       // 2
console.log(a*32);      // 0
console.log(a+' is ?')  // null is ?


//----------------------------scope--------------------------------
if(1) {
    var letA = 10;
}
console.log(letA);      // 10
if(1){
    let letB = 10;
}
// console.log(letB);   // ReferenceError
console.clear();

//----------------------------hoisting--------------------------------
console.log(hA === undefined);  //true
var hA = 'Hello World!';

(function(){
    console.log(hA)
    var hA = 'Hello JS!'
})();

// 위와 똑같음
var hB;
console.log(hB === undefined);  //true
hB = 'Hello World!';

(function(){
    var hB;
    console.log(hB)
    hB = 'Hello JS!'
})();

// console.log(hC === undefined);  //Reference Error
let hC='Hello!';

foo1();
function foo1() {
    console.log('foo1');
}

// foo2();
var foo2 = function() { // hoisting 발생
    console.log('foo2')
}


const tNum = '20';
console.log(tNum + 30);
console.log(tNum - 10);
console.log(tNum * 10);
console.log(tNum / 3);
console.log(tNum % 3);
console.log(parseInt(tNum)+30);
console.log('10'+'10');
console.log((+'10')+(+'10'));



