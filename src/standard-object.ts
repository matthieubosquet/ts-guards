import { isObject } from './primitive-type'

/**
 * Standard built-in objects
 * See also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
 */
// Array
export function isArray(x: unknown): x is Array<unknown> {
    return Array.isArray(x);
}

export function isArrayOf(x: unknown, y: (x: unknown) => boolean): x is Array<unknown> {
    return isArray(x) && x.length > 0 &&  x.every(i => y(i));
}

// Object
export function isObjectPropertyOf<P extends PropertyKey>(target: unknown, property: P): target is { [K in P]: unknown } {
    if (!isObject(target)) { return false; }
    return property in target;
}

export function areObjectPropertiesOf<P extends PropertyKey>(target: unknown, property: P[]): target is { [K in P]: unknown } {
    if (!isObject(target)) { return false; }
    property.forEach(p => {
        if (!(p in target)) { return false; }
    });
    return true;
}
