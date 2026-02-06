import { Snowflake, Droplet, Star } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: <Snowflake size={32} />,
            title: "Slower Melt Rate",
            description: "Dense, crystal-clear cubes that last longer in your drink, keeping it cold without diluting the flavor."
        },
        {
            icon: <Droplet size={32} />,
            title: "Purer Taste",
            description: "Removing 99.9% of impurities means no funny aftertaste. Just pure, neutral coldness that respects your coffee or matcha."
        },
        {
            icon: <Star size={32} />,
            title: "Premium Aesthetics",
            description: "Elevate your beverage presentation. Crystal clear ice looks better in photos and feels better in the glass."
        }
    ];

    return (
        <section id="features" className="py-24 bg-brand-light dark:bg-slate-900 border-t border-brand-primary/10 dark:border-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white mb-4 font-poppins">Why <span className="text-brand-primary dark:text-sky-400">TG Ice Cubes</span>?</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Not all ice is created equal. Experience the difference of professionally purified, lab-tested ice.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="glass-panel p-8 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all hover:-translate-y-2 group">
                            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 dark:bg-sky-500/10 flex items-center justify-center text-brand-primary dark:text-sky-400 mb-6 group-hover:bg-brand-primary dark:group-hover:bg-sky-500 group-hover:text-white transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
