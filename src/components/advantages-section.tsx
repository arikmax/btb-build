import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, FileText, Zap } from "lucide-react";

const advantages = [
  {
    icon: Trophy,
    title: "Официальный партнер VALFEX, PROAQVA, ЛАНДИА ТМ",
    description: "Прямые поставки оригинального оборудования с максимальными скидками",
    accent: "🏆"
  },
  {
    icon: Users,
    title: "Собственные бригады (не субподрядчики)",
    description: "Полный контроль качества на каждом этапе работ",
    accent: "👨‍🔧"
  },
  {
    icon: FileText,
    title: "Полный пакет документов для УК",
    description: "Все справки, акты и техническая документация для управляющей компании",
    accent: "📋"
  },
  {
    icon: Zap,
    title: "Аварийный выезд 24/7 в течение 2 часов",
    description: "Круглосуточная служба экстренного реагирования",
    accent: "⚡"
  }
];

export const AdvantagesSection = () => {
  return (
    <Section variant="default" size="large">
      <div className="text-center mb-12">
        <Heading level={2} className="text-primary mb-4">
          Почему нам доверяют 2847+ клиентов?
        </Heading>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          За 10 лет работы мы выработали систему, которая исключает проблемы и гарантирует результат
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {advantages.map((advantage, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30 hover:scale-[1.02]">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all flex-shrink-0">
                  <span className="text-2xl">{advantage.accent}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-accent transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};