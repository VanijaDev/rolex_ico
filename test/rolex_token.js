let RolexToken = artifacts.require('./RolexToken.sol');

contract('RolexToken', (accounts) => {

  describe('intial setup', () => {
    it("check totalSupplyLimit", async () => {
      const TOTAL_SUPPLY_LIMIT = 2000;

      let rolex_token = await RolexToken.new(TOTAL_SUPPLY_LIMIT);
      let limit = await rolex_token.totalSupplyLimit.call();
      assert.equal(limit.toNumber(), TOTAL_SUPPLY_LIMIT, 'totalSupplyLimit value differs');
    })
  });
});