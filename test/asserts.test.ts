import * as asserts from '../src/asserts';

test(`assertsNotNullOrUndefined(null) doesn't throw`, () => {
    asserts.assertsNotNullOrUndefined(0);
    expect(() => { let x; asserts.assertsNotNullOrUndefined(x); }).toThrow(TypeError);
    expect(() => { asserts.assertsNotNullOrUndefined(null) }).toThrow(TypeError);
});

test(`assertRequiredObjectPropertiesOf({ x: "y", y: "x" }, ["x", "y"])`, () => {
    asserts.assertsRequiredObjectPropertiesOf({ x: "y", y: "x" }, ["x", "y"]);
    expect(() => { asserts.assertsRequiredObjectPropertiesOf({ x: "y", y: "x" }, ["x", "y", "z"]) }).toThrow(TypeError);
});
