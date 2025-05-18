# JSON Validator

A simple utility to validate JSON strings or objects. Checks for:

- Valid JSON format (if string)
- Non-empty content (object or array)
- Accepts both strings and JSON objects

## Installation

```bash
npm install json-validator-tool
```

## Usage

```js

const JsonValidator = require('json-validator-tool');

const validator1 = new JsonValidator('{"foo":"bar"}');
console.log(validator1.valid()); // true
console.log(validator1.reason()); // 'Valid JSON'

const validator2 = new JsonValidator('');
console.log(validator2.valid()); // false
console.log(validator2.reason()); // 'Empty string'
```

## API
`new JsonValidator(input)`
* `input:` JSON string or object

`.valid()`
* Returns `true` if valid, otherwise `false`.

`.reason()`
* Returns a string describing the validation result.