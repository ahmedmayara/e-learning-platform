import { Features } from "@/components/marketing/features";
import { Footer } from "@/components/marketing/footer";
import { Hero } from "@/components/marketing/hero";
import { Navbar } from "@/components/marketing/navbar";
import { Pricing } from "@/components/marketing/pricing";
import { SecondaryFeatures } from "@/components/marketing/secondary-features";

export default function Home() {
  return (
    <div className="flex h-full flex-col bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SecondaryFeatures />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
}
