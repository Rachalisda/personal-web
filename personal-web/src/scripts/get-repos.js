// app/data/constants.js
const GITHUB_PROFILE = "https://github.com/Rachalisda";

const username = GITHUB_PROFILE.split("/").pop(); // "Rachalisda"

const fs = require("fs");
const path = require("path");
const fetch = (...args) => import('node-fetch').then(mod => mod.default(...args));
const projectRoot = path.resolve(__dirname,'..','..'); // Adjust as needed
const dirPath = path.join(projectRoot, 'src','app', 'data');

async function saveRepos() {


  console.log(dirPath)
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const repos = await res.json();
  const publicRepos = repos.filter(repo => !repo.private);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const filePath = path.join(dirPath, 'github-repos.json');
  fs.writeFileSync(filePath, JSON.stringify(publicRepos, null, 2));
  console.log("✅ GitHub repos saved to", filePath);
}

saveRepos().catch(console.error);
