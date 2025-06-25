import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
      </Routes>
    </main>

    </>
  );
}

export default App;