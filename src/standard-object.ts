import { isObject } from "./primitive-type";

/**
 * Standard built-in objects
 * See also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
 */
// Array
export function isArray(x: unknown): x is Array<unknown> {
  return Array.isArray(x);
}

export function isArrayOf(
  x: unknown,
  y: (z: unknown) => boolean
): x is Array<unknown> {
  return isArray(x) && x.length > 0 && x.every((i) => y(i));
}

// Object
export function isObjectPropertyOf<P extends PropertyKey>(
  x: unknown,
  property: P
): x is { [K in P]: unknown } {
  if (!isObject(x)) {
    return false;
  }
  return property in x;
}

export function areObjectPropertiesOf<P extends PropertyKey>(
  x: unknown,
  property: P[]
): x is { [K in P]: unknown } {
  if (!isObject(x)) {
    return false;
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const result = property.reduce((_accumulator, current) => current in x, true);
  return result;
}
