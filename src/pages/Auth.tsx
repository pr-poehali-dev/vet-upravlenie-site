import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Auth = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Заглушка для авторизации
    console.log("Попытка входа:", loginData);
    alert("Функция авторизации будет доступна скоро!");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Заглушка для регистрации
    if (registerData.password !== registerData.confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }
    console.log("Попытка регистрации:", registerData);
    alert("Функция регистрации будет доступна скоро!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header with logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-900 rounded-full p-3">
              <Icon name="Shield" size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Ветеринарное управление
          </h1>
          <p className="text-gray-600">Вход в личный кабинет</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Авторизация</CardTitle>
            <CardDescription className="text-center">
              Войдите в систему или создайте новый аккаунт
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Вход</TabsTrigger>
                <TabsTrigger value="register">Регистрация</TabsTrigger>
              </TabsList>

              {/* Login Form */}
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="ваш.email@example.com"
                      value={loginData.email}
                      onChange={(e) =>
                        setLoginData({ ...loginData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Пароль</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="Введите пароль"
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Запомнить меня</span>
                    </label>
                    <a href="#" className="text-blue-600 hover:underline">
                      Забыли пароль?
                    </a>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800"
                  >
                    <Icon name="LogIn" size={16} className="mr-2" />
                    Войти
                  </Button>
                </form>
              </TabsContent>

              {/* Register Form */}
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Полное имя</Label>
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="Иванов Иван Иванович"
                      value={registerData.name}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="ваш.email@example.com"
                      value={registerData.email}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Пароль</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="Минимум 8 символов"
                      value={registerData.password}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          password: e.target.value,
                        })
                      }
                      required
                      minLength={8}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-confirm">Подтвердите пароль</Label>
                    <Input
                      id="register-confirm"
                      type="password"
                      placeholder="Повторите пароль"
                      value={registerData.confirmPassword}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          confirmPassword: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <input type="checkbox" className="mt-1 rounded" required />
                    <span className="text-gray-600">
                      Я согласен с{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        условиями использования
                      </a>{" "}
                      и{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        политикой конфиденциальности
                      </a>
                    </span>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800"
                  >
                    <Icon name="UserPlus" size={16} className="mr-2" />
                    Зарегистрироваться
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Back to home */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-blue-600 hover:underline flex items-center justify-center"
          >
            <Icon name="ArrowLeft" size={16} className="mr-1" />
            Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
