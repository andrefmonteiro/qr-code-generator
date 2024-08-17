# QR Code Generator

This is a simple QR Code Generator built with Node.js.
The application allows users to input a URL via the command line, saves the URL to a text file, and generates a QR code image (in PNG format) from the URL.

## Features

- **User Input**: Prompts the user to enter a URL via the command line.
- **Save URL**: Saves the entered URL to a text file (`user-input-history.txt`).
- **Generate QR Code**: Generates a QR code image from the entered URL and saves it as a PNG file (`qr-code.png`).

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

3. The URL will be saved to user-input-history.txt.

4. A QR code image will be generated and saved in the `generated-qr-codes` directory.

5. The application loops and you can generate more QR codes.

:warning: **Note:** If you stop the application, be minfdful that when you re-run it, the newly generated QR Codes will replace the previously generated ones (it will substitute on the same file name). Please save a copy of those files, should you wish to keep them. We're working on features that save your previously generated QR codes, whent the application is re-run.

## Dependencies
- [@inquirer/prompts](https://www.npmjs.com/package/inquirer): Used to prompt the user for input via the command line.
- [qr-image](https://www.npmjs.com/package/qr-image): Used to generate QR code images.
- [fs](https://nodejs.org/api/fs.html): Node.js native module for file system operations.

## Contributing
If you'd like to contribute to this project, please fork the repository, create a new branch for your feature or bug fix, and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.