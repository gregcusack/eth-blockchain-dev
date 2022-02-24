const { ethers } = require("hardhat");
const hre = require("hardhat");
require('dotenv').config()

async function main() {

  
    //get all accounts in private keys in hardhat.config.js
    const accounts = await ethers.getSigners();
    const owner = accounts[0]
    const acct2 = accounts[1]
    const acct3 = accounts[2]

    contractAddress = '0x0fe056218250B26D98f32EB65210131a7078B6a6'
    const ERC20Contract = await ethers.getContractFactory("ERC20Basic");
    const ercContractDeployed = await ERC20Contract.attach(contractAddress)

    let provider = ethers.getDefaultProvider('kovan')
    let privateKey = "c7fa31026c39a656aba0858797801ddeb52e416a0a6b06a55285cfd735eda19b"//process.env.PRIVATE_KEY_ACCT_1   //owner privkey
    let wallet = new ethers.Wallet(privateKey, provider)

    // const gas_price = await provider.getGasPrice();
    // console.log("gas price: ", gasPrice)

    let gas_limit = "0x100000"
    let gas_price = "0xFFFFF"

    let amountInEther = '0.00001'
    let tx = {
      from: owner.address,
      to: acct3.address,
      value: ethers.utils.parseEther(amountInEther),
      gasPrice: gas_price,
      gasLimit: gas_limit,
      nonce: provider.getTransactionCount(owner.address, "latest"),
    }

    const signedTx = await wallet.signTransaction(tx)
    console.log('signed tx: ', signedTx)
    
    const hash = await provider.sendTransaction(signedTx)
    console.log("hash: ", hash)
      

 
}
 
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
 