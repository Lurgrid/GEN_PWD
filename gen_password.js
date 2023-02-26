import pkg from "node-forge";
const { hmac } = pkg;
import { encode } from 'base85';

if (process.argv.length < 5) {
    console.error("*** Syntax: %s [password_to_crypte] [hash seed] [password]", process.argv[1])
    process.exit()
}

const h1 = hmac.create();
h1.start("sha1", process.argv[3] + process.argv[4])
h1.update(process.argv[2]);
const tmp = encode(h1.digest().toHex());
console.log(tmp)
