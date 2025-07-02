import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 rounded-full p-2">
                <Icon name="Shield" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold">Ветеринарное управление</h3>
                <p className="text-gray-400 text-sm">Региональная служба</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Государственное учреждение, осуществляющее контроль и надзор в
              области ветеринарии, обеспечивающее безопасность и качество
              ветеринарных услуг в регионе.
            </p>
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white"
              >
                <Icon name="Phone" size={16} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white"
              >
                <Icon name="Mail" size={16} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white"
              >
                <Icon name="MapPin" size={16} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  О службе
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Новости
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Документы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Icon name="MapPin" size={16} className="text-gray-400 mt-1" />
                <div className="text-sm text-gray-300">
                  <p>г. Москва,</p>
                  <p>ул. Примерная, д. 123</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-gray-400" />
                <span className="text-sm text-gray-300">
                  +7 (495) 123-45-67
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-gray-400" />
                <span className="text-sm text-gray-300">
                  info@vetuprav.gov.ru
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-gray-400" />
                <span className="text-sm text-gray-300">Пн-Пт: 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Ветеринарное управление. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Правовая информация
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Карта сайта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
