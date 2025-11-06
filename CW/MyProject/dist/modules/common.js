"use strict";
// src/common.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCommon = findCommon;
// Implementation
function findCommon(arr1, arr2) {
    const bothStrings = typeof arr1 === "string" && typeof arr2 === "string";
    const bothArrays = Array.isArray(arr1) && Array.isArray(arr2);
    if (!bothStrings && !bothArrays) {
        throw new Error("Arguments must be both arrays of the same type or both strings");
    }
    const v1 = bothStrings ? [...arr1.toLowerCase()] : [...arr1];
    const v2 = bothStrings ? [...arr2.toLowerCase()] : [...arr2];
    const result = new Set();
    for (let i = 0; i < v1.length; i++) {
        if (v2.includes(v1[i])) {
            result.add(v1[i]);
        }
    }
    return [...result];
}
