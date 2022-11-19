import { GoogleSpreadsheet } from "google-spreadsheet";

const document = new GoogleSpreadsheet(process.env.CKI_MASTER_EVENT_SHEET);

const renameHeader: Record<string, string> = {
  "Event": "title"
}

export async function getCurrentMonthEvents() {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
    throw new Error("Failed to get Service Account's email");
  }

  if (!process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY) {
    throw new Error("Failed to get Service Account's private key");
  }

  await document.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
  });

  await document.loadInfo();

  const currentDate = new Date();
  const sheetTitle = currentDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  });
  
  const sheet = document.sheetsByTitle[sheetTitle];

  const rows = await sheet.getRows();
  const headers = sheet.headerValues;

  const events = [];

  for (const row of rows) {
    const event: any = {};

    for (const header of headers) {
      const cell = row[header];

      if (cell !== undefined) {
        const key = renameHeader[header] || header.toLowerCase();
        event[key] = cell;
      }
    }

    events.push(event);
  }
}