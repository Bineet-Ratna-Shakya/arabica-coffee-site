import { google } from "googleapis";
import type { MenuItem, MenuCategory } from "@/types";

const VALID_CATEGORIES: MenuCategory[] = [
  "hot-coffee", "cold-iced-coffee", "smoothies", "blended-coffee",
  "coffee-alternatives", "healthy-breakfast", "matcha", "ice-cream",
  "water", "fresh-juice", "bakery",
];

// Maps human-readable sheet values → MenuCategory slugs
const CATEGORY_ALIASES: Record<string, MenuCategory> = {
  "hot coffee": "hot-coffee",
  "hot-coffee": "hot-coffee",
  "cold & iced coffee": "cold-iced-coffee",
  "cold iced coffee": "cold-iced-coffee",
  "cold-iced-coffee": "cold-iced-coffee",
  "iced coffee": "cold-iced-coffee",
  smoothies: "smoothies",
  smoothie: "smoothies",
  "blended coffee": "blended-coffee",
  "blended-coffee": "blended-coffee",
  "coffee alternatives": "coffee-alternatives",
  "coffee-alternatives": "coffee-alternatives",
  "healthy breakfast": "healthy-breakfast",
  "healthy-breakfast": "healthy-breakfast",
  matcha: "matcha",
  "ice cream": "ice-cream",
  "ice-cream": "ice-cream",
  icecream: "ice-cream",
  water: "water",
  "fresh juice": "fresh-juice",
  "fresh-juice": "fresh-juice",
  "bakery products": "bakery",
  "bakery-products": "bakery",
  bakery: "bakery",
};

function getGoogleSheetsClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !privateKey) {
    throw new Error("Missing Google Sheets credentials in environment variables");
  }

  const auth = new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  return google.sheets({ version: "v4", auth });
}

function parseBoolean(value: string | undefined): boolean {
  if (!value) return false;
  const normalized = value.toString().toLowerCase().trim();
  return normalized === "true" || normalized === "yes" || normalized === "1";
}

function parsePrice(value: string | undefined): number {
  if (!value) return 0;
  // Remove currency symbols and parse
  const cleaned = value.toString().replace(/[$,]/g, "").trim();
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}

function normalizeCategory(raw: string): MenuCategory | null {
  const key = raw.toLowerCase().trim();
  return CATEGORY_ALIASES[key] ?? null;
}

export async function fetchMenuItemsFromSheet(): Promise<MenuItem[]> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_MENU_SHEET_NAME || "Menu";

  if (!spreadsheetId) {
    throw new Error("Missing GOOGLE_SHEETS_SPREADSHEET_ID environment variable");
  }

  const sheets = getGoogleSheetsClient();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!A:H`, // Columns A through H
  });

  const rows = response.data.values;

  if (!rows || rows.length < 2) {
    // No data (only header or empty)
    return [];
  }

  // First row is headers, skip it
  const [headers, ...dataRows] = rows;

  // Map header names to indices for flexibility
  const headerMap: Record<string, number> = {};
  headers.forEach((header: string, index: number) => {
    headerMap[header.toLowerCase().trim()] = index;
  });

  const menuItems: MenuItem[] = [];

  for (const row of dataRows) {
    // Skip empty rows
    if (!row || row.length === 0) continue;

    const id = row[headerMap["id"]]?.toString().trim();
    const name = row[headerMap["name"]]?.toString().trim();
    const description = row[headerMap["description"]]?.toString().trim();
    const priceRaw = row[headerMap["price"]];
    const categoryRaw = row[headerMap["category"]]?.toString().toLowerCase().trim();
    const image = row[headerMap["image"]]?.toString().trim();
    const isNewRaw = row[headerMap["isnew"]];
    const isPopularRaw = row[headerMap["ispopular"]];

    // Validate required fields
    if (!id || !name || !description) {
      console.warn(`Skipping row with missing required fields: id=${id}, name=${name}`);
      continue;
    }

    // Normalize and validate category
    const category = categoryRaw ? normalizeCategory(categoryRaw) : null;
    if (!category) {
      console.warn(`Skipping row with invalid category: id=${id}, category=${categoryRaw}`);
      continue;
    }

    const price = parsePrice(priceRaw);

    const menuItem: MenuItem = {
      id,
      name,
      description,
      price,
      category,
    };

    // Optional fields
    if (image) {
      menuItem.image = image;
    }

    const isNew = parseBoolean(isNewRaw);
    const isPopular = parseBoolean(isPopularRaw);

    if (isNew) {
      menuItem.isNew = true;
    }

    if (isPopular) {
      menuItem.isPopular = true;
    }

    menuItems.push(menuItem);
  }

  return menuItems;
}
