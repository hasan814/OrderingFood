"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import Loader from "@/elements/Loader";
import Link from "next/link";

const LoginPage: React.FC = () => {
  // =========== Router ===========
  const router = useRouter();

  // =========== State ===========
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // =========== Function ===========
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setLoading(true);
    const { email, password } = formData;
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);

    if (response?.error) toast.error(response.error);
    else toast.success("Login Successfully"), router.push("/");
  };

  // =========== Rendering ===========
  return (
    <section className="mt-8">
      <Toaster />
      <h1 className="text-center text-primary text-4xl mb-6">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded"
      >
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
        {loading ? (
          <Loader />
        ) : (
          <button
            type="submit"
            className="w-full p-2 bg-primary text-white rounded"
          >
            Login
          </button>
        )}
        <p className="text-center mt-4">
          <Link href="/register">
            Don&apos;t have an account?
            <span className="underline ml-1">Register</span>
          </Link>
        </p>
      </form>
    </section>
  );
};

export default LoginPage;
