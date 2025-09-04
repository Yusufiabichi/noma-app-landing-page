"use client";

import { useState } from "react";

export default function Waitlist() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    crop: "",
    role: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist form submitted:", formData);
    // 👉 Hook up API route, Supabase, or Google Sheets here
  };

  return (
    <section id="waitlist" className="py-20 bg-noma-lightgreen/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Join the NomaApp Waitlist
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          Be among the first to use <span className="font-semibold text-noma-green">NomaApp</span> 
          when we launch in <span className="text-noma-yellow">3 months</span>.  
          Farmers, suppliers, agronomists, and consumers — sign up free today!
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 grid gap-6 text-left"
        >
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noma-green focus:outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-gray-800 font-semibold mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+234 801 234 5678"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noma-green focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noma-green focus:outline-none"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-gray-800 font-semibold mb-2">
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="Village / Town / City"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noma-green focus:outline-none"
              required
            />
          </div>

          {/* Role Selection */}
          <div>
            <label htmlFor="role" className="block text-gray-800 font-semibold mb-2">
              I am joining as a
            </label>
            <select
              id="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noma-green focus:outline-none"
              required
            >
              <option value="">Select one</option>
              <option value="farmer">Farmer</option>
              <option value="supplier">Agri-input Supplier</option>
              <option value="consumer">Consumer</option>
              <option value="agronomist">Agronomist</option>
            </select>
          </div>

          {/* Crop Type (only show if Farmer selected) */}
          {formData.role === "farmer" && (
            <div>
              <label htmlFor="crop" className="block text-gray-800 font-semibold mb-2">
                Main Crop Grown
              </label>
              <select
                id="crop"
                value={formData.crop}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-noma-green focus:outline-none"
                required
              >
                <option value="">Select crop</option>
                <option value="maize">Maize</option>
                <option value="rice">Rice</option>
                <option value="cassava">Cassava</option>
                <option value="soybean">Soybean</option>
                <option value="vegetables">Vegetables</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-noma-green text-white py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-green-800 transition"
          >
            🚀 Join the Waitlist
          </button>

          {/* Trust Message */}
          <p className="text-sm text-gray-500 text-center mt-4">
            ✅ 100% Free — Your details are safe with us.  
            You’ll get early access + updates on launch.
          </p>
        </form>
      </div>
    </section>
  );
}
