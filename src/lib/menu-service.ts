import { unstable_cache } from "next/cache";
import { fetchMenuItemsFromSheet } from "./google-sheets";
import { menuItems as staticMenuItems } from "./data";
import type { MenuItem, MenuCategory } from "@/types";

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

/**
 * Get a single menu item by ID.
 */
export async function getMenuItemById(id: string): Promise<MenuItem | undefined> {
  const items = await getMenuItems();
  return items.find((item) => item.id === id);
}

/**
 * Get menu items filtered by category.
 */
export async function getMenuItemsByCategory(category: MenuCategory): Promise<MenuItem[]> {
  const items = await getMenuItems();
  return items.filter((item) => item.category === category);
}

/**
 * Get trending menu items (popular or new).
 */
export async function getTrendingMenuItems(): Promise<MenuItem[]> {
  const items = await getMenuItems();
  return items.filter((item) => item.isPopular || item.isNew);
}

/**
 * Get featured menu items for homepage preview.
 */
export async function getFeaturedMenuItems(limit: number = 4): Promise<MenuItem[]> {
  const items = await getMenuItems();
  return items
    .filter((item) => item.isPopular || item.isNew)
    .slice(0, limit);
}
