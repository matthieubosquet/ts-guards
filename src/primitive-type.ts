/**
 * Data and Structure types
 * See also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 */

// Structural Root Primitive
export function isNull(x: unknown): x is null {
    return x === null;
}

// Primitive Data Types
export function isUndefined(x: unknown): x is undefined {
    return typeof x === 'undefined';
}

export function isBoolean(x: unknown): x is boolean {
    return typeof x === 'boolean';
}

export function isNumber(x: unknown): x is number {
    return typeof x === 'number';
}

export function isString(x: unknown): x is string {
    return typeof x === 'string';
}

export function isBigInt(x: unknown): x is bigint {
    return typeof x === 'bigint';
}

export function isSymbol(x: unknown): x is symbol {
    return typeof x === 'symbol';
}

// Convenience Primitive Type
export function isNotNullOrUndefined<T>(x: T): x is NonNullable<T> {
    return !isNull(x) && !isUndefined(x);
}

// Structural Types
export function isObject(x: unknown): x is object {
    return typeof x === 'object' && x !== null;
}

// TODO: is there a way to actually test for functions?
// Also, we can assume that function is not a thing to test for since it should not be delivered as unsafe IO
// export function isFunction(x: unknown): x is () => any {
//     return typeof x === 'function' && x !== null;
// }
// export function isFunction(x: unknown): x is function {
//     return typeof x === 'function';
// }
// export function isFunctions<K extends Function>(x: unknown): x is K {
//     return typeof x === 'function';
// }
