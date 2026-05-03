# Authentication Standards

This document outlines the authentication architecture and standards for the Link Shortener project.

## Overview

All authentication in this application is handled **exclusively by Clerk**. No other authentication methods should be used under any circumstances.

## Requirements

### Authentication Provider
- **Provider**: Clerk (`@clerk/nextjs` v7.3.0+)
- **Enforcement**: Clerk is the single source of truth for user authentication
- **Constraint**: Do NOT implement alternative authentication methods, OAuth providers outside Clerk's ecosystem, or custom session management

### Protected Routes

#### `/dashboard` Route
- **Status**: Protected route
- **Requirement**: Requires user to be authenticated (logged in)
- **Implementation**: Use `auth()` middleware from Clerk or route protection guards
- **Behavior on Unauthorized Access**: Redirect to homepage with sign-in modal trigger

### Homepage (`/`) Behavior

#### Redirect Logic
- **If User is NOT Authenticated**: Display homepage normally with sign-in/sign-up options
- **If User IS Authenticated**: Automatically redirect to `/dashboard`
- **Implementation**: Use Clerk's `useAuth()` hook or `auth()` middleware in `layout.tsx` or route handler

### Sign In & Sign Up

#### Modal Implementation
- **UI Pattern**: Clerk modals (NOT separate pages)
- **Trigger**: Sign in and Sign up should launch as modal overlays
- **Components**: Use Clerk's `<SignIn />` and `<SignUp />` components
- **Styling**: Configure Clerk theme in `app/layout.tsx` to match Tailwind CSS v4 and shadcn UI styling
- **Placement**: Modals should be rendered at page level, not embedded in routes

## Implementation Patterns

### Protecting Routes
```typescript
// Middleware approach or route protection in layout/page
import { auth } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/");
  }
  
  // Protected content
}
```

### Homepage Redirect Logic
```typescript
// In app/layout.tsx or app/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { userId } = await auth();
  
  if (userId) {
    redirect("/dashboard");
  }
  
  // Non-authenticated homepage
}
```

### Clerk Theme Configuration
- Define Clerk appearance/theme in `app/layout.tsx` to maintain design consistency
- Use Tailwind CSS v4 utilities for custom styling
- Ensure modals align with shadcn UI component design

## Key Constraints

- ❌ DO NOT use any authentication library other than Clerk
- ❌ DO NOT hardcode user sessions or credentials
- ❌ DO NOT bypass authentication checks
- ✅ DO use Clerk hooks (`useAuth()`, `useUser()`) in client components
- ✅ DO use Clerk server functions (`auth()`) in server components
- ✅ DO validate authentication state before accessing protected resources

## Environment Configuration

Ensure the following environment variables are set:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

These should be configured in `.env.local` and `.env.production` files respectively.

## Testing Authentication

When testing protected routes:
1. Test unauthenticated access (should redirect or show sign-in)
2. Test authenticated access to `/dashboard` (should display dashboard)
3. Test homepage access when authenticated (should redirect to `/dashboard`)
4. Test modal sign-in and sign-up flows
