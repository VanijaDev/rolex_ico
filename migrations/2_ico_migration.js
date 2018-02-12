var RolexICO = artifacts.require("./RolexICO.sol");


module.exports = function (deployer) {
    //  function RolexICO(uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet, uint256 _icoCap, uint _tokenTotalSupplyLimit, uint8 _icoTokenPercents)
    const _startTime = web3.eth.getBlock('latest').timestamp + 1;
    const _endTime = _startTime + 4000000;
    const _rate = 1; //  token per wei
    const _wallet = web3.eth.accounts[4];
    const _icoCap = 2000000000000000000; //  2 ETH
    const decimals = 1;
    const _tokenTotalSupplyLimit = 1000000; // 50 * 10 ** decimals; //  50 tokens
    const _icoTokenPercents = 65; //  %

    deployer.deploy(RolexICO, _startTime, _endTime, _rate, _wallet, _icoCap);
};
