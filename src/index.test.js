import { expect } from 'chai'
import sinon from 'sinon'
import { handler } from './index.js'

describe('index.js', () => {
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
      handler(mockEvent, mockContext)
      expect(mockContext.done.args[0][1]).to.eql(expectedDoneArg)
      done()
    })
  })
})
