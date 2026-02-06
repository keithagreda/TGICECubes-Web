import Link from "next/link";
import { Share2, ShoppingBag, Truck, Package } from "lucide-react";

export default function Pricing() {
    const products = [
        {
            name: "5kg Ice Cubes",
            price: "₱34",
            unit: "/ bag",
            icon: <Package size={32} />,
            details: [
                { label: "Pick Up", value: "No Minimum Order" },
                { label: "Delivery", value: "Minimum 5 Bags" }
            ],
            highlight: false,
            cta: "Order Now"
        },
        {
            name: "1kg Ice Cubes",
            price: "₱8",
            unit: "/ bag",
            icon: <ShoppingBag size={32} />,
            details: [
                { label: "Delivery Min", value: "30 Bags (City Proper)" },
                { label: "Best For", value: "Sari-sari Stores, Resellers" }
            ],
            highlight: true,
            cta: "Order Bulk"
        },
        {
            name: "25kg Styrobox",
            price: "₱230",
            unit: "/ box",
            icon: <Truck size={32} />,
            details: [
                { label: "Deposit", value: "₱100 (Refundable)" },
                { label: "Policy", value: "Return Box After Use" }
            ],
            highlight: false,
            cta: "Book for Event"
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-brand-light dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 dark:bg-sky-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-dark dark:text-white mb-6 font-poppins">Straightforward Pricing</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        Market-leading quality at competitive prices. Perfect for business or events.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 border transition-all duration-300 group ${product.highlight
                                ? 'bg-white dark:bg-slate-900 border-brand-primary dark:border-sky-500 shadow-[0_0_30px_rgba(0,14,119,0.15)] dark:shadow-[0_0_30px_rgba(14,165,233,0.15)] md:-translate-y-4'
                                : 'bg-white/50 dark:bg-slate-950/50 border-brand-primary/10 dark:border-slate-800 hover:border-brand-primary/30 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900'
                                }`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 dark:bg-slate-800 flex items-center justify-center text-brand-primary dark:text-sky-400 mb-6 group-hover:scale-110 transition-transform">
                                {product.icon}
                            </div>

                            <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-2">{product.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold text-brand-primary dark:text-sky-400">{product.price}</span>
                                <span className="text-slate-500 font-medium">{product.unit}</span>
                            </div>

                            <div className="space-y-4 mb-8 bg-brand-primary/5 dark:bg-black/20 p-4 rounded-xl">
                                {product.details.map((detail, i) => (
                                    <div key={i} className="flex justify-between text-sm">
                                        <span className="text-slate-500 dark:text-slate-400">{detail.label}</span>
                                        <span className="text-brand-dark dark:text-white font-semibold text-right">{detail.value}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="#contact"
                                className={`block w-full py-4 rounded-xl font-bold transition-all text-center ${product.highlight
                                    ? 'bg-brand-primary hover:bg-brand-primary/90 dark:bg-sky-500 dark:hover:bg-sky-400 text-white shadow-lg'
                                    : 'bg-brand-light dark:bg-white text-brand-dark dark:text-slate-900 hover:bg-brand-accent/20 dark:hover:bg-sky-50'
                                    }`}
                            >
                                {product.cta}
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary/5 dark:bg-indigo-900/30 border border-brand-primary/10 dark:border-indigo-500/30 text-brand-primary dark:text-indigo-300 text-sm">
                        <Share2 size={16} />
                        <span className="font-semibold">Reseller?</span>
                        <span className="opacity-80">Contact us for wholesale rates on 1kg packs.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
