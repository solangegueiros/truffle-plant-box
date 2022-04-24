  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
const fs = require('fs');
const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = fs.readFileSync(".secret").toString().trim();
 if (!mnemonic || mnemonic.split(' ').length !== 12) {
  // throw new Error('unable to retrieve mnemonic from .secret');
  console.log('unable to retrieve mnemonic from .secret');
}

module.exports = {
  networks: {
    develop: {
      port: 8545
    },    
    development: {
      host: "127.0.0.1",
      port: 4444,
      network_id: "*"
    },

  // Set default mocha options here, use special reporters etc.
  mocha: {  },
  
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.6",
    }
  }
}