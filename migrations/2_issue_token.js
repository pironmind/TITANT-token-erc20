const Token = artifacts.require("TokenTITANT.sol");

module.exports = function(deployer) {
  deployer.deploy(Token, 'TITANT token erc20', 'TTNT', 1000000000, 2, '0x482BAE4729D2f499A6179E128782e1a3E24a884c', '');
};
