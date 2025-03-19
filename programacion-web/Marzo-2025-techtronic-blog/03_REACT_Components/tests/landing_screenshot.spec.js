// @ts-check
import { test, expect } from "@playwright/test";

// Tailwind breakpoints: <https://v1.tailwindcss.com/docs/breakpoints>

const MEDIAQUERIES_BREAKPOINTS = {
  sm: 640 - 2,  // => @media (min-width: 640px) { ... }
  md: 768 - 2,  // => @media (min-width: 768px) { ... }
  lg: 1024 - 2, // => @media (min-width: 1024px) { ... }
  xl: 1280 - 2, // => @media (min-width: 1280px) { ... }
  fullhd: 1920,
};

test("screenshot viewport", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  const { width: _, height: originalHeight } = page.viewportSize();

  for (const [key, width] of Object.entries(MEDIAQUERIES_BREAKPOINTS)) {
    await page.setViewportSize({ width, height: originalHeight });
    await expect(page).toHaveScreenshot(`landing-${key}.png`, {
      fullPage: true,
    });
  }
});
