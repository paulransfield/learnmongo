//import assert library and user class schema
const assert = require('assert');
const User = require('../src/user.js')

//using mocha add a describe block and it blocks
describe('Creating records', () => {
  it('saves a user', () => {

//step 1 create new user
    const joe = new User({ name: 'Joe' });

//step 2 save joe to mongodb
    joe.save()
      .then(() => {
//step 3 test joe has been added to mongodb using promises
    // has joe been successfully saved?
          assert(!joe.isNew);
      });  
  });
});

/*Describe and it are a part of mocha
Test structure Describe block or function containing it blocks or functions
Within it block provide an assertion, but must first import the assert library
Check mocha added to package.json "test": "mocha"
*/
