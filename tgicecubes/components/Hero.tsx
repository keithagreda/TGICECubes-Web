import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-light dark:bg-slate-950 pt-32 pb-12 md:pt-20 md:pb-0 transition-colors duration-300">
            {/* Background Gradient/Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-dot-pattern opacity-20 dark:opacity-10 [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black_100%)] pointer-events-none" />
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-accent/20 dark:bg-sky-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-primary/10 dark:bg-indigo-600/10 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_100%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(2,6,23,0)_0%,rgba(2,6,23,0.8)_100%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="text-center lg:text-left animate-[fadeInUp_0.8s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50 border border-brand-primary/20 dark:border-slate-700 backdrop-blur-sm mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-brand-primary dark:bg-sky-400 animate-pulse"></span>
                        <span className="text-xs font-semibold text-brand-primary dark:text-sky-200 tracking-wide uppercase">Now Delivering in Gensan</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-poppins leading-tight mb-6 text-brand-dark dark:text-white text-balance">
                        Simply <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent dark:from-sky-300 dark:to-indigo-300">Crystal Clear.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        9-Stage purified, UV-sterilized ice cubes. Slower melting, cleaner taste, and perfect for your coffee, parties, or business.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            href="#contact"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-accent dark:bg-sky-500 dark:hover:bg-sky-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Order Now
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                        <Link
                            href="#reseller"
                            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-brand-primary/20 dark:border-slate-700 text-brand-primary dark:text-white font-semibold rounded-xl hover:bg-white/50 dark:hover:bg-slate-800 dark:hover:border-slate-600 transition-all backdrop-blur-sm"
                        >
                            Become a Reseller
                        </Link>
                    </div>
                </div>

                {/* Visual / Image Placeholder */}
                <div className="relative animate-[fadeInUp_1s_ease-out_0.2s]">
                    {/* Main Ice Image */}
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 dark:from-sky-500/10 to-transparent rounded-full blur-3xl" />
                        <div className="glass-panel w-full h-full rounded-2xl flex items-center justify-center border border-brand-primary/10 dark:border-sky-500/20 overflow-hidden shadow-2xl relative">
                            <Image
                                src="/ice-cubes.webp"
                                alt="Premium crystal clear ice cubes in a glass, 9-stage purified by TG Ice Cubes Gensan"
                                fill
                                className="object-cover animate-breathing"
                                sizes="(max-width: 768px) 100vw, 500px"
                                priority
                            />

                            {/* Floating Elements decoration */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent/20 dark:bg-sky-400/20 rounded-full blur-2xl z-20 pointer-events-none" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-primary/10 dark:bg-indigo-400/20 rounded-full blur-2xl z-20 pointer-events-none" />
                        </div>

                        {/* Stats Card Floating */}
                        <div className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl flex items-center gap-3 animate-[shimmer_3s_infinite] bg-white/80 dark:bg-slate-900/80 z-30">
                            <div className="w-10 h-10 rounded-full bg-brand-primary/10 dark:bg-sky-500/20 flex items-center justify-center text-brand-primary dark:text-sky-400">
                                ✨
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Purity Level</p>
                                <p className="text-brand-dark dark:text-white font-bold">100% Clean</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
