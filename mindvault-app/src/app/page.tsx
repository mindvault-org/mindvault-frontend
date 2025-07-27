import Header from "@/app/components/landing-page/Header";
import Hero from "@/app/components/landing-page/Hero";
import Features from "@/app/components/landing-page/Features";
import Testimonials from "@/app/components/landing-page/Testimonials";
import FAQ from "@/app/components/landing-page/FAQ";
import CTA from "@/app/components/landing-page/CTA";
import Footer from "@/app/components/landing-page/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
