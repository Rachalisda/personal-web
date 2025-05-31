export async function GET() {
  const username = 'rachalisda'; // ← use your GitHub username
  const token = process.env.GITHUB_TOKEN;

  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      ...(token ? { Authorization: `token ${token}` } : {}),
    },
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'GitHub API error' }), {
      status: res.status,
    });
  }

  const data = await res.json();

  // Optional: filter out forks/private repos
  const publicRepos = data.filter(repo => !repo.fork && !repo.private);

  return Response.json(publicRepos);
}
