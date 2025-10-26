const apiKey = import.meta.env.VITE_EXCHANGE_API_KEY;

// Fetch latest rates for converter
export const fetchLatestRates = async (baseCurrency) => {
  const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);
  if (!response.ok) {
    throw new Error("Failed to fetch exchange rates");
  }
  const data = await response.json();
  return data.conversion_rates;
};

// Simulate historical data for the graph (randomized)
export const fetchHistoricalRates = async (base, target) => {
  const today = new Date();
  const days = 30;
  const rates = [];

  for (let i = days; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const formattedDate = date.toISOString().split("T")[0];
    const rate = (Math.random() * (1.2 - 0.9) + 0.9).toFixed(3); // simulate rate
    rates.push({ date: formattedDate, rate: parseFloat(rate) });
  }

  return rates;
};

export const getExchangeRate = async (fromCurrency, toCurrency) => {
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates");
    }

    const data = await response.json();
    const rate = data.conversion_rates[toCurrency];

    if (!rate) {
      throw new Error("Currency not supported");
    }

    return rate;
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    throw error;
  }
};

