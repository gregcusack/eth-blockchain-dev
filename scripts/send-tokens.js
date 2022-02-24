const { ethers } = require("hardhat");
const hre = require("hardhat");
require('dotenv').config()

// function send_token(
//   provider,
//   ercContractDeployed,
//   contractAddress,
//   send_token_amount,
//   to_address,
//   send_account,
//   private_key
// ) {

//   // provider.getGasPrice().then((currentGasPrice) => {
//   //   let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice))
//   //   console.log(`gas_price: ${gas_price}`)

//   //   console.log("acct3 $ERC balance:");


//     if(contractAddress) {
//       // let contract = new ethers.Contract(
//       //   contractAddress,
//       //   send_abi,
//       //   walletSigner
//       // )

//       let numberOfTokens = ethers.utils.parseUnits(send_token_amount, 9)
//       console.log(`numberOfTokens: ${numberOfTokens}`)

//       ercContractDeployed.transfer(acct3.address, numberOfTokens).then((transferResult) =>{
//         console.dir(transferResult)
//         alert("sent token")
//       })


//     }

//   // })
// }

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


    let amountToSend = ethers.utils.parseUnits("10", "gwei").toString();
    await ercContractDeployed.transfer(acct3.address, amountToSend);

    let sentret = BigInt(await ercContractDeployed.balanceOf(acct3.address)).toString();
    console.log('Value of acct3: ', sentret)

    //getting a nonce error here. need to increment. We could also just run these all as tests. Maybe works?
    // let nonce = provider.getTransactionCount(owner.address, "latest");

    let acct2Balance = await ercContractDeployed.transfer(acct2.address, ethers.utils.parseUnits("40", "gwei"))
    sentret = BigInt(await ercContractDeployed.balanceOf(acct2.address)).toString();
    console.log('Value of acct2: ', sentret)

    await ercContractDeployed.connect(acct2).approve(owner.address, ethers.utils.parseUnits("1", "gwei").toString());
    await ercContractDeployed.transferFrom(acct2.address, acct3.address, ethers.utils.parseUnits("1", "gwei").toString());
    let balanceOfAcct3 = BigInt(await ercContractDeployed.balanceOf(acct3.address)).toString();
    console.log('Value of my account is ', sentret)

    // const gas_price = await provider.getGasPrice();
    // console.log("gas price: ", gasPrice)

    // let gas_limit = "0x100000"
    // let gas_price = "0xFFFFF"

    // let amountInEther = '0.00001'
    // let tx = {
    //   from: owner.address,
    //   to: acct3.address,
    //   value: ethers.utils.parseEther(amountInEther),
    //   gasPrice: gas_price,
    //   gasLimit: gas_limit,
    //   nonce: provider.getTransactionCount(owner.address, "latest"),
    // }

    // const signedTx = await wallet.signTransaction(tx)
    // console.log('signed tx: ', signedTx)

    // // wallet.sendTransaction(tx)

    // const hash = await provider.sendTransaction(signedTx)
    // console.log("hash: ", hash)
      
    //   ).then((txObj) => {
    //   console.log('txHash', txObj.hash)
    // })


    // let sendTokenAmount = "77"

    // // send_token(provider, ercContractDeployed, contractAddress, sendTokenAmount, acct3.address, owner.address, privateKey)
    
    // let numberOfTokens = ethers.utils.parseUnits(sendTokenAmount, 9)
    // console.log(`numberOfTokens: ${numberOfTokens}`)

    // ercContractDeployed.transfer(acct3.address, numberOfTokens).then((transferResult) =>{
    //   console.dir(transferResult)
    //   alert("sent token")
    // })



    // let amountToSendInt = 77*10**9;
    // let amountToSendStr = amountToSendInt.toString();
    // let rxAddr = acct3.address

    // send_token(
    //   contract_address,
    //   send_token_amount,
    //   to_address,
    //   send_address,
    //   private_key
    // )

    // // create transaction object
    // const tx = {
    //   from: owner.address,
    //   to: rxAddr,
    //   value: amountToSendStr //ethers.utils.parseEther(send_token_amount)
    // }

    // wallet.sendTransaction(tx)
    // .then((txObj) => {
    //   console.log('txHash', txObj.hash)
    // })

    // console.log("acct3 $ERC balance:", (await ercContractDeployed.balanceOf(acct3.address)).toString());

    


    

    // //get all accounts in private keys in hardhat.config.js
    // const accounts = await ethers.getSigners();
    // // for (const account of accounts) {
    // //   console.log(account.address);
    // // }

    // const owner = accounts[0]
    // const acct2 = accounts[1]
    // const acct3 = accounts[2]

    // console.log("owner of contract (addr1): ", owner.address);
    // console.log("addr2: ", acct2.address);
    // console.log("addr3: ", acct3.address);

    // const ERC20Contract = await ethers.getContractFactory("ERC20Basic");
    // const ercContractDeployed = await ERC20Contract.attach('0x0fe056218250B26D98f32EB65210131a7078B6a6')

    // console.log("owner eth balance:", (await owner.getBalance()).toString());
    // console.log("acct2 eth balance:", (await acct2.getBalance()).toString());
    // console.log("acct3 eth balance:", (await acct3.getBalance()).toString());

    // console.log("owner $ERC balance:", (await ercContractDeployed.balanceOf(owner.address)).toString());
    // console.log("acct2 $ERC balance:", (await ercContractDeployed.balanceOf(acct2.address)).toString());
    // console.log("acct3 $ERC balance:", (await ercContractDeployed.balanceOf(acct3.address)).toString());

    // // ERC amount to send
    // // let amountInEther = '0.01'
    // let amountToSendInt = 77*10**9;
    // let amountToSendStr = amountToSendInt.toString();

    // // Create a transaction object
    // let tx = {
    //   to: acct3.address,
    //   // Convert currency unit from ether to wei
    //   value: amountToSendStr
    // }

    // // // let tokenBalanceInt = 2000*10**9 //2000 tokens -> 9 decimals
    // // // let tokenBalanceStr = tokenBalanceInt.toString();
    // // // const deployedContract = await ERC20Contract.deploy(tokenBalanceStr);
    // // // console.log("Deployed ERC-20 contract address:", deployedContract.address);

    // // let result = BigInt(await ercContractDeployed.totalSupply()).toString();
    // // console.log('Supply of tokens is: ', result)


    // let amountToSendInt = 77*10**9;
    // let amountToSendStr = amountToSendInt.toString();

    // await owner.transfer("0x28591C9A6a0574A8ff46A7dd75280C9CB0902E8D", amountToSendStr);
    // let sentret = BigInt(await ercContractDeployed.balanceOf("0x28591C9A6a0574A8ff46A7dd75280C9CB0902E8D")).toString();
    // console.log('Value of acct3', sentret)
 
 
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
 