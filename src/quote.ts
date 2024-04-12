// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getQuote(): Message {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastRowIndex = sheet.getLastRow();
  if (lastRowIndex < 2) {
    Logger.log('valid quote not found');
    return;
  }

  const quoteAuthorPairs = sheet
    .getRange(`B2:C${lastRowIndex}`)
    .getDisplayValues()
    .filter(([quote]) => quote) as [string, string][];

  if (quoteAuthorPairs.length === 0) {
    Logger.log('valid quote not found');
    return;
  }

  const [randomQuote, author] =
    quoteAuthorPairs[Math.floor(Math.random() * quoteAuthorPairs.length)];

  return {
    type: 'text',
    text: `今日の名言\n\"${randomQuote}\"${author ? `\n––${author}` : ''}`,
  };
}
