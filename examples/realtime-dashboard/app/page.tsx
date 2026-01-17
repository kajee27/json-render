"use client";

import { useState } from "react";
import {
  DataProvider,
  ActionProvider,
  VisibilityProvider,
  Renderer,
} from "@json-render/react";
import { componentRegistry } from "@/components/ui";

// Demo data showcasing all the real-time components
const DEMO_TREE = {
  root: "main",
  elements: {
    main: {
      key: "main",
      type: "Grid",
      props: {
        columns: 2,
        gap: "lg",
      },
      children: ["crypto1", "weather1", "github1", "crypto2"],
    },
    crypto1: {
      key: "crypto1",
      type: "CryptoCard",
      props: {
        symbol: "BTC",
        dataPath: "/crypto/bitcoin",
      },
    },
    weather1: {
      key: "weather1",
      type: "WeatherWidget",
      props: {
        location: "New York",
        dataPath: "/weather/newyork",
      },
    },
    github1: {
      key: "github1",
      type: "TrendingRepos",
      props: {
        language: null,
        dataPath: "/github/trending",
      },
    },
    crypto2: {
      key: "crypto2",
      type: "CryptoCard",
      props: {
        symbol: "ETH",
        dataPath: "/crypto/ethereum",
      },
    },
  },
};

const INITIAL_DATA = {
  crypto: {
    bitcoin: { price: 45230, change: 2.84 },
    ethereum: { price: 2890, change: -1.54 },
  },
  weather: {
    newyork: { temp: 72, condition: "Partly Cloudy" },
  },
  github: {
    trending: [],
  },
};

const ACTION_HANDLERS = {
  refresh_data: () => alert("Refreshing data..."),
};

export default function DemoPage() {
  return (
    <DataProvider initialData={INITIAL_DATA}>
      <VisibilityProvider>
        <ActionProvider handlers={ACTION_HANDLERS}>
          <div
            style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}
          >
            <header style={{ marginBottom: 48, textAlign: "center" }}>
              <h1
                style={{
                  margin: 0,
                  fontSize: 48,
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.02em",
                }}
              >
                🚀 Real-Time Data Dashboard
              </h1>
              <p
                style={{
                  margin: "16px 0 0",
                  color: "var(--muted)",
                  fontSize: 18,
                }}
              >
                AI-powered widgets with live data from free APIs
              </p>
              <div
                style={{
                  marginTop: 24,
                  display: "flex",
                  gap: 12,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    padding: "6px 12px",
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 6,
                    fontSize: 14,
                  }}
                >
                  💰 CoinGecko API
                </span>
                <span
                  style={{
                    padding: "6px 12px",
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 6,
                    fontSize: 14,
                  }}
                >
                  🌤️ Open-Meteo API
                </span>
                <span
                  style={{
                    padding: "6px 12px",
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 6,
                    fontSize: 14,
                  }}
                >
                  ⭐ GitHub API
                </span>
              </div>
            </header>

            <Renderer tree={DEMO_TREE} registry={componentRegistry} />

            <footer
              style={{
                marginTop: 64,
                textAlign: "center",
                color: "var(--muted)",
                fontSize: 14,
              }}
            >
              <p>
                Built with{" "}
                <a
                  href="https://github.com/vercel-labs/json-render"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#667eea", textDecoration: "none" }}
                >
                  json-render
                </a>{" "}
                by Vercel Labs
              </p>
            </footer>
          </div>
        </ActionProvider>
      </VisibilityProvider>
    </DataProvider>
  );
}
