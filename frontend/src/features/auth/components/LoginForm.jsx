import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ formData, handleOnChange }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Replace these with your real credentials or authentication logic
  const correctEmail = "2023593924.ritwik@ug.sharda.ac.in";
  const correctPassword = "Ritwik@123";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === correctEmail && formData.password === correctPassword) {
      
      navigate("/home");
    } else {
      
      setError("Invalid email or password");
    }
  };

  return (
    <form className="space-y-4" method="POST" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-lg bg-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
          placeholder="Enter your password"
          className="w-full px-4 py-2 rounded-lg bg-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
      >
        Log In
      </button>
    </form>
  );
}
