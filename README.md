# TypeScript Optional Properties and Required Properties

This example demonstrates a common misconception in TypeScript regarding optional properties and required properties in interfaces or type aliases.  Even if a property is optional, required properties must still be provided.

## The Problem

The code in `bug.ts` shows a function that expects an object with a required `firstName` property and an optional `lastName` property.  While a missing `lastName` is permitted, omitting the `firstName` property results in a compile-time error, even though `lastName` is explicitly optional.

## The Solution

The solution in `bugSolution.ts` highlights two ways to address this:

1.  Providing a default value for `firstName` in the function signature.
2.  Using a union type to allow objects without the optional property.