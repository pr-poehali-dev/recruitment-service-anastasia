import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Users',
    title: 'Точечный подбор',
    description: 'Поиск ключевых специалистов для критически важных позиций',
  },
  {
    icon: 'TrendingUp',
    title: 'Массовый подбор',
    description: 'Закрытие большого количества вакансий в короткие сроки',
  },
  {
    icon: 'Target',
    title: 'Подбор руководителей',
    description: 'Специализация на топ-менеджерах и директорах',
  },
  {
    icon: 'Award',
    title: 'Гарантия результата',
    description: 'Ориентация на быстрое решение кадровых вопросов',
  },
];

const priceCategories = [
  {
    category: 'Руководящие должности',
    positions: [
      { title: 'Высшее руководство', price: 'от 80 000 руб' },
      { title: 'Руководители среднего звена', price: 'от 60 000 руб' },
      { title: 'Линейные руководители', price: 'от 50 000 руб' },
    ],
  },
  {
    category: 'Специалистские должности',
    positions: [
      { title: 'Высококвалифицированные специалисты', price: 'от 50 000 руб' },
      { title: 'Специалисты среднего уровня', price: 'от 50 000 руб' },
      { title: 'Младшие специалисты', price: 'от 40 000 руб' },
    ],
  },
  {
    category: 'Рабочие должности',
    positions: [
      { title: 'Квалифицированные рабочие', price: 'от 30 000 руб' },
      { title: 'Неквалифицированные рабочие', price: 'от 25 000 руб' },
    ],
  },
  {
    category: 'Обслуживающий персонал',
    positions: [
      { title: 'Технический персонал', price: 'от 15 000 руб' },
      { title: 'Административно-хозяйственный персонал', price: 'от 15 000 руб' },
    ],
  },
  {
    category: 'Творческие и научные должности',
    positions: [
      { title: 'Научные сотрудники, исследователи', price: 'от 100 000 руб' },
      { title: 'Художественные профессии', price: 'от 100 000 руб' },
    ],
  },
  {
    category: 'Дополнительные категории',
    positions: [
      { title: 'Супервайзеры', price: 'от 80 000 руб' },
      { title: 'Территориальные менеджеры', price: 'от 70 000 руб' },
      { title: 'Торговые представители', price: 'от 70 000 руб' },
      { title: 'Врачи', price: 'от 60 000 руб' },
      { title: 'Специалисты по охране труда', price: 'от 40 000 руб' },
      { title: 'Менеджеры по продажам', price: 'от 30 000 руб' },
      { title: 'Медсестры', price: 'от 20 000 руб' },
      { title: 'Парикмахеры / Барберы / Массажисты', price: 'от 15 000 руб' },
    ],
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Анастасия свяжется с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', email: '', position: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Анастасия Зайцева</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'services', 'pricing', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === section ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'Обо мне'}
                  {section === 'services' && 'Услуги'}
                  {section === 'pricing' && 'Прайс'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                Профессиональный рекрутинг
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Анастасия Зайцева
              </h1>
              <p className="text-xl text-muted-foreground">
                Эксперт по подбору персонала с 15-летним опытом
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="Briefcase" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">лет в рекрутинге</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="TrendingUp" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-primary">20+</div>
                    <div className="text-sm text-muted-foreground">лет в продажах</div>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="mt-4 bg-accent hover:bg-accent/90 text-white"
                onClick={() => scrollToSection('contact')}
              >
                Связаться со мной
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/c5198504-8027-434b-b71a-316e12f29420.jpg" 
                  alt="Анастасия Зайцева"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">Обо мне</h2>
          <Card className="border-2">
            <CardContent className="p-8 space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                Меня зовут Анастасия Зайцева, я профессиональный рекрутер с богатым опытом работы в сфере
                подбора персонала — более 15 лет, а также успешной карьеры в продажах — около 20 лет.
              </p>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
                  <Icon name="Target" className="text-accent" size={28} />
                  Что я делаю?
                </h3>
                <p className="text-lg leading-relaxed">
                  Специализируюсь на точечном и массовом подборе сотрудников любого уровня — от топ-менеджеров
                  до линейного персонала. Имею успешный опыт подбора ключевых руководителей: директоров
                  производств, региональных представителей, управляющих, супервайзеров, торговых
                  представителей, территориальных менеджеров и многих других позиций.
                </p>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-accent" size={28} />
                  Почему именно я?
                </h3>
                <p className="text-lg leading-relaxed">
                  Потому что моя работа ориентирована на быстрое решение ваших кадровых вопросов. Я оперативно
                  выявляю нужных кандидатов, эффективно организовываю процесс собеседований и гарантирую
                  отличный конечный результат в кратчайшие сроки.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Услуги</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300 hover:border-accent"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-accent" size={28} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Стоимость услуг определяется индивидуально исходя из специфики вакансии
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {priceCategories.map((category, index) => (
              <Card key={index} className="border-2">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-xl text-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {category.positions.map((position, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b last:border-0">
                        <span className="text-foreground">{position.title}</span>
                        <span className="font-semibold text-accent">{position.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Контакты</h2>
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Готовы закрыть ключевые позиции вашей команды?
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Оставьте заявку и я свяжусь с вами в ближайшее время
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (900) 000-00-00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Должность для подбора</Label>
                      <Input
                        id="position"
                        placeholder="Например: Руководитель отдела"
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о вашей вакансии и требованиях..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>

                <Separator />

                <div>
                  <p className="text-center text-muted-foreground mb-4">Или свяжитесь со мной напрямую:</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="tel:+79628658925"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      <Icon name="Phone" className="text-accent" size={20} />
                      <span>+7 (962) 865-89-25</span>
                    </a>
                    <a
                      href="mailto:as_zaiyseva@mail.ru"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      <Icon name="Mail" className="text-accent" size={20} />
                      <span>as_zaiyseva@mail.ru</span>
                    </a>
                    <a
                      href="https://t.me/zaitseva"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      <Icon name="Send" className="text-accent" size={20} />
                      <span>Telegram</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-lg font-semibold mb-2">Анастасия Зайцева</p>
          <p className="text-sm opacity-90">Ваш надежный партнер в области HR-решений</p>
          <p className="text-sm opacity-75 mt-4">© 2025 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}