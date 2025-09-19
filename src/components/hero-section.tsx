import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { CheckCircle, Clock, Shield, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const problemsList = [
  { icon: "🔧", text: "Старые трубы дают течь?" },
  { icon: "💰", text: "Растут счета за отопление?" },
  { icon: "🔄", text: "Приходится переделывать работу?" }
];

export const HeroSection = () => {
  return (
    <Section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(217 91% 35% / 0.9) 0%, hsl(214 84% 56% / 0.8) 100%), url(${heroImage})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <div className="space-y-8">
          {/* Main Heading */}
          <Heading 
            level={1} 
            className="text-white font-bold leading-tight"
          >
            Инженерные системы под ключ за 7-14 дней
            <span className="block text-accent"> с гарантией 5 лет</span>
          </Heading>
          
          {/* USP */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-xl md:text-2xl font-semibold text-white/95 leading-relaxed">
              Единственная компания в Москве, которая дает письменную гарантию на 
              <span className="text-accent font-bold"> 20% экономии ресурсов</span> или возвращает деньги
            </p>
          </div>
          
          {/* Problems */}
          <div className="grid md:grid-cols-3 gap-4 my-8">
            {problemsList.map((problem, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{problem.icon}</span>
                  <span className="text-white font-medium">{problem.text}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Clock className="w-5 h-5" />
              Получить расчет за 30 минут
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
              <Phone className="w-5 h-5" />
              Заказать выезд инженера бесплатно
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Лицензия СРО</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span>Страховка 50 млн ₽</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>2847+ довольных клиентов</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};