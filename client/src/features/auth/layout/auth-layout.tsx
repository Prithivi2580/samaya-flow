import Logo from "@/components/shared/logo";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <section className="auth w-full">
      <div className="auth-left">
        <div className="auth-container p-6">
          <div className="auth-gradient" />
          <div className="gradient-1" />
          <div className="gradient-2" />

          <div className="flex items-center gap-2">
            <div className="size-10 flex-center rounded-[10px] bg-white">
              <Logo size={30} />
            </div>
            <h1 className="text-2xl font-bold text-white">Samaya Flow</h1>
          </div>

          <div>
            <img src="." alt="" />
          </div>
        </div>
      </div>
      <div className="auth-right">
        <Outlet />
      </div>
    </section>
  );
}
