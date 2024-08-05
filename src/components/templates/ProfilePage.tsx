"use client";

import { ProfilePageProps } from "@/types/index";
import { signOut } from "next-auth/react";
import { toast, Toaster } from "react-hot-toast";

const ProfilePage: React.FC<ProfilePageProps> = ({
  email,
  userName,
  setUserName,
}) => {
  // ================ Function ===============
  const handleProfileUpdate = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: userName }),
      });
      if (response.ok) {
        toast.success("Profile updated successfully");
        signOut();
      }
    } catch (error) {
      toast.error("Failed to update profile:");
    }
  };

  // ================ Rendering ===============
  return (
    <section className="mt-6">
      <Toaster />
      <h1 className="text-center text-primary text-4xl my-6">Profile</h1>
      <div className="max-w-md mx-auto">
        <div className="flex gap-4 items-center">
          <form className="grow" onSubmit={handleProfileUpdate}>
            <input
              type="text"
              placeholder="First and Last Name"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              disabled={true}
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
