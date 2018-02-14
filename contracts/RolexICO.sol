pragma solidity ^0.4.18;

import "../node_modules/zeppelin-solidity/contracts/crowdsale/CappedCrowdsale.sol";
import "./RolexToken.sol";

contract RolexICO is CappedCrowdsale {

  uint private totalSupplyLimit;

  function RolexICO(uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet, uint256 _cap, uint _totalSupplyLimit)
    Crowdsale(_startTime, _endTime, _rate, _wallet)
    CappedCrowdsale(_cap) public {
      
      totalSupplyLimit = _totalSupplyLimit;
  }

  // creates the token to be sold.
  // override this method to have crowdsale of a specific mintable token.
  function createTokenContract() internal returns (MintableToken) {
    return new RolexToken(totalSupplyLimit);
  }
}
