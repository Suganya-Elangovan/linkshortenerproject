# Agent Instructions - Link Shortener Project

This file provides LLMs with coding standards and guidelines for the Link Shortener project. Detailed standards are documented in separate markdown files under the `/docs` directory.

## ⚠️ CRITICAL REQUIREMENT

**ALWAYS read the relevant individual instruction file inside the `/docs` directory BEFORE generating ANY code.** This is non-negotiable. Do not skip this step under any circumstances.

## Quick Reference

- **Project Type**: Next.js 16+ (React 19) with TypeScript
- **Database**: Neon PostgreSQL with Drizzle ORM
- **Authentication**: Clerk
- **Styling**: Tailwind CSS v4 with shadcn UI components
- **Linting**: ESLint with Next.js config

## Documentation Structure

All coding standards are organized in the `/docs` directory.
ALWAYS refer to relevent .md file BEFORE generating code.

### Documentation Files
- [Authentication Standards](/docs/authentication.md) — Clerk authentication, protected routes, sign-in/sign-up modals, and user redirects
- [UI Components Standards](/docs/ui-components.md) — shadcn/ui component usage, composition patterns, and styling guidelines

## Quick Standards Summary

### ✅ DO:
- Use TypeScript with strict type checking
- Create functional React components with hooks
- Follow the established directory structure
- Use Tailwind CSS utility classes with component composition
- Write self-documenting code with clear naming
- Keep functions small and focused
- Use proper error handling with try-catch blocks

### ❌ DON'T:
- Use `any` types without justification
- Create class components
- Mix styling approaches (use Tailwind consistently)
- Hardcode values; extract to constants or environment variables
- Leave console.log statements in production code
- Create deeply nested components
- Ignore TypeScript errors

## When Working on This Project

**MANDATORY FIRST STEP**: Before writing any code, ALWAYS read the relevant documentation file from `/docs`:
1. **Before making changes**: Read the relevant documentation file from `/docs` first
2. **During implementation**: Follow the patterns and conventions outlined in those docs
3. **For new features**: Maintain consistency with existing code style and architecture
4. **Code review**: Ensure all changes comply with standards in the documentation

## Key Technologies & Versions

```json
{
  "next": "16.2.4",
  "react": "19.2.4",
  "typescript": "^5",
  "tailwindcss": "^4",
  "drizzle-orm": "^0.45.2",
  "@clerk/nextjs": "^7.3.0"
}
```

## Configuration Files

- **TypeScript**: `tsconfig.json`
- **ESLint**: `eslint.config.mjs`
- **Tailwind CSS**: `postcss.config.mjs` and `tailwind.config` (implicit)
- **Database**: `drizzle.config.ts`
- **Next.js**: `next.config.ts`
- **Components**: `components.json` (shadcn config)

## Development Workflow

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm build

# Start production server
npm run start

# Run linting
npm run lint
```

## Questions or Updates?

If documentation needs updates or clarification, update the relevant file in `/docs` and maintain consistency with this main AGENTS.md file.
