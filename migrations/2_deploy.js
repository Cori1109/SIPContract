const StakeInPool = artifacts.require("StakeInPool");

module.exports = function (deployer) {
  deployer.deploy(StakeInPool);
};
