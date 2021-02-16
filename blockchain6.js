const SHA256 = require("crypto-js/sha256");
class Transaction {

  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
       
  }
}
let myTransaction = new Transaction ("Fayiz ", "Ayish ", 10);
console.log(myTransaction)



class Block {
    constructor(index, timestamp, transactions, previousHash = '') {
      this.index=index;
      this.previousHash = previousHash;
      this.timestamp = timestamp;
      this.transactions = transactions;
      this.nonce = 0;
      this.hash = this.calculateHash();
    }
  
    calculateHash() {
      return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
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
    this.difficulty = 2;
    this.pendingTransactions = [];
    this.miningReward = 100;
    this.index=1;
    }
    createGenesisBlock() {
      return new Block(0,Date.now(), "Genesis Block", "0");
    }
    
    getLatestBlock() {
      return this.chain[this.chain.length - 1];
    }
      
    minePendingTransactions(miningRewardAddress) {
      let block = new Block(this.index++,Date.now(), this.pendingTransactions);
      block.mineBlock(this.difficulty);
      
      console.log('Block successfully mined!');
      this.chain.push(block);
      this.pendingTransactions = [
        new Transaction(null, miningRewardAddress, this.miningReward)
      ];
    }
    createTransaction(transaction){
      this.pendingTransactions.push(transaction);
    }
    
    getBalanceOfAddress(address) {
      let balance = 0;
  
      for (const block of this.chain) {
        for (const trans of block.transactions) {
          if (trans.fromAddress === address) {
            balance -= trans.amount;
          }
  
          if (trans.toAddress === address) {
            balance += trans.amount;
          }
        }
      }
    return balance;
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
let transaction1= new Transaction("Fayiz", "Ayish" , 200 );
let transaction2= new Transaction("Ayish","Fayiz" , 50 );
myBitCoin.createTransaction(transaction1);
myBitCoin.createTransaction(transaction2);
myBitCoin.minePendingTransactions("HamoudMiner");
console.log(myBitCoin.getBalanceOfAddress("HamoudMiner"));
myBitCoin.minePendingTransactions("HamoudMiner");
console.log(myBitCoin.getBalanceOfAddress("HamoudMiner"));
myBitCoin.minePendingTransactions("HamoudMiner");
console.log(myBitCoin.getBalanceOfAddress("HamoudMiner"));


  /* 
  myBitCoin.createTransaction(new Transaction('Imran','Jawad','100'));
  myBitCoin.createTransaction(new Transaction('Jawad','Imran','50'));
    
  console.log('Start Mining ...');
  myBitCoin.minePendingTransactions('bitMinor');
  console.log('\nBalance of BitMinor is', myBitCoin.getBalanceOfAddress('bitMinor'));
  
  console.log('Start Mining ...Again ');
  myBitCoin.minePendingTransactions('bitMinor');
  console.log('\nBalance of BitMinor is', myBitCoin.getBalanceOfAddress('bitMinor'));
  
  
 // 
  //console.log("Block Mined on Hash = " +hash+ " by traversing nonce from 0 to "+ nonce);
/*
while (hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
    nonce++;
    hash = calculateHash();
  }
*/
//getting first two digits from hash 
//var firstTwo=hash.substring(0,difficulty);
//console.log(firstTwo);
//console.log(targetHash.substring(0,difficulty));



/*
class Block {
    constructor (index, timestamp, data,previoushash=''){
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.previoushash=previoushash;
        this.hash=this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index+ this.timestamp + this.previoushash + JSON.stringify(this.data)).toString();
    } 
} 
class Blockchain{
    constructor(){ this.chain=[this.createGenesisBlock()]; }
    
     createGenesisBlock(){return new Block(0,'09/02/2021',"Wellcome","0"); }
    
    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }
    addBlock(newBlock){
        newBlock.previoushash=this.getLatestBlock().hash;
        newBlock.hash=newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    isChainValid(){
                for (let i=1;i<this.chain.length;i++){
                    const currentBlock=this.chain[i];
                    const previousBlock=this.chain[i-1];
                    if (currentBlock.hash!=currentBlock.calculateHash())
                        return false;
                    if(currentBlock.previoushash!=previousBlock.hash)
                        return false;
                }
                return true;
            }
        
        
}

myBitcoin=new Blockchain();
//console.log(myBitcoin);
block1= new Block(1,"11/02/2021",{amount:2});
myBitcoin.addBlock(block1);
//console.log(JSON.stringify(myBitcoin,null,4));
block2= new Block(2,"11/02/2021",{amount:10});
myBitcoin.addBlock(block2);
console.log(JSON.stringify(myBitcoin,null,4));
console.log("My Bitcoin block chain Status ? "+myBitcoin.isChainValid());
// we are going to change data of first block ......attack
myBitcoin.chain[1].data={amount:200};
console.log(JSON.stringify(myBitcoin,null,4));
console.log("My Bitcoin block chain Status ? "+myBitcoin.isChainValid());
*/



