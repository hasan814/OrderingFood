"use client";

import ProfilePage from "@/templates/ProfilePage";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Profile: React.FC = () => {
  // ================ State ===============
  const [userName, setUserName] = useState<string>("");

  // ============= Session =============
  const { data, status } = useSession();
  const email = data?.user?.email ?? "";

  // ============= Effect =============
  useEffect(() => {
    if (status === "authenticated") setUserName(data?.user?.name ?? "");
  }, [data, status]);

  // ============= Rendering =============
  if (status !== "authenticated") {
    redirect("/");
    return null;
  }

  return (
    <ProfilePage email={email} userName={userName} setUserName={setUserName} />
  );
};

export default Profile;
