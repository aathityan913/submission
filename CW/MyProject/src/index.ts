import { add, PI } from "./modules/math";
import { capitalize } from "./modules/string";
import { findCommon } from "./modules/common";
import {reverseArrayOrString} from "./modules/array_reversal";
import { squares } from "./modules/squares";

/*importing es6 features from esdemo*/
import {
    varLetClosures,
    constFreezeMutability,
    shorthandObjectAssignment,
    symbolsDemo,
    classesInheritanceDemo,
    iteratorsDemo,
    generatorsDemo,
    destructuringDemo,
    arrowTimersDemo,
    objectsMapsSetsDemo
} from './modules/esdemo';

console.log("Capitalized:", capitalize("hello world"));
console.log("Sum:", add(5, 10));
console.log("Value of PI:", PI);

// Use common.ts function
console.log("Common numbers:", findCommon([1, 2, 3], [2, 3, 4]));
console.log("Common letters:", findCommon("sriram", "rajesh"));

//use reversal as a function

console.log("Reversal of integer array: ",reverseArrayOrString([1,2,3,4,5]));
console.log("String reverse: ",reverseArrayOrString("sriram"));

//squares function
const squaredArray = [...squares(10)];
console.log("Reversed squares array:", reverseArrayOrString(squaredArray));


console.log("Reverse of a number: "+reverseArrayOrString(57+""));

console.log("Reverse of a number: "+reverseArrayOrString('c'));

//printing all esdemo features//

console.log("===== ESFEATURES PRACTICE WITH TRY/CATCH =====");

varLetClosures();
constFreezeMutability();
shorthandObjectAssignment();
symbolsDemo();
classesInheritanceDemo();
iteratorsDemo();
generatorsDemo();
destructuringDemo();
arrowTimersDemo();
objectsMapsSetsDemo();