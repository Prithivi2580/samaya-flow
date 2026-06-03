import { signIn, signUp, signInWithGithub, signInWithGoogle } from "../api";
import type { SignIn, SignUp } from "../types";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useAuth() {
  const navigate = useNavigate();

  const handleAuth = async (
    action: () => Promise<unknown>,
    success: string,
    failure: string,
  ) => {
    try {
      await action();

      toast.success(success);
      navigate("/dashboard");
    } catch {
      toast.error(failure);
    }
  };

  return {
    signIn: (credentials: SignIn) =>
      handleAuth(
        () => signIn(credentials),
        "Signed in successfully",
        "Failed to sign in",
      ),

    signUp: (credentials: SignUp) =>
      handleAuth(
        () => signUp(credentials),
        "Signed up successfully",
        "Failed to sign up",
      ),

    signInWithGoogle: () =>
      handleAuth(
        signInWithGoogle,
        "Signed in with Google successfully",
        "Failed to sign in with Google",
      ),

    signInWithGithub: () =>
      handleAuth(
        signInWithGithub,
        "Signed in with GitHub successfully",
        "Failed to sign in with GitHub",
      ),
  };
}
