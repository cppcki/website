import { google } from "googleapis";

type SheetData = {
  title: string;
  value: string;
  date: string;
  time: string;
  location: string;
}

type Sheet = {
  range: string;
};

export const getDataFromSheets = async (data: Sheet[]): Promise<SheetData[]> => {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      undefined,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target,
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });

    const response = await sheets.spreadsheets.values.batchGet({
      spreadsheetId: process.env.SPREADSHEET_ID,
      ranges: data.map(({ range }) => `${process.env.SPREADSHEET_NAME}!${range}`),
    });

    const rows = response.data.valueRanges?.map((range) => {
      return range.values?.map((row) => {
        return row;
      });
    });

    const sheet = rows?.map((row) => {
      return {
        title: row![0][0].trim(),
        value: row![1][0],
      };
    });

    return sheet! as SheetData[];
  } catch (err) {
    console.error(err);
  }

  return [];
};