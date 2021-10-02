import { asserts } from "../src";

test(`notNullOrUndefined(null) doesn't throw`, () => {
  asserts.isNotNullOrUndefined(0);
  expect(() => {
    let x;
    asserts.isNotNullOrUndefined(x);
  }).toThrow(TypeError);
  expect(() => {
    asserts.isNotNullOrUndefined(null);
  }).toThrow(TypeError);
});

test(`requiredObjectPropertiesOf({ x: "y", y: "x" }, ["x", "y"])`, () => {
  asserts.areObjectPropertiesOf({ x: "y", y: "x" }, ["x", "y"]);
  expect(() => {
    asserts.areObjectPropertiesOf({ x: "y", y: "x" }, ["x", "y", "z"]);
  }).toThrow(TypeError);
});
