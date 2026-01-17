/**
 * CoinGecko API Integration
 * Free tier - No API key required
 * Rate limit: 10-50 calls/minute
 */

export interface CryptoPrice {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
}

export async function getCryptoPrices(): Promise<CryptoPrice[]> {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,cardano,solana,ripple&order=market_cap_desc&sparkline=false",
      {
        next: { revalidate: 60 }, // Cache for 60 seconds
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch crypto prices");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    // Return demo data as fallback
    return getDemoCryptoPrices();
  }
}

export function getDemoCryptoPrices(): CryptoPrice[] {
  return [
    {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      current_price: 45230.5,
      price_change_24h: 1250.3,
      price_change_percentage_24h: 2.84,
      market_cap: 885000000000,
      total_volume: 28500000000,
    },
    {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      current_price: 2890.75,
      price_change_24h: -45.2,
      price_change_percentage_24h: -1.54,
      market_cap: 347000000000,
      total_volume: 15200000000,
    },
    {
      id: "cardano",
      name: "Cardano",
      symbol: "ADA",
      current_price: 0.58,
      price_change_24h: 0.03,
      price_change_percentage_24h: 5.45,
      market_cap: 20400000000,
      total_volume: 450000000,
    },
    {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      current_price: 98.42,
      price_change_24h: 3.15,
      price_change_percentage_24h: 3.31,
      market_cap: 42800000000,
      total_volume: 2100000000,
    },
    {
      id: "ripple",
      name: "XRP",
      symbol: "XRP",
      current_price: 0.62,
      price_change_24h: -0.02,
      price_change_percentage_24h: -3.12,
      market_cap: 33500000000,
      total_volume: 1800000000,
    },
  ];
}
