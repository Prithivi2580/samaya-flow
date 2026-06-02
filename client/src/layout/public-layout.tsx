import Navbar from "@/components/shared/navbar";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
