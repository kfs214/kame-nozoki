# WAsabi-iro(#A8BF93)

This project automates the process of sending weekly garbage collection reminders to residents using the LINE Messaging API. Additionally, it includes a feature to send quotes from residents, sourced via Google Forms and managed through Google Apps Script.

## Features

- Sends weekly garbage collection reminders on designated days.
- Integrates with LINE Messaging API for message delivery.
- Includes residents' quotes sourced from Google Forms.
- Utilizes Google Apps Script to manage data and select random quotes.

## Installation

### Setting Up clasp

```sh
npm install -g @google/clasp
```

### Google Docs Setup

1. Create a Google Form.
2. Connect the Form to Google Sheets:
   1. Google Forms > Link Sheets
3. Obtain the Script ID:
   1. Go to the linked Google Sheet > Extensions > Apps Script > Project Settings > IDs

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
