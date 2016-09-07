const chai = require('chai');

const should = chai.should();
// const expect = chai.expect;
// const assert = chai.assert;

describe('canary-test', ()=>{
  it('should say hello',()=>{
    const hello = 'hello';
    hello.should.be.equal('hello');
  });

it('type of string',()=>{
  const str = 'string';

  str.should.be.a('string');
  })
});
