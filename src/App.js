import logo from './logo.svg';
import './App.css';
import GeneralPanel from './Elements/GeneralPanel';
import MachineToolsPanel from './Elements/MachineToolsPanel';
import ModelsPanel from './Elements/ModelsPanel';
import Footer from './Elements/Footer';
import InfoPanel from './Elements/InfoPanel';
import './assets/fonts/fonts.css';

function App() {
  return (
    <div className="App">
      <GeneralPanel />
      <InfoPanel />
      <MachineToolsPanel />
      <ModelsPanel />
      <Footer />
    </div>
  );
}

export default App;
