import logo from './logo.svg';
import './App.css';
import GeneralPanel from './Elements/GeneralPanel';
import MachineToolsPanel from './Elements/MachineToolsPanel';
import ModelsPanel from './Elements/ModelsPanel';
import Footer from './Elements/Footer';
import InfoPanel from './Elements/InfoPanel';
import './assets/fonts/fonts.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Кротов мебель</title>
        <meta name="description" content="Купить стулья ИЗО недорого в Свердловской области" />
        <meta name="keywords" content="кротов мебель, купить стулья велюр, стулья велюр для кухни, купить стулья релакс, купить стулья чили, свердловская область, с доставкой, оптом, Стул мягкий, стул для кухни, мебель Россия, мебель купить, мебель завод, производство мебели, интерьер, стул в офис, офисный стул, мебель в квартиру, стул Воронеж, стул Екатеринбург, мебель Екатеринбург, мебель Воронеж" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://krotov-mebel.ru" />
      </Helmet>
      <GeneralPanel />
      <InfoPanel />
      <MachineToolsPanel />
      <ModelsPanel />
      <Footer />
    </div>
  );
}

export default App;
