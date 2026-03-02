const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:3000';

const PAGES = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/menu', name: 'menu' },
  { path: '/menu/trending', name: 'menu-trending' },
  { path: '/menu/1', name: 'menu-item-espresso' },
  { path: '/menu/category/coffee', name: 'menu-category-coffee' },
  { path: '/blog', name: 'blog' },
  { path: '/blog/the-art-of-pour-over-coffee', name: 'blog-post' },
  { path: '/gallery', name: 'gallery' },
  { path: '/events', name: 'events' },
  { path: '/testimonials', name: 'testimonials' },
  { path: '/careers', name: 'careers' },
  { path: '/contact', name: 'contact' },
  { path: '/faq', name: 'faq' },
  { path: '/privacy', name: 'privacy' },
  { path: '/terms', name: 'terms' },
];

async function takeScreenshots() {
  const outputDir = path.join(__dirname, '..', 'screenshots');

  // Create screenshots directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set viewport to a common desktop size
  await page.setViewport({ width: 1440, height: 900 });

  console.log(`Taking screenshots of ${PAGES.length} pages...\n`);

  for (const { path: pagePath, name } of PAGES) {
    const url = `${BASE_URL}${pagePath}`;
    console.log(`Capturing: ${name} (${url})`);

    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

      // Wait a bit for animations to settle
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Take full page screenshot
      const screenshotPath = path.join(outputDir, `${name}.png`);
      await page.screenshot({
        path: screenshotPath,
        fullPage: true
      });

      console.log(`  ✓ Saved: ${screenshotPath}`);
    } catch (error) {
      console.log(`  ✗ Error: ${error.message}`);
    }
  }

  await browser.close();
  console.log(`\nDone! Screenshots saved to: ${outputDir}`);
}

takeScreenshots().catch(console.error);
