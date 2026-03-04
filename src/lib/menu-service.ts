import { unstable_cache } from "next/cache";
import { fetchMenuItemsFromSheet } from "./google-sheets";
import { menuItems as staticMenuItems } from "./data";
import type { MenuItem } from "@/types";

const REVALIDATE_SECONDS = parseInt(process.env.MENU_REVALIDATE_SECONDS || "60", 10);

/**
 * Fetches menu items from Google Sheets with caching.
 * Falls back to static data if the API call fails.
 */
async function fetchMenuItems(): Promise<MenuItem[]> {
  try {
    const items = await fetchMenuItemsFromSheet();

    if (items.length === 0) {
      console.warn("[Menu Service] Google Sheet returned empty data, using static fallback");
      return staticMenuItems;
    }

    return items;
  } catch (error) {
    console.error("[Menu Service] Failed to fetch from Google Sheets:", {
      message: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString(),
    });

    // Return static data as fallback
    return staticMenuItems;
  }
}

/**
 * Cached menu items fetcher.
 * Revalidates every 60 seconds (configurable via MENU_REVALIDATE_SECONDS).
 */
export const getMenuItems = unstable_cache(
  fetchMenuItems,
  ["menu-items"],
  {
    revalidate: REVALIDATE_SECONDS,
    tags: ["menu"],
  }
);
