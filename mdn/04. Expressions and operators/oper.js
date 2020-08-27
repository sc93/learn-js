// undefined , null , 0 , ""  -> false



var a = 1;
var b;

console.log(a&b);
console.log(a|b);

a = 1;
b = null;

console.log(a&b);
console.log(a|b);

a = 1;
b = 0;

console.log(a&b);
console.log(a|b);

a = 1;
b = "";

console.log(a&b);
console.log(a|b);

a = 1;
b = "abcdef";

console.log(a&b);
console.log(a|b);

a = "abcdef";
b = "abcdef";

console.log(a&b);
console.log(a|b);

console.clear();

var arr = [1,2,3,4]
var person = { a:'AAAA!',b:'BBBB!' };


var [one,two,three,four] = arr;
var {a,b} = person;

console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(a);
console.log(b);
function Person() {
    var a = 10;
}
var newPerson = new Person();
console.log(typeof new Function(10+20));
console.log(typeof person);
console.log(typeof Person)
console.log(typeof newPerson);

console.log(new Function(10+20));
console.log(typeof new Person());
console.clear();
function thisShow() {
    function a(){
        console.log(this);
    }
    var b = ()=>console.log(this);
    a();
    b();
}
thisShow();
new thisShow();