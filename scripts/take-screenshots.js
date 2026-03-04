const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:3000';

const PAGES = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/menu', name: 'menu' },
  { path: '/academy', name: 'academy' },
  { path: '/gallery', name: 'gallery' },
  { path: '/testimonials', name: 'testimonials' },
  { path: '/contact', name: 'contact' },
  { path: '/locations', name: 'locations' },
  { path: '/privacy', name: 'privacy' },
  { path: '/terms', name: 'terms' },
];

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          // Scroll back to top for the screenshot
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });
}

async function takeScreenshots() {
  const outputDir = path.join(__dirname, '..', 'screenshots');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Disable animations so elements are visible immediately
  await page.evaluateOnNewDocument(() => {
    // Force prefers-reduced-motion so Framer Motion shows final state
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        animation-delay: 0s !important;
        animation-duration: 0.001s !important;
        transition-delay: 0s !important;
        transition-duration: 0.001s !important;
      }
    `;
    document.addEventListener('DOMContentLoaded', () => {
      document.head.appendChild(style);
    });

    // Override matchMedia to report prefers-reduced-motion
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = function(query) {
      if (query === '(prefers-reduced-motion: reduce)') {
        return {
          matches: true,
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => false,
        };
      }
      return originalMatchMedia.call(window, query);
    };
  });

  console.log(`Taking screenshots of ${PAGES.length} pages...\n`);

  for (const { path: pagePath, name } of PAGES) {
    const url = `${BASE_URL}${pagePath}`;
    console.log(`Capturing: ${name} (${url})`);

    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

      // Wait for initial render
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Scroll down the entire page to trigger lazy-loaded images and
      // any intersection-observer-based reveals, then scroll back to top
      await autoScroll(page);

      // Wait for lazy images to load after scrolling
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Force all Framer Motion elements to be visible
      await page.evaluate(() => {
        // Make all elements with opacity 0 visible (Framer Motion initial state)
        document.querySelectorAll('[style*="opacity: 0"], [style*="opacity:0"]').forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
        // Also fix elements hidden by Framer Motion data attributes
        document.querySelectorAll('[data-framer-appear-id]').forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      });

      await new Promise(resolve => setTimeout(resolve, 500));

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
