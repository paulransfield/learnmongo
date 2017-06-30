const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
  .once('open', () => console.log('Good to go'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });

/*add hook initial function run before any test is run
passing mochas 'done' into beforeEach to not run tests until data is dropped
*/
beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    // ready to run the next test
    done();
  });
});

  // to run, at cmd prompt "node test/test_helper.js"
