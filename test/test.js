var RolexICO = artifacts.require('RolexICO')
var RolexToken = artifacts.require('RolexToken')

contract('RolexICO', function (accounts) {

  let ico
  let token
  let acc0 = accounts[0]

  before(function (done) {
    RolexICO.deployed()
      .then(instance => {
        ico = instance
        return instance.token()
      })
      .then(addr => {
        token = RolexToken.at(addr)
        return token
      })
      .then(function () { setTimeout(done, 1000) })
      .catch(done)
  })

  it('should allow purchasing tokens', function(done) {
    ico.buyTokens(acc0, { value: 200, from: acc0 })
      .then(function () { done() })
      .catch(done)
  })

  it('should have some tokens', function (done) {
    token.balanceOf(acc0)
      .then(function (balance) {
        assert(balance.eq(200))
      })
      .then(function () { done() })
      .catch(done)
  })
})
