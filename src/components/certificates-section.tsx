import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, CheckCircle } from "lucide-react";

const certificates = [
  { name: "СРО", description: "Строительные работы", icon: "🏗️" },
  { name: "ISO 9001", description: "Система менеджмента качества", icon: "⭐" },
  { name: "Лицензия МЧС", description: "Пожарная безопасность", icon: "🔥" },
  { name: "Допуск СРО", description: "Проектирование зданий", icon: "📐" }
];

const partners = [
  { name: "VALFEX", description: "Трубопроводная арматура", icon: "🔧" },
  { name: "PROAQVA", description: "Системы водоочистки", icon: "💧" },
  { name: "ЛАНДИА ТМ", description: "Насосное оборудование", icon: "⚙️" },
  { name: "GRUNDFOS", description: "Циркуляционные насосы", icon: "🔄" }
];

export const CertificatesSection = () => {
  return (
    <Section variant="default" size="large">
      <div className="text-center mb-12">
        <Heading level={2} className="text-primary mb-4">
          Наша работа сертифицирована
        </Heading>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Все необходимые лицензии и сертификаты для выполнения работ любой сложности
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Certificates */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-bold text-primary">Сертификаты и лицензии</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all border-2 hover:border-primary/30">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-3">{cert.icon}</div>
                  <h4 className="font-bold text-primary group-hover:text-accent transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Partners */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-bold text-primary">Официальные партнеры</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {partners.map((partner, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all border-2 hover:border-accent/30">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-3">{partner.icon}</div>
                  <h4 className="font-bold text-primary group-hover:text-accent transition-colors">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 inline-flex items-center gap-4">
          <CheckCircle className="w-8 h-8 text-accent" />
          <div className="text-left">
            <p className="font-bold text-primary">Страховая защита 50 млн ₽</p>
            <p className="text-sm text-muted-foreground">Полная ответственность за результат</p>
          </div>
        </div>
      </div>
    </Section>
  );
};