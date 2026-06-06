import type { Request, Response, NextFunction } from "express";
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "@/lib/auth";

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = session.user;

  (req as any).user = user;
  (req as any).session = session;

  // OPTIONAL: onboarding guard (only if you want strict backend enforcement)
  // if (!user.onboardingCompleted) {
  //   return res.status(403).json({
  //     message: "Onboarding required",
  //     redirect: "/onboarding",
  //   });
  // }

  next();
}
