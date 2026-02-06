import { Coffee, Martini, Home, ShoppingBag } from "lucide-react";

export default function UseCases() {
    return (
        <section id="use-cases" className="py-24 bg-brand-light dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
            {/* Background Pattern (Light Mode Only) */}
            <div className="absolute inset-0 bg-dot-pattern opacity-5 dark:opacity-0 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-brand-primary dark:text-sky-400 font-bold tracking-wider uppercase text-sm">Applications</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white mt-2 font-poppins">Perfect For Every Occasion</h2>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-slate-600 dark:text-slate-400 text-right max-w-sm">From your morning brew to your evening party, clarity matters.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
                    {/* Card 1: Coffee - Large */}
                    <div className="lg:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-end bg-gradient-to-br from-brand-primary/10 to-transparent dark:from-slate-800/50">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 dark:opacity-30 group-hover:opacity-70 dark:group-hover:opacity-40 transition-opacity mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent dark:from-slate-950 dark:via-slate-900/60 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-500 mb-4 backdrop-blur-md">
                                <Coffee size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-1">Coffee Shops</h3>
                            <p className="text-slate-700 dark:text-slate-300 text-sm">Enhance your Iced Americanos and Cold Brews.</p>
                        </div>
                    </div>

                    {/* Card 2: Party */}
                    <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-end bg-white/40 dark:bg-transparent">
                        <div className="absolute inset-0 bg-purple-900/5 group-hover:bg-purple-900/10 transition-all"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-500 mb-4 backdrop-blur-md">
                                <Martini size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-1">Parties & Events</h3>
                            <p className="text-slate-700 dark:text-slate-300 text-sm">Clean ice for cocktails and buckets.</p>
                        </div>
                    </div>

                    {/* Card 3: Home */}
                    <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-end bg-white/40 dark:bg-transparent">
                        <div className="absolute inset-0 bg-sky-900/5 group-hover:bg-sky-900/10 transition-all"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-sky-600/20 rounded-xl flex items-center justify-center text-sky-600 dark:text-sky-500 mb-4 backdrop-blur-md">
                                <Home size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-1">Daily Home Use</h3>
                            <p className="text-slate-700 dark:text-slate-300 text-sm">Safe, clean ice for the family.</p>
                        </div>
                    </div>

                    {/* Card 4: Retailers */}
                    <div className="lg:col-span-4 glass-panel rounded-3xl p-8 relative overflow-hidden group flex items-center justify-between border-brand-primary/10 dark:border-sky-500/30 bg-gradient-to-r from-brand-primary/5 to-transparent dark:from-sky-900/20 dark:to-slate-900">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-transparent dark:from-sky-900/20 dark:to-slate-900"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 w-full">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center text-green-600 dark:text-green-500 backdrop-blur-md">
                                        <ShoppingBag size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-dark dark:text-white">Sari-Sari Stores & Retailers</h3>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 max-w-2xl">Good margins. Fast moving product. Reliable supply in General Santos City.</p>
                            </div>
                            <div className="shrink-0">
                                <button className="px-6 py-3 bg-white text-brand-dark font-bold rounded-lg hover:bg-brand-light transition-colors">
                                    View Reseller Offer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
