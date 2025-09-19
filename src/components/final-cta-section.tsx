import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Gift } from "lucide-react";

export const FinalCtaSection = () => {
  return (
    <Section variant="dark" size="large">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Form */}
        <Card className="border-white/20 bg-white/10 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gift className="w-8 h-8 text-accent" />
              <CardTitle className="text-2xl text-white">
                Получите персональный расчет
              </CardTitle>
            </div>
            <p className="text-white/80">
              с учетом скидок до 15% при заказе до конца месяца
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Ваше имя *</Label>
                <Input 
                  id="name"
                  placeholder="Введите имя"
                  className="bg-white/90 border-white/30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">Телефон *</Label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="bg-white/90 border-white/30"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="object-type" className="text-white">Тип объекта</Label>
              <Select>
                <SelectTrigger className="bg-white/90 border-white/30">
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
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="area" className="text-white">Площадь, м²</Label>
                <Input 
                  id="area"
                  type="number"
                  placeholder="Введите площадь"
                  className="bg-white/90 border-white/30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-white">Бюджет</Label>
                <Select>
                  <SelectTrigger className="bg-white/90 border-white/30">
                    <SelectValue placeholder="Выберите бюджет" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="budget1">До 200 тыс. ₽</SelectItem>
                    <SelectItem value="budget2">200-500 тыс. ₽</SelectItem>
                    <SelectItem value="budget3">500 тыс. - 1 млн ₽</SelectItem>
                    <SelectItem value="budget4">Более 1 млн ₽</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="comment" className="text-white">Комментарий к проекту</Label>
              <Textarea 
                id="comment"
                placeholder="Опишите особенности вашего проекта"
                className="bg-white/90 border-white/30"
                rows={3}
              />
            </div>
            
            <Button variant="cta" size="lg" className="w-full">
              <Gift className="w-5 h-5" />
              Получить расчет со скидкой
            </Button>
            
            <p className="text-xs text-white/60 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </CardContent>
        </Card>
        
        {/* Contact Info */}
        <div className="space-y-8 text-white">
          <div>
            <Heading level={2} className="text-white mb-6">
              Контактная информация
            </Heading>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg">+7 (495) 123-45-67</p>
                  <p className="text-white/80">Звонки принимаем 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg">info@btrstroy.ru</p>
                  <p className="text-white/80">Ответим в течение часа</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg">Москва, ул. Инженерная, 15</p>
                  <p className="text-white/80">Офис работает Пн-Пт с 9:00 до 19:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg">Аварийная служба</p>
                  <p className="text-white/80">Выезд инженера в течение 2 часов</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="font-bold text-xl mb-4 text-accent">🎁 Специальное предложение</h3>
            <ul className="space-y-2 text-white/90">
              <li>✅ Бесплатный выезд инженера и составление сметы</li>
              <li>✅ Скидка 10% при заказе до конца месяца</li>
              <li>✅ Дополнительная скидка 5% при полной предоплате</li>
              <li>✅ Гарантия лучшей цены — найдете дешевле, снизим на 5%</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="text-2xl font-bold text-accent">2-24ч</p>
              <p className="text-sm text-white/80">Выезд инженера</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="text-2xl font-bold text-accent">7-14д</p>
              <p className="text-sm text-white/80">Выполнение работ</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};