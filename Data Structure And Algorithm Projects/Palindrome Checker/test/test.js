var assert = require('assert');
const palindrome = require('../index.js');
describe('palindrome',function(){
 it('returns a boolean value',function(){
    assert.ok(typeof palindrome('eye') === 'boolean');
 });

});