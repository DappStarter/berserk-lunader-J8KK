require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note range punch gesture case frame gauge'; 
let testAccounts = [
"0x01962c3cab80c2775a5d85abcb3ac7d13f31e77cede187a1350d3da611331e2e",
"0xd77d267abea82024a422e88aa3d44e1e3b11f5ed54a41c2cc8127e725cbacdad",
"0xad4b28b1a6a298c6c432a928b6e7621d4e4fe981894dffec5ef7ea55032d749b",
"0xfb1ea675a6b6993673e3f2388a8e205792a1d92297201d30ae163577e23b3b70",
"0x05ed23f80d89156c37fe2fd5ed96d93872d8dc1cce07b6908d1cf6fcfe2eefe6",
"0xf390d5d4bf21f47342a1ceb1b08e3dab9e622c7b9358f95ff06c0d67bdab91e2",
"0x4308737b48ccc00de8b0e78d1899bb5115010d446e93f6247fba918dda61086b",
"0x5291798a5deb19a39d509994866da54bdabc5a0fda02be0576e9b85e4d040d7c",
"0xff79f6617a496193ca9301a543de2068a51765829d5008b68ade137571bd5e31",
"0xb2fa1e2ff5deadc7a627a8c1a1f92db4278e6c5e951b666a14c837a540d0ed8b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

