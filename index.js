class JsonValidator {
    constructor(input) {
      this.input = input;
      this.result = this._validate();
    }
  
    _validate() {
      let obj;
  
      if (typeof this.input === 'string') {
        if (this.input.trim() === '') return { valid: false, reason: 'Empty string' };
  
        try {
          obj = JSON.parse(this.input);
        } catch {
          return { valid: false, reason: 'Invalid JSON string' };
        }
      } else if (typeof this.input === 'object' && this.input !== null) {
        obj = this.input;
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
  
    valid() {
      return this.result.valid;
    }
  
    reason() {
      return this.result.reason;
    }
  }
  