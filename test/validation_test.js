const assert = require('assert');
const User = require('../src/user.js');

describe('Validating records', () => {
  it('requires a user name', () => {
    const user = new User({ name: undefined });
/* validateSync is a synchronous validation process -
validation doesn't return a result */
    const validationResult = user.validateSync();
    const message = validationResult.errors.name.message;
    assert(message === 'Name is required');
  });
});
