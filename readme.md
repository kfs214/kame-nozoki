# KAme-nozoki(#94D6DA)

This project provides functionality to write JSON data from incoming POST requests to a Google Sheets spreadsheet via a Google Apps Script (GAS) endpoint.\
Additionally, it supports development using clasp, enabling easier management and deployment of the script.

## Features

- Accepts incoming POST requests to a publicly available endpoint hosted on Google Apps Script.
- Writes the JSON data from the request body to a specified Google Sheets spreadsheet.
- Supports development using clasp, allowing for easier code management and deployment.

## Installation

### Setting Up clasp

```sh
npm install -g @google/clasp
```

### Google Docs Setup

1. Create Google Sheet
2. Obtain the Script ID:
   1. Go to the Google Sheet > Extensions > Apps Script > Project Settings > IDs

### Setting Up This Repository

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Create a `.clasp.json` file:
   1. Rename `.clasp.json.example`.
   2. Edit `scriptId` accordingly.

## Using clasp Commands

### Login

This command logs in and authorizes management of your Google account's Apps Script projects. Once it is run, you are asked to sign into a Google account where your Apps Script projects are stored.

```sh
clasp login
```

### Upload a script project

This command uploads all of a script project's files from your computer to Google Drive.

```sh
clasp push
```

### Open the project in the Apps Script editor

This command opens a script project in the Apps Script editor. The editor is launched as a new tab in your default web browser.

```sh
clasp open
```

### more information

For more information, visit [Use the command line interface with clasp](https://developers.google.com/apps-script/guides/clasp).
