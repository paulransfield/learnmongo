const assert = require('assert');
const User = require('../src/user.js');

describe('Reading users out of the database', () => {
  //declare joe outside of it blocks so available across all blocks
  "use strict";
  let joe;

  /*create a new user as user_test database dropped after each test
    _id assigned by mongo and mongoose before being added to database
  */
  beforeEach((done) => {
      joe = new User({ name: 'Joe'});
      joe.save()
        .then(() => done());
  });

  /*Use model class functions User.find(criteria) and User.findOne(criteria)
    find returns an array, findOne returns a single record
    chain .toString function as _id returns objects not strings
  */
  it('finds all users with a name of joe', (done) => {
    User.find({ name: 'Joe'})
      .then((users) => {
        assert(users[0]._id.toString() === joe._id.toString());
        done();
      });
  });
});
