# GoogleSheets Custom API Words Translation (EN-TH)

Creating a Google Sheet with [The Oxford 3000](https://github.com/sapbmw/The-Oxford-3000?tab=readme-ov-file) vocabulary words with Part of Speech and Thai translation
</br>

[Preview CSV file](Words.csv)
</br>

<ins><b>Set Up Google Sheets with Google Apps Script</b></ins>
1. Create a Google Sheet:
2. Put all the words you want to translate into one of the columns.
3. Custom Google Apps Script: (Part of Speech - [API Page](https://victorribeiro.com/pos/))
   </br>
   Go to Extensions > Apps Script [Custom GoogleSheet Script](script.js)
4. Custom Function
   </br>
   Use the formula in a cell like this "=getPartOfSpeech(selected cell)"
5. Built-in GoogleSheet Function (Google Translation: [Usage](https://support.google.com/docs/answer/3093331))
   </br>
   eg. GOOGLETRANSLATE( A1, "en", "th" ) English -> Thai
