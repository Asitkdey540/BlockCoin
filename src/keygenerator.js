const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const public = key.getPublic('hex');
const private = key.getPrivate('hex');

console.log('private Key: ', private)
console.log('public Key: ', public)

// private Key:  db636cd934a9de48ff04d12d820534a9cad3ca576d940767c24aab8f0fecaac4
// public Key:  0467689589fa42d3d9eb3c3aa185e5b400ddbcbb7a90c9a655a16e41f503a00918afdd805b891e7fbe225f70c0ca4cd127e9365dfe6629a59243090501ac522868