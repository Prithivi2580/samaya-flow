import { authClient } from "@/lib/auth-client.lib";
import type { SignIn, SignUp } from "../types";

export async function signIn({ email, password }: SignIn) {
  return await authClient.signIn.email({
    email,
    password,
  });
}

export async function signUp({ name, email, password }: SignUp) {
  return authClient.signUp.email({
    name,
    email,
    password,
  });
}

export async function signInWithGithub() {
  return authClient.signIn.social({
    provider: "github",
  });
}

export async function signInWithGoogle() {
  return authClient.signIn.social({
    provider: "google",
  });
}
