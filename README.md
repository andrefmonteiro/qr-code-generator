# QR Code Generator

This is a simple QR Code Generator built with Node.js. The application allows users to input a URL via the command line, saves the URL to a text file, and generates a QR code image (in PNG format) from the URL.

## Features

- **User Input**: Prompts the user to enter a URL via the command line.
- **Save URL**: Saves the entered URL to a text file (`user-input-links.txt`).
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

3. A QR code image will be generated and saved as qr-code.png in the project directory.
Note: only the most recently generated image will be saved. If you generate multiple images, they will be overriden by the most recent one.


## Dependencies
- @inquirer/prompts: Used to prompt the user for input via the command line.
- qr-image: Used to generate QR code images.
- fs: Node.js native module for file system operations.

## Contributing
If you'd like to contribute to this project, please fork the repository, create a new branch for your feature or bug fix, and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.