import React, { useState } from "react";

const Home = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    if (!amount) return;
    // For now, we’ll simulate the conversion — later you’ll replace this with real API call
    let fakeRate = 0.92; // example: 1 USD = 0.92 EUR
    if(fromCurrency === "EUR" && toCurrency === "GMD") {
      fakeRate = 61.5; // example: 1 EUR = 61.5 GMD
    } else if (fromCurrency === "USD" && toCurrency === "GMD") {
      fakeRate = 56.5; // example: 1 USD = 56.5 GMD
    }
    const converted = (amount * fakeRate).toFixed(2);
    setResult(`${amount} ${fromCurrency} = ${converted} ${toCurrency}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 flex flex-col items-center text-center">
      {/* Home Section */}
      <div className="max-w-2xl space-y-4 mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to SAL XCHANGES</h1>
        <p className="text-gray-600">Your gateway to seamless currency exchange.</p>
      </div>

      {/* Features Section */}
      <div className="max-w-2xl space-y-4 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800">Features</h2>
        <ul className="text-gray-600 space-y-2 list-disc list-inside text-left mx-auto w-fit">
          <li>Real-time exchange rates</li>
          <li>User-friendly interface</li>
          <li>Secure transactions</li>
        </ul>
      </div>

      {/* Get Started Section */}
      <div className="max-w-2xl space-y-4 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800">Get Started</h2>
        <p className="text-gray-600">
          Create an account or log in to start exchanging currencies today!
        </p>
      </div>

      {/* Converter Section */}
      <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Currency Converter</h3>

        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>JPY</option>
            <option>GMD</option>
          </select>

          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>EUR</option>
            <option>USD</option>
            <option>GBP</option>
            <option>JPY</option>
            <option>GMD</option>
          </select>
        </div>

        <button
          onClick={handleConvert}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Convert
        </button>

        {result && (
          <div className="mt-4 text-lg font-medium text-gray-800">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
