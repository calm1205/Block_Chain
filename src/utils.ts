import { BlockType } from "./types";

export const log = (chains: BlockType[]) => {
  chains.forEach((c, i) => {
    console.log("_".repeat(15), "Chain", i, "_".repeat(15));
    console.table(c);
  });
  console.log("\n\n\n");
};
