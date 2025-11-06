
export function reverseArrayOrString<T>(input: T[] | string | number): T[] | string {
    if (typeof input === "number") {
        // Convert number to string and reverse
        return input.toString().split("").reverse().join("");
    } else if (typeof input === "string") {
        return input.split("").reverse().join("");
    } else if (Array.isArray(input)) {
        return [...input].reverse();
    } else {
        throw new Error("Input must be an array, string, or number");
    }
}