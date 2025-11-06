var t = 3;
var first = 123; // integer
var second = 123.45; // float / decimal
var hexNum = 0x1A; // hexadecimal
var binaryNum = 10; // binary
var octalNum = 484; // octal
//let bigNum: bigint = 9007199254740991n; // bigint
var sciNum = 1.23e4; // scientific notation
var b = true;
var c = true;
console.log(typeof (b));
console.log(typeof (b));
//arrays
//let fruits: string[] = ["Apple","Orange",3]; //its an error
var fruits = ["Apple", "Orange"];
//Typescript genrics
var fruits2 = ["Apple", "Orange", "Banana"];
console.log(fruits);
console.log(fruits2);
//MULTI-ARRAY TYPE
var values = ["Apple", 2, "Orange", 3, 4];
//or
var values1 = ["Apple", 2, "Orange", 3, 4];
console.log("values:- " + values);
console.log("vallues1:- " + values1);
//TUPLES
var empId = 1;
var empName = "java";
//Tuple type  variable
var employee = [1, "STeve"];
var person = [1, "Steve", true];
console.log(employee);
console.log(person);
//array of tuple
// Tuple type: [string, number]
var students = [
    ["Rahul", 21],
    ["Sita", 22],
    ["Arjun", 20]
];
console.log(students);
//numeric enum
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["NewsPaper"] = "newspaper";
    PrintMedia["Newsletter"] = "newsletter";
    PrintMedia["Magazine"] = "magazine";
    PrintMedia["Book"] = "book";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
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
var mediaType = getMedia("Forbes");
console.log(mediaType); // Output: magazine
// ✅ Use constant instead of function for computed enum
var discount = 10;
var Pricing;
(function (Pricing) {
    Pricing[Pricing["Base"] = 100] = "Base";
    Pricing[Pricing["Discount"] = 10] = "Discount";
    Pricing[Pricing["Final"] = 90] = "Final"; // ✅ Expression using constant
})(Pricing || (Pricing = {}));
console.log(Pricing.Base); // 100
console.log(Pricing.Discount); // 10
console.log(Pricing.Final); // 90
//heterogeneous enum
var MixedValues;
(function (MixedValues) {
    MixedValues[MixedValues["ID"] = 101] = "ID";
    MixedValues["Name"] = "SRIRAM"; // string
})(MixedValues || (MixedValues = {}));
console.log(MixedValues.ID); // 101
console.log(MixedValues.Name); // SRIRAM
//union
// union
function displayType(code) {
    if (typeof code === "number") {
        console.log("Code is a number:", code);
    }
    else {
        console.log("Code is a string:", code);
    }
}
displayType(101); // Code is a number: 101
displayType("Hello"); // Code is a string: Hello
//Any
var something = "Hello World";
something = 23;
something = true;
var arr = ["John", 21, true];
arr.push("smith");
console.log(arr);
//void
function sayHi() {
    console.log("hi");
}
var speech = sayHi();
console.log(speech);
// never
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
function keepProcessing() {
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
var arru = [2, 3, null, 0];
var brru = [2, 3, "sriram", 4];
// Type Assertion
var code = 123;
// Type assertion using angle brackets
var employeeCode = code;
console.log("Employee Code:", employeeCode);
// Another example using 'as' syntax (recommended in TSX/React)
var employeeCode2 = code;
console.log("Employee Code 2:", employeeCode2);
// now we can use number methods safely
console.log(employeeCode.toFixed(2));
//functions in typescript
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));
console.log(sum(3, "33"));
// Function implementation
function sum3(a, b) {
    return a + b;
}
// Usage
console.log(sum3(5, 10));
console.log(sum3("Hello, ", "sriram"));
//TYPESCRIPT REST PARAMETERS
function Greet(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names.join(",") + "!";
}
console.log(Greet("Hello", "Steve", "Bill"));
console.log(Greet("Hello"));
// Function implementation
function commonelements(a, b) {
    if (typeof a[0] === "string") {
        // Handle string arrays (case-insensitive)
        var lowerB_1 = b.map(function (el) { return el.toLowerCase(); });
        return a.filter(function (el) { return lowerB_1.includes(el.toLowerCase()); });
    }
    else if (typeof a[0] === "number" || Array.isArray(a[0])) {
        // Handle number arrays or array of arrays
        return a.filter(function (el) { return b.some(function (be) {
            if (Array.isArray(el) && Array.isArray(be)) {
                return el.length === be.length && el.every(function (v, i) { return v === be[i]; });
            }
            return el === be;
        }); });
    }
    return [];
}
// Usage examples
console.log(commonelements([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(commonelements(["Hello", "world"], ["WORLD", "hi"])); // ["world"]
console.log(commonelements([[1, 2], [3, 4]], [[3, 4], [5, 6]])); // [[3,4]]
