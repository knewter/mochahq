// This file doesn't actually do anything. It's just here as a fixture for the
// tests.
const assert = require('assert')

describe(`a top level describe`, function() {
  it('with a nested it', () => {
    assert(true)
  })

  it('with another it', () => {
    assert(true)
  })

  describe("a nested describe", () => {
    it(`with a mega-nested it`, () => {
      assert(true)
    })
  })
})

describe('a second tld', function() {
  it('should work well', function() {
    assert(true)
  })
})
