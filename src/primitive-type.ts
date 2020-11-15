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

// Structural Types
export function isObject(x: unknown): x is object {
    return typeof x === 'object' && x !== null;
}

export function isFunction(x: unknown): x is Function {
    return typeof x === 'function' && x !== null;
}
