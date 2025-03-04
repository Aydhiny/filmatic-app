"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Something went wrong!");
        return;
      }

      const data = await response.json();  
      if (data.message === "Login successful") {
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An unexpected error occurred");
    }
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
          <FaUserCircle className="text-6xl text-purple-600 dark:text-purple-400 mx-auto" />
          <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mt-4">
            Welcome Back to Filmatic
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Login to continue exploring amazing movies.
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
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

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-2 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-purple-600 dark:text-purple-400">
              Sign Up
            </a>
          </p>
        </div>
      </div>

      <Link
        className="mx-12 mt-12 bg-purple-700 rounded-sm hover:bg-white hover:text-black text-zinc-200 font-bold text-center py-2 px-6 transition-all duration-300"
        href="/"
      >
        &lt; Back
      </Link>
    </div>
  );
}
