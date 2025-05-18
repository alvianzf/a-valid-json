# JSON Validator

A simple utility to validate JSON strings or objects. Checks for:

- Valid JSON format (if string)
- Non-empty content (object or array)
- Accepts both strings and JSON objects

## Installation

```bash
npm install a-valid-json
```

## Usage

```js
const validator = require('a-valid-json');

console.log(validator.valid('{"foo":"bar"}'));  // true
console.log(validator.reason('{"foo":"bar"}')); // 'Valid JSON'

console.log(validator.valid(''));                // false
console.log(validator.reason(''));               // 'Empty string'

```

## API

`.valid(input)`
* Returns `true` if valid, otherwise `false`.

`.reason(input)`
* Returns a string describing the validation result.