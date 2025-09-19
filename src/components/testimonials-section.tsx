import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Building, User } from "lucide-react";

const testimonials = [
  {
    name: "Александр Петров",
    position: "Управляющий ЖК 'Северный'",
    company: "ПИК",
    text: "БТРСтрой полностью модернизировали систему отопления в нашем ЖК. Работы выполнены качественно и в срок. Жители заметили снижение платежей на 30%.",
    result: "Сэкономили 2.8 млн руб. в год",
    rating: 5,
    avatar: "👨‍💼"
  },
  {
    name: "Елена Иванова",
    position: "Собственник",
    company: "Частный дом",
    text: "Спасибо за профессиональную работу! Установили полную систему водоснабжения и отопления. Особенно порадовала гарантия и качество материалов.",
    result: "Экономия 25% на коммунальных услугах",
    rating: 5,
    avatar: "👩‍🦳"
  },
  {
    name: "Дмитрий Козлов",
    position: "Технический директор",
    company: "Производственное предприятие",
    text: "Нужно было срочно восстановить систему водоснабжения после аварии. БТРСтрой справились за 3 дня вместо обещанных 5. Отличная работа!",
    result: "Избежали простоя на 2 недели",
    rating: 5,
    avatar: "👨‍🔧"
  },
  {
    name: "Марина Волкова",
    position: "Директор",
    company: "Бизнес-центр 'Альфа'",
    text: "Комплексное решение по инженерным системам для всего бизнес-центра. Профессиональный подход, качественные материалы, соблюдение сроков.",
    result: "Снижение эксплуатационных расходов на 40%",
    rating: 5,
    avatar: "👩‍💼"
  }
];

export const TestimonialsSection = () => {
  return (
    <Section variant="gray" size="large">
      <div className="text-center mb-12">
        <Heading level={2} className="text-primary mb-4">
          Реальные отзывы и результаты
        </Heading>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Наши клиенты рассказывают о результатах сотрудничества с нами
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30">
            <CardContent className="p-6">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              {/* Result */}
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-4 mb-6">
                <p className="font-bold text-accent text-center">
                  ✅ {testimonial.result}
                </p>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  <p className="text-sm font-medium text-accent">{testimonial.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <div className="bg-white rounded-xl p-6 border-2 border-primary/20 inline-flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl text-primary">2847+</span>
          </div>
          <span className="text-muted-foreground">довольных клиентов за 10 лет работы</span>
        </div>
      </div>
    </Section>
  );
};