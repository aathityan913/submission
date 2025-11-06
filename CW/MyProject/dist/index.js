"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./modules/math");
const string_1 = require("./modules/string");
const common_1 = require("./modules/common");
const array_reversal_1 = require("./modules/array_reversal");
const squares_1 = require("./modules/squares");
/*importing es6 features from esdemo*/
const esdemo_1 = require("./modules/esdemo");
console.log("Capitalized:", (0, string_1.capitalize)("hello world"));
console.log("Sum:", (0, math_1.add)(5, 10));
console.log("Value of PI:", math_1.PI);
// Use common.ts function
console.log("Common numbers:", (0, common_1.findCommon)([1, 2, 3], [2, 3, 4]));
console.log("Common letters:", (0, common_1.findCommon)("sriram", "rajesh"));
//use reversal as a function
console.log("Reversal of integer array: ", (0, array_reversal_1.reverseArrayOrString)([1, 2, 3, 4, 5]));
console.log("String reverse: ", (0, array_reversal_1.reverseArrayOrString)("sriram"));
//squares function
const squaredArray = [...(0, squares_1.squares)(10)];
console.log("Reversed squares array:", (0, array_reversal_1.reverseArrayOrString)(squaredArray));
console.log("Reverse of a number: " + (0, array_reversal_1.reverseArrayOrString)(57 + ""));
console.log("Reverse of a number: " + (0, array_reversal_1.reverseArrayOrString)('c'));
//printing all esdemo features//
console.log("===== ESFEATURES PRACTICE WITH TRY/CATCH =====");
(0, esdemo_1.varLetClosures)();
(0, esdemo_1.constFreezeMutability)();
(0, esdemo_1.shorthandObjectAssignment)();
(0, esdemo_1.symbolsDemo)();
(0, esdemo_1.classesInheritanceDemo)();
(0, esdemo_1.iteratorsDemo)();
(0, esdemo_1.generatorsDemo)();
(0, esdemo_1.destructuringDemo)();
(0, esdemo_1.arrowTimersDemo)();
(0, esdemo_1.objectsMapsSetsDemo)();
