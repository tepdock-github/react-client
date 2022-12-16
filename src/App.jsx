import Home from './Pages/Home';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Paitings from './components/Paintings';
import Paiting from './components/Paiting';
import Exhibitions from './components/Exhibitions';
import Exhibition from './components/Exhibition';
import Artist from './components/Artist';
import Artists from './components/Artists';
import About from './components/About';
import Tours from './components/Tours';
import Register from './components/Register';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/paintings' element={<Paitings/>}/>
        <Route path='/paintings/:id' element={<Paiting/>}/>
        <Route path='/exhibitions' element={<Exhibitions/>}/>
        <Route path='/exhibitions/:id' element={<Exhibition/>}/>
        <Route path='/artists' element={<Artists/>}/>
        <Route path='/artists/:id' element={<Artist/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/exhibitions/:id/tours' element={<Tours/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
