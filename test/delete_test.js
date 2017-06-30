const assert = require('assert');
const User = require('../src/user.js');

/* Four different ways to remove from mongo
Model User class includes remove, findOneAndRemove, findByIdandRemove
Model Joe instance includes remove
*/

describe('Deleting a user', () => {
  "use strict";
  let joe;

  beforeEach((done) => {
      joe = new User({ name: 'Joe'});
      joe.save()
        .then(() => done());
  });

  it('model instance remove', (done) => {
    joe.remove()
      .then(() => User.findOne({ name: 'Joe'}))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class model remove', (done) => {
    // Remove a bunch of records with some given criteria
    User.remove({ name: 'Joe'})
    .then(() => User.findOne({ name: 'Joe'}))
    .then((user) => {
      assert(user === null);
      done();
    });
  });

  it('class method findAndRemove', () => {

  });

  it('class method findByIdAndRemove', () => {

  });
});
