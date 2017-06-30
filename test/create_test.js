//import assert library
const assert = require('assert');

//mocha describe block and it blocks
describe('Creating records', () => {
  it('saves a user', () => {
    assert(1 + 1 === 2);
  });
});

/*Describe and it are a part of mocha
Test structure Describe block or function containing it blocks or functions
Within it block provide an assertion, but must first import the assert library
Check mocha added to package.json "test": "mocha"
*/
