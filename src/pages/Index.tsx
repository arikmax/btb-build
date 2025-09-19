import { HeroSection } from "@/components/hero-section";
import { GuaranteesSection } from "@/components/guarantees-section";
import { AdvantagesSection } from "@/components/advantages-section";
import { ServicesSection } from "@/components/services-section";
import { CalculatorSection } from "@/components/calculator-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CertificatesSection } from "@/components/certificates-section";
import { FinalCtaSection } from "@/components/final-cta-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GuaranteesSection />
      <AdvantagesSection />
      <ServicesSection />
      <CalculatorSection />
      <TestimonialsSection />
      <CertificatesSection />
      <FinalCtaSection />
    </div>
  );
};

export default Index;
