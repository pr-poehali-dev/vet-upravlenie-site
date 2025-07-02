import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Государственная
              <span className="block text-blue-200">ветеринарная служба</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Обеспечиваем безопасность и качество ветеринарных услуг,
              контролируем здоровье животных и защищаем интересы граждан.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50"
              >
                <Icon name="FileText" size={20} className="mr-2" />
                Получить услугу
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full p-4 mb-4 inline-block">
                    <Icon name="Users" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">2500+</h3>
                  <p className="text-blue-200">Обслужено граждан</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-full p-4 mb-4 inline-block">
                    <Icon name="Building" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">150+</h3>
                  <p className="text-blue-200">Организаций</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-full p-4 mb-4 inline-block">
                    <Icon name="Award" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">15</h3>
                  <p className="text-blue-200">Лет опыта</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-full p-4 mb-4 inline-block">
                    <Icon name="Clock" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">24/7</h3>
                  <p className="text-blue-200">Поддержка</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
