// src/common.ts

// Overloads
export function findCommon(arr1: string, arr2: string): string[];
export function findCommon<T>(arr1: T[], arr2: T[]): T[];

// Implementation
export function findCommon(arr1: string | any[], arr2: string | any[]): any[] {
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
