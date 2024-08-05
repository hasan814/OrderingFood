import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginPage from "@/templates/LoginPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Login = async () => {
  // =========== Session ===========
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  // =========== Rendering ===========
  return <LoginPage />;
};

export default Login;
