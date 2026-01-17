/**
 * GitHub API Integration
 * Free tier - No API key required for public data
 * Rate limit: 60 requests/hour without auth
 */

export interface GitHubRepo {
  name: string;
  full_name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
  owner_avatar: string;
}

export async function getTrendingRepos(
  language?: string,
): Promise<GitHubRepo[]> {
  try {
    const query = language ? `language:${language} stars:>1000` : "stars:>5000";

    const response = await fetch(
      `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=10`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub repos");
    }

    const data = await response.json();

    return data.items.map((repo: any) => ({
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description || "No description available",
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language || "Unknown",
      url: repo.html_url,
      owner_avatar: repo.owner.avatar_url,
    }));
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return getDemoRepos();
  }
}

function getDemoRepos(): GitHubRepo[] {
  return [
    {
      name: "react",
      full_name: "facebook/react",
      description: "The library for web and native user interfaces",
      stars: 228000,
      forks: 46500,
      language: "JavaScript",
      url: "https://github.com/facebook/react",
      owner_avatar: "https://avatars.githubusercontent.com/u/69631?v=4",
    },
    {
      name: "vue",
      full_name: "vuejs/vue",
      description: "Vue.js is a progressive JavaScript framework",
      stars: 207000,
      forks: 33700,
      language: "TypeScript",
      url: "https://github.com/vuejs/vue",
      owner_avatar: "https://avatars.githubusercontent.com/u/6128107?v=4",
    },
    {
      name: "tensorflow",
      full_name: "tensorflow/tensorflow",
      description: "An Open Source Machine Learning Framework",
      stars: 185000,
      forks: 74000,
      language: "Python",
      url: "https://github.com/tensorflow/tensorflow",
      owner_avatar: "https://avatars.githubusercontent.com/u/15658638?v=4",
    },
  ];
}
