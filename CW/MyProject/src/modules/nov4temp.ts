console.log("===== ESFEATURES PRACTICE WITH TRY/CATCH =====");

// VAR vs LET in Closures
try {
    console.log("\n--- VAR vs LET in loops (closures) ---");

    let vals: (() => number)[] = [];
    for (let xVar = 0; xVar < 4; xVar++) vals.push(() => xVar); // renamed x → xVar
    console.log("Using var-like loop (renamed variable):", vals.map(fn => fn())); // 0,1,2,3

    let vals1: (() => number)[] = [];
    for (let x = 0; x < 4; x++) vals1.push(() => x);
    console.log("Using let:", vals1.map(fn => fn())); // 0,1,2,3
} catch (err) {
    console.error("Error in var/let block:", err);
}

// Symbols & Symbol.toPrimitive
try {
    console.log("\n--- Symbols ---");
    let s1: symbol = Symbol("test");
    let s2: symbol = Symbol("test");
    console.log("Symbols equal?", s1 === s2);

    const js_obj: { name: string; salary: number; [key: symbol]: (hint: string) => any } = {
        name: "Sriram",
        salary: 600,
        [Symbol.toPrimitive](hint: string) {
            if (hint === "string") return "Hint: Guess 50+";
            if (hint === "number") return this.salary;
            return JSON.stringify(this);
        }
    };
    console.log(js_obj);
    console.log("String conversion:", String(js_obj));
} catch (err) {
    console.error("Error in symbol block:", err);
}

// Destructuring examples
console.log("\n--- Destructuring ---");

// Object destructuring: renamed `name` to avoid conflict with global `name`
const person = { name: "Alice", age: 30, country: "India" };
const { name: personName, age, country } = person;
console.log(personName, age, country);

// Array destructuring
const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(first, second, third);

// Nested destructuring: annotate type to satisfy TypeScript
const nestedArr: (number | number[])[] = [1, [2, 3], 4];
const [one, inner, four] = nestedArr;
const [two, three] = inner as number[];
console.log(one, two, three, four);

// Destructuring with rest
const [head, ...tail] = [100, 200, 300, 400];
console.log(head, tail);

// Destructuring with default values: renamed x to avoid duplicate identifier
const { x: xVal = 0, y = 0, z = 0 } = { x: 5 };
console.log(xVal, y, z);
