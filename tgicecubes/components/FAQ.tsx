"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
    const faqs = [
        {
            question: "What are your delivery minimums?",
            answer: "For 1kg Ice Cubes, the minimum is 30 bags within the city proper. For 5kg Ice Cubes, the minimum is 5 bags for delivery."
        },
        {
            question: "Can I pick up my order?",
            answer: "Yes! For 5kg Ice Cubes, there is NO minimum order for pick up. We are located in General Santos City."
        },
        {
            question: "How do the 25kg Styrobox orders work?",
            answer: "The 25kg Styrobox is ₱230. We require a ₱100 deposit for the styrobox, which is refundable when you return the box after use."
        },
        {
            question: "Do you have wholesale rates for resellers?",
            answer: "Yes! Our 1kg Ice Cubes at ₱8/bag are perfect for sari-sari stores and resellers. Contact us for bulk arrangements."
        },
        {
            question: "Is your ice safe?",
            answer: "Absolutely. Our ice goes through a rigorous 9-stage purification process including 4 sediment filters, Reverse Osmosis, and UV Sterilization."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-bold text-center text-brand-dark dark:text-white mb-12 font-poppins">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl transition-all overflow-hidden ${openIndex === index ? 'border-brand-primary dark:border-sky-500 bg-brand-light dark:bg-slate-900' : 'border-brand-primary/10 dark:border-slate-800 bg-white dark:bg-slate-950 hover:bg-brand-light/50 dark:hover:bg-slate-900'}`}
                        >
                            <button
                                className="w-full px-6 py-5 text-left flex justify-between items-center"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={`font-bold ${openIndex === index ? 'text-brand-primary dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>{faq.question}</span>
                                {openIndex === index ? <Minus className="text-brand-primary dark:text-sky-500 shrink-0" /> : <Plus className="text-slate-400 shrink-0" />}
                            </button>

                            <div
                                className={`px-6 text-slate-600 dark:text-slate-400 leading-relaxed transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
