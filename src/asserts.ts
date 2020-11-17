import { asserts } from '.';
import { error } from './error';
import * as primitiveType from './primitive-type';
import * as standardObject from './standard-object';

// Generic Check
export function isNotNullOrUndefined<T>(x: T): asserts x is NonNullable<T> {
    if(primitiveType.isNull(x)) error('not null', x)
    if(primitiveType.isUndefined(x)) error('not undefined', x)
}

export function requiredObjectPropertiesOf<P extends PropertyKey>(target: unknown, property: P[]): asserts target is { [K in P]: unknown } {
    property.forEach(p => {
        if (!standardObject.isObjectPropertyOf(target, p)) error(`required property: ${p}`, 'missing property')
    });
}

// Primitive Type
export function isNull(x: unknown): asserts x is null {
    if(!primitiveType.isNull(x)) error('null', x);
}

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

export function isObject(x: unknown): asserts x is object {
    if(!primitiveType.isObject(x)) error('object', x);
}

export function isSymbol(x: unknown): asserts x is symbol {
    if(!primitiveType.isSymbol(x)) error('symbol', x);
}

// Standard Object
export function isArray(x: unknown): asserts x is Array<unknown> {
    if(!standardObject.isArray(x)) error('array', x);
}

export function isArrayOf(x: unknown, y: (x: unknown) => boolean): asserts x is Array<unknown> {
    if(!standardObject.isArrayOf(x, y)) error(`array of ${y.name}`, x);
}
