import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Features from "@/components/Features";
import Process from "@/components/Process";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import Reseller from "@/components/Reseller";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-light dark:bg-slate-950 relative selection:bg-brand-primary/30 dark:selection:bg-sky-500/30 transition-colors duration-300">
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <Process />
      <UseCases />
      <Pricing />
      <Reseller />
      <Testimonials />
      <div id="contact" className="py-24 bg-gradient-to-t from-slate-200 to-white dark:from-slate-950 dark:to-indigo-950/20 text-center transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark dark:text-white mb-6 font-poppins">Ready for the Clearest Ice?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
            Order now for your home, business, or event in General Santos City.<br />
            <span className="text-brand-primary dark:text-sky-400 font-bold block mt-2">Open Daily: 7:30 AM - 5:00 PM</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:09253867697" className="inline-flex items-center justify-center px-10 py-5 bg-brand-primary hover:bg-brand-primary/90 dark:bg-sky-500 dark:hover:bg-sky-400 text-white font-bold rounded-full text-lg shadow-[0_0_30px_rgba(0,14,119,0.3)] dark:shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:shadow-xl hover:scale-105 transition-all">
              Call 0925-386-7697
            </a>
            <a href="https://m.me/TGIceCubesGensan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 bg-white text-brand-dark hover:bg-brand-light dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 font-bold rounded-full text-lg hover:scale-105 transition-all border border-brand-primary/10 dark:border-slate-700">
              Message on Facebook
            </a>
          </div>
        </div>
      </div>
      <FAQ />
      <Footer />
    </main>
  );
}
