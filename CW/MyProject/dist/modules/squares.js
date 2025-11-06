"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squares = squares;
function* squares(n) {
    for (let i = 1; i <= n; i++) {
        yield Math.pow(i, 2);
    }
}
