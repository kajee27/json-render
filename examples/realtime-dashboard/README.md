# 🚀 Real-Time Data Dashboard

An AI-powered dashboard that generates beautiful visualizations from natural language prompts using live data from free public APIs.

![Dashboard Preview](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)
![json-render](https://img.shields.io/badge/json--render-latest-purple)

## ✨ Features

- **🤖 AI-Powered Generation** - Type natural language prompts to create widgets
- **💰 Live Crypto Prices** - Real-time cryptocurrency data from CoinGecko
- **🌤️ Weather Data** - Current weather from Open-Meteo API
- **⭐ GitHub Trending** - Trending repositories from GitHub API
- **🎨 Stunning UI** - Glassmorphism effects, smooth animations
- **🔒 Safe & Guardrailed** - AI can only use predefined components
- **📱 Responsive** - Works beautifully on all devices

## 🎯 Try It Out

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Open http://localhost:3002
```

## 💬 Example Prompts

Try these prompts to see the AI in action:

- "Show me Bitcoin price"
- "Create a weather widget for New York"
- "Display trending GitHub repositories"
- "Show me Ethereum with price trend"
- "Weather for San Francisco"

## 🌐 Free APIs Used

All APIs are completely free with no authentication required:

- **[CoinGecko](https://www.coingecko.com/en/api)** - Cryptocurrency prices
- **[Open-Meteo](https://open-meteo.com/)** - Weather data
- **[GitHub API](https://docs.github.com/en/rest)** - Public repository data

## 🏗️ Architecture

```
realtime-dashboard/
├── lib/
│   ├── apis/           # API integrations
│   │   ├── crypto.ts   # CoinGecko API
│   │   ├── weather.ts  # Open-Meteo API
│   │   └── github.ts   # GitHub API
│   └── catalog.ts      # Component catalog (AI guardrails)
├── components/
│   └── ui/             # Custom components
│       ├── crypto-card.tsx
│       ├── weather-widget.tsx
│       └── trending-repos.tsx
└── app/
    └── page.tsx        # Main dashboard page
```

## 🎨 Custom Components

### CryptoCard

Displays cryptocurrency prices with:

- Live price updates
- 24h price change
- Animated gradient background
- Pulsing effects

### WeatherWidget

Shows weather information with:

- Current temperature
- Weather conditions
- Wind speed & humidity
- Floating cloud animations

### TrendingRepos

Lists trending GitHub repos with:

- Star counts
- Programming language
- Hover effects
- Language color indicators

## 🔧 Built With

- **[Next.js 16](https://nextjs.org/)** - React framework
- **[json-render](https://github.com/vercel-labs/json-render)** - AI-safe UI generation
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Zod](https://zod.dev/)** - Schema validation

## 📝 How It Works

1. **Define Components** - Create a catalog of allowed components
2. **User Prompts** - User describes what they want in natural language
3. **AI Generates JSON** - AI creates a JSON tree using only catalog components
4. **React Renders** - Components render the JSON safely

## 🎓 Learn More

- [json-render Documentation](https://github.com/vercel-labs/json-render)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel AI SDK](https://sdk.vercel.ai/)

## 📄 License

Apache-2.0

---

Built with ❤️ using [json-render](https://github.com/vercel-labs/json-render) by Vercel Labs
