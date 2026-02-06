"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Global Smooth Scroll to Center
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');

            if (link && link.hash && link.hash.startsWith('#') && link.origin === window.location.origin) {
                e.preventDefault();
                const element = document.querySelector(link.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    window.history.pushState(null, '', link.hash);
                    setIsMobileMenuOpen(false); // Close menu if open
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    const navLinks = [
        { name: "Why TG Ice", href: "#features" },
        { name: "Process", href: "#process" },
        { name: "Use Cases", href: "#use-cases" },
        { name: "Pricing", href: "#pricing" },
        { name: "Reseller", href: "#reseller" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[rgba(2,6,23,0.8)] backdrop-blur-md shadow-lg py-4 dark:bg-[rgba(2,6,23,0.8)] bg-white/80" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-14 h-14 overflow-hidden rounded-full bg-white border-2 border-sky-500 flex items-center justify-center p-1">
                        <img src="/TG_ICE_CUBES_4.svg" alt="TG Ice Cubes Logo" className="object-contain w-full h-full" />
                        {/* Fallback */}
                        <div className="absolute inset-0 flex items-center justify-center bg-white text-indigo-900 font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity -z-10">TG</div>
                    </div>
                    {/* <span className="text-xl font-bold font-poppins text-brand-primary dark:text-white tracking-tight group-hover:text-brand-accent transition-colors">
                        TG <span className="text-brand-accent group-hover:text-brand-primary dark:group-hover:text-white transition-colors">Ice Cubes</span>
                    </span> */}
                    <span className="text-xl font-bold font-poppins text-brand-primary dark:text-white tracking-tight group-hover:text-brand-accent transition-colors">
                        TG Ice Cubes
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-primary dark:hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-5 py-2.5 bg-brand-primary hover:bg-brand-accent text-white text-sm font-bold rounded-full transition-all shadow-lg hover:shadow-xl"
                    >
                        Order Now
                    </Link>
                    <div className="ml-2">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Toggle & Theme */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        className="text-slate-900 dark:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[rgba(2,6,23,0.95)] backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-6 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-slate-800 dark:text-slate-300 hover:text-brand-primary dark:hover:text-sky-400"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-5 py-3 bg-brand-primary text-center text-white text-base font-bold rounded-xl"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Order Now
                    </Link>
                </div>
            )}
        </nav>
    );
}
