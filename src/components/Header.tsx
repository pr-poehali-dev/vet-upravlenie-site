import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-full p-2">
              <Icon name="Shield" size={32} className="text-blue-900" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Ветеринарное управление</h1>
              <p className="text-blue-200 text-sm">Региональная служба</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="hover:text-blue-200 transition-colors">
              Главная
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Новости
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Услуги
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Документы
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Контакты
            </a>
            <a href="/auth">
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </a>
          </nav>

          <Button variant="ghost" className="md:hidden text-white">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
