import { Connection, Keypair, PublicKey, LAMPORTS_PER_SOL, Transaction, SystemProgram, sendAndConfirmTransaction } from "@solana/web3.js";
import { airdrop } from "../01_airdrop";
import { showBalance } from "../02_show_balance";
export const transferSol = async (from: Keypair, to: PublicKey, amount: number) => {
    const connection = new Connection("http://localhost:8899", "confirmed");
    const transaction = new Transaction();
     
    const instruction = SystemProgram.transfer({fromPubkey: from.publicKey, toPubkey: to, lamports: amount * LAMPORTS_PER_SOL});

    transaction.add(instruction);
    await sendAndConfirmTransaction(connection, transaction, [
        from
    ])
    console.log("done");
}

const secret = Uint8Array.from([217,98,145,157,27,89,94,233,25,130,214,107,99,33,120,170,186,203,181,88,68,228,88,233,31,106,174,43,40,234,174,37,246,250,235,11,33,83,196,210,47,213,248,187,190,150,165,254,194,116,79,218,76,145,208,244,44,210,162,12,167,49,224,123]);
const fromkeyPair = Keypair.fromSecretKey(secret);;
const toPublicKey = new PublicKey("BvaQfq8z6hXCjpj1bzgyiRyCjFAxzV1iabJmoMmazfBG");

(async () => {
    await airdrop(fromkeyPair.publicKey, 10);
    const initBalance = await showBalance(fromkeyPair.publicKey);
    console.log(initBalance);
    const initBalanceTo = await showBalance(toPublicKey);
    console.log(initBalanceTo);

    await transferSol(fromkeyPair, toPublicKey, 2);

    const initBalance2 = await showBalance(fromkeyPair.publicKey);
    console.log(initBalance2);
    const initBalanceTo2 = await showBalance(toPublicKey);
    console.log(initBalanceTo2);
})()