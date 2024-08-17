# QR Code Generator

CLI tool to generate PNG QR Codes.

## Features

- **User Input**: Prompts the user to enter a URL via the command line.
- **Save URL**: Saves the entered URL to a text file.
- **Generate QR Code**: Generates a QR code image from the entered URL and saves it as a PNG file.

## Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/andrefmonteiro/qr-code-generator.git

2. Navigate to the project directory:

   ```bash
   cd qr-code-generator

3. Install the required dependencies:

   ```bash
   npm install
## Usage
1. Run the application:

   ```bash
     node index.js

2. When prompted, enter the URL you want to generate a QR code for.

3. The URL will be saved to `user-input-history.txt`.

3. A QR code image will be generated and saved in a `/generated-qr-codes` directory.
4. The application runs on a loop, to generate multiple QR Codes.
   
⚠️ When stopping and re-running the application, subsequent QR code generations will replace the ones with the same file name. Working on a feature to generate new folders.


## Dependencies
- [@inquirer/prompts](https://www.npmjs.com/package/inquirer): Used to prompt the user for input via the command line.
- [qr-image](https://www.npmjs.com/package/qr-image): Used to generate QR code images.
- [fs](https://nodejs.org/api/fs.html): Node.js native module for file system operations.

## Contributing
If you'd like to contribute to this project, please fork the repository, create a new branch for your feature or bug fix, and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
