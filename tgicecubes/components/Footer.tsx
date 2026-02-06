import Link from "next/link";
import { Facebook, Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-dark dark:bg-slate-950 border-t border-brand-primary/20 dark:border-slate-900 pt-20 pb-10 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
                            TG <span className="text-brand-accent dark:text-sky-400">Ice Cubes</span>
                        </h2>
                        <p className="text-slate-300 dark:text-slate-400 max-w-sm mb-6 leading-relaxed">
                            The clearest, purest ice in General Santos City. 9-stage purified for premium quality. Perfect for daily needs, events, and businesses.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/TGIceCubesGensan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 dark:bg-slate-900 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-primary dark:hover:bg-sky-500 transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 dark:bg-slate-900 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-500 transition-all">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Explore</h3>
                        <ul className="space-y-4">
                            <li><Link href="#features" className="text-slate-300 dark:text-slate-400 hover:text-brand-accent dark:hover:text-sky-400 transition-colors">Why TG Ice</Link></li>
                            <li><Link href="#process" className="text-slate-300 dark:text-slate-400 hover:text-brand-accent dark:hover:text-sky-400 transition-colors">Our Process</Link></li>
                            <li><Link href="#pricing" className="text-slate-300 dark:text-slate-400 hover:text-brand-accent dark:hover:text-sky-400 transition-colors">Pricing</Link></li>
                            <li><Link href="#reseller" className="text-slate-300 dark:text-slate-400 hover:text-brand-accent dark:hover:text-sky-400 transition-colors">Be a Reseller</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-300 dark:text-slate-400">
                                <MapPin className="text-brand-accent dark:text-sky-500 shrink-0" size={20} />
                                <a href="https://maps.app.goo.gl/HE7zoYDFSnF3KDMdA" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent dark:hover:text-sky-400 transition-colors">
                                    Homobono Japsay St., Zone 5,<br />Barangay Bula, General Santos City
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 dark:text-slate-400">
                                <Phone className="text-brand-accent dark:text-sky-500 shrink-0" size={20} />
                                <a href="tel:09253867697" className="hover:text-brand-accent dark:hover:text-sky-400 transition-colors">0925-386-7697</a>
                            </li>
                            <li className="flex items-start gap-3 text-slate-300 dark:text-slate-400 pt-2 border-t border-white/10 dark:border-slate-800 mt-2">
                                <span className="text-brand-accent dark:text-sky-500 font-bold shrink-0 text-xs uppercase tracking-wide">Hours</span>
                                <span className="text-sm">7:30 AM to 5:00 PM<br />Monday - Sunday</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 dark:border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm">
                        &copy; {new Date().getFullYear()} TG Ice Cubes. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-slate-400 hover:text-white text-sm">Privacy Policy</Link>
                        <Link href="#" className="text-slate-400 hover:text-white text-sm">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
