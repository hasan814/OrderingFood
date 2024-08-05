"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FormData } from "@/types/index";

import Loader from "@/elements/Loader";
import Link from "next/link";

const RegisterPage: React.FC = () => {
  // ============ State =============
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ============ Function =============
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      setLoading(false);

      if (response.status === 201) {
        toast.success("Registration successful");
        router.push("/login");
      } else {
        toast.error(data.error || "Registration failed");
      }
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <section className="mt-8">
      <Toaster />
      <h1 className="text-center text-primary text-4xl mb-6">Register</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded"
      >
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name..."
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number..."
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email..."
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password..."
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password..."
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <button
            type="submit"
            className="w-full p-2 bg-primary text-white rounded"
          >
            Register
          </button>
        )}
        <p className="text-center mt-4">
          <Link href="/login">
            have an account? <span className="underline ml-1">Login</span>
          </Link>
        </p>
      </form>
    </section>
  );
};

export default RegisterPage;
