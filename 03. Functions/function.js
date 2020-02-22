console.log(square1(10));       // 정상
// console.log(square2(10));    // 함수가 아님 not a function
// 함수 선언
function square1(num) {
    return num * num;
}

var square2 = function(num) {
    return num * num;
}

var x = square1(4);
var y = square2(4);

var map11 = function(f,a) {
    var result = [],
        i;
    for(i = 0; i<a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}
var func = function(num) {
    return num * num * num;
}
var arr = [1,2,3,4,5];
// console.log(map11(func,arr));

function factorial(n) {
    if(n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
console.log(factorial(5));

var foo = function boo() {
    console.log(boo);
    console.log(foo);
    console.log(arguments.callee);
}

foo();
console.clear();
function addNum(a=0,b=0){
    return a+b;
}
console.log(addNum(10));
console.log(addNum(10,20));
console.log(addNum());

function multiply(m, ... args) {
    return args.map(x=>x*m);
}
console.log(multiply(2,2,4,6,8,10));

var arr = ['aaaa','bbbbbb','cccccccc','dddddddddddd'];

console.log(arr.map(x=>x.length));

function map(arrs,f) {
    var temp_arrs= [];
    arrs.forEach(arr=> temp_arrs.push(f(arr)));
    return temp_arrs;
}

console.log(map(arr,function(x){return x.length}));


console.clear();

function Person() {
    // The Person() constructor defines `this` as itself.
    this.age = 0;
    // var self = this; .. es6 이전 this 바인딩
    // setInterval(function growUp() {
    //   // In nonstrict mode, the growUp() function defines `this` 
    //   // as the global object, which is different from the `this`
    //   // defined by the Person() constructor.
    //   this.age++;
    //   console.log(this.age);
    // }, 1000);

    // setInterval(()=>{
    //     this.age++;
    //     console.log(this.age);
    // },1000);

    setTimeout(function gw(){
        console.log(this)
    },1000)

    setTimeout(()=>{
        console.log(this)
    },1000)
  }
  
  var p = new Person();