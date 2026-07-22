/**
 * TIFF website — consultation form receiver.
 *
 * Paste this into the Apps Script editor of the Google Sheet you want leads
 * to land in (Extensions > Apps Script), then deploy it as a Web App.
 * See SETUP.md in this folder for the full step-by-step.
 *
 * The site posts JSON like:
 * {
 *   "source": "hotel-wedding-decor",
 *   "submittedAt": "2026-07-22T10:00:00.000Z",
 *   "data": { "ngayCuoi": "2026-12-20", "venue": "...", ... }
 * }
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var payload;
  try {
    payload = JSON.parse(e.postData.contents);
  } catch (err) {
    return jsonResponse({ ok: false, error: "Invalid JSON payload" });
  }

  var source = payload.source || "unknown";
  var submittedAt = payload.submittedAt || new Date().toISOString();
  var data = payload.data || {};

  ensureHeaderRow(sheet, data);

  var headers = sheet
    .getRange(1, 1, 1, sheet.getLastColumn())
    .getValues()[0];

  var row = headers.map(function (header) {
    if (header === "Timestamp") return submittedAt;
    if (header === "Source") return source;
    return data[header] !== undefined ? data[header] : "";
  });

  sheet.appendRow(row);

  return jsonResponse({ ok: true });
}

function doGet() {
  return jsonResponse({ ok: true, message: "TIFF consultation endpoint is live." });
}

/**
 * Makes sure the sheet's first row has: Timestamp, Source, then one column
 * per form field key seen so far. New field names encountered later (e.g. a
 * page with different fields) get appended as new columns automatically.
 */
function ensureHeaderRow(sheet, data) {
  var lastColumn = sheet.getLastColumn();

  if (sheet.getLastRow() === 0 || lastColumn === 0) {
    var initialHeaders = ["Timestamp", "Source"].concat(Object.keys(data));
    sheet.appendRow(initialHeaders);
    return;
  }

  var headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  var missing = Object.keys(data).filter(function (key) {
    return headers.indexOf(key) === -1;
  });

  missing.forEach(function (key) {
    sheet.getRange(1, sheet.getLastColumn() + 1).setValue(key);
  });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
