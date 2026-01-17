import type { ComponentProps } from "@json-render/react";

interface TrendingReposProps {
  language?: string;
  dataPath: string;
}

export function TrendingRepos({ element }: ComponentProps<TrendingReposProps>) {
  const { language, dataPath } = element.props;

  // Demo data
  const repos = [
    { name: "react", stars: "228k", language: "JavaScript", color: "#f1e05a" },
    { name: "vue", stars: "207k", language: "TypeScript", color: "#3178c6" },
    { name: "tensorflow", stars: "185k", language: "Python", color: "#3572A5" },
  ];

  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "20px",
      }}
    >
      <div
        style={{
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ fontSize: 20 }}>🔥</span>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
          Trending Repositories
        </h3>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {repos.map((repo, i) => (
          <div
            key={i}
            style={{
              padding: "12px",
              background: "rgba(99, 102, 241, 0.05)",
              borderRadius: 8,
              border: "1px solid rgba(99, 102, 241, 0.1)",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(4px)";
              e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.1)";
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontWeight: 500, marginBottom: 4 }}>
                  {repo.name}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    color: "var(--muted)",
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: repo.color,
                      display: "inline-block",
                    }}
                  />
                  {repo.language}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 14,
                }}
              >
                ⭐ {repo.stars}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
