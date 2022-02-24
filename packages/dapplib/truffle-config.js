require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name reflect saddle purse install opera equal ghost'; 
let testAccounts = [
"0x611910d3a91e899c34323474aa2e32e0608bd00afb39ea36f45b8fdcc55b7b62",
"0x6b2f7e7949c6c327561a034ed164d95c61bfa1ff99fd136d5069675b700a4615",
"0x5dc042589a0a50609e78a4c0130b95da2934444290e28257b0e0b96c4ecbbeee",
"0x9e86b5ac57f35be20ada658b4540416f3b4f4c2c832c266bee85000405781c6a",
"0xe789b9f0a70c41491351f0cec49ecb7d493fd989492c56e6b74a5c88b9122a55",
"0xa8371222831969ad086e0523ae9f5ac4dcf92b72af69125cbdda5424b6ea4379",
"0x61d120cc2422953c9556c6b895453e9bfe67409a7bc288f062e43e51f82442a8",
"0x38a672efe00f37e3bb69ddde99e6de990395b7ceb901f3ef2270b098dedb2644",
"0xde00743a8662ec3800888b1609b7bd6ccac6d734a7f0804ab651c58eb2dd7b23",
"0x2e62952fcd5ef6c1637b251952e957c9d75c9f09e718fa5d5df1a2ab167600dc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


