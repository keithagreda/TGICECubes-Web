import { ShieldCheck, Droplets, Zap, Clock, FileCheck } from "lucide-react";

export default function TrustBar() {
    const features = [
        { icon: <ShieldCheck size={18} />, text: "9-Stage Purification" },
        { icon: <Droplets size={18} />, text: "UV Sterilized" },
        { icon: <Zap size={18} />, text: "Crystal Clear" },
        { icon: <Clock size={18} />, text: "Daily Delivery" },
        { icon: <FileCheck size={18} />, text: "Sanitary Permit Verified • Gensan" },
    ];

    return (
        <div className="w-full bg-white/50 dark:bg-slate-900/50 border-y border-brand-primary/10 dark:border-slate-800 backdrop-blur-sm transition-colors duration-300 overflow-hidden py-6 md:py-8">
            {/* Row 1: Scroll Left */}
            <div className="flex w-full mb-4 md:mb-6 relative">
                <div className="flex items-center gap-4 md:gap-6 animate-infinite-scroll min-w-full shrink-0 px-3">
                    {[...features, ...features, ...features].map((feature, index) => (
                        <div
                            key={`row1-${index}`}
                            className="flex items-center gap-2 px-6 py-3 bg-brand-primary/5 dark:bg-white/5 border border-brand-primary/10 dark:border-white/10 rounded-full text-brand-dark dark:text-slate-200 font-medium whitespace-nowrap"
                        >
                            <span className="text-brand-primary dark:text-sky-400">{feature.icon}</span>
                            <span className="text-sm uppercase tracking-wide font-bold">{feature.text}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-6 animate-infinite-scroll min-w-full shrink-0 px-3" aria-hidden="true">
                    {[...features, ...features, ...features].map((feature, index) => (
                        <div
                            key={`row1-duplicate-${index}`}
                            className="flex items-center gap-2 px-6 py-3 bg-brand-primary/5 dark:bg-white/5 border border-brand-primary/10 dark:border-white/10 rounded-full text-brand-dark dark:text-slate-200 font-medium whitespace-nowrap"
                        >
                            <span className="text-brand-primary dark:text-sky-400">{feature.icon}</span>
                            <span className="text-sm uppercase tracking-wide font-bold">{feature.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2: Scroll Right (Opposite) */}
            <div className="flex w-full relative">
                <div className="flex items-center gap-6 animate-infinite-scroll min-w-full shrink-0 px-3 flex-row-reverse" style={{ animationDirection: 'reverse' }}>
                    {[...features, ...features, ...features].map((feature, index) => (
                        <div
                            key={`row2-${index}`}
                            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-brand-primary/10 dark:border-slate-700 rounded-full text-brand-dark dark:text-slate-200 font-medium whitespace-nowrap shadow-sm"
                        >
                            <span className="text-brand-accent dark:text-sky-400">{feature.icon}</span>
                            <span className="text-sm uppercase tracking-wide font-bold">{feature.text}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-6 animate-infinite-scroll min-w-full shrink-0 px-3 flex-row-reverse" aria-hidden="true" style={{ animationDirection: 'reverse' }}>
                    {[...features, ...features, ...features].map((feature, index) => (
                        <div
                            key={`row2-duplicate-${index}`}
                            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-brand-primary/10 dark:border-slate-700 rounded-full text-brand-dark dark:text-slate-200 font-medium whitespace-nowrap shadow-sm"
                        >
                            <span className="text-brand-accent dark:text-sky-400">{feature.icon}</span>
                            <span className="text-sm uppercase tracking-wide font-bold">{feature.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}
