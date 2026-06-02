import Logo from "@/components/shared/logo";
import { Outlet, useLocation } from "react-router-dom";

export default function AuthLayout() {
  const { pathname } = useLocation();
  const content = {
    "/sign-in": {
      title: "Welcome Back",
      description:
        "Sign in to manage your bookings, availability, and upcoming meetings.",
    },
    "/sign-up": {
      title: "Master your time, effortlessly.",
      description:
        "Create your SamayaFlow account and start accepting bookings, managing availability, and automating your scheduling workflow.",
    },
  };

  const route = pathname as keyof typeof content;
  const { title, description } = content[route] || {
    title: "Samaya Flow",
    description: "",
  };
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

          <div className="mt-20">
            <img
              className="mx-auto w-180 h-auto"
              src="/src/assets/samaya-flow.png"
              alt="Samaya Flow"
            />
          </div>
          <div className="w-full flex flex-col gap-4 justify-center items-center mt-40">
            <h1 className="text-5xl font-bold text-white text-center">
              {title}
            </h1>
            <p className="text-white/80 text-center w-[50%]">{description}</p>
          </div>
        </div>
      </div>
      <div className="auth-right">
        <Outlet />
      </div>
    </section>
  );
}
