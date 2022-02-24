const hre = require("hardhat");

async function main() {

    //get all accounts in private keys in hardhat.config.js
    const accounts = await ethers.getSigners();
    // for (const account of accounts) {
    //   console.log(account.address);
    // }

    const owner = accounts[0]
    const acct2 = accounts[1]
    const acct3 = accounts[2]

    console.log("owner of contract (addr1): ", owner.address);
    console.log("addr2: ", acct2.address);
    console.log("addr3: ", acct3.address);

    const ERC20Contract = await ethers.getContractFactory("ERC20Basic");
    const ercContractDeployed = await ERC20Contract.attach('0x0fe056218250B26D98f32EB65210131a7078B6a6')

    console.log("owner eth balance:", (await owner.getBalance()).toString());
    console.log("acct2 eth balance:", (await acct2.getBalance()).toString());
    console.log("acct3 eth balance:", (await acct3.getBalance()).toString());

    console.log("owner $ERC balance:", (await ercContractDeployed.balanceOf(owner.address)).toString());
    console.log("acct2 $ERC balance:", (await ercContractDeployed.balanceOf(acct2.address)).toString());
    console.log("acct3 $ERC balance:", (await ercContractDeployed.balanceOf(acct3.address)).toString());

    // ERC amount to send
    // let amountInEther = '0.01'
    let amountToSendInt = 77*10**9;
    let amountToSendStr = amountToSendInt.toString();

    // Create a transaction object
    let tx = {
      to: acct3.address,
      // Convert currency unit from ether to wei
      value: amountToSendStr
    }

    // // let tokenBalanceInt = 2000*10**9 //2000 tokens -> 9 decimals
    // // let tokenBalanceStr = tokenBalanceInt.toString();
    // // const deployedContract = await ERC20Contract.deploy(tokenBalanceStr);
    // // console.log("Deployed ERC-20 contract address:", deployedContract.address);

    // let result = BigInt(await ercContractDeployed.totalSupply()).toString();
    // console.log('Supply of tokens is: ', result)


    let amountToSendInt = 77*10**9;
    let amountToSendStr = amountToSendInt.toString();

    await owner.transfer("0x28591C9A6a0574A8ff46A7dd75280C9CB0902E8D", amountToSendStr);
    let sentret = BigInt(await ercContractDeployed.balanceOf("0x28591C9A6a0574A8ff46A7dd75280C9CB0902E8D")).toString();
    console.log('Value of acct3', sentret)
 
 
    // // await deployedContract.setNumber(7)
 
    // // let result = BigInt(await deployedContract.getNumber()).toString()
    // // console.log('Stored value in contract is: ', result)
 
 
}
 
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
 