"use strict";
// esdemo.ts
// Exported functions for ES6 feature demos (with try-catch)
Object.defineProperty(exports, "__esModule", { value: true });
exports.varLetClosures = varLetClosures;
exports.constFreezeMutability = constFreezeMutability;
exports.shorthandObjectAssignment = shorthandObjectAssignment;
exports.symbolsDemo = symbolsDemo;
exports.classesInheritanceDemo = classesInheritanceDemo;
exports.iteratorsDemo = iteratorsDemo;
exports.generatorsDemo = generatorsDemo;
exports.destructuringDemo = destructuringDemo;
exports.arrowTimersDemo = arrowTimersDemo;
exports.objectsMapsSetsDemo = objectsMapsSetsDemo;
function varLetClosures() {
    try {
        console.log("\n--- VAR vs LET in loops (closures) ---");
        let vals = [];
        for (let xVar = 0; xVar < 4; xVar++)
            vals.push(() => xVar);
        console.log("Using var-like loop (renamed variable):", vals.map(fn => fn()));
        let vals1 = [];
        for (let x = 0; x < 4; x++)
            vals1.push(() => x);
        console.log("Using let:", vals1.map(fn => fn()));
    }
    catch (err) {
        console.error("Error in varLetClosures:", err);
    }
}
function constFreezeMutability() {
    try {
        console.log("\n--- const, Object.freeze ---");
        const obj = { par: 3 };
        obj.par = 12; // allowed
        Object.freeze(obj);
        // obj.par = 10; // removed to prevent TypeError
        function ParaFreeze(o) {
            Object.freeze(o);
        }
        const inputobj = { par: 3 };
        ParaFreeze(inputobj);
        console.log("After freeze:", inputobj.par);
    }
    catch (err) {
        console.error("Error in constFreezeMutability:", err);
    }
}
function shorthandObjectAssignment() {
    try {
        console.log("\n--- Shorthand Object Property ---");
        let a = 3, b = 5;
        let obj = { a, b };
        console.log(obj);
    }
    catch (err) {
        console.error("Error in shorthandObjectAssignment:", err);
    }
}
function symbolsDemo() {
    try {
        console.log("\n--- Symbols ---");
        let s1 = Symbol("test");
        let s2 = Symbol("test");
        console.log("Symbols equal?", s1 === s2);
        const js_obj = {
            name: "Sriram",
            salary: 600,
            [Symbol.toPrimitive](hint) {
                if (hint === "string")
                    return "Hint: Guess 50+";
                if (hint === "number")
                    return this.salary;
                return JSON.stringify(this);
            }
        };
        console.log(js_obj);
        console.log("String conversion:", String(js_obj));
    }
    catch (err) {
        console.error("Error in symbolsDemo:", err);
    }
}
function classesInheritanceDemo() {
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
            constructor(name, power) {
                super(name, power, "Avengers");
            }
        }
        class Villain extends Character {
            constructor(name, power) {
                super(name, power, "Villains");
            }
        }
        console.log(new Hero("Iron Man", "Armor").toString());
        console.log(new Villain("Thanos", "Gauntlet").toString());
    }
    catch (err) {
        console.error("Error in classesInheritanceDemo:", err);
    }
}
function iteratorsDemo() {
    try {
        console.log("\n--- Iterators ---");
        let it = [1, 2, 3].values();
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
        const iterableObj = {
            [Symbol.iterator]() {
                let i = 0;
                return {
                    next() {
                        return { done: i > 5, value: i++ };
                    }
                };
            }
        };
        for (let val of iterableObj)
            console.log("Iterator value:", val);
    }
    catch (err) {
        console.error("Error in iteratorsDemo:", err);
    }
}
function generatorsDemo() {
    try {
        console.log("\n--- Generators ---");
        function* flatten(arr) {
            for (let x of arr) {
                if (Array.isArray(x))
                    yield* flatten(x);
                else
                    yield x;
            }
        }
        console.log([...flatten([1, 2, [3, 4]])]);
        function* genFour() {
            yield 1;
            yield 2;
            yield 3;
            return 4;
        }
        const four = genFour();
        console.log(four.next());
        console.log(four.next());
        console.log(four.next());
        console.log(four.next());
        console.log(four.next());
    }
    catch (err) {
        console.error("Error in generatorsDemo:", err);
    }
}
function destructuringDemo() {
    try {
        console.log("\n--- Destructuring ---");
        const person = { name: "Alice", age: 30, country: "India" };
        const { name: personName, age, country } = person;
        console.log(personName, age, country);
        const numbers = [10, 20, 30];
        const [first, second, third] = numbers;
        console.log(first, second, third);
        const nestedArr = [1, [2, 3], 4];
        const [one, inner, four] = nestedArr;
        const [two, three] = inner;
        console.log(one, two, three, four);
        const [head, ...tail] = [100, 200, 300, 400];
        console.log(head, tail);
        const { x: xVal = 0, y = 0, z = 0 } = { x: 5 };
        console.log(xVal, y, z);
        const reverse = ([x, ...y]) => y.length > 0 ? [...reverse(y), x] : [x];
        console.log(reverse([1, 2, 3, 4, 5]));
        console.log(reverse(["a", "b", "c"]));
    }
    catch (err) {
        console.error("Error in destructuringDemo:", err);
    }
}
// Timers & Arrow Functions
function arrowTimersDemo() {
    try {
        console.log("***************************************************");
        console.log("Arrow Functions & Timers");
        class TimerV1 {
            start() {
                const self = this;
                setInterval(function () {
                    console.log("TimerV1 this:", self);
                }, 1000);
            }
        }
        class TimerV2 {
            start() {
                setInterval(function () {
                    console.log("TimerV2 this:", this);
                }.bind(this), 1000);
            }
        }
        class TimerV3 {
            start() {
                setInterval(() => {
                    console.log("TimerV3 this:", this);
                }, 1000);
            }
        }
        const inc = () => 7;
        console.log("Arrow fn ==> " + inc());
        // Example usage: create instances and start timers
        // Commented out if you don't want infinite intervals during tests
        // new TimerV1().start();
        // new TimerV2().start();
        // new TimerV3().start();
    }
    catch (err) {
        console.error("Error in arrowTimersDemo:", err);
    }
}
//Objects/Maps/Sets
function objectsMapsSetsDemo() {
    try {
        console.log("***************************************************");
        console.log("Objects, Maps & Sets");
        let objAssign = { a: 1 };
        Object.assign(objAssign, { b: 2 });
        console.log("Object.assign result:", objAssign);
        const map = new Map([
            [1, "first"],
            [{}, "second"]
        ]);
        map.set((x) => x + 1, "third").set({}, "fourth");
        const key = {};
        console.log("get Key:", map.get(key)); // undefined, because {} !== {}
        map.forEach((val, key) => {
            console.log(`Key: ${String(key)}, Val: ${val}`);
        });
        console.log("Map as JSON full:", JSON.stringify([...map]));
        console.log("Map keys JSON:", JSON.stringify([...map.keys()]));
        console.log("Map values JSON:", JSON.stringify([...map.values()]));
        console.log("Map entries JSON:", JSON.stringify([...map.entries()]));
        const setExample = new Set(["red", "blue"]);
        setExample.add("yellow");
        setExample.add("red"); // duplicate ignored
        console.log("Set example:", setExample);
    }
    catch (err) {
        console.error("Error in objectsMapsSetsDemo:", err);
    }
}
