var assert = require('assert');
const palindromeChecker = require('../index.js');

describe('palindrome',function(){
 it('returns a boolean value',function(){
    assert.ok(typeof palindromeChecker.palindrome('eye') === 'boolean');
 });
 it('considers eye as palindrome',function(){
    assert.equal(palindromeChecker.palindrome('eye'),true);
 });
 it('considers _eye as palindrome',function(){
    assert.equal(palindromeChecker.palindrome('_eye'),true);
 });
 it('considers A man, a plan, a canal. Panama as palindrome',function(){
    assert.equal(palindromeChecker.palindrome('A man, a plan, a canal. Panama'),true);
 });
 it('considers 1 eye for of 1 eye. as not a palindrome',function(){
    assert.equal(palindromeChecker.palindrome('1 eye for of 1 eye.'),false);
 });
 it('considers five|\_/|four as not a palindrome',function(){
    assert.equal(palindromeChecker.palindrome('five|\_/|four'),false);
 });
});

describe('buildAlphaNumericString',function(){
 it('removes spaces',function(){
    assert.equal(palindromeChecker.buildAlphaNumericString('race car'),'racecar');
 });
 it('removes brackets',function(){
    assert.equal(palindromeChecker.buildAlphaNumericString('0_0 (: /-\ :) 0-0'),'0000');
 });
 it('removes commas',function(){
    assert.equal(palindromeChecker.buildAlphaNumericString('A man, a plan, a canal. Panama'),'amanaplanacanalpanama');
 });
});