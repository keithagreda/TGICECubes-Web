import { CheckCircle2 } from "lucide-react";

export default function Process() {
    const steps = [
        { number: "01", title: "Sediment Filtration", desc: "4 stages of sediment filters remove physical particles." },
        { number: "02", title: "Reverse Osmosis", desc: "Advanced membrane technology removes dissolved solids." },
        { number: "03", title: "Carbon Polishing", desc: "Activated carbon improves taste and odor." },
        { number: "04", title: "UV Sterilization", desc: "Ultraviolet light eliminates 99.9% of bacteria." },
        { number: "05", title: "Freezing", desc: "Slow-freezing process ensures crystal clarity." },
    ];

    return (
        <section id="process" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 dark:bg-sky-900/30 text-brand-primary dark:text-sky-400 text-xs font-bold uppercase tracking-wider mb-6">
                            Our Technology
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-dark dark:text-white mb-6 font-poppins text-balance">
                            From Tap to <span className="text-brand-primary dark:text-sky-400">Crystal.</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                            We don't just freeze water; we perfect it. Our 9-stage purification process ensures that every cube is safe, clear, and tasteless.
                        </p>

                        <div className="space-y-6">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-brand-primary/20 dark:border-slate-800 flex items-center justify-center font-mono text-brand-primary dark:text-sky-500 font-bold group-hover:bg-brand-primary dark:group-hover:bg-sky-500 group-hover:text-white transition-all">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-1">{step.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 relative">
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="space-y-4 translate-y-8">
                                <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-2xl w-full animate-pulse"></div>
                                <div className="h-40 bg-brand-primary/10 dark:bg-slate-800/50 rounded-2xl w-full"></div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-40 bg-brand-accent/20 dark:bg-slate-800/50 rounded-2xl w-full"></div>
                                <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-2xl w-full animate-pulse"></div>
                            </div>
                        </div>

                        {/* Background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/20 dark:bg-sky-500/10 blur-3xl -z-10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
