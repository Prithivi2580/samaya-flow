import { Outlet } from "react-router-dom";

export default function PrivateLayout() {
  return (
    <>
      {/* Navbar */}
      <main>
        <Outlet />
      </main>
    </>
  );
}
