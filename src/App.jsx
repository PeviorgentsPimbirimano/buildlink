import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Handyman from './pages/Handyman';
import HandymanService from './pages/HandymanService';
import Companies from './pages/Companies';


function App() {
  return (
    <>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Companies' element={<Companies />} />
        <Route path='/Handyman' element={<Handyman />} />
        <Route path='/HandymanService' element={<HandymanService />} />
      </Routes>
    </main>

    </>
  );
}

export default App;