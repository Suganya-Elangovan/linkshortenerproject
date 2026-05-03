# UI Components Standards

All UI elements in this project must use **shadcn/ui** components exclusively. Do not create custom components when a shadcn/ui component can be used.

## Core Principles

- **Use shadcn/ui First**: Before creating any UI element, check if a shadcn/ui component exists that meets your needs
- **No Custom Components**: Do not build custom styled components; leverage shadcn/ui's component library
- **Composition Over Creation**: Combine existing components to achieve desired functionality
- **Consistency**: Using shadcn/ui ensures visual and functional consistency across the application

## Available shadcn/ui Components

Refer to [shadcn/ui documentation](https://ui.shadcn.com) for the complete list of available components. The project includes common components such as:
- Button
- Input
- Form
- Dialog
- Dropdown Menu
- Card
- Badge
- Toast notifications
- And many more

## Component Usage Guidelines

### ✅ DO:
- Import components directly from `@/components/ui/{component-name}`
- Use component props to control behavior and appearance
- Combine components to create complex UI patterns
- Extend shadcn/ui components with Tailwind CSS utilities when styling customization is needed

### ❌ DON'T:
- Create custom wrapper components that duplicate shadcn/ui functionality
- Build styled-from-scratch components when shadcn/ui alternatives exist
- Override component styling without using Tailwind CSS
- Create multiple implementations of the same UI pattern

## Example: Using shadcn/ui Button

```tsx
import { Button } from "@/components/ui/button";

export function MyComponent() {
  return (
    <Button 
      onClick={() => console.log('clicked')} 
      variant="default" 
      size="lg"
    >
      Click Me
    </Button>
  );
}
```

## Installation of New Components

If a shadcn/ui component is not yet installed in the project:

```bash
npx shadcn-ui@latest add {component-name}
```

This will add the component to `components/ui/{component-name}.tsx` and make it available for use.

## Styling with Tailwind CSS

While shadcn/ui components come pre-styled, you can apply additional Tailwind CSS utilities via the `className` prop:

```tsx
<Button className="w-full mt-4">Submit</Button>
```

Always use Tailwind utility classes for spacing, sizing, and responsive adjustments.
