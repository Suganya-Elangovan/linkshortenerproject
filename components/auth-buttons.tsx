"use client";

import { useState } from "react";
import { SignIn, SignUp } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type AuthModalType = "signin" | "signup" | null;

export function AuthButtons() {
  const [authModal, setAuthModal] = useState<AuthModalType>(null);

  return (
    <>
      <Button variant="outline" onClick={() => setAuthModal("signin")}>
        Sign In
      </Button>
      <Button onClick={() => setAuthModal("signup")}>
        Sign Up
      </Button>

      {/* Sign In Modal */}
      {authModal === "signin" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-slate-950 rounded-lg border border-slate-700 max-w-md w-full mx-4 shadow-2xl">
            <button
              onClick={() => setAuthModal(null)}
              className="absolute right-4 top-4 p-1 hover:bg-slate-800 rounded-md transition-colors"
            >
              <X className="h-5 w-5 text-slate-400 hover:text-white" />
            </button>
            <div className="p-8">
              <SignIn
                routing="virtual"
                signUpUrl="/"
                fallbackRedirectUrl="/dashboard"
                afterSignInUrl="/dashboard"
              />
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {authModal === "signup" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-slate-950 rounded-lg border border-slate-700 max-w-md w-full mx-4 shadow-2xl">
            <button
              onClick={() => setAuthModal(null)}
              className="absolute right-4 top-4 p-1 hover:bg-slate-800 rounded-md transition-colors"
            >
              <X className="h-5 w-5 text-slate-400 hover:text-white" />
            </button>
            <div className="p-8">
              <SignUp
                routing="virtual"
                signInUrl="/"
                fallbackRedirectUrl="/dashboard"
                afterSignUpUrl="/dashboard"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
