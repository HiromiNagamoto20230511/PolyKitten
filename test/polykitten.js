const PolyKitten = artifacts.require("./PolyKitten.sol");
// openzeppelinライブラリには.set().get.call()メソッドが存在しないため。
contract("PolyKitten", accounts => {
  it("...should store the value 89.", async () => {
    // const polyKittenInstance = await PolyKitten.deployed();

    // Set value of 89
    // await polyKittenInstance.set(89, { from: accounts[0] });

    // Get stored value
    // const storedData = await polyKittenInstance.get.call();

    // assert.equal(storedData, 89, "The value 89 was not stored.");
  });
});
