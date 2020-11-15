import * as standardObject from '../src/standard-object';
import { isString } from '../src/primitive-type';

const arrayTestArray: Array<{ value: Array<unknown>, type: string }> = [
    { value: [ ], type: 'empty' },
    { value: [ 'x', 'y' ], type: 'string' },
    { value: [ 'x', 1 ], type: 'any' }
];

arrayTestArray.forEach(arrayTest => {
    test(`isArray(${String(arrayTest.value)}) returns true`, () => {
        expect(standardObject.isArray(arrayTest.value)).toBe(true);
    });
    test(`isArrayOf(${String(arrayTest.value)}, isString) returns ${arrayTest.type === 'string'}`, () => {
        expect(standardObject.isArrayOf(arrayTest.value, isString)).toBe(arrayTest.type === 'string');
    });
})

test(`isObjectPropertyOf({ x: '' }, 'x') returns true`, () => {
    expect(standardObject.isObjectPropertyOf({ x: '' }, 'x')).toBe(true);
});

test(`isObjectPropertyOf({ x: '' }, 'y') returns false`, () => {
    expect(standardObject.isObjectPropertyOf({ x: '' }, 'y')).toBe(false);
});
