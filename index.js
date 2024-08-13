import { input } from "@inquirer/prompts";
import * as fs from "fs";
import * as qr from "qr-image";

async function main() {
     const userInputLink = await getUserInput();
     saveUserInputToFile(userInputLink);
     createQRCode(userInputLink);
}

async function getUserInput() {
     return await input({
          message: "What's your link? "
     })
}

function saveUserInputToFile(input) {
     fs.appendFile("user-input-history.txt", `${input}\n`, () => {
          console.log('\nLink appended to history document.');
     })
}

function createQRCode(input){

     const qrCode = qr.image(input, { type: 'png' }); // creates image data
     const writeStream = fs.createWriteStream('qr-code.png');
     qrCode.pipe(writeStream)
     
     writeStream.on("close", () => {
          console.log("PNG saved!");
     })
}

main();
