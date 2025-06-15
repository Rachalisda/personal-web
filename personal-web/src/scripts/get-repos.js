const fs = require("fs");
const path = require("path");
const fetch = (...args) => import('node-fetch').then(mod => mod.default(...args));

async function saveRepos() {
  const res = await fetch('http://localhost:3000/api/repos');
  const repos = await res.json();

  const dirPath = path.join(process.cwd(), '..', 'app', 'data');
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const filePath = path.join(dirPath, 'github-repos.json');
  fs.writeFileSync(filePath, JSON.stringify(repos, null, 2));
  console.log("✅ GitHub repos saved to", filePath);
}

saveRepos().catch(console.error);
