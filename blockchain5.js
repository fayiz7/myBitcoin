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
      return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }
  
  
    mineBlock(difficulty) {
      while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
        this.nonce++;
        this.hash = this.calculateHash();
      }
      console.log("Block Mined on Hash = " +this.hash+ " by traversing nonce from 0 to "+ this.nonce);
      }
      
  }

  class Blockchain {
    constructor() {
      this.chain = [this.createGenesisBlock()];
      this.difficulty = 4;
    }
    
    createGenesisBlock() {
      return new Block(0, "2017/01/01", "Genesis Block", "0");
    }
    
    getLatestBlock() {
      return this.chain[this.chain.length - 1];
    }
      
      addBlock(newBlock) {
          newBlock.previousHash = this.getLatestBlock().hash;
          newBlock.mineBlock(this.difficulty);
          this.chain.push(newBlock);
      }
      
        isChainValid() {
      for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = this.chain[i];
          const previousBlock = this.chain[i-1];
          
        if (currentBlock.hash !== currentBlock.calculateHash()) {
          return false;
        }
  
        if (currentBlock.hash !== currentBlock.calculateHash()) {
          return false;
        }
        return true;
      }
      }
    }
      
      
  let myBitCoin = new Blockchain();
  console.log('Mining Block 1 ...');
  myBitCoin.addBlock(new Block(1, "13/03/2021", { amount: 10}));
  
  console.log('Mining Block 2 ...');
  myBitCoin.addBlock(new Block(2, "13/02/2021", { amount: 20}));
  console.log("mining again block 3")
  MyBlock = new Block(3,"15/2/2021", {amount:200});
  myBitCoin.addBlock(MyBlock);
