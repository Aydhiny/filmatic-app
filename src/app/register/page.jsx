"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setErrorMessage("");
    alert("Registration successful!");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/background.jpg')",
      }}
    >
      <div className="bg-zinc-200 dark:bg-zinc-800 bg-opacity-90 dark:bg-opacity-95 rounded-lg shadow-lg p-8 w-11/12 max-w-md">
        <div className="text-center mb-6">
          <FaUserPlus className="text-6xl text-purple-600 dark:text-purple-400 mx-auto" />
          <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mt-4">
            Create Your Account
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Sign up to start your cinematic journey!
          </p>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border border-zinc-400 dark:border-zinc-600 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full p-2 border border-zinc-400 dark:border-zinc-600 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 w-full p-2 border border-zinc-400 dark:border-zinc-600 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {errorMessage && (
            <div className="text-red-500 text-sm text-center">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-2 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-purple-600 dark:text-purple-400">
              Login
            </a>
          </p>
        </div>
      </div>
<Link
  className="bg-purple-700 mx-12 mt-12 rounded-sm hover:bg-white hover:text-black text-zinc-200 font-bold text-center py-2 px-6 transition-all duration-300"
  href="/"
>
  &lt; Back
</Link>
    </div>
  );
}
