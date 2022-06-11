import { createHash } from "crypto";
import { BlockType } from "./types";
import { log } from "./utils";

class BlockChain {
  private _transactionPool: string[];
  private _chain: BlockType[];

  constructor() {
    this._transactionPool = [];
    this._chain = [];
    this.createBlock(0);
  }

  get chain() {
    return this._chain;
  }

  private _previousHash = (): string => {
    if (!this._chain.length) return this._encryptSha256({});
    return this._encryptSha256(this._chain.slice(-1)[0]);
  };

  createBlock = (nonce: number) => {
    const block = {
      timestamp: JSON.stringify(new Date()),
      transactions: this._transactionPool,
      nonce,
      previousHash: this._previousHash(),
    };
    this.chain.push(block);

    return block;
  };

  private _encryptSha256 = (block: BlockType | {}) => {
    const hash = createHash("sha256");
    hash.update(JSON.stringify(block));
    return hash.digest("hex");
  };
}

const blockChain = new BlockChain();
log(blockChain.chain);

blockChain.createBlock(5);
log(blockChain.chain);

blockChain.createBlock(6);
log(blockChain.chain);
