import React from "react";
import { Link } from "react-router-dom";
const FAQ = () => {
  const faqs = [
    {
      question: "What is SAL XCHANGES?",
      answer:
        "SAL XCHANGES is a simple and secure platform that helps you convert currencies with real-time exchange rates.",
    },
    {
      question: "Is SAL XCHANGES free to use?",
      answer:
        "Yes, the core currency conversion features are free. We use a trusted API to fetch up-to-date exchange rates.",
    },
    {
      question: "Where do you get your exchange rate data?",
      answer:
        "We use the ExchangeRate API, which provides accurate and frequently updated rates for major world currencies.",
    },
    {
      question: "Can I use SAL XCHANGES on my mobile phone?",
      answer:
        "Absolutely! The website is fully responsive, so you can access it on any device — desktop, tablet, or mobile.",
    },
    {
      question: "Do I need to create an account?",
      answer:
        "You can start converting currencies without an account. However, creating an account allows you to save preferences and track history.",
    },
    {
      question: "Who built SAL XCHANGES?",
      answer:
        "SAL XCHANGES is built by a passionate developer dedicated to creating seamless currency exchange experiences for everyone.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <div className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600">
          Find answers to the most common questions about SAL XCHANGES.
        </p>
      </div>

      <div className="max-w-3xl w-full space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>

    </div>
  );
};

export default FAQ;
