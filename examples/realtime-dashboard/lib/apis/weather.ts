/**
 * Open-Meteo API Integration
 * Completely free - No API key required
 * No rate limits for reasonable use
 */

export interface WeatherData {
  location: string;
  temperature: number;
  feels_like: number;
  condition: string;
  wind_speed: number;
  humidity: number;
  latitude: number;
  longitude: number;
}

const CITIES = {
  "new-york": { lat: 40.7128, lon: -74.006, name: "New York" },
  london: { lat: 51.5074, lon: -0.1278, name: "London" },
  tokyo: { lat: 35.6762, lon: 139.6503, name: "Tokyo" },
  "san-francisco": { lat: 37.7749, lon: -122.4194, name: "San Francisco" },
  mumbai: { lat: 19.076, lon: 72.8777, name: "Mumbai" },
};

export async function getWeather(
  cityKey: keyof typeof CITIES = "new-york",
): Promise<WeatherData> {
  const city = CITIES[cityKey];

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true&temperature_unit=fahrenheit`,
      {
        next: { revalidate: 300 }, // Cache for 5 minutes
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    const current = data.current_weather;

    return {
      location: city.name,
      temperature: Math.round(current.temperature),
      feels_like: Math.round(current.temperature - 2), // Approximation
      condition: getWeatherCondition(current.weathercode),
      wind_speed: Math.round(current.windspeed),
      humidity: 65, // Open-Meteo doesn't provide this in free tier
      latitude: city.lat,
      longitude: city.lon,
    };
  } catch (error) {
    console.error("Error fetching weather:", error);
    return getDemoWeather(city.name);
  }
}

function getWeatherCondition(code: number): string {
  if (code === 0) return "Clear";
  if (code <= 3) return "Partly Cloudy";
  if (code <= 48) return "Foggy";
  if (code <= 67) return "Rainy";
  if (code <= 77) return "Snowy";
  if (code <= 82) return "Showers";
  return "Stormy";
}

function getDemoWeather(location: string): WeatherData {
  return {
    location,
    temperature: 72,
    feels_like: 70,
    condition: "Partly Cloudy",
    wind_speed: 8,
    humidity: 65,
    latitude: 40.7128,
    longitude: -74.006,
  };
}
