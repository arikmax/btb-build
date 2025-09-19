import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingDown } from "lucide-react";
import { useState } from "react";

export const CalculatorSection = () => {
  const [objectType, setObjectType] = useState("");
  const [area, setArea] = useState("");
  const [service, setService] = useState("");

  const calculateCost = () => {
    // Простая логика для демонстрации
    if (!area || !objectType) return "Заполните все поля";
    
    const basePrice = objectType === "apartment" ? 5000 : 
                     objectType === "house" ? 8000 : 
                     objectType === "office" ? 6000 : 10000;
    
    const result = parseInt(area) * basePrice;
    return `${result.toLocaleString()} ₽`;
  };

  return (
    <Section variant="default" size="large">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Calculator Form */}
        <Card className="border-2 border-primary/20 shadow-xl">
          <CardHeader className="text-center bg-gradient-to-r from-primary/5 to-accent/5">
            <CardTitle className="flex items-center justify-center gap-3 text-2xl text-primary">
              <Calculator className="w-6 h-6" />
              Рассчитайте предварительную стоимость
            </CardTitle>
            <p className="text-muted-foreground">
              Получите примерную стоимость вашего проекта за 30 секунд
            </p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="object-type">Тип объекта</Label>
              <Select value={objectType} onValueChange={setObjectType}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тип объекта" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Квартира</SelectItem>
                  <SelectItem value="house">Частный дом</SelectItem>
                  <SelectItem value="office">Офис</SelectItem>
                  <SelectItem value="production">Производство</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="area">Площадь, м²</Label>
              <Input 
                id="area"
                type="number" 
                placeholder="Введите площадь"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="service">Основная услуга</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите услугу" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="heating">Отопление</SelectItem>
                  <SelectItem value="water">Водоснабжение</SelectItem>
                  <SelectItem value="sewage">Канализация</SelectItem>
                  <SelectItem value="complex">Комплексное решение</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="bg-accent/10 rounded-lg p-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Предварительная стоимость:</p>
                <p className="text-2xl font-bold text-accent">
                  {calculateCost()}
                </p>
              </div>
            </div>
            
            <Button variant="cta" size="lg" className="w-full">
              Получить точный расчет
            </Button>
          </CardContent>
        </Card>
        
        {/* Information */}
        <div className="space-y-8">
          <div>
            <Heading level={2} className="text-primary mb-4">
              Узнайте стоимость вашего проекта
            </Heading>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Наш калькулятор поможет вам получить предварительную оценку стоимости работ. 
              Для точного расчета наш инженер приедет к вам бесплатно.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <TrendingDown className="w-6 h-6 text-accent" />
              <h3 className="font-bold text-xl text-primary">Средняя стоимость проектов</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Квартира:</p>
                <p className="font-bold text-primary">150-300 тыс. ₽</p>
              </div>
              <div>
                <p className="text-muted-foreground">Частный дом:</p>
                <p className="font-bold text-primary">300-800 тыс. ₽</p>
              </div>
              <div>
                <p className="text-muted-foreground">Офис:</p>
                <p className="font-bold text-primary">200-500 тыс. ₽</p>
              </div>
              <div>
                <p className="text-muted-foreground">Производство:</p>
                <p className="font-bold text-primary">от 1 млн ₽</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-primary">В стоимость входит:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Проектирование и согласование
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Все материалы и оборудование
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Монтажные работы
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Пуско-наладочные работы
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Гарантийное обслуживание
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};