import { PublicKey, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export const showBalance = async (publicKey: PublicKey) => {
    const conn = new Connection("http://localhost:8899", "confirmed");
    const balance = await conn.getAccountInfo(publicKey);
    return balance.lamports/LAMPORTS_PER_SOL;
}
// (async () => {
//     const balance = await showBalance(new PublicKey("BvaQfq8z6hXCjpj1bzgyiRyCjFAxzV1iabJmoMmazfBG"));
//     console.log(balance);
// })()