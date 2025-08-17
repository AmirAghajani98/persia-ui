import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
}
declare const Button: React.FC<React.PropsWithChildren<ButtonProps>>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    hint?: string;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

type ThemeMode = "light" | "dark";
type Direction = "ltr" | "rtl";
interface ThemeContextValue {
    theme: ThemeMode;
    setTheme: (t: ThemeMode) => void;
    dir: Direction;
    setDir: (d: Direction) => void;
}
declare const ThemeProvider: React.FC<React.PropsWithChildren<{
    initialTheme?: ThemeMode;
    initialDir?: Direction;
}>>;
declare const useTheme: () => ThemeContextValue;

declare function classNames(...classes: any[]): string;

export { Button, type ButtonProps, Input, type InputProps, ThemeProvider, classNames, useTheme };
