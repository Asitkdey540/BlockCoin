// import { Blockchain, Transaction } from "./blockchain";
const { Blockchain, Transaction } = require('./blockchain')

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const myKey = ec.keyFromPrivate('db636cd934a9de48ff04d12d820534a9cad3ca576d940767c24aab8f0fecaac4');
const myWalletAddress = myKey.getPublic('hex');

const blockCoin = new Blockchain();

const transaction = new Transaction(myWalletAddress, 'other public key', 20);
transaction.signTransection(myKey);
blockCoin.addTransaction(transaction);

console.log('Starting mining: ');
blockCoin.minePendingTransactions(myWalletAddress);
console.log(`\n Balance of ${myWalletAddress} is`, blockCoin.getBalanceOfAddress(myWalletAddress));






// console.log(JSON.stringify(blockCoin, null, 4));
