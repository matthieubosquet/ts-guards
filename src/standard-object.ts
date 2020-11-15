/**
 * Standard built-in objects
 * See also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
 */
// Object
// Note: if in was to be treated as a type guard, this would be unnecessary. TODO: Remove when TypeScript does.
export function isObjectPropertyOf<P extends PropertyKey>(target: object, property: P): target is { [K in P]: unknown } {
    return property in target;
}

// Indexed collections
export function isArray(x: unknown): x is Array<unknown> {
    return Array.isArray(x);
}

export function isArrayOf(x: unknown, y: (x: unknown) => boolean): x is Array<unknown> {
    return isArray(x) && x.length > 0 &&  x.every(i => y(i));
}
