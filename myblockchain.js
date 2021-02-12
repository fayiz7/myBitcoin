const SHA256=require('crypto-js/sha256');
class Block{
    constructor(index,timestamp,data,previoushash=''){
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.previoushash=previoushash;
        this.hash=this.calculateHash();
    }
    calculateHash(){
        return SHA256(this.index+this.timestamp+this.previoushash+JSON.stringify(this.data)).toString();
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
        for(let i=1;i<this.chain.length;i++){
            const currentBlock=this.chain[i];
            const previousBlock=this.chain[i-1];
        if(currentBlock.hash!=currentBlock.calculateHash())
            return false;
        if(currentBlock.previoushash!=previousBlock.hash)
            return false;
        }
        return true;
    }
    

}




//myblock =new Block(1,"11/02/2021",{})
myBitcoin=new Blockchain();
//console.log(myBitcoin)
block1 =new Block(1,"11/02/2021", {amount:2});
myBitcoin.addBlock(block1);
//console.log(JSON.stringify(myBitcoin,null,4));
block2=new Block (2,"11/02/2021",{amount:10});
myBitcoin.addBlock(block2);
console.log(JSON.stringify(myBitcoin,null,4));
console.log("is it valid "+myBitcoin.isChainValid());
myBitcoin.chain[2].data=100;
console.log(JSON.stringify(myBitcoin,null,4));
console.log("is it valid "+myBitcoin.isChainValid());
myBitcoin.chain[2].data={amount:10};
console.log("is it valid "+myBitcoin.isChainValid());



