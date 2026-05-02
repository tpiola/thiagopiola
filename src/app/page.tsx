import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import Guidelines from "@/components/Guidelines";
import B2BSection from "@/components/B2BSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Guidelines />
        <B2BSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
