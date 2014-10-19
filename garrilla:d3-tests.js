// Write your tests here!
// Here is an example.
if(Meteor.isClient) {
  /** calls the d3.version protype, which returns the version string
   *  and tests if its the same as the version */
  Tinytest.add('garrilla:d3 version test', function (test) {
    test.equal(d3.version, '3.4.13');
  });
}