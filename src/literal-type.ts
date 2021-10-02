/**
 * Literal Type
 * Pass value or set as const for correct type inference
 * See also https://www.typescriptlang.org/docs/handbook/literal-types.html
 */
export function isLiteral<T>(x: unknown, value: T): x is typeof value {
  return x === value;
}

export function isLiteralType<T>(
  x: unknown,
  set: Set<T>
  // eslint-disable-next-line no-shadow
): x is typeof set extends Set<infer T> ? T : never {
  return set.has(x as T);
}
