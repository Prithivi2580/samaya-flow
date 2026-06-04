import { Navigate, Outlet, useLocation } from "react-router-dom";
import { authClient } from "@/lib/auth-client.lib";
import { FullSpinner } from "@/components/ui/spinner";

export default function ProtectedRoute() {
  const { data: session, isPending } = authClient.useSession();
  const location = useLocation();

  if (isPending) {
    return <FullSpinner />;
  }

  if (!session) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
