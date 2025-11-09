import Hero from "@/components/hero/Hero";
import Nav from "@/components/nav/Nav";

export default function Home() {
  return (

    <div className="">
      <main className="">
        <nav className="fixed top-0 left-0 right-0 z-50"> 
          <Nav />
        </nav>
          <Hero />
      </main>
    </div>
  );
}
