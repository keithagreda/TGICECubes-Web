import { Quote } from "lucide-react";

export default function Testimonials() {
    const reviews = [
        {
            name: "Maria Santos",
            role: "Cafe Owner",
            text: "Since switching to TG Ice Cubes, my customers noticed the difference. The ice is clearer and lasts longer. Delivered daily without fail.",
            location: "Lagao, Gensan"
        },
        {
            name: "Kuya Bong",
            role: "Events Organizer",
            text: "Best supplier for weddings! The styrobox deposit system is very convenient. Ice is always clean, never cloudy.",
            location: "General Santos City"
        },
        {
            name: "Sarah L.",
            role: "Sari-Sari Store Owner",
            text: "Malaki ang kita sa 1kg packs. Mabilis maubos at gusto ng mga suki ko kasi malinis tignan.",
            location: "Bula, Gensan"
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-brand-light dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-brand-dark dark:text-white mb-16 font-poppins">Local Favorites</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-all border border-brand-primary/10 dark:border-slate-800">
                            <Quote className="absolute top-8 right-8 text-brand-primary/20 dark:text-slate-700 rotate-180" size={40} />

                            <p className="text-slate-600 dark:text-slate-300 mb-6 italic relative z-10">"{review.text}"</p>

                            <div>
                                <p className="font-bold text-brand-dark dark:text-white">{review.name}</p>
                                <p className="text-xs text-brand-primary dark:text-sky-400 font-bold uppercase tracking-wider">{review.role}</p>
                                <p className="text-xs text-slate-400 mt-1">{review.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
