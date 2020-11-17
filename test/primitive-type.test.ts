import { primitiveType } from '../src/';

type JSType = typeof jsType extends Set<infer T> ? T : never;

const jsType = new Set([ 'null', 'undefined', 'boolean', 'number', 'string', 'bigint', 'symbol', 'object', 'function'] as const);

type TypedValue = {
    value: any,
    type: JSType
}

let undef;

const typedValueArray: Array<TypedValue> = [
    { value: null, type: 'null' },
    { value: undef, type: 'undefined' },
    { value: true, type: 'boolean' },
    { value: false, type: 'boolean' },
    { value: 0, type: 'number' },
    { value: 1, type: 'number' },
    { value: -478.839, type: 'number' },
    { value: 4/3, type: 'number' },
    { value: 'x', type: 'string' },
    { value: '', type: 'string' },
    { value: 2n ** 53n, type: 'bigint' },
    { value: Symbol('Sym'), type: 'symbol' },
    { value: {}, type: 'object' },
    { value: () => { return 'x'}, type: 'function' }
]

const primitiveTypeTestArray: Array<{ guard: Function, type: string }> = [
    { guard: primitiveType.isNull, type: 'null' },
    { guard: primitiveType.isUndefined, type: 'undefined' },
    { guard: primitiveType.isBoolean, type: 'boolean' },
    { guard: primitiveType.isNumber, type: 'number' },
    { guard: primitiveType.isString, type: 'string' },
    { guard: primitiveType.isBigInt, type: 'bigint' },
    { guard: primitiveType.isSymbol, type: 'symbol' },
    { guard: primitiveType.isSymbol, type: 'symbol' },
    { guard: primitiveType.isObject, type: 'object' }
];

primitiveTypeTestArray.forEach((primitiveTypeTest) => {
    describe(`Type guard ${primitiveTypeTest.guard.name} for type ${primitiveTypeTest.type}`, () => {
        typedValueArray.forEach((typedValue) => {
            test(`${String(typedValue.value)} returns ${typedValue.type === primitiveTypeTest.type}`, () => {
                expect(primitiveTypeTest.guard(typedValue.value)).toBe(typedValue.type === primitiveTypeTest.type);
            });
        });
    });
});
