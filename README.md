# Type Guards

A collection of generic type guards to check runtime variables in TypeScript.

## How-to?

- Install the [npm package ts-guards](https://www.npmjs.com/package/ts-guards)
  ```bash
  npm i ts-guards
  ```
- Use the package
  ```javascript
  import { asserts, primitiveType } from 'ts-guards';

  let x = "a string";

  // Type of x inferred inside the if statement
  if(primitiveType.isString(x)) { console.log(x); }

  // Type of x inferred after the call (it throws an error for unexpected types)
  asserts.isString(x);

  // Properties of object inferred (if object does not have an x and a y property, it throws an error)
  asserts.requiredObjectPropertiesOf({ x: "y", y: "x" }, ["x", "y"]);
  ```