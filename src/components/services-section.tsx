import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Thermometer, Droplets, Wrench, Clipboard, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Thermometer,
    title: "Отопление",
    description: "Проектирование, монтаж и модернизация систем отопления. Радиаторы, теплые полы, котельные.",
    price: "от 150 000 ₽",
    emoji: "🔥"
  },
  {
    icon: Droplets,
    title: "Водоснабжение",
    description: "Водопровод, насосные станции, очистка воды. Замена труб и установка сантехники.",
    price: "от 120 000 ₽",
    emoji: "💧"
  },
  {
    icon: Wrench,
    title: "Канализация",
    description: "Внутренние и наружные сети, насосные станции, очистные сооружения.",
    price: "от 180 000 ₽",
    emoji: "🚰"
  },
  {
    icon: Clipboard,
    title: "Проектирование",
    description: "Полный комплекс проектных работ с согласованием в государственных органах.",
    price: "от 80 000 ₽",
    emoji: "📐"
  }
];

export const ServicesSection = () => {
  return (
    <Section variant="gray" size="large">
      <div className="text-center mb-12">
        <Heading level={2} className="text-primary mb-4">
          Наши ключевые услуги
        </Heading>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Полный спектр инженерных решений под ключ с гарантией качества
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {services.map((service, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 hover:scale-105">
            <CardContent className="p-6 text-center h-full flex flex-col">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                <span className="text-3xl">{service.emoji}</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {service.description}
              </p>
              <div className="mt-auto">
                <p className="font-bold text-lg text-accent mb-3">
                  {service.price}
                </p>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                  Подробнее
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <Button variant="cta" size="lg">
          Смотреть все услуги
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </Section>
  );
};