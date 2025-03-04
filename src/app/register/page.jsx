"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const getPasswordStrength = (password) => {
    if (password.length < 8) return "Too short";
    if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.length >= 10) return "Strong";
    if (password.match(/[A-Z]/) || password.match(/[0-9]/)) return "Medium";
    return "Weak";
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // 🔴 Prevent form from reloading the page

    setErrorMessage("");
    setSuccessMessage("");

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      setShowModal(true);
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      setShowModal(true);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setShowModal(true);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Registration failed.");
        setShowModal(true);
        return;
      }

      setSuccessMessage("Registration successful! You can now log in.");
      setShowModal(true);

      // ✅ Clear form fields after successful registration
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      setShowModal(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}>
      
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
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border border-zinc-400 dark:border-zinc-600 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            {!isValidEmail(email) && email !== "" && (
              <p className="text-red-500 text-sm">Invalid email format</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full p-2 border border-zinc-400 dark:border-zinc-600 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <p className={`text-sm mt-1 ${getPasswordStrength(password) === "Strong" ? "text-green-500" : getPasswordStrength(password) === "Medium" ? "text-yellow-500" : "text-red-500"}`}>
              Password Strength: {getPasswordStrength(password)}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 w-full p-2 border border-zinc-400 dark:border-zinc-600 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            {confirmPassword && confirmPassword !== password && (
              <p className="text-red-500 text-sm">Passwords do not match</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-2 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Register
          </button>
        </form>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className={`text-xl font-bold ${successMessage ? "text-green-500" : "text-red-500"}`}>
              {successMessage ? "Success" : "Error"}
            </h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              {successMessage || errorMessage}
            </p>
            <button
              onClick={() => {
                setShowModal(false);
                setSuccessMessage("");
                setErrorMessage("");
              }}
              className="mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Link className="bg-purple-700 mx-12 mt-12 rounded-sm hover:bg-white hover:text-black text-zinc-200 font-bold text-center py-2 px-6 transition-all duration-300" href="/">
        &lt; Back
      </Link>
    </div>
  );
}
