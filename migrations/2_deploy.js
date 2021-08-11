const UniswapV2Factory = artifacts.require("UniswapV2Factory.sol");

module.exports = function(deployer) {
  deployer.deploy(UniswapV2Factory, '0x0CDaDF22f4d6bB5FC283D2E31224ED7A0372473b');
};
