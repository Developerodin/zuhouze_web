import { Header } from "@/components/sections/header";
import { HeroVideo } from "@/components/sections/hero-video";
import { EasySteps } from "@/components/sections/easy-steps";
import { GlobeSection } from "@/components/sections/globe";
import { Properties } from "@/components/sections/properties";
import { Community } from "@/components/sections/community";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Add top padding to account for fixed header */}
      <div className="w-full">
        <HeroVideo />
        <EasySteps />
        <GlobeSection />
        <Properties />
        <Community />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
