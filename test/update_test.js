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

//define new helper function to remove copy and paste of .then code

  function assertName(operation, done) {
    operation
    //empty object {} to find all
      .then(() => User.find({}))
      .then((users) => {
          assert(users.length === 1);
          assert(users[0].name === 'Alex');
          done();
        });
    }

//testing 5 different ways of updating an instance with mongoose and mongo
  it('instance type using set n save', (done) => {
    //using set property to update an instance in memory
    joe.set('name', 'Alex');
    //to persist set change, call save - useful for piecemeal changes
    assertName(joe.save(), done);
    });

    //update for making all changes in one operation
    it('model instance can update', (done) => {
      assertName(joe.update({ name: 'Alex' }), done);
    });

    //test using Class model updates
    it('model class update', (done) => {
      assertName(
        User.update({ name: 'Joe' }, { name: 'Alex' }),
        done
      );
    });
    //test using Class model updates with findOneAndUpdate
    it('model class can update one record', (done) => {
      assertName(
        User.findOneAndUpdate({ name: 'Joe' }, { name: 'Alex' }),
        done
      );
    });

    //test using Class model updates with findByIdAndUpdate
    it('model class can find a record with an ID and update', (done) => {
      assertName(
        User.findByIdAndUpdate(joe._id, { name: 'Alex' }),
        done
      );
    });
});
