Attempting to show off a potential bug in how rollup handles different types of configurations with the `sideEffects` field in package.json

## Rollup build with sideEffects: ['*.css']
<img width="205" alt="Screen Shot 2021-05-17 at 2 46 39 PM" src="https://user-images.githubusercontent.com/3059715/118557085-f52b6e00-b721-11eb-81b3-bceb0b722401.png">

## Rollup build with sideEffects: undefined
<img width="296" alt="Screen Shot 2021-05-17 at 3 09 06 PM" src="https://user-images.githubusercontent.com/3059715/118557213-1ab87780-b722-11eb-9eda-23d2d7fde66c.png">




## Setup
- yarn install
- yarn start
- open http://localhost:8888/
- notice that there is not CSS included from `@adobe/react-spectrum`

## Getting CSS to be included

A few different changes are required to get the CSS to be bundled.

Each package.json needs to have `sideEffects: true` instead of `sideEffects: ['*.css']` to make it easy to demonstrate run the following commands

- yarn install
- yarn mutate-modules
- yarn start

After waiting for a successful build open http://localhost:8888/ and see that CSS was included

## restoring mutated modules

- yarn fix
