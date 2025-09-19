import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Wrench, RotateCcw } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Гарантия 5 лет на все работы",
    description: "Полная гарантия на все виды инженерных работ и оборудование"
  },
  {
    icon: Clock,
    title: "Скидка 10% за каждый день просрочки",
    description: "Не укладываемся в срок — компенсируем неудобства"
  },
  {
    icon: Wrench,
    title: "Бесплатное сервисное обслуживание первый год",
    description: "Техническая поддержка и плановые осмотры без доплат"
  },
  {
    icon: RotateCcw,
    title: "Возврат 100% стоимости при сбое в первые 6 месяцев",
    description: "Полная гарантия качества с возвратом средств"
  }
];

export const GuaranteesSection = () => {
  return (
    <Section variant="gray" size="large">
      <div className="text-center mb-12">
        <Heading level={2} className="text-primary mb-4">
          Наша гарантия — ваш покой
        </Heading>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Мы берем на себя все риски, чтобы вы могли спокойно наслаждаться комфортом
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {guarantees.map((guarantee, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <guarantee.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-primary">
                {guarantee.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {guarantee.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};