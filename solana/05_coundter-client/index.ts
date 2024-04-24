import {
    Connection,
    PublicKey,
    LAMPORTS_PER_SOL,
    Keypair,
    SystemProgram,
    Transaction,
    sendAndConfirmTransaction,
    TransactionInstruction
} from "@solana/web3.js"
// import {RPC_URL} from "../"

import { airdrop } from "../01_airdrop"
import * as borsh from "borsh";

const CONTRACT_PROGRAM_ID = "GjWciRj8KPDYM1Q76nwvjos6Qjex1Je65HRxKYqFG4qM";

class GreetingAccount {
    counter = 0
    constructor(fields: {counter: number} | undefined = undefined) {
        if (fields) {
            this.counter = fields.counter;
        }
    }
}

const GreetingSchema = new Map([
    [GreetingAccount, {kind: 'struct', fields: [['counter', 'u32']]}],
]);

const createDataAccount = async () => {
    const keypair = Keypair.generate();
}