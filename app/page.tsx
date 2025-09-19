import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { EasySteps } from "@/components/sections/easy-steps";
import { Properties } from "@/components/sections/properties";
import { Community } from "@/components/sections/community";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <GridPattern className="opacity-30" />
      <Header />
      {/* Add top padding to account for fixed header */}
      <div className="pt-32">
        <Hero />
        <EasySteps />
        <Properties />
        <Community />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
