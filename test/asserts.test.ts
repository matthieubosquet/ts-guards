import { asserts } from '../src/';

test(`notNullOrUndefined(null) doesn't throw`, () => {
    asserts.notNullOrUndefined(0);
    expect(() => { let x; asserts.notNullOrUndefined(x); }).toThrow(TypeError);
    expect(() => { asserts.notNullOrUndefined(null) }).toThrow(TypeError);
});

test(`requiredObjectPropertiesOf({ x: "y", y: "x" }, ["x", "y"])`, () => {
    asserts.requiredObjectPropertiesOf({ x: "y", y: "x" }, ["x", "y"]);
    expect(() => { asserts.requiredObjectPropertiesOf({ x: "y", y: "x" }, ["x", "y", "z"]) }).toThrow(TypeError);
});
