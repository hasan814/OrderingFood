"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FormData } from "@/types/index";
import { useRouter } from "next/navigation";
import Image from "next/image";

const RegisterPage: React.FC = () => {
  // ============== Router =============
  const router = useRouter();

  // ============== State =============
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ============== Function =============
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Form submitted", formData);
  };

  // ============== Rendering =============
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-6">Register</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto block">
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
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
          or Login with Google
        </div>
        <button className="flex gap-4 item-center justify-center">
          <Image src={"/google.png"} alt="google" width={24} height={24} />
          Login with Google
        </button>
      </form>
    </section>
  );
};

export default RegisterPage;
