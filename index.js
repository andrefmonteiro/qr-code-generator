import { input } from "@inquirer/prompts";
import { appendFile, createWriteStream } from "fs";
import { image as qrImage } from "qr-image";

let qrCodeCounter = 1;
const historyFile = "user-input-history.txt";


while (true) {
     const userInputLink = await getUserInput();
     await saveUserLinkToFile(userInputLink, historyFile);
     await createQRCode(userInputLink);
}

async function getUserInput() {
     return await input({
          message: "What's your link? "
     })
}

async function saveUserLinkToFile(input, destFile) {
     await appendFile(destFile, `${input}\n`, () => { // try without await
          console.log('Link appended to history document.\n');
     })
}

async function createQRCode(link) {
     return new Promise((resolve, reject) => {

          const qrCodeImageData = qrImage(link, { type: 'png' }); // creates image data
          const writeStream = createWriteStream(`./generated-qr-codes/qr-code-${qrCodeCounter}.png`);
          qrCodeImageData.pipe(writeStream)
          qrCodeCounter++; // += 1

          writeStream.on("close", () => {
               console.log("PNG saved!");
               resolve();
          });

          writeStream.on("error", (err) => {
               console.log("Error saving PNG:", err);
               reject(err);
          });
     });
}
