console.log("===== ESFEATURES PRACTICE WITH TRY/CATCH =====");


//  VAR vs LET in Closures

try {
    console.log("\n--- VAR vs LET in loops (closures) ---");

    let vals = [];
    for (var x = 0; x < 4; x++) vals.push(() => x);
    console.log("Using var:", vals.map(fn => fn())); // 4,4,4,4

    let vals1 = [];
    for (let x = 0; x < 4; x++) vals1.push(() => x);
    console.log("Using let:", vals1.map(fn => fn())); // 0,1,2,3
} catch (err) {
    console.error("Error in var/let block:", err);
}

//  CONST, Freeze & Mutability

try {
    console.log("\n--- const, Object.freeze ---");

    const obj = { par: 3 };
    obj.par = 12;  // allowed

    Object.freeze(obj);
    obj.par = 10; // no effect in strict mode

    function ParaFreeze(o) {
        Object.freeze(o);
        o.par = 10; // ignored
    }
    const inputobj = { par: 3 };
    ParaFreeze(inputobj);
    console.log("After freeze:", inputobj.par);
} catch (err) {
    console.error("Error in freeze block:", err);
}


// Shorthand Object Assignment

try {
    console.log("\n--- Shorthand Object Property ---");

    let a = 3, b = 5;
    let obj = { a, b };
    console.log(obj);
} catch (err) {
    console.error("Error in shorthand block:", err);
}


// Symbols & Symbol.toPrimitive

try {
    console.log("\n--- Symbols ---");
    let s1 = Symbol("test");
    let s2 = Symbol("test");
    console.log("Symbols equal?", s1 === s2);

    const js_obj = {
        name: "Sriram", salary: 600,
        [Symbol.toPrimitive](hint) {
            if (hint == "string") return "Hint: Guess 50+";
            if (hint == "number") return this.salary;
            return JSON.stringify(this);
        }
    };
    console.log(js_obj);
    console.log("String conversion:", String(js_obj));
} catch (err) {
    console.error("Error in symbol block:", err);
}


// Classes & Inheritance

try {
    console.log("\n--- Classes & Inheritance ---");

    class Character {
        constructor(name, power, side) {
            this.name = name;
            this.power = power;
            this.side = side;
        }
        toString() {
            return `${this.name} belongs to ${this.side} with power ${this.power}`;
        }
    }

    class Hero extends Character {
        constructor(n, p) { super(n, p, "Avengers"); }
    }

    class Villain extends Character {
        constructor(n, p) { super(n, p, "Villains"); }
    }

    console.log(new Hero("Iron Man", "Armor").toString());
    console.log(new Villain("Thanos", "Gauntlet").toString());
} catch (err) {
    console.error("Error in class block:", err);
}


// Iterators 

try {
    console.log("\n--- ITERATORS WITH var AND hasOwnProperty keyword---");

    // 0 1 2 is printed
    var arr = ['a', 'b', 'c'];
    for (var i in arr) {
        if (arr.hasOwnProperty(i)) {
            process.stdout.write(i + " "); // print in same line
        }
    }
    console.log("\n");
} catch (err) {
    console.error("Error in for...in loop:", err);
}

try {
    // a b c is printed
    console.log("\n--- ITERATORS WITH of AND without hasOwnProperty keyword---");
    var arr = ['a', 'b', 'c'];
    for (var i of arr) {
        process.stdout.write(i + " "); // print in same line
    }
    console.log("\n");
} catch (err) {
    console.error("Error in for...of loop:", err);
}

// iterators with try-catch

try {
    console.log("\n--- ITERATORS .values()---");

    let it = [1, 2, 3].values();

    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
} catch (err) {
    console.error("Error in iterator code:", err);
}

//gen() function
function gen(n = 20) {
    try {
        //checks only numbers allowed
        if (typeof n !== "number") {
            throw new Error("Invalid input: Only numbers are allowed.");
        }

        const obj = {
            [Symbol.iterator]() {
                let i = 0;
                return {
                    next() {
                        return {
                            done: i > n,
                            value: i++
                        };
                    }
                };
            }
        };

        process.stdout.write("Calling with number: ");
        for (let x of obj) {
            process.stdout.write(x + " ");
        }
        console.log();//inserts a newline

    } catch (err) {
        console.error("Calling with alphabet: Error:", err.message);
    }
}

//valid call
gen(5);

// invalid call
gen("a");

//newline
console.log();

//with async and await
const ratings = [5, 4, 5];
let sum = 0;

const asyncSumFunction = async (a, b) => a + b;

try {
    ratings.forEach(async (rating) => {
        sum = await asyncSumFunction(sum, rating);
    });

    console.log("sum is:- " + sum); // stays 0
} catch (err) {
    console.log("Error in async block:", err.message);
}

//without async and await
const ratings1 = [5, 4, 5];
let sum1 = 0;

const sumFunction1 = (a, b) => a + b;

try {
    ratings1.forEach((rating) => {
        sum1 = sumFunction1(sum1, rating);
    });

    console.log("sum is:- " + sum1); // 14
} catch (err) {
    console.log("Error in sync block:", err.message);
}

//log array elements
 
// log array elements with try-catch

const logArrayElements = (element, index, array) => {
    console.log("\n---LOGS ARRAY ELEMENTS---");
    try {
        console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
    } catch (err) {
        console.error("Error while logging array element:", err.message);
    }
};

const arrlog = [10, 20, 30];

try {
    arrlog.forEach(logArrayElements);
} catch (err) {
    console.error("Error in forEach execution:", err.message);
}

// ArrayFrom() with try-catch
try {
    console.log("\n---ARRAYFROM() METHOD IS USED---");
    const arrfrom = [1, 2, 3, 4];

    // duplicate the array
    const duplicate = Array.from(arrfrom);
    console.log("Original Array:", arrfrom);
    console.log("Duplicate Array:", duplicate);

} catch (err) {
    console.error("Error:", err.message);
}

//USAGE OF KEYS
try {
    // keys() example
    console.log("\n---KEYS METHOD OF JAVASCRIPT---");
    const keysIterator = ['a','b','c'].keys();
    
    process.stdout.write("Keys: ");
    for (let key of keysIterator) {
        process.stdout.write(key+" ");
    }
 
} catch (err) {
    console.error("Error in keys() section:", err.message);
}
console.log()

//USAGE OF MAPS
try {
    console.log("\n---MAPS IN JAVASCRIPT---");
    // Create a Map from characters by doubling each character as value
    let m = new Map(
        [...'abcd'].map(x => [x, x + x])
    );

    // Convert the Map to different JSON strings
    console.log("Full Map:", JSON.stringify([...m]));
    console.log("Keys:", JSON.stringify([...m.keys()]));
    console.log("Values:", JSON.stringify([...m.values()]));
    console.log("Entries:", JSON.stringify([...m.entries()]));

} catch (err) {
    console.error("Error:", err.message);
}

console.log()

//SETS IN JAVASCRIPT
try {
    console.log("\n---SETS IN JAVASCRIPT---");
    // Create a Set with initial values
    let set1 = new Set(['red', 'blue']);

    // Add a new value
    set1.add("yellow");
    console.log(set1);  // Set(3) { 'red', 'blue', 'yellow' }

    // Try adding a duplicate value
    set1.add("red");
    console.log(set1);  // Set still remains the same, no duplicates allowed

} catch (err) {
    console.error("Error in Set operation:", err.message);
}

//GENERATORS
// Generators in JavaScript are special functions that can be paused and resumed during execution.
// They allow you to generate values one at a time instead of computing them all at once.

// yield* (pronounced “yield star”) in JavaScript is used inside a generator to delegate (or pass control) to another generator or iterable.

console.log("\n---GENERATORS IN JAVASCRIPT---");

try {
    function* genFour() {
        yield 1;
        yield 2;
        yield 3;
        return 4;
    }

    let four = genFour();

    console.log(four.next()); // { value: 1, done: false }
    console.log(four.next()); // { value: 2, done: false }
    console.log(four.next()); // { value: 3, done: false }
    console.log(four.next()); // { value: 4, done: true }
    console.log(four.next()); // { value: undefined, done: true } -> no more values

} catch (err) {
    console.error("Error in generator execution:", err.message);
}

try {

    function* flatten(arr) {
        for (let x of arr) {
            if (x instanceof Array) {
                yield* flatten(x); // recursively yield values from inner arrays
            } else {
                yield x; // yield non-array values
            }
        }
    }

    let t = flatten([1, 2, [3, 4]]);
    console.log([...t]);  // Output: [1, 2, 3, 4]

} catch (err) {
    console.error("Error in flatten generator:", err.message);
}

console.log("\n---GENERATORS with yield* ---");

try {

    function* flatten(arr) {
        for (let x of arr) {
            if (x instanceof Array) {
                yield* flatten(x); // recursively yield values from inner arrays
            } else {
                yield x; // yield non-array values
            }
        }
    }

    let t = flatten([1, 2, [3, 4]]);
    console.log([...t]);  // Output: [1, 2, 3, 4]

} catch (err) {
    console.error("Error in flatten generator:", err.message);
}

console.log()

console.log("\n---DESTRUCTURING ---");

try {
    // Object destructuring example
    let ades = { xdes: 1, ydes: 2 };

    // Destructure and rename
    let { xdes: xdes, ydes: zdes } = ades;
    console.log("\n");
    console.log("Destructuring")
    console.log("x = " + xdes);  // x = 1
    console.log("z = " + zdes);  // z = 2

    // Another object
    let a1des = { x4des: 1, y4des: 2 };

    // Destructure only y from object `ades`
    let { ydes } = ades;

    console.log("y = " + ydes);  // y = 2
    console.log()
    // DESTRUCTURING PARAMETERS
    console.log("destructuring parameters")

    // Recursive reverse function
    const reverse = ([x, ...y]) =>
        (y.length > 0) ? [...reverse(y), x] : [x];

    // Testing the function
    console.log(reverse([1, 2, 3, 4, 5, 6])); // [6,5,4,3,2,1]
    console.log(reverse([1]));               // [1]
    console.log(reverse(["a", "b", "c"]));   // ["c","b","a"]

} catch (err) {
    console.error("Error in destructuring or reverse function:", err.message);
}
