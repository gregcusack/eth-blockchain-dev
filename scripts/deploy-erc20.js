const hre = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();
 
    console.log(
      "Deploying ERC20B Basic Contract with the account:",
      deployer.address
    );
 
    console.log("Account balance:", (await deployer.getBalance()).toString());
 
    const ERC20Contract = await ethers.getContractFactory("ERC20Basic");

    let tokenBalanceInt = 2000*10**9 //2000 tokens -> 9 decimals
    let tokenBalanceStr = tokenBalanceInt.toString();
    const deployedContract = await ERC20Contract.deploy(tokenBalanceStr);
    console.log("Deployed ERC-20 contract address:", deployedContract.address);

    let result = BigInt(await deployedContract.totalSupply()).toString();
    console.log('Supply of tokens is: ', result)


    let amountToSendInt = 23*10**9;
    let amountToSendStr = amountToSendInt.toString();

    await deployedContract.transfer("0x7eef848518A4e0978488b24Ef58182d923161C77", amountToSendStr);

    let sentret = BigInt(await deployedContract.balanceOf("0x7eef848518A4e0978488b24Ef58182d923161C77")).toString();
    console.log('Value of my account is ', sentret)
 
 
    // await deployedContract.setNumber(7)
 
    // let result = BigInt(await deployedContract.getNumber()).toString()
    // console.log('Stored value in contract is: ', result)
 
 
}
 
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
 