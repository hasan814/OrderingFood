"use client";

import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Image from "next/image";
import Loader from "@/elements/Loader";

const RegisterPage = () => {
  // ============ Router ===========
  const router = useRouter();

  // ============ State ===========
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ============ Function ===========
  const signHandler = async (event) => {
    event.preventDefault();
    if (password !== rePassword) {
      toast.error("Password is not match");
      return;
    }
    setLoading(true);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setLoading(false);
    if (response.status === 201) router.push("/login");
    else toast.error(data.error);
  };
  // ============ Rendering ===========
  return (
    <section className="mt-8">
      <Toaster />
      <h1 className="text-center text-primary text-4xl">Register</h1>
      <form className="block max-w-sm mx-auto">
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password..."
          value={rePassword}
          onChange={(event) => setRePassword(event.target.value)}
        />
        {loading ? (
          <Loader />
        ) : (
          <button type="submit" onClick={signHandler}>
            Register
          </button>
        )}
        <div className="my-4 text-center text-gray-500">
          or Login with Provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src="/google.png" alt="alt" width={24} height={24} />
          Login with Google
        </button>
      </form>
    </section>
  );
};

export default RegisterPage;
