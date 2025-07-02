import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Новые требования к ветеринарным свидетельствам",
      excerpt:
        "С 1 июля вступают в силу обновленные требования к оформлению ветеринарных свидетельств для перевозки животных.",
      date: "28 июня 2025",
      category: "Законодательство",
      urgent: true,
    },
    {
      id: 2,
      title: "График работы в праздничные дни",
      excerpt:
        "Уведомляем о режиме работы ветеринарных служб в период летних праздников.",
      date: "25 июня 2025",
      category: "Объявления",
      urgent: false,
    },
    {
      id: 3,
      title: "Профилактика заболеваний КРС",
      excerpt:
        "Рекомендации по проведению профилактических мероприятий в летний период.",
      date: "20 июня 2025",
      category: "Рекомендации",
      urgent: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Последние новости
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Актуальная информация о работе ветеринарной службы, изменениях в
            законодательстве и важных объявлениях
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {news.map((item) => (
            <Card
              key={item.id}
              className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={item.urgent ? "destructive" : "secondary"}>
                    {item.category}
                  </Badge>
                  {item.urgent && (
                    <Badge
                      variant="destructive"
                      className="bg-red-100 text-red-800 border-red-200"
                    >
                      <Icon name="AlertCircle" size={12} className="mr-1" />
                      Важно
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg hover:text-blue-700 cursor-pointer">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Icon name="Calendar" size={14} className="mr-1" />
                    {item.date}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Читать далее
                    <Icon name="ArrowRight" size={14} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            <Icon name="Newspaper" size={20} className="mr-2" />
            Все новости
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
