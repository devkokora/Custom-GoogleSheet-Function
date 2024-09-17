# GoogleSheets Custom API Words Translation (EN-TH)

Creating a Google Sheet with 3,000+ English vocabulary words with Part of Speech and Thai translation

Set Up Google Sheets with Google Apps Script

1. Create a Google Sheet:
2. Put all the words you want to translate into one of the columns.
3. Custom Google Apps Script: (Part of Speech - API: https://victorribeiro.com/pos/)
   Go to Extensions > Apps Script [Custom GoogleSheet Script](script.js)
4. Use the Custom Function
   Use the formula in a cell like this "=getPartOfSpeech(selected cell)"
5. Use the built-in GoogleSheet translate Function (Sample usage: https://support.google.com/docs/answer/3093331)
   eg. GOOGLETRANSLATE( A1, "en", "th" ) Enlish -> Thai
