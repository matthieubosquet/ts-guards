export function error(type: string, x: unknown): never {
    throw new TypeError(`Expected ${type}, got:\n${x}`)
}
