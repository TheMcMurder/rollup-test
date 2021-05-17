Attempting to show off a potential bug in how rollup handles different types of configurations with the `sideEffects` field in package.json

## Setup
- yarn install
- yarn start
- open http://localhost:10001/
- notice that there is not CSS included from `@adobe/react-spectrum`

## Getting CSS to be included

A few different changes are required to get the CSS to be bundled.

Each package.json needs to have `sideEffects: true` instead of `sideEffects: ['*.css']` to make it easy to demonstrate run the following commands

- yarn install
- yarn mutate-modules
- yarn start