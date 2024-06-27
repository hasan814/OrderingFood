"use client";

import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Image from "next/image";
import Loader from "@/elements/Loader";
import Link from "next/link";
import { signIn } from "next-auth/react";

const RegisterPage = () => {
  // ============ Router ===========
  const router = useRouter();

  // ============ State ===========
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ============ Function ===========
  const signHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (response.error) toast.error(response.error);
    else router.push("/");
  };
  // ============ Rendering ===========
  return (
    <section className="mt-8">
      <Toaster />
      <h1 className="text-center text-primary text-4xl">Login</h1>
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
        {loading ? (
          <Loader />
        ) : (
          <button type="submit" onClick={signHandler}>
            Login
          </button>
        )}
        <div className="my-4 text-center text-gray-500">
          or Login with Provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src="/google.png" alt="alt" width={24} height={24} />
          Login with Google
        </button>
        <div className="text-center my-4 text-gray-500 border-t">
          Does Not have an account?{" "}
          <Link href={"/login"} className="underline">
            Register here
          </Link>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
