const SHA256 = require("crypto-js/sha256");
class Block {
constructor(index, timestamp, data, previousHash = '') {
this.index = index;
this.previousHash = previousHash;
this.timestamp = timestamp;
this.data = data;
this.nonce = 0;
this.hash = this.calculateHash();
}
calculateHash() {
return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) +
this.nonce).toString();
}
mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
    this.nonce++;
    this.hash = this.calculateHash();
    }
    console.log("Block Mined on Hash =    " +this.hash+ " by traversing nonce from 0 to "+ this.nonce);
    }
    }
    myblock= new Block(1,"13/02/2021",{amount:100});
    myblock.mineBlock(6 );