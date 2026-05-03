"use client";

import { useSignIn, useSignUp } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function AuthButtons() {
  const { signIn } = useSignIn();
  const { signUp } = useSignUp();

  const handleSignIn = async () => {
    await signIn?.create({
      strategy: "oauth_google",
    });
  };

  const handleSignUp = async () => {
    await signUp?.create({
      strategy: "oauth_google",
    });
  };

  return (
    <>
      <Button variant="outline" onClick={handleSignIn}>
        Sign In
      </Button>
      <Button onClick={handleSignUp}>
        Sign Up
      </Button>
    </>
  );
}
