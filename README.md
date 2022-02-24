# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```


After pulling repo, need to create a `.env` file. It should look like:
```
ALCHEMY_MAINNET_RPC_URL="https://eth-mainnet.alchemyapi.io/v2/<key>
ALCHEMY_KOVAN_URL="https://eth-kovan.alchemyapi.io/v2/<key>"

PRIVATE_KEY_ACCT_1="<priv_key_1>"
PRIVATE_KEY_ACCT_2="<priv_key_2>"
PRIVATE_KEY_ACCT_3="<priv_key_3>"
```

0) Install hardhat
1) Setup alchemy api
2) Deploy contract
2a) can deploy on localhost or Kovan or Rinkeby testnets
3) install hardhat shortcut `hh`
4) Run: `hh run --network kovan scripts/send-tokens.js`
