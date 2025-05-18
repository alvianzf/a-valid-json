class JsonValidator {
    constructor() {}
  
    validate(input) {
      let obj;
  
      if (typeof input === 'string') {
        if (input.trim() === '') return { valid: false, reason: 'Empty string' };
  
        try {
          obj = JSON.parse(input);
        } catch {
          return { valid: false, reason: 'Invalid JSON string' };
        }
      } else if (typeof input === 'object' && input !== null) {
        obj = input;
      } else {
        return { valid: false, reason: 'Not a JSON object or string' };
      }
  
      if (
        (Array.isArray(obj) && obj.length === 0) ||
        (!Array.isArray(obj) && Object.keys(obj).length === 0)
      ) {
        return { valid: false, reason: 'Empty object or array' };
      }
  
      return { valid: true, reason: 'Valid JSON' };
    }
  
    valid(input) {
      return this.validate(input).valid;
    }
  
    reason(input) {
      return this.validate(input).reason;
    }
  }
  
  module.exports = new JsonValidator();
  