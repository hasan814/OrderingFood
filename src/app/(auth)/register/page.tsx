import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import RegisterPage from "@/templates/RegisterPage";

const Register = async () => {
  // ============= Session =============
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  // ============= Rendering =============
  return <RegisterPage />;
};

export default Register;
