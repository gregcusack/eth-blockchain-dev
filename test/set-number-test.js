const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyFirstContract", function () {
  it("Should return the new number once it's changed", async function () {
    const NumberChange = await ethers.getContractFactory("MyFirstContract");
    const numchange = await NumberChange.deploy();
    await numchange.deployed();

    var ret = await numchange.setNumber(7);
    await ret.wait();
    expect(await numchange.getNumber()).to.equal(7);

    var ret = await numchange.setNumber(23);
    await ret.wait();
    expect(await numchange.getNumber()).to.equal(23);

  });
});
