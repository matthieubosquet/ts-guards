import * as literalType from './literal-type';
import * as primitiveType from './primitive-type';
import * as standardObject from './standard-object';

/**
 * Throw Type Error
 */
export function error(expected: any, actual: unknown): never {
    throw new TypeError(`Expected ${expected}, got:\n${actual}`)
}


/**
 * Primitive Type Asserts
 */
// Structural Root Primitive
export function isNull(x: unknown): asserts x is null {
    if(!primitiveType.isNull(x)) error('null', x);
}

// Primitive Data Types
export function isUndefined(x: unknown): asserts x is undefined {
    if(!primitiveType.isUndefined(x)) error('undefined', x);
}

export function isBoolean(x: unknown): asserts x is boolean {
    if(!primitiveType.isBoolean(x)) error('boolean', x);
}

export function isString(x: unknown): asserts x is string {
    if(!primitiveType.isString(x)) error('string', x);
}

export function isNumber(x: unknown): asserts x is number {
    if(!primitiveType.isNumber(x)) error('number', x);
}

export function isBigInt(x: unknown): asserts x is bigint {
    if(!primitiveType.isBigInt(x)) error('bigint', x);
}

export function isSymbol(x: unknown): asserts x is symbol {
    if(!primitiveType.isSymbol(x)) error('symbol', x);
}

// Convenience Primitive Type
export function isNotNullOrUndefined<T>(x: T): asserts x is NonNullable<T> {
    if(primitiveType.isNull(x)) error('not null', x)
    if(primitiveType.isUndefined(x)) error('not undefined', x)
}

// Structural Types
export function isObject(x: unknown): asserts x is object {
    if(!primitiveType.isObject(x)) error('object', x);
}


/**
 * Standard Object Asserts
 */
// Array
export function isArray(x: unknown): asserts x is Array<unknown> {
    if(!standardObject.isArray(x)) error('array', x);
}

export function isArrayOf(x: unknown, y: (x: unknown) => boolean): asserts x is Array<unknown> {
    if(!standardObject.isArrayOf(x, y)) error(`array of ${y.name}`, x);
}

// Object
export function isObjectPropertyOf<P extends PropertyKey>(x: unknown, property: P): asserts x is { [K in P]: unknown } {
    if (!standardObject.isObjectPropertyOf(x, property)) error(`object property ${property}`, x)
}

export function areObjectPropertiesOf<P extends PropertyKey>(x: unknown, property: P[]): asserts x is { [K in P]: unknown } {
    property.forEach(p => isObjectPropertyOf(x, p));
}

/**
 * Literal Type Asserts
 */
export function isLiteral<T>(x: unknown, value: T): asserts x is typeof value {
    if(!literalType.isLiteral(x, value)) error(value, x);
}

export function isLiteralType<T>(x: unknown, set: Set<T>): asserts x is typeof set extends Set<infer T> ? T : never {
    if(!literalType.isLiteralType(x, set)) error(set, x);
}
