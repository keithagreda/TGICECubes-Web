import { TrendingUp, Truck, BadgeCheck } from "lucide-react";

export default function Reseller() {
    return (
        <section id="reseller" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="glass-panel p-8 md:p-12 rounded-3xl border-brand-primary/20 dark:border-sky-500/20 bg-gradient-to-br from-brand-primary/5 to-transparent dark:from-slate-800/50 dark:to-transparent relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(#0044cc_1px,transparent_1px)] dark:bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-brand-primary dark:text-sky-400 font-bold tracking-wider uppercase text-sm mb-2 block">Business Opportunity</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white mb-6 font-poppins">Grow Your Sari-Sari Store Sales</h2>
                            <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg leading-relaxed">
                                Ice is an essential daily commodity in Gensan. Partner with TG Ice Cubes effectively adds a high-margin, fast-moving product to your inventory without the hassle.
                            </p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400">
                                        <TrendingUp size={18} />
                                    </div>
                                    <span className="text-brand-dark dark:text-slate-200 font-medium">High Profit Margins</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <Truck size={18} />
                                    </div>
                                    <span className="text-brand-dark dark:text-slate-200 font-medium">Daily Restocking & Delivery</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                        <BadgeCheck size={18} />
                                    </div>
                                    <span className="text-brand-dark dark:text-slate-200 font-medium">Guaranteed Clean & Safe (FDA Compliant)</span>
                                </li>
                            </ul>

                            <button className="px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 dark:bg-sky-500 dark:hover:bg-sky-400 text-white font-bold rounded-xl transition-all shadow-lg">
                                Inquire for Reseller Rates
                            </button>
                        </div>

                        <div className="relative">
                            {/* Abstract representation of "Business in a Box" */}
                            <div className="aspect-video bg-brand-light dark:bg-slate-800 rounded-2xl flex items-center justify-center border border-brand-primary/10 dark:border-slate-700 shadow-xl">
                                <div className="text-center">
                                    <p className="text-brand-primary dark:text-sky-400 font-bold text-xl mb-2">Business Starter Pack</p>
                                    <p className="text-slate-500 text-sm">Free Tarpaulin + Initial Stock</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
