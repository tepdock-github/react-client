import './App.scss';

import Header from './components/Header/Header';
import CatalogPage from "./Pages/PaintingsCatalog/PaintingCatalog"

function App() {
  return (
    <div className='App'>
      <Header />
      <CatalogPage/>
    </div>
  );
}

export default App;
