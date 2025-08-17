# persia-ui

React component library with full RTL and TailwindCSS support

## Installation

```bash
npm install persia-ui
# یا
yarn add persia-ui
# یا
pnpm add persia-ui
```

> This package has peerDependencies to **react** and **tailwindcss**. Make sure they are installed and configured in your project.

## Quick use

```tsx
import React from "react";
import { Button, Input, ThemeProvider } from "persia-ui";

export default function App() {
  return (
    <ThemeProvider initialTheme="light" initialDir="rtl">
      <div className="p-4 space-y-4">
        <Button variant="primary">دکمه اصلی</Button>
        <Input label="نام" placeholder="مثال: علی" />
      </div>
    </ThemeProvider>
  );
}
```

### Styles

If you are using Tailwind, add the following layers to your main style:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Script

- `npm run build` — Creating output in `dist/` path with ESM and CJS formats and file types
- `npm run dev` — Build in watch mode
- `prepublishOnly` — Runs the build before `npm publish`

## Licence

MIT

---

### Development tips

- Use `ThemeProvider` to manage RTL/LTR and dark/light mode.
- Components are designed without side-effects and Tree-shaking is enabled.
