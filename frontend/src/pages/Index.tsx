import Navbar from "@/components/Navbar";
import IntroSection from "@/components/IntroSection";
import IntroDividerText from "../components/IntroDividerText";
import AboutScrollSection from "../components/AboutScrollSection";

import UniqueIdeasHoverSection from "@/components/UniqueIdeasHoverSection";

import HeroUltra from "@/components/HeroUltra";
import ExcellenceSection from "@/components/ExcellenceSection";
import ServicesSection from "@/components/ServicesSection";
import TapiocaHighlight from "@/components/TapiocaHighlight";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import ProductsSection from "@/components/ProductsSection";
import ScrollingText from "@/components/ScrollingText";
import StartUsingSection from "@/components/StartUsingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <IntroSection />
      <IntroDividerText /> 
    
    <AboutScrollSection />

      <HeroUltra />
      <ExcellenceSection />
<UniqueIdeasHoverSection />
      <ServicesSection />
      <TapiocaHighlight />
      <AboutSection />
      <AchievementsSection />
      <ScrollingText />
      <ProductsSection />
     
      <StartUsingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;