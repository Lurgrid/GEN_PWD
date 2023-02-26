import bip from "bip39";
import dotenv from 'dotenv';
import pkg from 'node-forge';
const { sha512 } = pkg.md;
dotenv.config({ override: true });

if (process.argv.length < 3 || !bip.validateMnemonic(process.argv[2])) {
    console.error("*** Syntax: %s [seed phrase] [?password]", process.argv[1])
    process.exit()
}

const sha = sha512.create();
const seed = await bip.mnemonicToSeed(process.argv[2], process.argv[3]);
sha.update(seed.toString('hex'));

console.log(sha.digest().toHex());