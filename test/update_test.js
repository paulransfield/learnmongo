const assert = require('assert');
const User = require('../src/user.js');

describe('Updating records', () => {
  "use strict";
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => done());
  });

//testing 5 different ways of updating an instance with mongoose and mongo
  it('instance type using set n save', (done) => {
    console.log(joe);
//using set property to update an instance in memory
    joe.set('name', 'Alex');
//to persist set change, call save
    joe.save()
//empty object {} to find all
      .then(() => User.find({}))
      .then((users) => {
          assert(users.length === 1);
          assert(users[0].name === 'Alex');
          done();
      });
  });
});
