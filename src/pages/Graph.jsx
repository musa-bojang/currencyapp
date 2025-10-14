import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fetchHistoricalRates } from "../services/currencyService";

const GraphPage = () => {
  const [baseCurrency, setBaseCurrency] = useState("GMD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getRates = async () => {
      setLoading(true);
      setError("");
      try {
        const rates = await fetchHistoricalRates(baseCurrency, targetCurrency);
        setData(rates);
      } catch (err) {
        setError("Failed to load historical data. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    getRates();
  }, [baseCurrency, targetCurrency]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Currency Trend Graph
      </h1>

      <div className="flex flex-wrap gap-4 mb-8">
        <div>
          <label className="text-gray-700 mr-2">Base Currency:</label>
          <select
            className="border rounded-md px-3 py-1"
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
          >
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>JPY</option>
            <option>GMD</option>
          </select>
        </div>

        <div>
          <label className="text-gray-700 mr-2">Target Currency:</label>
          <select
            className="border rounded-md px-3 py-1"
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
          >
            <option>EUR</option>
            <option>USD</option>
            <option>GBP</option>
            <option>JPY</option>
            <option>GMD</option>
          </select>
        </div>
      </div>

      {loading && <p className="text-gray-500">Loading data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && data.length > 0 && (
        <ResponsiveContainer width="95%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={["auto", "auto"]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default GraphPage;
