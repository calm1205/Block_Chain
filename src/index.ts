type BlockType = {
  timestamp: Date;
  transactions: string[];
  nonce: number;
  previousHash: string;
};

class BlockChain {
  private _transactionPool: string[];
  private _chain: BlockType[];

  constructor(nonce?: number, previousHash?: string) {
    this._transactionPool = [];
    this._chain = [];
    this.createBlock(0, "init hash");
  }

  get chain() {
    return this._chain;
  }

  public createBlock = (nonce: number, previousHash: string) => {
    const block = {
      timestamp: new Date(),
      transactions: this._transactionPool,
      nonce,
      previousHash,
    };
    this.chain.push(block);

    return block;
  };
}

function log(chains: BlockType[]) {
  chains.forEach((c, i) => {
    console.log("_".repeat(15), "Chain", i, "_".repeat(15));
    console.table(c);
  });
  console.log("\n\n\n");
}

const blockChain = new BlockChain();
log(blockChain.chain);
blockChain.createBlock(5, "hash 1");
log(blockChain.chain);
blockChain.createBlock(6, "hash 3");
log(blockChain.chain);
