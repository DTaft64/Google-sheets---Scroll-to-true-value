function notOnOpen() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();     // Active spreadsheet
  var sheet = spreadsheet.getSheetByName("Stocks & Flows");    // Sheet named "Stocks & Flows"

  if (!sheet) {                                                // SET SHEET NAME HERE
    throw new Error("Sheet 'Stocks & Flows' not found.");      // Error if sheet doesn't exist
  }
  var lastRow = sheet.getLastRow();                            // Last row with data
  var columnG = sheet.getRange(1, 7, lastRow).getValues();     // Values in column G, rows 1 to lastRow

  for (var i = 0; i < lastRow; i++) {                          // Loop column G
    if (columnG[i][0] === true) {                              // Check if value is true
      var targetRow = Math.min(lastRow, i + 23);               // Target row appers at the bottom of the screen, so +23 rows to move to the top of the screen
      sheet.setActiveRange(sheet.getRange("G" + targetRow));   // Set active cell to target row in column G
      break;                                                   // Stop after first true
    }
  }
}
