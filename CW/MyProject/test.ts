var t:number = 3;

let first: number = 123;          // integer
let second: number = 123.45;      // float / decimal
let hexNum: number = 0x1A;        // hexadecimal
let binaryNum: number = 0b1010;   // binary
let octalNum: number = 0o744;     // octal
//let bigNum: bigint = 9007199254740991n; // bigint
let sciNum: number = 1.23e4;      // scientific notation


var b:boolean=true;
var c:boolean=true;

console.log(typeof(b));
console.log(typeof(b));

//arrays

//let fruits: string[] = ["Apple","Orange",3]; //its an error
let fruits: string[] = ["Apple","Orange"];
//Typescript genrics
let fruits2: Array<string> = ["Apple","Orange","Banana"];

console.log(fruits);
console.log(fruits2);


//MULTI-ARRAY TYPE

let values:(string|number)[]=["Apple",2,"Orange",3,4];
//or
let values1 : Array<string|number> =["Apple",2,"Orange",3,4];
 
console.log("values:- "+values);
console.log("vallues1:- "+values1);

//TUPLES

var empId:number=1;
var empName:string="java";

//Tuple type  variable
var employee:[number, string] =[1,"STeve"];
var person:[number,string,boolean]=[1,"Steve",true]
console.log(employee);
console.log(person)
//array of tuple
// Tuple type: [string, number]
let students: [string, number][] = [
    ["Rahul", 21],
    ["Sita", 22],
    ["Arjun", 20]
];

console.log(students);

//numeric enum
enum PrintMedia {
    NewsPaper = "newspaper",
    Newsletter = "newsletter",
    Magazine = "magazine",
    Book = "book"
}

function getMedia(mediaName: string): PrintMedia {
    if (mediaName === "Forbes" || mediaName === "Outlook") {
        return PrintMedia.Magazine;
    } 
    else if (mediaName === "The Hindu" || mediaName === "Times") {
        return PrintMedia.NewsPaper;
    } 
    else {
        // ✅ Default fallback
        return PrintMedia.Book;
    }
}

let mediaType: PrintMedia = getMedia("Forbes");
console.log(mediaType);  // Output: magazine

// ✅ Use constant instead of function for computed enum
const discount = 10;

enum Pricing {
    Base = 100,
    Discount = discount,        // ✅ Computed from constant
    Final = Base - discount     // ✅ Expression using constant
}

console.log(Pricing.Base);     // 100
console.log(Pricing.Discount); // 10
console.log(Pricing.Final);    // 90

//heterogeneous enum
enum MixedValues {
    ID = 101,         // number
    Name = "SRIRAM"   // string
}

console.log(MixedValues.ID);   // 101
console.log(MixedValues.Name); // SRIRAM


//union
// union
function displayType(code: string | number) {
    if (typeof code === "number") {
        console.log("Code is a number:", code);
    } else {
        console.log("Code is a string:", code);
    }
}

displayType(101);      // Code is a number: 101
displayType("Hello");  // Code is a string: Hello


//Any

let something: any = "Hello World";
something=23;
something= true;

let arr:any[] = ["John",21,true];
arr.push("smith");
console.log(arr);

//void

function sayHi():  void{
    console.log("hi")
}

let speech: void = sayHi();
console.log(speech)


// never

function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

function keepProcessing(): never {
    while (true) {
        console.log("Processing..."); 
        // infinite loop → never returns
    }
}

//type inference 
// var a1="sriram"
// var b1=123;

// a1="sriram";
// b1=123;

// a1=b1;

//Works but bad practise
// var a1;
// var b1;

// a1="sriram";
// b1=123;

// a1=b1;

//Good practise specify type explicitly
// var a1:string;
// var b1:Number;

// a1="sriram";
// b1=123;

// a1=b1;

//union of arrays
var arru:number []= [2,3,null,0];

var brru: (number | string)[]=[2,3,"sriram",4];

// Type Assertion

let code: any = 123;

// Type assertion using angle brackets
let employeeCode = <number>code;
console.log("Employee Code:", employeeCode);

// Another example using 'as' syntax (recommended in TSX/React)
let employeeCode2 = code as number;
console.log("Employee Code 2:", employeeCode2);

// now we can use number methods safely
console.log(employeeCode.toFixed(2)); 


//functions in typescript

function sum(a,b){
    return a+b;
}

console.log(sum(3,5));
console.log(sum(3,"33"));


//Below function will return error because the types are given wrong for variable b
// function sum1(a,b:"number"){
//     return a+b;
// }

// console.log(sum1(3,5));
// console.log(sum1(3,"33"));

//function overloading

// Function overload signatures
function sum3(a: number, b: number): number;
function sum3(a: string, b: string): string;

// Function implementation
function sum3(a: any, b: any): any {
    return a + b;
}
// Usage
console.log(sum3(5, 10));     
console.log(sum3("Hello, ", "sriram")); 

//TYPESCRIPT REST PARAMETERS
function Greet(greeting: string, ...names:string[]){
    return greeting+" "+ names.join(",")+"!";
}

console.log(Greet("Hello","Steve","Bill"));
console.log(Greet("Hello"));

// Function overloads
function commonelements(a: number[], b: number[]): number[];
function commonelements(a: string[], b: string[]): string[];
function commonelements(a: number[][], b: number[][]): number[][];
