"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="p-2 rounded-full border border-slate-700 bg-slate-800 text-slate-400 opacity-50 cursor-not-allowed">
                <Sun size={20} />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-brand-primary dark:text-sky-400 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Toggle Theme"
        >
            <div className="relative w-5 h-5">
                <Sun
                    className="absolute inset-0 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    size={20}
                />
                <Moon
                    className="absolute inset-0 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    size={20}
                />
            </div>
        </button>
    );
}
