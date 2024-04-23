"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.airdrop = void 0;
const web3_js_1 = require("@solana/web3.js");
const airdrop = (address, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const publicKey = new web3_js_1.PublicKey(address);
    const conn = new web3_js_1.Connection("http://localhost:8899", "confirmed");
    const signature = yield conn.requestAirdrop(publicKey, amount * web3_js_1.LAMPORTS_PER_SOL);
    yield conn.confirmTransaction(signature);
});
exports.airdrop = airdrop;
(0, exports.airdrop)("BvaQfq8z6hXCjpj1bzgyiRyCjFAxzV1iabJmoMmazfBG", 10);
//# sourceMappingURL=index.js.map