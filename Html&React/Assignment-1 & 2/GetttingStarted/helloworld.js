console.log("hello world");
let a = null;        // value is intentionally empty
let b;               // not assigned, so it's undefined
let c = undefined;   // explicitly undefined (rarely used like this)

console.log("a =", a);  // null
console.log("b =", b);  // undefined
console.log("c =", c);  // undefined

var a1 = [];
a1[0]=9;
console.log(a1[0]);

var a2 = [];
a2.push(9);
console.log(a2);

//use isNaN
var b1=[5,3,"sriram",2];
let sum=0;
for(var i=0; i<b1.length;i++){
    if(!isNaN(b1[i])) sum+=b1[i];
}
console.log('sum is '+sum);


//use arrays
var a3=[];
var b3=[3,4,5];
b3.length;

var c3=new Array();
var d3=new Array("Sriram");
var e3=new Array(6);
var f3=new Array(6.0);
console.log(a3.length);
console.log(b3.length);
console.log(c3.length);
console.log(d3.length);
console.log(e3.length);
console.log(f3.length);

try{

}
catch{

}