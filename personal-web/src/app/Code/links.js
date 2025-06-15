const fs = require('fs');
const path = require('path');

const dataDir = path.join(process.cwd(), 'src', 'app', 'data');
const excludedRoutes = ['privacy', 'terms'];
const pagesDir = path.join(__dirname, '..');
const links = [];

function walk(dir, base = '') {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    const isExcluded = excludedRoutes.includes(base);

    if (stat.isDirectory()) {
      if (!isExcluded) {
        walk(fullPath, path.join(base, file));
      }
    } else if (file === 'page.js' && !isExcluded) {
      // ✅ Skip dynamic route folders like [slug]
      if (base.includes('[') || base.includes(']')) continue;

      const route = base === '' ? '/' : `/${base}`;
      links.push({
        label: route === '/' ? 'Home' : capitalize(base),
        href: route,
      });
    }
  }
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

walk(pagesDir);
console.log(links);

// Reorder links so Home is first and Contact is last
const home = links.find(link => link.label.toLowerCase() === 'home');
const contact = links.find(link => link.label.toLowerCase() === 'contact');
const middle = links.filter(link =>
  link.label.toLowerCase() !== 'home' && link.label.toLowerCase() !== 'contact'
);

const orderedLinks = [
  ...(home ? [home] : []),
  ...middle,
  ...(contact ? [contact] : []),
];

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync(
  path.join(dataDir, 'links.json'),
  JSON.stringify(orderedLinks, null, 2)
);
