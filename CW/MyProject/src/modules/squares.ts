export function* squares(n: number): Generator<number> {
    for (let i = 1; i <= n; i++) {
        yield i ** 2;
    }
}
