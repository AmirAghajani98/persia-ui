# persia-ui

کتابخانه کامپوننت‌های React با پشتیبانی کامل RTL و TailwindCSS

## نصب

```bash
npm install persia-ui
# یا
yarn add persia-ui
# یا
pnpm add persia-ui
```

> این بسته وابستگی همتا (peerDependencies) به **react** و **tailwindcss** دارد. مطمئن شوید در پروژه شما نصب و پیکربندی شده‌اند.

## استفاده سریع

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

### استایل‌ها

اگر از Tailwind استفاده می‌کنید، لایه‌های زیر را در استایل اصلی خود اضافه کنید:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## اسکریپت‌ها

- `npm run build` — ساخت خروجی در مسیر `dist/` با فرمت‌های ESM و CJS و فایل تایپ‌ها
- `npm run dev` — بیلد در حالت تماشا (watch)
- `prepublishOnly` — پیش از `npm publish` بیلد را اجرا می‌کند

## انتشار در NPM

۱) مطمئن شوید نام پکیج در `package.json` آزاد است (در صورت اشغال، نام را تغییر دهید).  
۲) وارد حساب خود شوید:

```bash
npm login
```

۳) سپس:

```bash
npm publish --access public
```

## لایسنس

UNLICENSED

---

### نکات توسعه

- از `ThemeProvider` برای مدیریت RTL/LTR و حالت تیره/روشن استفاده کنید.
- کامپوننت‌ها بدون side-effect طراحی شده‌اند و Tree-shaking فعال است.
