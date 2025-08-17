# persia-ui 🌙🧩

React component library with **full RTL** and **TailwindCSS** support — lightweight, typed, and tree‑shakable.

## ✨ Features

- 🔁 **RTL/LTR aware** — toggles `dir` on `<html>` for right‑to‑left layouts
- 🌗 **Dark mode ready** — manages the `dark` class on `<html>`
- 🧱 **Tailwind‑first** — no CSS‑in‑JS; utility classes only
- 🧰 **TypeScript** types included
- ⚡ **Tree‑shakable**, side‑effect free
- 🧩 **Next.js/SSR friendly** (use in client components)

## 📦 Installation

```bash
npm install persia-ui
# or
yarn add persia-ui
# or
pnpm add persia-ui
```

> **peerDependencies**: `react`, `react-dom`, `tailwindcss` — make sure they are installed and configured in your project.

## 🚀 Quick Start

```tsx
import React from "react";
import { Button, Input, ThemeProvider } from "persia-ui";

export default function App() {
  return (
    <ThemeProvider initialTheme="light" initialDir="rtl">
      <div className="p-4 space-y-4">
        <Button variant="primary">Primary Button</Button>
        <Input label="Name" placeholder="e.g., Ali" />
      </div>
    </ThemeProvider>
  );
}
```

### Tailwind Setup

Add the package to your Tailwind `content` so JIT picks up classes inside components:

```js
// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/persia-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
};
```

## 🧩 Components

### `Button`

```tsx
import { Button } from "persia-ui";

<Button variant="primary" size="md">
  Click me
</Button>;
```

| Prop        | Type                                  | Default     | Description                    |
| ----------- | ------------------------------------- | ----------- | ------------------------------ |
| `variant`   | `"primary" \| "secondary" \| "ghost"` | `"primary"` | Visual style                   |
| `size`      | `"sm" \| "md" \| "lg"`                | `"md"`      | Component size                 |
| `fullWidth` | `boolean`                             | `false`     | Stretches to 100% width        |
| _native_    | Button HTML attributes                | —           | All native props are forwarded |

### `Input`

```tsx
import { Input } from "persia-ui";

<Input
  label="Email"
  placeholder="you@example.com"
  hint="We'll never share your email."
/>;
```

| Prop     | Type                  | Default | Description                    |
| -------- | --------------------- | ------- | ------------------------------ |
| `label`  | `string`              | —       | Accessible label               |
| `error`  | `string`              | —       | Error message + red state      |
| `hint`   | `string`              | —       | Helper text below the input    |
| _native_ | Input HTML attributes | —       | All native props are forwarded |

## 🎛️ Theming & Direction

Use the `useTheme` hook to toggle theme and direction:

```tsx
import { useTheme } from "persia-ui";

function Toolbar() {
  const { theme, setTheme, dir, setDir } = useTheme();
  return (
    <div className="flex gap-2">
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme ({theme})
      </button>
      <button onClick={() => setDir(dir === "rtl" ? "ltr" : "rtl")}>
        Toggle Direction ({dir})
      </button>
    </div>
  );
}
```

- **Dark mode**: toggles `document.documentElement.classList` with `dark`
- **RTL/LTR**: sets `document.documentElement.dir`

## 🧭 Next.js (SSR) Tips

Mark your provider as a client component (App Router):

```tsx
// app/providers.tsx
"use client";
import React from "react";
import { ThemeProvider } from "persia-ui";

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider initialTheme="light" initialDir="rtl">
      {children}
    </ThemeProvider>
  );
}
```

Wrap your root layout:

```tsx
// app/layout.tsx
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

## 🛠️ Scripts

- `npm run build` — builds to `dist/` (ESM, CJS & types)
- `npm run dev` — watch mode
- `prepublishOnly` — runs before `npm publish`

## 🤝 Contributing

Issues and PRs are welcome—please discuss major changes in an issue first.

## 📜 License

MIT © 2025 amir aghajani
