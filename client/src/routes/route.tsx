import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protected-route";
import PrivateLayout from "@/layout/private-layout";
import PublicLayout from "@/layout/public-layout";
import Home from "@/features/home/pages/home";
import NotFound from "@/components/shared/not-found";
import SignUp from "@/features/auth/pages/sign-up";
import SignIn from "@/features/auth/pages/sign-in";
import AuthLayout from "@/features/auth/layout/auth-layout";

const RoutesComponent = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<div>Dashboard</div>} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
