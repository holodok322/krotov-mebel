import { Helmet } from 'react-helmet';

function KrotovHelmet() {
  return (
    <div>
      <Helmet>
        <title>Название вашего сайта с ключевыми словами</title>
        <meta name="description" content="Купить стулья ИЗО недорого в Свердловской области" />
        <meta name="keywords" content="кротов мебель, купить стулья велюр, стулья велюр для кухни, купить стулья релакс, купить стулья чили, свердловская область, с доставкой, оптом, Стул мягкий, стул для кухни, мебель Россия, мебель купить, мебель завод, производство мебели, интерьер, стул в офис, офисный стул, мебель в квартиру, стул Воронеж, стул Екатеринбург, мебель Екатеринбург, мебель Воронеж" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://krotov-mebel.ru" />
      </Helmet>
      {/* Остальное содержимое компонента */}
    </div>
  );
}