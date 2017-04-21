const index = require('./index.js')
const { describe, it } = require('mocha')
const expect = require('chai').expect
const sinon = require('sinon')

describe('index.js', () => {
  it('should exist', done => {
    console.log(index)
    expect(index).to.not.be.null
    done()
  })

  describe('#handler', () => {
    const mockMyParam = 'this is an arbitrary test value'
    const expectedDoneArg = { message: `This is a Lamba response! You sent the following in the myParam parameter: ${mockMyParam}.` }

    const mockEvent = {
      myParam: mockMyParam
    }

    const mockContext = {
      done: sinon.spy()
    }

    it('returns the correct response to context.done()', done => {
      index.handler(mockEvent, mockContext)
      expect(mockContext.done.args[0][1]).to.eql(expectedDoneArg)
      done()
    })
  })
})
