import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About SAL XCHANGES
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          SAL XCHANGES is a simple and user-friendly currency exchange
          application designed to help you convert and track exchange rates with
          ease. Whether you're a traveler, freelancer, or business owner, our
          goal is to make currency conversion fast, reliable, and accurate.
        </p>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6">
            We aim to provide a transparent, secure, and efficient platform for
            everyone who deals with multiple currencies. SAL XCHANGES combines
            real-time exchange data with an intuitive design to make currency
            conversion effortless.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>💱 Real-time and accurate exchange rate updates</li>
            <li>⚡ Fast and intuitive conversion interface</li>
            <li>🔒 Secure and trustworthy data sources</li>
            <li>📈 Easy-to-read historical exchange graphs</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Have feedback or ideas? We’d love to hear from you! Your input helps
            us improve and build a better experience for all users.
          </p>
          <Link
        to="/"
            className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-xl hover:bg-blue-700 transition"
          >
            Back to Home
            </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
