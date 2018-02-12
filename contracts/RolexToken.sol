pragma solidity ^0.4.18;

import "../node_modules/zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract RolexToken is MintableToken {

  string public constant name = "Rolex Token";
  string public constant symbol = "RXT";
  uint8 public constant decimals = 1;  // 18 is the most common number of decimal places

  function RolexToken() public {
    
  }
}
