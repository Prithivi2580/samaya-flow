import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protected-route";
import PrivateLayout from "@/layout/private-layout";
import PublicLayout from "@/layout/public-layout";
import Home from "@/features/home/pages/home";
import NotFound from "@/components/shared/not-found";

const RoutesComponent = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/register" element={<div>Register</div>} />
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
